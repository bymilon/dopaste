import type { MiddlewareHandler } from "astro";
import { PASTE_ID_PATTERN } from "./features/pastes/model";

// Cache durations in seconds
const CACHE_DURATION = 31536000; // 1 year for paste pages
const STALE_WHILE_REVALIDATE = 86400; // 1 day

function isPasteRoute(pathname: string): boolean {
  const id = pathname.slice(1);
  return PASTE_ID_PATTERN.test(id);
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Only handle caching for GET requests to paste routes
  if (context.request.method !== "GET" || !isPasteRoute(pathname)) {
    return next();
  }

  // Access Cloudflare cache API (available as global in Workers runtime)
  const cfCaches =
    typeof caches !== "undefined"
      ? (caches as unknown as { default: Cache })
      : null;
  const cache: Cache | null = cfCaches?.default ?? null;

  if (!cache) {
    return next();
  }

  // Create cache key as Request object (required by Cloudflare Cache API)
  const cacheKey = new Request(url.toString(), {
    method: "GET",
  });

  // Try to get cached response
  let cachedResponse: Response | undefined;
  try {
    cachedResponse = await cache.match(cacheKey);
  } catch {
    // Cache match failed
  }

  if (cachedResponse) {
    // Return cached response with HIT status
    const headers = new Headers(cachedResponse.headers);
    headers.set("CF-Cache-Status", "HIT");

    return new Response(cachedResponse.body, {
      status: cachedResponse.status,
      statusText: cachedResponse.statusText,
      headers,
    });
  }

  // No cache found, proceed with request
  const response = await next();

  // Only cache successful HTML responses
  if (response.status === 200) {
    const contentType = response.headers.get("Content-Type") || "";
    if (contentType.includes("text/html")) {
      // Clone response for caching
      const responseClone = response.clone();

      // Build response with proper cache headers
      const cacheHeaders = new Headers(responseClone.headers);
      cacheHeaders.set(
        "Cache-Control",
        `public, max-age=${CACHE_DURATION}, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`
      );

      const responseForCache = new Response(responseClone.body, {
        status: responseClone.status,
        statusText: responseClone.statusText,
        headers: cacheHeaders,
      });

      // Store in cache - must await for it to complete before response ends
      try {
        await cache.put(cacheKey, responseForCache);
      } catch {
        // Ignore cache errors
      }
    }

    // Return response with MISS status
    const missHeaders = new Headers(response.headers);
    missHeaders.set("CF-Cache-Status", "MISS");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: missHeaders,
    });
  }

  return response;
};

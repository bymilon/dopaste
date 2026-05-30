/// <reference types="astro/client" />
/// <reference path="../worker-configuration.d.ts" />

declare module "cloudflare:workers" {
  interface ProvidedEnv extends Env {}
}

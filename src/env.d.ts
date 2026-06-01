/// <reference types="astro/client" />

import type { Env } from "../worker-configuration";

declare module "cloudflare:workers" {
    interface ProvidedEnv extends Env {}
}

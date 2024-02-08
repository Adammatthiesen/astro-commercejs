import { defineConfig } from "astro/config";
import astroCommerceJS from "@adammatthiesen/astro-commercejs";

// https://astro.build/config
export default defineConfig({
	integrations: [astroCommerceJS()],
});

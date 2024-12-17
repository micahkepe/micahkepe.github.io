import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/**
 * A custom Vite plugin that redirects requests for the Zola blog posts to their
 * index.html file. This is necessary make Vite compatible with the Zola blog
 * posts, which are generated as directories with an index.html file inside.
 */
const staticSitePlugin = {
  name: "static-site-plugin",
  configureServer(server) {
    server.middlewares.use((req, _, next) => {
      const staticPaths = ["/blog/", "/radion/"];
      const matchedPath = staticPaths.find((path) => req.url.startsWith(path));

      if (matchedPath && !req.url.endsWith(".html") && !path.extname(req.url)) {
        req.url += "/index.html";
      }
      next();
    });
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticSitePlugin],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    publicDir: "public",
  },
  build: {
    outDir: "build",
  },
});

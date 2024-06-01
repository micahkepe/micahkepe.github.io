import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
    publicDir: "public",
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: "build",
//   },
//   server: {
//     port: 3000,
//     publicDir: "public",
//     fs: {
//       allow: ["public"],
//     },
//   },
// });

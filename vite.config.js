import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src/renderer",
  plugins: [react()],
  build: {
    outDir: "../../dist/renderer",
    emptyOutDir: true,
    rollupOptions: {
      external: ["electron", "electron-store"],
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  logLevel: "silent",
});

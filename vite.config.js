import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import env from "dotenv";
env.config();
const API_ENDPOINT = process.env.VITE_API_ENDPOINT;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: API_ENDPOINT,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

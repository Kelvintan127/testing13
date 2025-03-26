import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",  // Update base URL to match your GitHub Pages path
  plugins: [react()],
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  }
});

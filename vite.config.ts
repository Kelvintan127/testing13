import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/will-you-be-my-valentine",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Memudahkan impor file dari src/
    },
  },
});

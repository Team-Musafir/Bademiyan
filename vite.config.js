import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    allowedHosts: [
      '55a4-2401-4900-3da1-1fa6-78e9-6607-78e5-caf0.ngrok-free.app'
    ],
  plugins: [tailwindcss(), react()],
});

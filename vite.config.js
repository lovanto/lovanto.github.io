import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("react") && id.includes("react-dom")) {
            return "vendor";
          }
          if (id.includes("react-router-dom")) {
            return "router";
          }
          if (id.includes("@headlessui") || id.includes("@heroicons") || id.includes("@material-tailwind")) {
            return "ui";
          }
          if (id.includes("@tsparticles")) {
            return "particles";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true,
  },
});

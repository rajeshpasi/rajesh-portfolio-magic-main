// Note: Avoid static imports of external packages here; Vite compiles config to a temp folder.
// Use dynamic imports inside the exported function so resolution happens from project root.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
    mainFields: ["module", "main"],
  },
  optimizeDeps: {
    include: [
      "@radix-ui/react-use-effect-event",
      "@radix-ui/react-arrow",
      "@radix-ui/primitive",
      "@radix-ui/react-primitive",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-toast",
      "@radix-ui/react-dismissable-layer",
      "@radix-ui/react-collection",
      "@radix-ui/react-popper",
      "@radix-ui/react-portal",
      "@radix-ui/react-presence",
      "@radix-ui/react-slot",
      "@radix-ui/react-use-controllable-state",
      "@radix-ui/react-visually-hidden",
    ],
    exclude: ["dlv"],
  },
});

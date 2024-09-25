import path from "path"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import { defineConfig } from "vite"
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [svgr(), react()],
  css:{
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 5000
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/index.scss";`
      }
    }
  },
  resolve: {
    alias: { "~": resolve(__dirname, "src") }
  }
});

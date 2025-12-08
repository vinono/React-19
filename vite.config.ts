import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 设置 base 路径为你的 GitHub 仓库名称
  // 如果你的仓库是 https://github.com/username/React-19
  // 则 base 应该设置为 '/React-19/'
  base: '/React-19/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

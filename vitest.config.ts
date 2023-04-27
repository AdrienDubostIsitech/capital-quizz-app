import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",

    env: {
      IS_REACT_ACT_ENVIRONMENT: "true",
    },
    include: ["test/**/*test.(ts|tsx)"],
  },
  resolve: {
    alias: { "~": path.resolve(__dirname) },
  },
});

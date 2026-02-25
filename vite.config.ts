import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import devServer from "@hono/vite-dev-server";

export default defineConfig({
  plugins: [
    solid(), 
    devServer({
      entry: "./server.ts",
      exclude: [
        /^\/@.+/,
        /^\/\.vite\//,
        /^\/node_modules\//,
        /^\/src\//,
        /\.(js|ts|tsx|css|html)$/,
      ],
    })

  ],
  //  /static for index.html
  root: "./", 
  build: {
    outDir: "./dist",
    emptyOutDir: true,
  }
});
import path from "path";
import { defineConfig } from "vite";
import assets from "./vite.config.assets";

export default defineConfig({
    build: {
        cssTarget: ["safari16"]
    },
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            "@pages": path.resolve(__dirname, "src/pages"),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
            },
        },
    }
});

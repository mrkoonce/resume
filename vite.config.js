import path from "path";
import { defineConfig } from "vite";
import VitePluginBrowserSync from "vite-plugin-browser-sync";
import assets from "./vite.config.assets";

const currentUrl = 'localhost';

export default defineConfig({
    base: 'https://josephkoonce.com/dist',
    build: {
        cssTarget: ["safari16"],
        rollupOptions: {
            input: assets
        },
    },
    plugins: [
        VitePluginBrowserSync({
            buildWatch: {
                enable: true,
                bs: {
                    open: "external",
                    host: currentUrl,
                    listen: currentUrl,
                    files: assets
                }
            }
        })
    ],
    resolve: {
        alias: {
            "@shared": path.resolve(__dirname, "src/shared"),
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
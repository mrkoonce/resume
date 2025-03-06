import path from "path";
import { defineConfig } from "vite";
import VitePluginBrowserSync from "vite-plugin-browser-sync";

import assets from "./vite.config.assets";



const currentUrl = 'localhost';



export default defineConfig({
    base: '/dist',
    // root: "./src/pages/resume",
    build: {
        cssTarget: ["safari16"],
        // outDir:"./../../../dist",
        // manifest: true,
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
                    // proxy: currentUrl,
                    files: assets
                }
            }
        })
    ],
    resolve: {
        alias: {
            // "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
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

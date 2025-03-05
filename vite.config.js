import path from "path";
import { defineConfig } from "vite";
import VitePluginBrowserSync from "vite-plugin-browser-sync";

import assets from "./vite.config.assets";



const currentUrl = 'localhost';
 


export default defineConfig({
    base: 'dist',
    build: {
        cssTarget: ["safari16"],
        manifest: true,
        rollupOptions: {
            input: assets,
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

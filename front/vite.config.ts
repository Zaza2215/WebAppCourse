import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import {fileURLToPath, URL} from "node:url"
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        watch: {
            usePolling: true
        },
        host: true, // Here
        strictPort: true,
        port: 5173
    },
    plugins: [react(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})

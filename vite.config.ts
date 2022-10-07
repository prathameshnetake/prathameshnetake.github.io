import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = __dirname;

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: root
    },
    plugins: [react()]
})

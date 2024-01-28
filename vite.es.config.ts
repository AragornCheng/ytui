import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        dts({
            outDir: 'dist/types'
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        outDir: 'dist/es',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'YtUI',
            fileName: 'yt-ui',
            formats: ['es']
        },
        rollupOptions: {
            external: ['vue', 'axios'],
            output: {
                exports: 'named',
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === 'style.css') {
                        return 'index.css'
                    }
                    return chunkInfo.name as string
                }
            }
        }
    }
})

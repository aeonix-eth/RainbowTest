import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"
import legacy from '@vitejs/plugin-legacy'
//from package.json: "@vitejs/plugin-legacy": "^5.3.2",


//https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'since 2015'],
    }),
    react(),
    viteSingleFile()
  ],
})
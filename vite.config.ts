import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
//from package.json: "@vitejs/plugin-legacy": "^5.3.2",


//https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'Firefox <= 60'],
    }),
    react()
  ],
})

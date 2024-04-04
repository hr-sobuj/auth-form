import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@container': path.resolve(__dirname, './src/container'),
      '@components': path.resolve(__dirname, './src/components'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@route': path.resolve(__dirname, './src/route'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  }
})

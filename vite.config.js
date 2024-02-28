import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/ex':{
        target: 'http://localhost:3000/ex',
        changeOrigin: true,
        // rewrite: (path)=> path.replace
      }
    }
  }
})

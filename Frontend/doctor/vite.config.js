import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://online-doctor-appointments-3.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react()],

})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
     proxy:{
      '/api':'online-doctor-appointments-indol.vercel.app'
     },
  },
  plugins: [react()],
})

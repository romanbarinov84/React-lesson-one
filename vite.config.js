import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React-lesson-one/',
  server: {
    open: true, // Автоматически откроет браузер
  },
})


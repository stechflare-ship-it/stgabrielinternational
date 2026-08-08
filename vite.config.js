import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    imagetools(),
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion-vendor';
            if (id.includes('simple-icons')) return 'icon-vendor';
            if (id.includes('react-router-dom') || id.includes('react-router')) return 'router-vendor';
            if (id.includes('lucide-react')) return 'ui-icons-vendor';
            if (id.includes('react-dom') || id.includes('react/jsx-runtime')) return 'react-vendor';
          }

          if (id.includes('/src/pages/About/')) return 'about-page';
          if (id.includes('/src/pages/')) return 'page-shell';
        },
      },
    },
  },
})

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
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
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

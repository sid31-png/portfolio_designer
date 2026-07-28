import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// GitHub Pages project page: the site is served from
// https://<user>.github.io/portfolio_designer/ so every asset + route
// must be prefixed with this base. The Router reads it via
// import.meta.env.BASE_URL so links stay correct in dev ('/') and prod.
export default defineConfig({
  base: '/portfolio_designer/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

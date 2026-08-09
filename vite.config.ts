import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/rudy-dev/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: false,
    copyPublicDir: true,
  },
});

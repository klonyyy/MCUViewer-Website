import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/MCUViewer-Website/', // Important: Fix asset URLs for GitHub Pages
});

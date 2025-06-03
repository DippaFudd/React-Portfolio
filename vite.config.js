// filepath: c:\Users\lamar\bootcamp\React-Portfolio\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'], // Add any other problematic modules here
    },
  },
});

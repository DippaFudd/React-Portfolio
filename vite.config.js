// filepath: c:\Users\lamar\bootcamp\React-Portfolio\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Adjust if needed for Vercel
});
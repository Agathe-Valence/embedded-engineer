import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/embedded-engineer/', 
  plugins: [react()]
});

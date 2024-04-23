import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-sgvr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})

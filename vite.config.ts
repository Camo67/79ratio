import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/',          // IMPORTANT: root, not /website/
  build: {
    outDir: 'build',  // match Cloudflare output dir
  },
  // ...rest of config
})


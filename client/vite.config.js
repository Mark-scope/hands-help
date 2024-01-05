// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { VitePWA } from "vite-plugin-pwa";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     VitePWA({
//       manifest: {
//       },
//     }),
//     react(),
   
//   ],
// });

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: 'apublic/manifest.json',
      registerType: 'autoUpdate',
      workbox: true,
    }),
    replace({
      __SW_BUILD__: process.env.NODE_ENV === 'production' ? '"/service-worker.js"' : '""',
    }),
  ],
});
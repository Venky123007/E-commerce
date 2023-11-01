import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const { createProxyMiddleware } = require('http-proxy-middleware');


// const backendUrl = 'http://localhost:3007';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:3007'
  //   }
  // },
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/*': {
  //       target: backendUrl,
  //       changeOrigin: true,
  //       secure: false,
  //       pathRewrite: {
  //         '^/*': '/*',
  //       },
  //     },
  //   },
  // },
})

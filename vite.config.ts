// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import checker from 'vite-plugin-checker';
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(),
//   checker({
//     typescript: true,
//   }),],
//   resolve: {
//     alias: {
//       '@': '/src'
//     }
//   }
// })

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, 'src')
    // }
    alias: {
      '@': '/src'
    }
  }
});

/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-01 22:03:18
 * @LastEditTime: 2021-03-01 22:33:09
 * @LastEditors: mTm
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})

import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // 配置需要自动导入的库
      imports: ['vue'],
      // 生成类型文件的地址
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      // 生成类型文件的地址
      dts: 'types/components.d.ts',
    }),
  ],
})

import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const baseUrl = fileURLToPath(new URL('./src', import.meta.url))

  return {
    server: {
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          ws: false,
          rewrite: (path) => {
            return path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
          },
        },
      },
    },
    define: {
      __VUE_I18N_FULL_INSTALL__: false,
      __VUE_I18N_LEGACY_API__: false,
    },
    resolve: {
      alias: {
        '~': baseUrl,
        '@': baseUrl,
      },
    },
    plugins: [
      vue(),
      AutoImport({
        // 配置需要自动导入的库
        imports: [
          'vue',
          'vue-router',
          'pinia',
          '@vueuse/core',
          'vue-i18n',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
        // 生成类型文件的地址
        dts: 'types/auto-imports.d.ts',
        // 配置本地需要自动导入的库
        dirs: [
          // pinia状态管理目录
          'src/stores',
          // 自定义组合式api目录
          'src/composables',
        ],
      }),
      Components({
        // 导入naiveui的配置项目
        resolvers: [NaiveUiResolver()],
        // 生成类型文件的地址
        dts: 'types/components.d.ts',
        // 配置本地需要自动导入的库
        dirs: [
          // pinia状态管理目录
          'src/components',
        ],
      }),
      Unocss(),
    ],
  }
})

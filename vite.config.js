import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      imports: ["vue", "vue-router",
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ['src/components/', 'src/pages/lauch/components/'],
      // 配置需要将哪些后缀类型的文件进行自动按需引入，'vue'为默认值
      extensions: ['vue'],
      // 解析组件，这里以 Element Plus 为例
      resolvers: [NaiveUiResolver()],
      // 生成components.d.ts
      dts: true,
      // 遍历子目录
      deep: true
    }),
  ]
})

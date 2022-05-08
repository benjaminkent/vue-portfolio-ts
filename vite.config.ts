import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tsConfig from './tsconfig.json'

const tsConfigPaths = tsConfig.compilerOptions.paths

const alias = Object.keys(tsConfigPaths).reduce((prev, acc) => {
  const aliasBuilder = {
    [acc]: path.resolve(__dirname, `./src/${tsConfigPaths[acc][0]}`),
  }

  return {
    ...prev,
    ...aliasBuilder,
  }
}, {})

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_colors.scss";`
      }
    }
  }
})
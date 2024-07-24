import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPromise from 'eslint-plugin-promise'
export default [
  eslintPluginPromise.configs['flat/recommended'],
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    ignores: ['**/node_modules/**', 'dist', 'build', 'public', '.gitignore']
  }
]

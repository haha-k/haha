/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
require('@haha/eslint-config-custom')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    "plugin:@typescript-eslint/recommended",
    '@haha/eslint-config-custom'
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 'latest'
  }
}

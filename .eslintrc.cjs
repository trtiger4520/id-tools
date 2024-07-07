const { defineConfig } = require('eslint-define-config');

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = defineConfig({
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '@unocss',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'linebreak-style': ['error', 'windows'],
  },
});

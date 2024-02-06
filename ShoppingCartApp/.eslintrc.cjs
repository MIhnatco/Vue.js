/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['src/components/__tests__/**.spec.js'], 
      globals: {
        test: 'readonly', 
        describe: 'readonly', 
        expect: 'readonly', 
        beforeEach: 'readonly', 
        it: 'readonly', 
        
      }
    }
  ]
}

import { commonRules } from './common.js'

export const eslintConfig = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaVersion: 2020,
    warnOnUnsupportedTypeScriptVersion: false
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    es6: true,
    es2017: true,
    es2020: true,
    commonjs: true
  },
  rules: {
    ...commonRules,
    'comma-dangle': 'off',
    'default-param-last': 'off',
    'dot-notation': 'off',
    'no-dupe-class-members': 'off',
    'no-empty-function': 'off',
    'no-extra-parens': 'off',
    'no-invalid-this': 'off',
    'no-magic-numbers': 'off',
    'no-throw-literal': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'lines-between-class-members': 'off',
    'object-curly-spacing': 'off',
    'padding-line-between-statements': 'off',
    'space-infix-ops': 'off'
  },
  overrides: [
    {
      files: 'test/**/*.{test,spec}.{js,mjs,ts}',
      rules: {}
    }
  ]
}

export default eslintConfig

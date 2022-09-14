module.exports = {
  '*.{mjs,js,ts}': [
    'eslint --fix --ext mjs,js,ts',
    'prettier --write'
  ],
}

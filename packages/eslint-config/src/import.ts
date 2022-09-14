export const importRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
  'import/default': 'error',
  'import/export': 'error',
  'import/exports-last': 'warn',
  'import/extensions': ['error', 'ignorePackages'],
  'import/first': 'error',
  'import/named': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-anonymous-default-export': 'error',
  'import/no-cycle': 'error',
  'import/no-default-export': 'error',
  'import/no-deprecated': 'error',
  'import/no-duplicates': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/*.{test,spec}.{js,mjs,ts}']
    }
  ],
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-default': 'error',
  'import/no-self-import': 'error',
  'import/unambiguous': 'error'
}

export default importRules

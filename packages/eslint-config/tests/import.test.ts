import importRules from '../src/import'

describe('Import Plugin Rules', () => {
  test('should export rules', () => {
    expect(importRules['import/first']).toBe('error')
    expect(importRules['import/consistent-type-specifier-style']).toMatchObject([
      'error',
      'prefer-inline'
    ])
    expect(importRules['import/no-extraneous-dependencies']).toMatchObject([
      'error',
      {
        devDependencies: ['**/*.{test,spec}.{js,mjs,ts}']
      }
    ])
    expect(importRules).toMatchSnapshot()
  })
})

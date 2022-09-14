import prettierConfig from '../src'

describe('Prettier Config', () => {
  test('should export rules', () => {
    expect(prettierConfig.$schema).toBe('http://json.schemastore.org/prettierrc')
    expect(prettierConfig.useTabs).toBe(false)
    expect(prettierConfig).toMatchSnapshot()
  })
})

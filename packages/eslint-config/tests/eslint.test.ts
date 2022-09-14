import eslintConfig from '../src'

describe('ESLint Config', () => {
  test('should export rules', () => {
    expect(eslintConfig.root).toBe(true)
    expect(eslintConfig.parser).toBe('@typescript-eslint/parser')
    expect(eslintConfig).toMatchSnapshot()
  })
})

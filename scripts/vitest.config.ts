import { defineConfig, type UserConfig } from 'vitest/config'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const createVitestConfig = (options: UserConfig = {}) =>
  defineConfig({
    ...options,
    test: {
      ...options.test,
      globals: true,
      coverage: {
        ...options.test?.coverage,
        enabled: true,
        reporter: ['text', 'lcov', 'clover'],
        exclude: [
          // eslint-disable-next-line @typescript-eslint/no-extra-parens
          ...(options.test?.coverage?.exclude ?? []),
          '**/node_modules/**',
          '**/dist/**',
          '**/tests/**'
        ]
      }
    },
    esbuild: {
      ...options.esbuild,
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/prefer-nullish-coalescing, @typescript-eslint/strict-boolean-expressions
      target: (options.esbuild || {}).target ?? 'es2020'
    }
  })

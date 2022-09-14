import { defineConfig, type Options } from 'tsup'

import { relative, resolve } from 'node:path'

type ConfigOptions = Pick<
  Options,
  'dts' | 'entry' | 'esbuildOptions' | 'format' | 'globalName' | 'sourcemap' | 'target'
>

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const createTsupConfig = ({
  globalName = undefined,
  entry = ['src/index.ts'],
  format = ['esm', 'cjs'],
  target = 'es2021',
  sourcemap = true,
  dts = true
}: ConfigOptions = {}) =>
  defineConfig({
    clean: true,
    dts,
    entry,
    format,
    globalName,
    minify: false,
    skipNodeModulesBundle: true,
    sourcemap,
    target,
    tsconfig: relative(__dirname, resolve(process.cwd(), 'src', 'tsconfig.json'))
  })

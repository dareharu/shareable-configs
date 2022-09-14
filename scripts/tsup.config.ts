import { defineConfig, type Options } from 'tsup'

import { relative, resolve } from 'node:path'

export const createTsupConfig = ({
  globalName = undefined,
  entry = ['src/index.ts'],
  format = ['esm', 'cjs'],
  target = 'es2021',
  sourcemap = true,
  dts = true,
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

type ConfigOptions = Pick<Options, 'esbuildOptions' | 'entry' | 'sourcemap' | 'target' | 'format' | 'globalName' | 'dts'>

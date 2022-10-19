import { createTsupConfig } from '../../scripts/tsup.config'

export default createTsupConfig({ entry: ['src/lib.ts', 'src/lib/*.ts'], sourcemap: false })

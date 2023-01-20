import { createTsupConfig } from '../../scripts/tsup.config'

export default createTsupConfig({ entry: ['src/*.ts'], sourcemap: false })

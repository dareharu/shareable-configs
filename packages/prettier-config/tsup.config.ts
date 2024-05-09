import { createTsupConfig } from "../../scripts/tsup.config";

// biome-ignore lint/style/noDefaultExport: This is a config file
export default createTsupConfig({ sourcemap: false });

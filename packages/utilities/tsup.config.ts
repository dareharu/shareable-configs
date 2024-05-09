import { createTsupConfig } from "../../scripts/tsup.config";

// biome-ignore lint/style/noDefaultExport: This is a config file
export default createTsupConfig({
  entry: ["src/lib.ts", "src/lib/*.ts"],
  sourcemap: false,
});

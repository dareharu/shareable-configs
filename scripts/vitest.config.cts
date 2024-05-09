import { type UserConfig, defineConfig } from "vitest/config";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const createVitestConfig = (options: UserConfig = {}) =>
  defineConfig({
    ...options,
    test: {
      ...options.test,
      globals: true,
      coverage: {
        ...options.test?.coverage,
        provider: "v8",
        enabled: true,
        reporter: ["text", "lcov", "clover"],
        exclude: [
          // eslint-disable-next-line @typescript-eslint/no-extra-parens
          ...(options.test?.coverage?.exclude ?? []),
          "**/node_modules/**",
          "**/dist/**",
          "**/tests/**",
        ],
      },
    },
    esbuild: {
      ...options.esbuild,
      target:
        options.esbuild && "target" in options.esbuild
          ? options.esbuild.target ?? "es2020"
          : undefined,
    },
  });

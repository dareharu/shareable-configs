import { type UserConfig, defineConfig } from "vitest/config";

export const createVitestConfig = (options: UserConfig = {}) =>
  defineConfig({
    ...options,
    test: {
      ...options.test,
      globals: true,
      coverage: {
        ...options.test?.coverage,
        enabled: true,
        provider: "v8",
        reporter: ["text", "lcov", "clover"],
        exclude: [
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

import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  entry: ['src/**/*'],
  banner: {
    js: "'use client'",
  },
  minify: true,
  treeshake: true,

  format: ['cjs', 'esm'],
  dts: true,
  clean: true,

  ...options,
}))

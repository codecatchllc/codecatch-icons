import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['src/**/*.test.ts', 'templates/**/*.test.ts'],
    exclude: ['docs'],
    coverage: {
      provider: 'v8',
      exclude: ['docs/**', ...coverageConfigDefaults.exclude],
    },
  },
});

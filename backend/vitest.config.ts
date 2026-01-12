import { defineConfig } from 'vitest/config'
// file configuration for vitest
export default defineConfig({
  test: {
    environment: 'node',
    setupFiles: ['./tests/setup.ts'],
  },
})

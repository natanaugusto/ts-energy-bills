import { defineConfig } from 'vitest/config'
import tsconfigPath from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPath()],
  test: {
    // Use Vitest's built-in TypeScript support, no separate preset needed
    environment: 'node',
    include: ['**/*.test.ts'], // Vitest uses 'include' instead of 'testMatch'
    // transform: {
    //   '^.+\\.ts$': 'ts-jest/dist/transform.js' // Path to ts-jest transformer
    // },
    // timeout: 15000 // Vitest uses 'timeout' instead of 'testTimeout'
    alias: {
      // Adjust moduleNameMapper to Vitest's alias syntax
      '~': new URL('./', import.meta.url).pathname,
      '@': new URL('./src/', import.meta.url).pathname
    }
  }
})

import type { Config } from 'jest'

export default async (): Promise<Config> => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
      '^~/(.*)$': '<rootDir>/$1',
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testTimeout: 15000
  }
}

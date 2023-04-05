/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.ts'],
  moduleNameMapper: {
    '^dexie$': '<rootDir>/node_modules/dexie',
    '.+\\.css$': 'identity-obj-proxy',
  },
};

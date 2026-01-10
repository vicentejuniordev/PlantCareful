/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',

  extensionsToTreatAsEsm: ['.ts'],
  
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },

  testMatch: ['**/?(*.)+(spec|test).ts'],
};

export default config;

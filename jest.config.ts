// https://jestjs.io/docs/en/configuration.html
import type { Config } from '@jest/types';

const baseJestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  roots: ['<rootDir>'],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts'],
  // setupFiles: ['react-app-polyfill/jsdom'],
  // setupFilesAfterEnv: [],
  testMatch: ['<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internal/__mocks__/cssTransform.js',
    '\\.(css|less|scss)$': '<rootDir>/internal/__mocks__/cssTransform.js',
  },
  setupFilesAfterEnv: [
    // '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jest-environment-jsdom-global',
  watchPlugins: [
    // 'jest-watch-typeahead/filename',
    // 'jest-watch-typeahead/testname',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
};

export default baseJestConfig;

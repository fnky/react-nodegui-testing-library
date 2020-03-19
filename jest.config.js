// eslint-disable-next-line @typescript-eslint/no-var-requires
const { jestPreset: tsJestPreset } = require('ts-jest');

module.exports = {
  ...tsJestPreset,
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  transform: {
    ...tsJestPreset.transform,
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$':
      '<rootDir>/jest/assetFileTransformer.js',
  },
  setupFiles: ['<rootDir>/jest/setup.js'],
};

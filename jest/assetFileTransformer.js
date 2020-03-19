/* eslint-env node */

const path = require('path');
const createCacheKeyFunction = require('fbjs-scripts/jest/createCacheKeyFunction');

module.exports = {
  // Mocks asset requires to return the filename. Makes it possible to test that
  // the correct images are loaded for components. Essentially
  // require('img1.png') becomes `Object { "testUri": 'path/to/img1.png' }` in
  // the Jest snapshot.
  process: (_, filename) =>
    `module.exports = {
      testUri:
        ${JSON.stringify(
          path.relative(__dirname, filename).replace(/\\/g, '/'),
        )}
    };`,
  getCacheKey: createCacheKeyFunction([__filename]),
};

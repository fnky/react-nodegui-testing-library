const generated = require('./docs/api/sidebar-gen');

module.exports = {
  api: {
    ...generated.docs,
  },
  guides: {
    'Getting Started': ['intro'],
  },
};

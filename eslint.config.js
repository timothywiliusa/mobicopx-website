const nextPlugin = require('eslint-config-next');

module.exports = [
  ...nextPlugin,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];
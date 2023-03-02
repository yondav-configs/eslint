module.exports = {
  extends: [
    '../rules/core/best-practices',
    '../rules/core/errors',
    '../rules/core/node',
    '../rules/core/style',
    '../rules/core/variables',
    '../rules/core/es6',
    '../rules/core/imports',
    '../rules/core/strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};

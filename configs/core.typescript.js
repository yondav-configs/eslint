module.exports = {
  parser: '@typescript-eslint/parser',
  env: { es6: true },
  extends: [
    '../rules/core/best-practices.js',
    '../rules/core/errors.js',
    '../rules/core/es6.js',
    '../rules/core/imports.js',
    '../rules/core/node.js',
    '../rules/core/strict.js',
    '../rules/core/style.js',
    '../rules/core/variables.js',
    '../rules/typescript/core.js',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts',
          '.json'
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.ts',
      '.mjs'
    ],
  },
};

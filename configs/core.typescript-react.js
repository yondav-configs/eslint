module.exports = {
  env: { browser: true },
  extends: [
    './core.react',
    './core.react-hooks',
    './core.typescript',
    '../rules/typescript/react.js'
  ],
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint'
  ],
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.json'
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.ts',
      '.mjs',
      '.jsx',
      '.tsx'
    ],
  },
};

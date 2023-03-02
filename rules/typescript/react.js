module.exports = {
  env: { browser: true },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint'
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [ 'error', { extensions: [ '.tsx' ] } ],
    'react/prop-types': [ 'off', {} ],
  }
};

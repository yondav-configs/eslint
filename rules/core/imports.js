/**
 * https://github.com/import-js/eslint-plugin-import/blob/main/docs
 * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/<RULE_NAME>
 */

module.exports = {
  env: { es6: true },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [ 'import' ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.mjs',
          '.js',
          '.json'
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx'
    ],
    'import/core-modules': [],
    'import/ignore': [ 'node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$' ],
  },
  rules: {
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true,
      },
    ],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.config/**',
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx}',
          'test-*.{js,jsx}',
          '**/*{.,_}{test,spec}.{js,jsx}',
          '**/jest.config.js',
          '**/jest.setup.js',
          '**/vue.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js',
          '**/karma.conf.js',
          '**/.eslintrc.js',
        ],
        optionalDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 'off',
    'import/no-nodejs-modules': 'off',
    'import/first': [ 'error', 'absolute-first' ],
    'import/imports-first': 'off',
    'import/no-duplicates': 'off',
    'import/no-namespace': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/no-restricted-paths': 'off',
    'import/max-dependencies': [ 'warn', { ignoreTypeImports: true } ],
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': [ 'off', { allow: [] } ],
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/exports-last': 'error',
    'import/group-exports': 'error',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/no-cycle': [ 'error', { maxDepth: '∞' } ],
    'import/no-useless-path-segments': [ 'error', { commonjs: true } ],
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
      },
    ],
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': [
      'off',
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      },
    ],
    'import/no-import-module-exports': [ 'error', { exceptions: [] } ],
    'import/no-relative-packages': 'error',
  },
};

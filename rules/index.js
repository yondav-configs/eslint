const bestPractices = require('./core/best-practices');
const errors = require('./core/errors');
const es6 = require('./core/es6');
const imports = require('./core/imports');
const node = require('./core/node');
const strict = require('./core/strict');
const style = require('./core/style');
const variables = require('./core/variables');
const react = require('./react/react');
const a11y = require('./react/react-a11y');
const hooks = require('./react/react-hooks');
const tsCore = require('./typescript/core');
const tsReact = require('./typescript/react');

module.exports = {
  core: {
    bestPractices,
    errors,
    es6,
    imports,
    node,
    strict,
    style,
    variables,
  },
  react: {
    react,
    a11y,
    hooks,
  },
  typescript: {
    core: tsCore,
    react: tsReact,
  }
};

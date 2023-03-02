const {
  core: {
    bestPractices, errors, es6, imports, node, strict, style, variables
  },
  react: { a11y, hooks, react },
  typescript
} = require('../../../rules');

const docLink = (
  url = 'https://eslint.org/docs/latest/rules/',
  suffix = null
) => rule => `${url}/${rule}${suffix ? `.${suffix}` : ''}`;

module.exports = [
  {
    plugin: 'ESlint',
    rule: rule => docLink()(rule),
    sections: [
      { name: 'Best Practices', rules: bestPractices },
      { name: 'Errors', rules: errors },
      { name: 'Es6', rules: es6 },
      { name: 'Node', rules: node },
      { name: 'Strict', rules: strict },
      { name: 'Style', rules: style },
      { name: 'Variables', rules: variables },
    ],
  },
  {
    plugin: 'Import',
    rule: rule => docLink(
      'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/',
      '.md'
    )(rule.split('/')[1]),
    sections: [ { rules: imports } ],
  },
  {
    plugin: 'React',
    rule: rule => {
      if (rule.startsWith('jsx-a11y/'))
        return docLink(
          'https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/',
          'md'
        )(rule.split('/')[1]);

      if (rule.startsWith('react-hooks/'))
        return docLink('https://reactjs.org/docs/hooks-rules.html')();

      if (rule.startsWith('react/'))
        return docLink('https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules', 'md')(rule.split('/')[1]);

      return docLink()(rule);
    },
    sections: [
      { name: 'Core', rules: react },
      { name: 'JSX A11y', rules: a11y },
      { name: 'React Hooks', rules: hooks },
    ]
  },
  {
    plugin: 'Typescript',
    rule: rule => {
      if (rule.startsWith('@typescript-eslint/'))
        return docLink('https://typescript-eslint.io/rules/')(rule.split('/')[1]);

      if (rule.startsWith('import/'))
        return docLink(
          'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/',
          '.md'
        )(rule.split('/')[1]);

      if (rule.startsWith('react/'))
        return docLink('https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules', 'md')(rule.split('/')[1]);

      return docLink()(rule);
    },
    sections: [ { name: 'Core', rules: typescript.core }, { name: 'React', rules: typescript.react }, ]
  }
];

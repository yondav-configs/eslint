module.exports = {
  extends: [
    './core.base',
    '../rules/react/react',
    '../rules/react/react-a11y'
  ].map(
    require.resolve
  ),
  rules: {},
};

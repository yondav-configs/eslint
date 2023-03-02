const { header, footer } = require('./readme.layout');
const { gettingStarted, rules, usage } = require('./readme.sections');
const toc = require('./readme.toc');

module.exports = `<a id="readme-top"></a>

${header}

${toc}

${gettingStarted}

${usage}

${rules}

${footer}
`;

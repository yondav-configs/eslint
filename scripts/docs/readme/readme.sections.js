const rules = require('./readme.rules');

/**
 *
 * @param {string} title
 * @param {string} content
 * @param {boolean} top
 * @returns markdown section
 */

function generateSection(title, content, top = true) {
  return `<!-- ${title.toUpperCase()} -->

  ## ${title}

  ${content}

  ${top ? '<p align="right">[ <a href="#readme-top">back to top</a> ]</p>' : ''}`;
}

module.exports = {
  gettingStarted: generateSection(
    'Getting Started',
    `<!-- INSTALLATION -->

  ### Installation

  \`\`\`
  # npm
  npm install @yondav-configs/eslint

  # yarn
  yarn add @yondav-configs/eslint
  \`\`\`
`
  ),

  usage: generateSection(
    'Usage',
    `
  <!-- PLACEHOLDER -->
`
  ),

  rules: generateSection('Rules', rules, false),
};

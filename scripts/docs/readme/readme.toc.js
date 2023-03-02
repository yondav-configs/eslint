const toSlug = require('../../../utils/helpers.toSlug');

const rules = require('./readme.ruleSets');

module.exports = `<!-- TABLE OF CONTENTS -->

<details open>
  <summary style="font-size: 18px;">Table of Contents</summary>
  <ol style="list-style-type: none;">
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#installation">Installation</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li>
          <a href="#node">Node</a>
        </li>
        <li>
          <a href="#react">React</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#rules">Rules</a>
      <ul>${Object.values(rules)
    .map(
      ruleSet => `
        <li>
          <a href="#${toSlug(ruleSet.plugin.toLowerCase())}">${ruleSet.plugin}</a>${ruleSet.sections.length > 1
  ? `<ul>${ruleSet.sections.map(section => `<li>
        <a href="#${toSlug(section.name.toLowerCase())}">${section.name}</a>
      </li>`).join('')}
    </ul>` : ''}
        </li>`
    ).join('')}
      </ul>
    </li>
  </ol>
</details>
<br/>`;

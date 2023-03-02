const ruleSets = require('./readme.ruleSets');

function generateRuleSection(ruleSet) {
  return `
  <!-- ${ruleSet.plugin.toUpperCase()} RULES -->

  ### ${ruleSet.plugin}

${ruleSet.sections.map(section => `${section.name ? `<!--${section.name.toUpperCase()} RULES --> ` : ''}

<details open>
  <summary>${section.name || 'Rules'}</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  ${Object.entries(section.rules.rules)
    .map(
      ([ rule, enforcement ]) => `| <a href="${ruleSet.rule(rule)}" target="_blank">${rule}</a> | \`\`\`${JSON.stringify(enforcement)}\`\`\` |`
    ).join('\n')}
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>
`).join('\n')}`;
}

module.exports = Object.values(ruleSets)
  .map(ruleSet => generateRuleSection(ruleSet))
  .join('\n');

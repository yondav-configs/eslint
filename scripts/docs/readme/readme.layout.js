const pjson = require('../../../package.json');

const license = {
  badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  url: 'https://opensource.org/licenses/MIT',
};

// const description = 'a collection of eslint configurations for internal use';

module.exports = {
  header: `[![License](${license.badge})](${license.url})

<!-- HEADER -->

<div align="center">
  <h1 align="center">${pjson.name}</h1>
  <p align="center">${pjson.description}</p>
</div>
<br />`,

  footer: `<!-- FOOTER -->

---
<div align="center">
  <p style="color: grey;">&#169; yondav ${new Date().getFullYear()}</p>
  <a href="https://yondav.us/" target="_blank" rel="noopener noreferrer">yondav.us</a>
</div>`,
};

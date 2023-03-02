const { writeFileSync } = require('fs');
const { resolve } = require('path');

const readme = require('./readme');

const packagePath = resolve(__dirname, '../..');

writeFileSync(resolve(packagePath, 'README.md'), readme);

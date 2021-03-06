#!/usr/bin/env node
/* eslint-env node */

const path = require('path');
const lintStaged = require('lint-staged');

(async () => {
  let lintStagedConfigPath = path.resolve(__dirname, '../.lint-staged.config.js');
  let success = await lintStaged({
    configPath: lintStagedConfigPath,
  });
  if (!success) {
    process.exit(1);
  }
})();

// This file is used by lint-staged to run linting and formatting on staged files

const path = require('path');

module.exports = {
  '**/*.{js,jsx,ts,tsx}': 'pnpm eslint',
  '**/*.{js,jsx,ts,tsx,md,html,css,json,yaml,yml}': 'pnpm prettier --ignore-unknown --check',
};

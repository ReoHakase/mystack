// Install `next` to the root of the project in order to avoid the following error:
// > error - ESLint: Failed to load config "next/babel" to extend from.
// Refer: https://github.com/vercel/next.js/issues/40687
// Sadly, this is an only workaround for now.

module.exports = {
  extends: ['next', 'turbo', 'prettier', 'next/babel', 'next/core-web-vitals'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
};

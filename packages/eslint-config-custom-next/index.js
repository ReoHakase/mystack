/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'turbo',
    'prettier',
    'plugin:@next/next/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:storybook/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.next', '.turbo', 'node_modules', '**/*.js', '**/*.mjs', '**/*.jsx'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/no-danger': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/prefer-default-export': 'off',
  },
};

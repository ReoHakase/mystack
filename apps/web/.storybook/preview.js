import * as jest from 'jest-mock';
// Refer: https://github.com/storybookjs/storybook/issues/15391
window.jest = jest; // This resolves the "`global` is not defined" issue

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

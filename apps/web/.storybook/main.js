const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      define: { 'process.env': {} }, // Refer: https://github.com/storybookjs/storybook/issues/18920
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
        },
      },
    });
  },
};

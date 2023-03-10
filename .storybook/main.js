const path = require('path')
module.exports = {
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@emotion/react': path.resolve(__dirname, '../node_modules/@emotion/react'),
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
}

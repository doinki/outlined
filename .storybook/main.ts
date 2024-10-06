import { type StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../story/**/*.mdx', '../story/**/*.stories.{ts,tsx}'],
};

export default config;

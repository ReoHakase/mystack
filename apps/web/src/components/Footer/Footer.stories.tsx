import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

type Story = StoryObj<typeof Footer>;

const meta = {
  component: Footer,
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

export const Default: Story = {};

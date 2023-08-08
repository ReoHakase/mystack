import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Link } from '@/core/component/link';
import { Banner } from '@/module/root/ui/component/banner';

type Story = StoryObj<typeof Header>;

const meta = {
  component: Header,
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

export const Default: Story = {};

export const WithInfoBanner: Story = {
  args: {
    children: (
      <Banner variant="info">
        <Link href="/">K-Labo で君の知りたいを追求してみない？</Link>
      </Banner>
    ),
  },
};

export const WithWarningBanner: Story = {
  args: {
    children: (
      <Banner variant="warning">
        <p>プレビューモードで閲覧中です</p>
        <p className="text-xs">ご覧の内容は、まだ公開されていない可能性があります。公開版を表示する</p>
      </Banner>
    ),
  },
};

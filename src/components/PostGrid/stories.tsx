import { Meta, Story } from '@storybook/react/types-6-0';
import { PostGrid, PostGridProps } from '.';
import { mock } from './mock'; // Importe o mock correto

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: {
    articles: mock, // Use o mock como argumento
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostGridProps>;

export const Template: Story<PostGridProps> = (args) => {
  return (
    <div>
      <PostGrid {...args} />
    </div>
  );
};

export const NoPosts: Story<PostGridProps> = () => {
  return (
    <div>
      <PostGrid articles={[]} />
    </div>
  );
};

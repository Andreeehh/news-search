import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: {
    article: mock.article, // Passando o objeto de artigo do mock para args
  },
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleMetaProps>;

export const Template: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};

export const NoAuthor: Story<ArticleMetaProps> = () => {
  return (
    <div>
      <ArticleMeta article={{ ...mock.article, author: '' }} />{' '}
      {/* Passando um artigo sem autor */}
    </div>
  );
};

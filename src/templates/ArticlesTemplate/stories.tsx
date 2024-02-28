import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticlesTemplate, ArticlesTemplateProps } from '.';

import { mock } from './mock'; // Importe o mock correto

export default {
  title: 'ArticlesTemplate',
  component: ArticlesTemplate,
  args: { articles: mock }, // Use o mock como argumento
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ArticlesTemplateProps>;

export const Template: Story<ArticlesTemplateProps> = (args) => {
  return (
    <div>
      <ArticlesTemplate {...args} />
    </div>
  );
};

export const NoArticles: Story<ArticlesTemplateProps> = () => {
  return (
    <div>
      <ArticlesTemplate articles={[]} />
    </div>
  );
};

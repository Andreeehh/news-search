import { Heading } from 'components/Heading';
import * as Styled from './styles';
import { ArticleMeta } from 'components/ArticleMeta';
import { Article } from 'shared-typed/article';

export type ArticleHeaderProps = {
  article: Article;
};

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{article.title}</Heading>
      <Styled.Excerpt>{article.description}</Styled.Excerpt>
      <Styled.Cover src={article.urlToImage} alt={''} />

      <ArticleMeta article={article}></ArticleMeta>
    </Styled.Wrapper>
  );
};

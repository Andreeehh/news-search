import { ArticleHeader } from 'components/ArticleHeader';
import * as Styled from './styles';
import { HtmlContent } from 'components/HtmlContent';
import { PostContainer } from 'components/PostContainer';
import { Article } from 'shared-typed/article';

export type PostProps = {
  article: Article;
};

export const Post = ({ article }: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader article={article}></ArticleHeader>
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={article.content}></HtmlContent>
      </PostContainer>
    </Styled.Wrapper>
  );
};

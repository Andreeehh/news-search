import { PostProps } from 'components/Post';
import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from 'components/Heading';
import { ArticleMeta } from 'components/ArticleMeta';

export type PostCardProps = PostProps;

export const PostCard = ({ article }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={article.url}>
        <a>
          <Styled.Cover src={article.urlToImage} alt={article.title} />
        </a>
      </Link>

      <Heading as="h3" size="small">
        <Link href={article.url}>
          <a>{article.title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>{article.description}</Styled.Excerpt>
      <ArticleMeta article={article}></ArticleMeta>
    </Styled.Wrapper>
  );
};

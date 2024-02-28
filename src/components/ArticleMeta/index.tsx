import Link from 'next/link';
import * as Styled from './styles';

import { formatDate } from 'utils/format-date';
import { Article } from 'shared-typed/article';

export type ArticleMetaProps = {
  article: Article;
};

export const ArticleMeta = ({ article }: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {article.author && typeof article.author !== 'undefined' && (
          <>
            <span>Por {article.author} </span>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={article.publishedAt}>
          {formatDate(article.publishedAt)}
        </time>
        <span className="separator"> | </span>
        <span> Fonte </span>
        <Link href={article.source.name}>
          <a>{article.source.name.split('.')[0]}</a>
        </Link>
      </p>
    </Styled.Wrapper>
  );
};

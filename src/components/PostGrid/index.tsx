import { PostCard } from 'components/PostCard';
import * as Styled from './styles';
import { Articles } from 'shared-typed/articles';

export type PostGridProps = {
  articles?: Articles;
};

export const PostGrid = ({ articles = [] }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {!articles ||
        (articles.length == 0 && (
          <Styled.NotFound>Nenhum artigo encontrado aqui =(</Styled.NotFound>
        ))}

      <Styled.Grid>
        {articles &&
          articles.length > 0 &&
          articles.map((article) => (
            <PostCard key={`p1-${article.title}`} article={article} />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};

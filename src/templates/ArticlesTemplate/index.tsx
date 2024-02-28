import * as Styled from './styles';
import { PostGrid } from 'components/PostGrid';
import { useState, useEffect } from 'react';
import { Base } from 'templates/Base';
import { Articles } from 'shared-typed/articles';
import { searchArticles } from 'api/search-articles';

export type ArticlesTemplateProps = {
  articles: Articles;
};

export const ArticlesTemplate = ({ articles = [] }: ArticlesTemplateProps) => {
  const [stateArticles, setStateArticles] = useState(articles);
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setStateArticles(articles);
  }, [articles]);

  const handleSearchArticles = async () => {
    try {
      setSearching(true);
      // Chama a função de busca na API com o valor do campo de busca
      const searchedArticles: Articles = await searchArticles(searchValue);
      // Atualiza o estado dos artigos com os resultados da busca
      setStateArticles(searchedArticles);
      setSearchValue('');
      setSearching(false);
    } catch (error) {
      console.error('Erro ao buscar artigos:', error);
      // Trata o erro conforme necessário
    }
  };

  return (
    <Base>
      <Styled.SearchContainer>
        <Styled.SearchInput
          type="search"
          placeholder="Encontre artigos"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Styled.SearchContainer>
      <Styled.SearchButtonContainer>
        <Styled.Button onClick={handleSearchArticles} disabled={searching}>
          {searching ? 'Buscando...' : 'Buscar'}
        </Styled.Button>
      </Styled.SearchButtonContainer>

      <PostGrid articles={stateArticles}></PostGrid>
    </Base>
  );
};

import * as Styled from './styles';
import { PostGrid } from 'components/PostGrid';
import { useState, useEffect } from 'react';
import { Base } from 'templates/Base';
import { Articles } from 'shared-typed/articles';
import { searchArticles } from 'api/search-articles';
import 'react-datepicker/dist/react-datepicker.css';

export type ArticlesTemplateProps = {
  articles: Articles;
};

export const ArticlesTemplate = ({ articles = [] }: ArticlesTemplateProps) => {
  const [stateArticles, setStateArticles] = useState(articles);
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    setStateArticles(articles);
  }, [articles]);

  const handleSearchArticles = async () => {
    try {
      setSearching(true);
      // Chama a função de busca na API com o valor do campo de busca
      const searchedArticles: Articles = await searchArticles(
        searchValue,
        startDate.toISOString(),
        endDate.toISOString(),
      );
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
        <label>Data Inicial:</label>
        <Styled.StyledDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          style={{ padding: '50px 50px !important;' }}
        />
        <label>Data final:</label>
        <Styled.StyledDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <Styled.SearchInput
          type="search"
          placeholder="Palavras-chave"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Styled.Button onClick={handleSearchArticles} disabled={searching}>
          {searching ? 'Buscando...' : 'Buscar'}
        </Styled.Button>
      </Styled.SearchContainer>

      <PostGrid articles={stateArticles}></PostGrid>
    </Base>
  );
};

import { Articles } from 'shared-typed/articles';

// Define a função para buscar artigos com base em um termo de pesquisa
export const searchArticles = async (searchTerm: string): Promise<Articles> => {
  try {
    // Monta a URL de busca com o termo fornecido
    const apiUrl = `https://newsapi.org/v2/everything?language=pt&apiKey=13ea94ec5309407fb93ae68f087c1253&q=${encodeURIComponent(
      searchTerm,
    )}`;

    // Faz a requisição para a API da NewsAPI usando fetch
    const response = await fetch(apiUrl);

    // Verifica se a resposta foi bem-sucedida e se há artigos retornados
    if (response.ok) {
      const data = await response.json();
      if (data.articles) {
        // Filtra os artigos que não têm "Removed" como valor nos campos relevantes
        console.log(data.articles);
        // Filtra os artigos que não têm "Removed" como valor em nenhuma das propriedades relevantes
        const filteredArticles = data.articles.filter(
          (article) => article.source?.name !== '[Removed]',
        );

        // Retorna os artigos filtrados
        console.log(filteredArticles);

        // Retorna os artigos filtrados
        return filteredArticles;
      } else {
        throw new Error('Não foram encontrados artigos');
      }
    } else {
      throw new Error('Erro ao buscar artigos');
    }
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    // Em caso de erro, retorna um array vazio de artigos
    return [];
  }
};

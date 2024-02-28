import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Articles } from 'shared-typed/articles';
import { ArticlesTemplate } from 'templates/ArticlesTemplate';

interface IndexProps {
  articles: Articles;
}

export default function Index({ articles }: IndexProps) {
  return (
    <>
      <Head>
        <title>Procura noticias</title>
        <meta name="description" content="content" />
      </Head>
      <ArticlesTemplate articles={articles} />
    </>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  // Mock articles data for demonstration purposes
  const mockArticles: Articles = [
    {
      source: {
        id: null,
        name: 'Conjur.com.br',
      },
      author: 'Luana Lisboa',
      title:
        'Plano de saúde deve custear tratamento de paciente com transtorno bipolar',
      description: '...',
      url: 'https://www.conjur.com.br/2024-fev-14/plano-de-saude-deve-custear-tratamento-de-paciente-com-transtorno-bipolar/',
      urlToImage:
        'https://www.conjur.com.br/wp-content/uploads/2023/11/remedios-medicamentos-farmacos-kit.jpeg',
      publishedAt: '2024-02-15T00:45:32Z',
      content: '...',
    },
    // Add more articles as needed
  ];

  return {
    props: {
      articles: mockArticles, // Pass the articles data to the component
    },
    revalidate: 24 * 60 * 60, // Revalidate every 24 hours
  };
};

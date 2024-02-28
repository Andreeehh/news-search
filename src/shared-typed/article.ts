import { Source } from './source';

export type Article = {
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: Source;
  content: string;
};

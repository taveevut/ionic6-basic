export class News {
  status: string;
  source: string;
  sortBy: string;
  articles: Articles[];
}

export class Articles {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

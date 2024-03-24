import axios from 'axios';
import Article from '../models/Article';

class NewsService {
  async fetchArticles(): Promise<Article[]> {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          sources: 'techcrunch', // Set the sources parameter to 'techcrunch'
          apiKey: '108663797ff84d2880bd7b342ed9857f',
        },
      });

      const articles: Article[] = response.data.articles.map((article: any, index: number) => ({
        id: article.publishedAt + index,
        title: article.title,
        description: article.description,
        content: article.content,
        author: article.author,
        publishedAt: article.publishedAt,
        url: article.url,
        imageUrl: article.urlToImage,
      }));

      return articles;
    } catch (error) {
      console.error('Error fetching articles:', error);
      return [];
    }
  }
}

export default NewsService;

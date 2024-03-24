
import React, { useState, useEffect } from 'react';
import { List, Card, Skeleton } from 'antd';
import NewsService from '../services/NewsService';
import Article from '../models/Article';

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const newsService = new NewsService();
      const fetchedArticles = await newsService.fetchArticles();
      setArticles(fetchedArticles);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  const openArticleUrl = (url: string) => {
    window.open(url, '_blank'); 
  };

  return (
    <List
      grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
      dataSource={articles}
      renderItem={(article: Article) => (
        <List.Item style={{ padding: '10px' }}>
          <Skeleton loading={loading} active>
            <Card
            
              title={article.title}
              style={{ width: 300, }}
              hoverable // Add hover effect to card
              cover={<img alt={article.title} src={article.imageUrl || 'https://via.placeholder.com/300'} />} 
              onClick={() => openArticleUrl(article.url)} 
            >
              <p>{article.description}</p>
            </Card>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default ArticleList;

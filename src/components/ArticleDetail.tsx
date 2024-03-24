
import React from 'react';
import { Card } from 'antd';
import Article from '../models/Article';

interface Props {
  article: Article;
}

const ArticleDetail: React.FC<Props> = ({ article }) => {
  return (
    <Card
      title={article.title}
      extra={<a href={article.url}>Read more</a>}
      style={{ maxWidth: '800px', margin: 'auto' }}
    >
      <p>{article.content}</p>
      <p>Published by {article.author} on {article.publishedAt}</p>
    </Card>
  );
};

export default ArticleDetail;

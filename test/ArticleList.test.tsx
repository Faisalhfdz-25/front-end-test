// ArticleList.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from '../src/components/ArticleList';
import Article from '../src/models/Article';

test('renders list of articles correctly', () => {
  const mockArticles: Article[] = [
    {
      id: '1',
      title: 'Article 1',
      description: 'Description for article 1',
      imageUrl: 'https://example.com/image1.jpg',
      content: 'Content for article 1',
      author: 'Author 1',
      publishedAt: '2024-01-01',
      url: 'https://example.com/article1',
    },
    {
      id: '2',
      title: 'Article 2',
      description: 'Description for article 2',
      imageUrl: 'https://example.com/image2.jpg',
      content: 'Content for article 2',
      author: 'Author 2',
      publishedAt: '2024-01-02',
      url: 'https://example.com/article2',
    },
  ];

  render(<ArticleList  />);

  const articleImages = screen.getAllByAltText(/Article/);
  expect(articleImages).toHaveLength(2);

  const articleDescriptions = screen.getAllByText(/Description for article/);
  expect(articleDescriptions).toHaveLength(2);
});

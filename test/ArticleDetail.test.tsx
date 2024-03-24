// ArticleDetail.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import ArticleDetail from '../src/components/ArticleDetail'; // Sesuaikan dengan path komponen ArticleDetail Anda

test('renders article details correctly', () => {
  const mockArticle = {
    id: '1',
    title: 'Test Article',
    description: 'This is a test article',
    content: 'Lorem ipsum dolor sit amet',
    author: 'Test Author',
    publishedAt: '2024-03-22T12:00:00Z',
    url: 'https://example.com/article/1',
    imageUrl: 'https://example.com/image.jpg',
  };

  const { getByText, getByAltText } = render(<ArticleDetail article={mockArticle} />);

  expect(getByText('Test Article')).toBeInTheDocument();
  expect(getByText('This is a test article')).toBeInTheDocument();
  expect(getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
  expect(getByText('Published by Test Author on 2024-03-22T12:00:00Z')).toBeInTheDocument();
  expect(getByAltText('Test Article')).toBeInTheDocument();
});

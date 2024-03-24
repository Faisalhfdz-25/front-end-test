import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ArticleDetail from "../components/ArticleDetail";
import NewsService from "../services/NewsService";
import Article from "../models/Article";

const DetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const newsService = new NewsService();
      const articles = await newsService.fetchArticles();
      const selectArticle = articles.find((article) => article.id === id);
      setArticle(selectArticle || null);
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>
  }

  return (
    <div>
        <h1>Article Detail</h1>
        <ArticleDetail article={article}/>
    </div>
  );
};

export default DetailView;
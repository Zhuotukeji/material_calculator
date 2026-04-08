import { notFound } from 'next/navigation';
import { getArticleById, getAllArticles } from '@/content/articles';
import ArticleContent from '@/components/ArticleContent';

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id);

  if (!article) {
    return {
      title: '文章未找到',
    };
  }

  return {
    title: `${article.title} - 装修材料计算器`,
    description: article.description,
  };
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id);

  if (!article) {
    notFound();
  }

  return <ArticleContent article={article} />;
}

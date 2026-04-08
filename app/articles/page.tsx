import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllArticles } from '@/content/articles';
import ArticleList from '@/components/ArticleList';

export const metadata: Metadata = {
  title: '装修知识文章',
  description: '装修材料计算方法、损耗率指南、选购技巧等实用装修知识文章。',
  alternates: { canonical: '/articles' },
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const categories = Array.from(new Set(articles.map(a => a.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">文章</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">装修知识文章</h1>
          <p className="text-xl text-gray-600">了解装修材料计算方法，避免浪费和不足</p>
        </div>

        <ArticleList articles={articles} categories={categories} />
      </div>
    </div>
  );
}

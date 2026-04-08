import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllArticles } from '@/content/articles';
import ArticleList from '@/components/ArticleList';

export const metadata: Metadata = {
  title: 'Renovation Guides',
  description: 'Material calculation methods, waste rate guides, purchasing tips and practical renovation knowledge.',
  alternates: { canonical: '/articles' },
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const categories = Array.from(new Set(articles.map(a => a.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Articles</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Renovation Guides</h1>
          <p className="text-xl text-gray-600">Learn material calculation methods to avoid waste and shortage</p>
        </div>

        <ArticleList articles={articles} categories={categories} />
      </div>
    </div>
  );
}

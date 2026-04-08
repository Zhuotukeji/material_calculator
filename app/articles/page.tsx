import Link from 'next/link';
import { getAllArticles } from '@/content/articles';
import ArticleCard from '@/components/ArticleCard';

export default function ArticlesPage() {
  const articles = getAllArticles();
  const categories = Array.from(new Set(articles.map(a => a.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">文章</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            装修知识文章
          </h1>
          <p className="text-xl text-gray-600">
            了解装修材料计算方法，避免浪费和不足
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/articles"
              className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold"
            >
              全部
            </Link>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white text-gray-700 font-semibold border-2 border-gray-200 hover:border-blue-500 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">暂无文章</p>
          </div>
        )}
      </div>
    </div>
  );
}

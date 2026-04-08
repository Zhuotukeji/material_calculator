import Link from 'next/link';
import { Article } from '@/content/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.id}`} className="bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition block">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{article.category}</span>
        <span className="text-sm text-gray-500">{new Date(article.publishedAt).toLocaleDateString('en-US')}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">{article.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
      <span className="text-blue-600 font-semibold hover:underline">Read More →</span>
    </Link>
  );
}

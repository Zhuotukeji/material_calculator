'use client';

import { useState } from 'react';
import { Article } from '@/content/articles';
import ArticleCard from '@/components/ArticleCard';

interface ArticleListProps {
  articles: Article[];
  categories: string[];
}

export default function ArticleList({ articles, categories }: ArticleListProps) {
  const [selected, setSelected] = useState<string>('All');

  const filtered = selected === 'All' ? articles : articles.filter(a => a.category === selected);

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {['All', ...categories].map((category) => (
            <button key={category} onClick={() => setSelected(category)} className={`px-4 py-2 rounded-full font-semibold transition ${selected === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500'}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No articles found</p>
        </div>
      )}
    </>
  );
}

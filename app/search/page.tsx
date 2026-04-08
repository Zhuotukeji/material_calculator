'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getSearchResultsByType } from '@/lib/search';
import SearchBar from '@/components/SearchBar';
import AfsAdUnit from '@/components/AfsAdUnit';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = query ? getSearchResultsByType(query) : { calculators: [], articles: [], faqs: [] };
  const totalResults = results.calculators.length + results.articles.length + results.faqs.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">搜索</span>
        </nav>

        {/* Search Bar */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">搜索</h1>
          <SearchBar />
        </div>

        {query && (
          <>
            {/* Search Info */}
            <div className="mb-6">
              <p className="text-gray-600">
                搜索 "<strong className="text-gray-900">{query}</strong>" 找到 {totalResults} 个结果
              </p>
            </div>

            {/* AFS Ad Unit - Primary placement for Google AdSense for Search */}
            <div className="mb-8">
              <AfsAdUnit />
            </div>

            {totalResults > 0 ? (
              <div className="space-y-8">
                {/* Calculators Results */}
                {results.calculators.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      计算器 ({results.calculators.length})
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                      {results.calculators.map((result) => (
                        <Link
                          key={result.id}
                          href={result.url}
                          className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition"
                        >
                          <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block mb-3">
                            {result.category}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {result.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {result.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Articles Results */}
                {results.articles.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      文章 ({results.articles.length})
                    </h2>
                    <div className="space-y-4">
                      {results.articles.map((result) => (
                        <Link
                          key={result.id}
                          href={result.url}
                          className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition"
                        >
                          <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block mb-2">
                            {result.category}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                            {result.title}
                          </h3>
                          <p className="text-gray-600">
                            {result.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* FAQs Results */}
                {results.faqs.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      常见问题 ({results.faqs.length})
                    </h2>
                    <div className="space-y-4">
                      {results.faqs.map((result) => (
                        <Link
                          key={result.id}
                          href={result.url}
                          className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition"
                        >
                          <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block mb-2">
                            {result.category}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">
                            {result.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {result.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border-2 border-gray-200">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  未找到相关结果
                </h3>
                <p className="text-gray-600 mb-6">
                  试试其他关键词，或浏览我们的内容
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/calculators/paint"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    浏览计算器
                  </Link>
                  <Link
                    href="/articles"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
                  >
                    浏览文章
                  </Link>
                </div>
              </div>
            )}
          </>
        )}

        {!query && (
          <div className="text-center py-16 bg-white rounded-lg border-2 border-gray-200">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              开始搜索
            </h3>
            <p className="text-gray-600">
              输入关键词搜索计算器、文章或常见问题
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <p className="text-gray-500">加载中...</p>
          </div>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}

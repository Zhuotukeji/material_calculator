'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAllFaqs, searchFaqs } from '@/content/faqs';
import FaqAccordion from '@/components/FaqAccordion';

export default function FaqPage() {
  const allFaqs = getAllFaqs();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');

  const categories = ['全部', ...Array.from(new Set(allFaqs.map(f => f.category)))];

  const filteredFaqs = searchQuery
    ? searchFaqs(searchQuery)
    : selectedCategory === '全部'
    ? allFaqs
    : allFaqs.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">常见问题</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            常见问题
          </h1>
          <p className="text-xl text-gray-600">
            装修材料计算相关的常见问题解答
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="搜索问题..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        {filteredFaqs.length > 0 ? (
          <FaqAccordion faqs={filteredFaqs} />
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border-2 border-gray-200">
            <p className="text-gray-500 text-lg">未找到相关问题</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('全部');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              查看全部问题
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            没有找到答案？
          </h2>
          <p className="text-gray-600 mb-6">
            使用我们的计算器工具，快速计算装修材料用量
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculators/paint"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              油漆计算器
            </Link>
            <Link
              href="/calculators/tile"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              瓷砖计算器
            </Link>
            <Link
              href="/calculators/flooring"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              地板计算器
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

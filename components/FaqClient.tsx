'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FAQ, searchFaqs } from '@/content/faqs';
import FaqAccordion from '@/components/FaqAccordion';

interface FaqClientProps {
  allFaqs: FAQ[];
}

export default function FaqClient({ allFaqs }: FaqClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(allFaqs.map(f => f.category)))];

  const filteredFaqs = searchQuery
    ? searchFaqs(searchQuery)
    : selectedCategory === 'All'
    ? allFaqs
    : allFaqs.filter(f => f.category === selectedCategory);

  return (
    <>
      <div className="mb-6">
        <input type="text" placeholder="Search questions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" />
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => { setSelectedCategory(category); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-full font-semibold transition ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500'}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredFaqs.length > 0 ? (
        <FaqAccordion faqs={filteredFaqs} />
      ) : (
        <div className="text-center py-16 bg-white rounded-lg border-2 border-gray-200">
          <p className="text-gray-500 text-lg">No matching questions found</p>
          <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="mt-4 text-blue-600 hover:underline">View All Questions</button>
        </div>
      )}

      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center border-2 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Didn't find your answer?</h2>
        <p className="text-gray-600 mb-6">Use our calculators to quickly estimate material quantities</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/calculators/paint" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Paint Calculator</Link>
          <Link href="/calculators/tile" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">Tile Calculator</Link>
          <Link href="/calculators/flooring" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">Flooring Calculator</Link>
        </div>
      </div>
    </>
  );
}

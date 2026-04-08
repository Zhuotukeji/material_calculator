'use client';

import { useState } from 'react';
import { FAQ } from '@/content/faqs';

interface FaqAccordionProps {
  faqs: FAQ[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          id={faq.id}
          className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => toggleFaq(faq.id)}
            className="w-full text-left p-6 hover:bg-gray-50 transition flex items-start justify-between gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {faq.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {faq.question}
              </h3>
            </div>
            <svg
              className={`w-6 h-6 text-gray-500 transition-transform flex-shrink-0 ${
                openId === faq.id ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openId === faq.id && (
            <div className="px-6 pb-6">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              {faq.relatedCalculators.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">相关计算器：</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.relatedCalculators.map((calcId) => (
                      <a
                        key={calcId}
                        href={`/calculators/${calcId}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {calcId === 'paint' && '油漆计算器'}
                        {calcId === 'tile' && '瓷砖计算器'}
                        {calcId === 'flooring' && '地板计算器'}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

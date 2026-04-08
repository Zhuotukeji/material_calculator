import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllFaqs } from '@/content/faqs';
import { getFaqPageJsonLd } from '@/lib/jsonld';
import FaqClient from '@/components/FaqClient';

export const metadata: Metadata = {
  title: '常见问题',
  description: '装修材料计算相关的常见问题解答，包括瓷砖、油漆、地板选购和计算技巧。',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  const allFaqs = getAllFaqs();

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageJsonLd()) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">常见问题</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">常见问题</h1>
          <p className="text-xl text-gray-600">装修材料计算相关的常见问题解答</p>
        </div>

        <FaqClient allFaqs={allFaqs} />
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Article } from '@/content/articles';
import { getCalculatorById } from '@/content/calculators';
import { getFaqById } from '@/content/faqs';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-blue-600">首页</Link>
        <span className="mx-2">/</span>
        <Link href="/articles" className="hover:text-blue-600">文章</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{article.title}</span>
      </nav>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-sm text-gray-500">
            发布于 {new Date(article.publishedAt).toLocaleDateString('zh-CN')}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <p className="text-xl text-gray-600">
          {article.description}
        </p>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          {article.content.split('\n').map((line, index) => {
            // Handle markdown-style headers
            if (line.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {line.replace('## ', '')}
                </h2>
              );
            }
            if (line.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  {line.replace('### ', '')}
                </h3>
              );
            }
            // Handle list items
            if (line.startsWith('- ')) {
              return (
                <li key={index} className="text-gray-700 ml-6 mb-2">
                  {line.replace('- ', '')}
                </li>
              );
            }
            // Handle bold text with **
            if (line.includes('**')) {
              const parts = line.split('**');
              return (
                <p key={index} className="text-gray-700 mb-4">
                  {parts.map((part, i) =>
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                  )}
                </p>
              );
            }
            // Handle links [text](/url)
            if (line.includes('[') && line.includes('](')) {
              const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
              const parts = line.split(linkRegex);
              return (
                <p key={index} className="text-gray-700 mb-4">
                  {parts.map((part, i) => {
                    if (i % 3 === 1) {
                      return <Link key={i} href={parts[i + 1]} className="text-blue-600 hover:underline">{part}</Link>;
                    }
                    if (i % 3 === 2) return null;
                    return part;
                  })}
                </p>
              );
            }
            // Regular paragraph
            if (line.trim()) {
              return (
                <p key={index} className="text-gray-700 mb-4">
                  {line}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Related Calculators */}
      {article.relatedCalculators.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">相关计算器</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {article.relatedCalculators.map((calcId) => {
              const calc = getCalculatorById(calcId);
              if (!calc) return null;
              return (
                <Link
                  key={calc.id}
                  href={`/calculators/${calc.id}`}
                  className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition"
                >
                  <div className="text-3xl mb-2">{calc.icon}</div>
                  <h3 className="font-bold text-gray-900">{calc.name}</h3>
                  <p className="text-sm text-gray-600">{calc.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Related FAQs */}
      {article.relatedFaqs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">相关问题</h2>
          <div className="space-y-3">
            {article.relatedFaqs.map((faqId) => {
              const faq = getFaqById(faqId);
              if (!faq) return null;
              return (
                <Link
                  key={faq.id}
                  href={`/faq#${faq.id}`}
                  className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {faq.answer}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

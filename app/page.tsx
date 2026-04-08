import Link from 'next/link';
import { getAllCalculators } from '@/content/calculators';
import { getAllArticles } from '@/content/articles';
import { getAllFaqs } from '@/content/faqs';
import { getWebsiteJsonLd } from '@/lib/jsonld';

export default function Home() {
  const calculators = getAllCalculators();
  const articles = getAllArticles().slice(0, 3);
  const faqs = getAllFaqs().slice(0, 5);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteJsonLd()) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Material Calculator
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Accurately calculate paint, tile, and flooring quantities to avoid waste or shortage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculators/paint"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Calculating
            </Link>
            <Link
              href="/articles"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              Read Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose a Calculator
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {calculators.map((calc) => (
              <Link
                key={calc.id}
                href={`/calculators/${calc.id}`}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition group"
              >
                <div className="text-5xl mb-4">{calc.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  {calc.name}
                </h3>
                <p className="text-gray-600 mb-4">{calc.description}</p>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Use Now →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Renovation Guides</h2>
            <Link
              href="/articles"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {article.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>
                <span className="text-blue-600 text-sm font-semibold hover:underline">
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
            <Link
              href="/faq"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">❓</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Renovation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Use our calculators to get precise material estimates and save on your budget
          </p>
          <Link
            href="/calculators/paint"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Calculating
          </Link>
        </div>
      </section>
    </div>
  );
}

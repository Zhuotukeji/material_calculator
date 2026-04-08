import { getAllCalculators, Calculator } from '@/content/calculators';
import { getAllArticles, Article } from '@/content/articles';
import { getAllFaqs, FAQ } from '@/content/faqs';

export interface SearchResult {
  type: 'calculator' | 'article' | 'faq';
  id: string;
  title: string;
  description: string;
  url: string;
  category?: string;
}

export function searchAll(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const terms = query.toLowerCase().split(/\s+/);
  const results: SearchResult[] = [];

  // Search calculators
  const calculators = getAllCalculators();
  calculators.forEach((calc: Calculator) => {
    const searchText = `${calc.name} ${calc.description} ${calc.category}`.toLowerCase();
    if (terms.some(term => searchText.includes(term))) {
      results.push({
        type: 'calculator',
        id: calc.id,
        title: calc.name,
        description: calc.description,
        url: `/calculators/${calc.id}`,
        category: calc.category,
      });
    }
  });

  // Search articles
  const articles = getAllArticles();
  articles.forEach((article: Article) => {
    const searchText = `${article.title} ${article.description} ${article.content} ${article.category}`.toLowerCase();
    if (terms.some(term => searchText.includes(term))) {
      results.push({
        type: 'article',
        id: article.id,
        title: article.title,
        description: article.description,
        url: `/articles/${article.id}`,
        category: article.category,
      });
    }
  });

  // Search FAQs
  const faqs = getAllFaqs();
  faqs.forEach((faq: FAQ) => {
    const searchText = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
    if (terms.some(term => searchText.includes(term))) {
      results.push({
        type: 'faq',
        id: faq.id,
        title: faq.question,
        description: faq.answer.substring(0, 150) + '...',
        url: `/faq#${faq.id}`,
        category: faq.category,
      });
    }
  });

  return results;
}

export function getSearchResultsByType(query: string) {
  const allResults = searchAll(query);

  return {
    calculators: allResults.filter(r => r.type === 'calculator'),
    articles: allResults.filter(r => r.type === 'article'),
    faqs: allResults.filter(r => r.type === 'faq'),
  };
}

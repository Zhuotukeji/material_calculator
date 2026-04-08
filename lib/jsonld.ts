import { getAllFaqs } from '@/content/faqs';

const BASE_URL = 'https://material-calculator.vercel.app';

export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Material Calculator',
    url: BASE_URL,
    description: 'Free online renovation material calculator. Accurately calculate paint, tile, and flooring quantities.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getCalculatorJsonLd(calcId: string) {
  const titles: Record<string, string> = {
    paint: 'Paint Calculator',
    tile: 'Tile Calculator',
    flooring: 'Flooring Calculator',
  };
  const descriptions: Record<string, string> = {
    paint: 'Calculate wall paint quantity online with support for different coat numbers and coverage rates',
    tile: 'Calculate tile quantity online with support for different sizes and laying patterns',
    flooring: 'Calculate flooring quantity online with waste rates for different installation methods',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: titles[calcId] || calcId,
    url: `${BASE_URL}/calculators/${calcId}`,
    description: descriptions[calcId] || '',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function getArticleJsonLd(article: { title: string; description: string; id: string; publishedAt: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/articles/${article.id}`,
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: 'Material Calculator' },
    publisher: { '@type': 'Organization', name: 'Material Calculator' },
  };
}

export function getFaqPageJsonLd() {
  const faqs = getAllFaqs();
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

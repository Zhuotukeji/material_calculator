export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  relatedCalculators: string[];
}

export const faqs: FAQ[] = [
  {
    id: 'tile-size-choice',
    question: 'How do I choose the right tile size? Are larger tiles better?',
    answer: 'Tile size depends on your space: for small areas (bathrooms), use 300x300 or 300x600mm to avoid cutting waste; for large areas (living rooms), use 800x800 or 600x1200mm for a more spacious look with fewer grout lines. The general rule is: the larger the space, the larger the tile can be.',
    category: 'Tiles',
    relatedCalculators: ['tile']
  },
  {
    id: 'tile-quality',
    question: 'How can I tell if tiles are good quality?',
    answer: 'Check four things: 1) Surface should be smooth and even with no color variation; 2) Tap it — a crisp sound indicates high density; 3) Test water absorption — slow absorption on the back means better quality; 4) Check dimensions — measure diagonals to ensure consistency. Brand-name tiles are generally more reliable.',
    category: 'Tiles',
    relatedCalculators: ['tile']
  },
  {
    id: 'paint-quality',
    question: 'How do I choose latex paint? What\'s the difference between cheap and expensive?',
    answer: 'The main differences are in environmental safety and durability. Good latex paint has: low VOC content, minimal odor, strong coverage, high scrub resistance (5000+ cycles), and doesn\'t yellow over time. We recommend mid to high-end products from reputable brands, especially for children\'s rooms and bedrooms where safety matters most.',
    category: 'Paint',
    relatedCalculators: ['paint']
  },
  {
    id: 'paint-color',
    question: 'How do I choose wall colors? Will dark colors feel too oppressive?',
    answer: 'Consider these factors: 1) Well-lit rooms can handle darker colors; 2) Small spaces look larger with light colors; 3) For dark colors, consider painting just one accent wall; 4) View color swatches in natural light — colors appear darker on walls than on swatches. We recommend buying a sample to test before committing.',
    category: 'Paint',
    relatedCalculators: ['paint']
  },
  {
    id: 'floor-type',
    question: 'What\'s the difference between solid, engineered, and laminate flooring?',
    answer: 'Solid wood: natural material, great feel underfoot but expensive and requires maintenance; Engineered wood: good stability, great value, suitable for underfloor heating; Laminate: durable and affordable but harder underfoot. Choose solid or engineered if budget allows, laminate if budget is limited.',
    category: 'Flooring',
    relatedCalculators: ['flooring']
  },
  {
    id: 'floor-installation',
    question: 'Does the direction of flooring installation matter?',
    answer: 'Yes, it does. General principles: 1) Lay along the direction of light to make the space appear longer; 2) Lay along the longest wall for visual extension; 3) Keep the same direction in living room and bedrooms for consistency. Special patterns like herringbone require advance planning.',
    category: 'Flooring',
    relatedCalculators: ['flooring']
  },
  {
    id: 'measurement-tips',
    question: 'What should I watch out for when measuring room dimensions?',
    answer: 'Key tips: 1) Measure multiple times and average the results; 2) Record length, width, and height with a simple sketch; 3) Note door and window positions and sizes; 4) Break irregular spaces into sections; 5) Allow for baseboards and door frames. A laser distance measurer is recommended for accuracy.',
    category: 'General',
    relatedCalculators: ['paint', 'tile', 'flooring']
  },
  {
    id: 'material-storage',
    question: 'How should I store renovation materials after purchase?',
    answer: 'Storage tips: 1) Store tiles flat, keep dry; 2) Store flooring flat in a dry area, install promptly after opening; 3) Seal paint containers, keep away from heat sources; 4) Keep all materials out of direct sunlight; 5) Ensure ventilation but don\'t store outdoors. Avoid purchasing materials too far in advance.',
    category: 'General',
    relatedCalculators: []
  },
  {
    id: 'budget-planning',
    question: 'How should I plan my renovation materials budget?',
    answer: 'Suggested budget allocation: flooring 25-30%, walls 20-25%, ceiling 10-15%, other materials 15-20%, contingency 10%. Determine your total budget first, then allocate by proportion. Compare prices from multiple sources, but don\'t sacrifice quality for price alone.',
    category: 'General',
    relatedCalculators: ['paint', 'tile', 'flooring']
  },
  {
    id: 'diy-or-professional',
    question: 'Should I buy materials myself or let the contractor handle it?',
    answer: 'Both have pros and cons. Buying yourself: transparent pricing and quality control, but time-consuming; Contractor purchasing: convenient but may include markups. Recommendation: buy main materials (flooring, tiles, paint) yourself and let the contractor handle auxiliary materials. Regardless of who buys, always verify quality and quantity upon delivery.',
    category: 'General',
    relatedCalculators: []
  }
];

export function getFaqById(id: string): FAQ | undefined {
  return faqs.find(f => f.id === id);
}

export function getAllFaqs(): FAQ[] {
  return faqs;
}

export function getFaqsByCategory(category: string): FAQ[] {
  return faqs.filter(f => f.category === category);
}

export function searchFaqs(query: string): FAQ[] {
  if (!query.trim()) return [];
  const terms = query.toLowerCase().split(/\s+/);
  return faqs.filter(faq => {
    const searchText = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
    return terms.some(term => searchText.includes(term));
  });
}

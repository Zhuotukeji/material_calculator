export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  relatedCalculators: string[];
  relatedFaqs: string[];
  publishedAt: string;
}

export const articles: Article[] = [
  {
    id: 'tile-waste-calculation',
    title: 'How Much Tile Waste Should You Allow For?',
    description: 'Learn about tile waste rates for different laying patterns to avoid material shortage or excess.',
    category: 'Tiles',
    content: `
## When This Applies

This guide is for homeowners preparing to lay tiles, helping you understand how much waste to allow for with different laying patterns.

## Standard Waste Rates

### Straight Lay (Grid Pattern)
- Waste rate: 5-8%
- Suitable for: Regular spaces where tile size matches room dimensions well
- Notes: The most common laying pattern with minimal waste

### Diagonal Lay (Diamond Pattern)
- Waste rate: 10-15%
- Suitable for: Spaces where decorative effect is desired
- Notes: Requires extensive cutting, corner waste increases significantly

### Brick Lay / Herringbone
- Waste rate: 8-12%
- Suitable for: Rectangular tiles
- Notes: Relatively regular cutting, moderate waste

## Factors Affecting Waste

1. **Room shape**: Irregular spaces and multiple corners increase waste
2. **Tile size**: Large tiles in small spaces cause more waste
3. **Installer experience**: Skilled workers can effectively reduce waste
4. **Pre-planning**: Layout planning in advance reduces unnecessary cuts

## Purchasing Recommendations

- Regular space with straight lay: Actual area x 1.08
- Complex space or diagonal lay: Actual area x 1.15
- Spare tiles: Purchase an extra 2-3 tiles for future repairs

## Important Notes

- Different batches may have color variations, buy all at once
- Keep packaging and receipts, extras can be returned
- Stairs, balconies and other special areas need separate calculations

## Use Our Tool

Use our [Tile Calculator](/calculators/tile) to quickly calculate the quantity needed.
    `,
    relatedCalculators: ['tile'],
    relatedFaqs: ['tile-size-choice', 'tile-quality'],
    publishedAt: '2024-01-15'
  },
  {
    id: 'paint-coverage-guide',
    title: 'How Much Wall Area Can One Bucket of Paint Cover?',
    description: 'Understand theoretical and actual paint coverage rates to plan your purchase wisely.',
    category: 'Paint',
    content: `
## Theoretical Coverage

Standard 5L latex paint:
- Theoretical coverage: 35-40 sqm (single coat)
- Actual coverage: 30-35 sqm (single coat)
- Full application (2 coats): 15-18 sqm

## Why Does Actual Usage Differ?

1. **Wall absorption**: Rough walls absorb more paint
2. **Application waste**: Rollers and brushes absorb paint
3. **Number of coats**: Usually 2-3 coats are needed
4. **Color mixing waste**: Dark colors need more coats

## Coverage Differences by Wall Type

### New Walls (Primed)
- 1 coat primer + 2 coats topcoat
- 5L covers approximately 12-15 sqm

### Wall Renovation
- May need 3 coats of topcoat
- 5L covers approximately 10-12 sqm

### Rough Walls
- High paint absorption, increase quantity by 20-30%

## Formula

**Paint needed = Wall area x Number of coats / Coverage rate per coat x 1.1 (waste factor)**

## Purchasing Tips

- Use the same batch for the same room to avoid color differences
- Better to buy extra, leftovers can be used for touch-ups
- Premium brands have more consistent coverage rates

## Use Our Tool

Use the [Paint Calculator](/calculators/paint) to enter your wall dimensions and automatically calculate the paint needed.
    `,
    relatedCalculators: ['paint'],
    relatedFaqs: ['paint-quality', 'paint-color'],
    publishedAt: '2024-01-20'
  },
  {
    id: 'floor-waste-rate',
    title: 'What Is a Reasonable Flooring Waste Rate? Does Laying Pattern Matter?',
    description: 'Compare waste rates for different flooring installation methods to calculate your purchase accurately.',
    category: 'Flooring',
    content: `
## Standard Waste Rates

### Straight Lay
- Waste rate: 3-5%
- Features: Most material-efficient method
- Suitable for: Regular rooms

### Brick Pattern
- Waste rate: 5-8%
- Features: Attractive with moderate waste
- Suitable for: Most homes

### Herringbone / Chevron
- Waste rate: 8-12%
- Features: Premium look but uses more material
- Suitable for: Spaces where visual impact matters

## Factors Affecting Waste

1. **Room shape**: Irregular rooms add 2-3% waste
2. **Plank length**: Shorter planks produce less waste
3. **Doorway transitions**: Multiple doorways increase waste
4. **Installer experience**: Skilled workers reduce waste

## Purchasing Recommendations

**Purchase amount = Actual area x (1 + waste rate) + spare**

- Straight lay: Actual area x 1.05 + 1 sqm
- Brick pattern: Actual area x 1.08 + 1 sqm
- Herringbone: Actual area x 1.12 + 2 sqm

## Tips to Reduce Waste

1. Measure in advance, plan the laying direction
2. Choose appropriate plank lengths
3. Offcuts can be used in closets and hidden areas
4. Discuss cutting plans with your installer

## Important Notes

- Different batches may have color variations
- Keep spare planks for future repairs
- Keep purchase receipts, extras can be returned

## Use Our Tool

The [Flooring Calculator](/calculators/flooring) can calculate exact quantities based on room size and laying method.
    `,
    relatedCalculators: ['flooring'],
    relatedFaqs: ['floor-type', 'floor-installation'],
    publishedAt: '2024-01-25'
  }
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(a => a.id === id);
}

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(a => a.category === category);
}

export function searchArticles(query: string): Article[] {
  if (!query.trim()) return [];
  const terms = query.toLowerCase().split(/\s+/);
  return articles.filter(article => {
    const searchText = `${article.title} ${article.description} ${article.content} ${article.category}`.toLowerCase();
    return terms.some(term => searchText.includes(term));
  });
}

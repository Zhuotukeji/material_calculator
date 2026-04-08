export interface Calculator {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export const calculators: Calculator[] = [
  {
    id: 'paint',
    name: 'Paint Calculator',
    description: 'Calculate wall paint quantity including coats and waste',
    icon: '🎨',
    category: 'Walls'
  },
  {
    id: 'tile',
    name: 'Tile Calculator',
    description: 'Calculate tile quantity for different sizes and laying patterns',
    icon: '🔲',
    category: 'Floor/Wall'
  },
  {
    id: 'flooring',
    name: 'Flooring Calculator',
    description: 'Calculate flooring quantity with waste rates for different methods',
    icon: '📐',
    category: 'Floor'
  }
];

export function getCalculatorById(id: string): Calculator | undefined {
  return calculators.find(c => c.id === id);
}

export function getAllCalculators(): Calculator[] {
  return calculators;
}

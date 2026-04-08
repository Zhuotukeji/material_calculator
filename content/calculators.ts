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
    name: '油漆计算器',
    description: '计算墙面油漆用量，包含涂刷遍数和损耗',
    icon: '🎨',
    category: '墙面'
  },
  {
    id: 'tile',
    name: '瓷砖计算器',
    description: '计算瓷砖数量，支持不同规格和铺贴方式',
    icon: '🔲',
    category: '地面/墙面'
  },
  {
    id: 'flooring',
    name: '地板计算器',
    description: '计算地板用量，包含不同铺装方式的损耗',
    icon: '📐',
    category: '地面'
  }
];

export function getCalculatorById(id: string): Calculator | undefined {
  return calculators.find(c => c.id === id);
}

export function getAllCalculators(): Calculator[] {
  return calculators;
}

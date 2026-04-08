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
    question: '瓷砖尺寸怎么选？大砖好还是小砖好？',
    answer: '选择瓷砖尺寸主要看空间大小：小空间（卫生间）建议300×300或300×600mm，避免大砖切割浪费；客厅等大空间可选800×800或600×1200mm大砖，铺贴效果更大气，缝隙更少。一般原则是：空间越大，砖可以越大。',
    category: '瓷砖',
    relatedCalculators: ['tile']
  },
  {
    id: 'tile-quality',
    question: '如何判断瓷砖质量好坏？',
    answer: '看四点：1) 看表面是否平整光滑，无色差；2) 听声音，敲击声音清脆说明密度高；3) 测吸水率，背面滴水吸收慢的质量好；4) 看尺寸，用尺子量对角线是否一致。品牌砖通常质量更稳定。',
    category: '瓷砖',
    relatedCalculators: ['tile']
  },
  {
    id: 'paint-quality',
    question: '乳胶漆怎么选？贵的和便宜的差别在哪？',
    answer: '主要差别在环保性和耐用性。好的乳胶漆：VOC含量低，气味小，遮盖力强，耐擦洗次数多（5000次以上），不易发黄。建议选择大品牌的中高端产品，儿童房和卧室更要注重环保指标。',
    category: '油漆',
    relatedCalculators: ['paint']
  },
  {
    id: 'paint-color',
    question: '墙面颜色怎么选？深色会不会很压抑？',
    answer: '颜色选择要考虑：1) 采光好的房间可以用深色；2) 小空间用浅色显大；3) 深色建议只刷一面墙做背景；4) 看色卡要在自然光下，且实际上墙会比色卡深一些。建议先买小样试刷一块看效果。',
    category: '油漆',
    relatedCalculators: ['paint']
  },
  {
    id: 'floor-type',
    question: '实木地板、复合地板、强化地板有什么区别？',
    answer: '实木地板：纯木材，脚感好但价格高，需要保养；多层复合：稳定性好，性价比高，适合地暖；强化地板：耐磨便宜，但脚感较硬。预算充足选实木或多层复合，预算有限选强化地板。',
    category: '地板',
    relatedCalculators: ['flooring']
  },
  {
    id: 'floor-installation',
    question: '地板铺装方向有讲究吗？',
    answer: '有讲究。一般原则：1) 顺着光线方向铺，显得空间更长；2) 顺着房间长边铺，视觉延伸效果好；3) 客厅和卧室最好同方向，整体性强。特殊铺法如人字铺需要提前规划。',
    category: '地板',
    relatedCalculators: ['flooring']
  },
  {
    id: 'measurement-tips',
    question: '自己测量房间尺寸要注意什么？',
    answer: '注意事项：1) 多测几次取平均值；2) 记录长宽高，画简图标注；3) 注意门窗位置和尺寸；4) 异形空间要分段测量；5) 预留踢脚线、门套等位置。建议用激光测距仪，更准确。',
    category: '通用',
    relatedCalculators: ['paint', 'tile', 'flooring']
  },
  {
    id: 'material-storage',
    question: '装修材料买回来怎么存放？',
    answer: '存放要点：1) 瓷砖要平放，避免受潮；2) 地板要平放在干燥处，拆包后尽快铺装；3) 油漆密封存放，远离火源；4) 所有材料避免阳光直射；5) 保持通风但不要露天存放。一般不建议提前太久购买。',
    category: '通用',
    relatedCalculators: []
  },
  {
    id: 'budget-planning',
    question: '装修材料预算怎么做？',
    answer: '预算分配建议：地面材料占25-30%，墙面材料占20-25%，顶面材料占10-15%，其他辅材占15-20%，预留10%应急。先确定总预算，再按比例分配到各项。建议多比价，但不要只看价格忽视质量。',
    category: '通用',
    relatedCalculators: ['paint', 'tile', 'flooring']
  },
  {
    id: 'diy-or-professional',
    question: '装修材料自己买还是让装修公司买？',
    answer: '各有利弊。自己买：价格透明，质量可控，但费时费力；装修公司买：省心省力，但可能有差价。建议：主材（地板、瓷砖、油漆）自己买，辅材让装修公司负责。无论谁买，都要验收质量和数量。',
    category: '通用',
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

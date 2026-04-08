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
    title: '瓷砖损耗一般预留多少合理？',
    description: '了解不同铺贴方式下的瓷砖损耗率，避免材料浪费或不足。',
    category: '瓷砖',
    content: `
## 适用场景

本文适用于准备铺贴瓷砖的业主，帮助你了解不同铺贴方式下应该预留多少损耗。

## 标准损耗率

### 直铺（正铺）
- 损耗率：5-8%
- 适用：规则空间，瓷砖规格与房间尺寸匹配较好
- 说明：这是最常见的铺贴方式，损耗最小

### 斜铺（菱形铺）
- 损耗率：10-15%
- 适用：追求装饰效果的空间
- 说明：需要大量切割，边角损耗明显增加

### 工字铺/人字铺
- 损耗率：8-12%
- 适用：长条形瓷砖
- 说明：切割相对规律，损耗适中

## 影响损耗的因素

1. **房间形状**：异形空间、多拐角会增加损耗
2. **瓷砖规格**：大砖在小空间损耗更大
3. **师傅经验**：熟练工人能有效降低损耗
4. **预排版**：提前规划可减少不必要的切割

## 实际购买建议

- 规则空间直铺：实际面积 × 1.08
- 复杂空间或斜铺：实际面积 × 1.15
- 预留备用：额外购买 2-3 片，用于后期维修

## 注意事项

- 不同批次瓷砖可能有色差，一次性购足
- 保留包装和小票，多余的可以退货
- 楼梯、阳台等特殊部位需单独计算

## 使用工具

使用我们的[瓷砖计算器](/calculators/tile)可以快速计算所需数量。
    `,
    relatedCalculators: ['tile'],
    relatedFaqs: ['tile-size-choice', 'tile-quality'],
    publishedAt: '2024-01-15'
  },
  {
    id: 'paint-coverage-guide',
    title: '一桶油漆能刷多少平米墙面？',
    description: '了解油漆的理论涂刷面积和实际用量，合理规划采购。',
    category: '油漆',
    content: `
## 理论涂刷面积

标准5L装乳胶漆：
- 理论涂刷面积：35-40㎡（单遍）
- 实际涂刷面积：30-35㎡（单遍）
- 完整涂刷（2遍）：15-18㎡

## 为什么实际用量更多？

1. **墙面吸收率**：粗糙墙面吸漆更多
2. **施工损耗**：滚筒、刷子会吸附油漆
3. **涂刷遍数**：通常需要2-3遍
4. **调色损耗**：深色需要更多遍数

## 不同墙面的用量差异

### 新墙面（已刮腻子）
- 底漆1遍 + 面漆2遍
- 5L油漆约刷 12-15㎡

### 旧墙翻新
- 可能需要3遍面漆
- 5L油漆约刷 10-12㎡

### 粗糙墙面
- 吸漆量大，需增加20-30%用量

## 计算公式

**所需油漆量 = 墙面面积 × 涂刷遍数 ÷ 单遍涂刷率 × 1.1（损耗系数）**

## 购买建议

- 同一空间使用同批次油漆，避免色差
- 宁可多买，剩余可以留作后期补漆
- 大品牌油漆涂刷率更稳定

## 使用工具

使用[油漆计算器](/calculators/paint)输入墙面尺寸，自动计算所需油漆量。
    `,
    relatedCalculators: ['paint'],
    relatedFaqs: ['paint-quality', 'paint-color'],
    publishedAt: '2024-01-20'
  },
  {
    id: 'floor-waste-rate',
    title: '地板损耗率多少合理？不同铺法差别大吗？',
    description: '不同地板铺装方式的损耗率对比，帮你准确计算购买量。',
    category: '地板',
    content: `
## 标准损耗率

### 平直铺装
- 损耗率：3-5%
- 特点：最省料的铺法
- 适用：规则房间

### 工字铺
- 损耗率：5-8%
- 特点：美观且损耗适中
- 适用：大多数家庭

### 人字铺/鱼骨拼
- 损耗率：8-12%
- 特点：高档美观但费料
- 适用：追求效果的空间

## 影响损耗的因素

1. **房间形状**：异形房间损耗增加2-3%
2. **地板长度**：短板比长板损耗小
3. **门口过渡**：多个门口增加损耗
4. **师傅经验**：熟练工人能降低损耗

## 实际购买建议

**购买量 = 实际面积 × (1 + 损耗率) + 备用量**

- 平直铺：实际面积 × 1.05 + 1㎡
- 工字铺：实际面积 × 1.08 + 1㎡
- 人字铺：实际面积 × 1.12 + 2㎡

## 降低损耗的技巧

1. 提前测量，规划铺装方向
2. 选择合适的地板长度
3. 边角料可用于衣柜内等隐蔽处
4. 与师傅沟通，优化切割方案

## 注意事项

- 不同批次地板可能有色差
- 预留备用板用于后期维修
- 保留购买凭证，多余可退货

## 使用工具

[地板计算器](/calculators/flooring)可以根据房间尺寸和铺装方式计算精确用量。
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

import Link from 'next/link';
import type { Metadata } from 'next';
import PaintForm from '@/components/PaintForm';
import { getCalculatorJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: '油漆计算器 - 在线计算墙面油漆用量',
  description: '免费在线油漆用量计算器，输入房间尺寸自动计算所需油漆量。支持不同涂刷遍数和涂刷率设置，帮您精确采购，避免浪费。',
  keywords: ['油漆计算器', '墙面油漆用量', '乳胶漆计算', '刷漆面积计算', '装修油漆'],
  alternates: { canonical: '/calculators/paint' },
};

export default function PaintCalculator() {
  return (
    <div className="bg-gray-50 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCalculatorJsonLd('paint')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbJsonLd([
          { name: '首页', url: '/' },
          { name: '油漆计算器', url: '/calculators/paint' },
        ])) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🎨 油漆计算器</h1>
          <p className="text-gray-600">计算墙面油漆用量，包含涂刷遍数和损耗</p>
        </div>

        <PaintForm />

        {/* 解释区 */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">计算逻辑说明</h2>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">计算公式</h3>
            <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
              墙面面积 = 2 × (长 + 宽) × 高<br/>
              总涂刷面积 = 墙面面积 × 涂刷遍数<br/>
              所需油漆 = 总涂刷面积 ÷ 单遍涂刷率
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">适用场景</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>规则矩形房间的墙面涂刷</li>
              <li>乳胶漆、水性漆等常见墙面漆</li>
              <li>标准施工条件下的用量估算</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">常见误区</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>忽略涂刷遍数：底漆 + 面漆通常需要 2-3 遍</li>
              <li>不考虑墙面状况：粗糙墙面吸漆更多</li>
              <li>忘记预留损耗：施工过程会有 5-10% 损耗</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">实地测量技巧</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>使用激光测距仪更准确</li>
              <li>多测几次取平均值</li>
              <li>记录门窗尺寸，可适当扣除</li>
              <li>异形墙面分段测量后相加</li>
            </ul>
          </div>
        </div>

        {/* 相关推荐 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">相关内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/articles/paint-coverage-guide" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">一桶油漆能刷多少平米墙面？</h3>
              <p className="text-gray-600 text-sm">了解油漆的理论涂刷面积和实际用量</p>
            </Link>
            <Link href="/calculators/tile" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔲 瓷砖计算器</h3>
              <p className="text-gray-600 text-sm">计算瓷砖数量和铺贴损耗</p>
            </Link>
          </div>
        </div>

        {/* 免责声明 */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-gray-700">
            <strong>免责声明：</strong>本计算器提供的结果仅供参考。实际用量受墙面状况、施工工艺、产品品牌等因素影响。建议购买时预留 10-15% 余量，并咨询专业人士。
          </p>
        </div>
      </div>
    </div>
  );
}

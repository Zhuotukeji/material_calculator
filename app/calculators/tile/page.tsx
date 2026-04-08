import Link from 'next/link';
import type { Metadata } from 'next';
import TileForm from '@/components/TileForm';
import { getCalculatorJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: '瓷砖计算器 - 在线计算瓷砖用量和数量',
  description: '免费在线瓷砖用量计算器，支持不同瓷砖规格和铺贴方式（直铺、斜铺、工字铺），自动计算损耗率和所需数量。',
  keywords: ['瓷砖计算器', '瓷砖用量', '瓷砖数量计算', '铺贴损耗', '装修瓷砖'],
  alternates: { canonical: '/calculators/tile' },
};

export default function TileCalculator() {
  return (
    <div className="bg-gray-50 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCalculatorJsonLd('tile')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbJsonLd([
          { name: '首页', url: '/' },
          { name: '瓷砖计算器', url: '/calculators/tile' },
        ])) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🔲 瓷砖计算器</h1>
          <p className="text-gray-600">计算瓷砖数量，支持不同规格和铺贴方式</p>
        </div>

        <TileForm />

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">瓷砖铺贴知识</h2>
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mt-6 mb-3">不同铺贴方式的特点</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>直铺：</strong>最常见，损耗最小（5-8%），适合大多数空间</li>
              <li><strong>斜铺：</strong>45度角铺贴，美观但损耗大（10-15%），适合客厅</li>
              <li><strong>工字铺：</strong>错缝铺贴，损耗适中（8-12%），适合长条砖</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-3">如何降低损耗</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>提前测量，选择合适的瓷砖规格</li>
              <li>与师傅沟通，优化排版方案</li>
              <li>边角料可用于阳台等小空间</li>
              <li>预留备用砖用于后期维修</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">相关内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/articles/tile-waste-calculation" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">瓷砖损耗一般预留多少合理？</h3>
              <p className="text-gray-600 text-sm">了解不同铺贴方式下的损耗率</p>
            </Link>
            <Link href="/calculators/flooring" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">📐 地板计算器</h3>
              <p className="text-gray-600 text-sm">计算地板用量和损耗</p>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-gray-700">
            <strong>免责声明：</strong>计算结果仅供参考，实际用量受房间形状、师傅经验等影响。建议现场测量后再购买。
          </p>
        </div>
      </div>
    </div>
  );
}

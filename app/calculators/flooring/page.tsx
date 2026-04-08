import Link from 'next/link';
import type { Metadata } from 'next';
import FlooringForm from '@/components/FlooringForm';
import { getCalculatorJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: '地板计算器 - 在线计算地板铺装用量',
  description: '免费在线地板用量计算器，支持平直铺、工字铺、人字铺等铺装方式，自动计算损耗率和建议购买量。',
  keywords: ['地板计算器', '地板用量', '地板损耗', '铺装面积计算', '装修地板'],
  alternates: { canonical: '/calculators/flooring' },
};

export default function FlooringCalculator() {
  return (
    <div className="bg-gray-50 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCalculatorJsonLd('flooring')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbJsonLd([
          { name: '首页', url: '/' },
          { name: '地板计算器', url: '/calculators/flooring' },
        ])) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-2">📐 地板计算器</h1>
        <p className="text-gray-600 mb-8">计算地板用量，包含不同铺装方式的损耗</p>

        <FlooringForm />

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">地板铺装知识</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>平直铺最省料，适合规则房间</li>
            <li>工字铺美观且损耗适中</li>
            <li>人字铺高档但费料</li>
            <li>预留备用板用于后期维修</li>
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/articles/floor-waste-rate" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">地板损耗率多少合理？</h3>
            <p className="text-gray-600 text-sm">不同铺法的损耗率对比</p>
          </Link>
          <Link href="/calculators/paint" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">🎨 油漆计算器</h3>
            <p className="text-gray-600 text-sm">计算墙面油漆用量</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

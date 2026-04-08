import Link from 'next/link';
import type { Metadata } from 'next';
import FlooringForm from '@/components/FlooringForm';
import { getCalculatorJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Flooring Calculator - Calculate Flooring Quantity Online',
  description: 'Free online flooring calculator. Supports straight lay, brick pattern, and herringbone with automatic waste rate calculation.',
  keywords: ['flooring calculator', 'flooring quantity', 'flooring waste', 'installation area', 'renovation flooring'],
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
          { name: 'Home', url: '/' },
          { name: 'Flooring Calculator', url: '/calculators/flooring' },
        ])) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-2">📐 Flooring Calculator</h1>
        <p className="text-gray-600 mb-8">Calculate flooring quantity with waste rates for different methods</p>

        <FlooringForm />

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Flooring Installation Guide</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Straight lay is most material-efficient, ideal for regular rooms</li>
            <li>Brick pattern looks great with moderate waste</li>
            <li>Herringbone is premium but uses more material</li>
            <li>Keep spare planks for future repairs</li>
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/articles/floor-waste-rate" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">What Is a Reasonable Flooring Waste Rate?</h3>
            <p className="text-gray-600 text-sm">Compare waste rates for different methods</p>
          </Link>
          <Link href="/calculators/paint" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">🎨 Paint Calculator</h3>
            <p className="text-gray-600 text-sm">Calculate wall paint quantity</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

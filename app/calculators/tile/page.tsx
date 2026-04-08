import Link from 'next/link';
import type { Metadata } from 'next';
import TileForm from '@/components/TileForm';
import { getCalculatorJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Tile Calculator - Calculate Tile Quantity Online',
  description: 'Free online tile calculator. Supports different tile sizes and laying patterns (straight, diagonal, herringbone) with automatic waste rate calculation.',
  keywords: ['tile calculator', 'tile quantity', 'tile waste rate', 'laying pattern', 'renovation tiles'],
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
          { name: 'Home', url: '/' },
          { name: 'Tile Calculator', url: '/calculators/tile' },
        ])) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🔲 Tile Calculator</h1>
          <p className="text-gray-600">Calculate tile quantity for different sizes and laying patterns</p>
        </div>

        <TileForm />

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Tile Laying Guide</h2>
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mt-6 mb-3">Laying Pattern Comparison</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Straight Lay:</strong> Most common, lowest waste (5-8%), suitable for most spaces</li>
              <li><strong>Diagonal Lay:</strong> 45-degree angle, attractive but more waste (10-15%), ideal for living rooms</li>
              <li><strong>Brick Lay:</strong> Offset pattern, moderate waste (8-12%), great for rectangular tiles</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-3">How to Reduce Waste</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Measure in advance, choose appropriate tile sizes</li>
              <li>Discuss layout planning with your installer</li>
              <li>Use offcuts for balconies and small areas</li>
              <li>Keep spare tiles for future repairs</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/articles/tile-waste-calculation" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">How Much Tile Waste Should You Allow?</h3>
              <p className="text-gray-600 text-sm">Learn waste rates for different laying patterns</p>
            </Link>
            <Link href="/calculators/flooring" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">📐 Flooring Calculator</h3>
              <p className="text-gray-600 text-sm">Calculate flooring quantity and waste</p>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-gray-700">
            <strong>Disclaimer:</strong> Results are estimates only. Actual quantities depend on room shape and installer experience. We recommend measuring on-site before purchasing.
          </p>
        </div>
      </div>
    </div>
  );
}

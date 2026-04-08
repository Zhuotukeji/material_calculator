import Link from 'next/link';
import type { Metadata } from 'next';
import PaintForm from '@/components/PaintForm';
import { getCalculatorJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Paint Calculator - Calculate Wall Paint Quantity Online',
  description: 'Free online paint calculator. Enter room dimensions to calculate paint needed. Supports different coat numbers and coverage rates for accurate purchasing.',
  keywords: ['paint calculator', 'wall paint quantity', 'latex paint calculator', 'paint coverage', 'renovation paint'],
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
          { name: 'Home', url: '/' },
          { name: 'Paint Calculator', url: '/calculators/paint' },
        ])) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🎨 Paint Calculator</h1>
          <p className="text-gray-600">Calculate wall paint quantity including coats and waste</p>
        </div>

        <PaintForm />

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Formula</h3>
            <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
              Wall Area = 2 x (Length + Width) x Height<br/>
              Total Paint Area = Wall Area x Number of Coats<br/>
              Paint Needed = Total Paint Area / Coverage Rate per Coat
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Best For</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Regular rectangular rooms</li>
              <li>Latex paint and water-based paints</li>
              <li>Standard application conditions</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Common Mistakes</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Forgetting coat count: primer + topcoat usually requires 2-3 coats</li>
              <li>Ignoring wall condition: rough walls absorb more paint</li>
              <li>Not accounting for waste: application process adds 5-10% waste</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Measuring Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Use a laser distance measurer for accuracy</li>
              <li>Measure multiple times and take the average</li>
              <li>Record door and window sizes to deduct later</li>
              <li>Measure irregular walls in sections and add up</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/articles/paint-coverage-guide" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How Much Area Can One Bucket Cover?</h3>
              <p className="text-gray-600 text-sm">Learn about theoretical and actual paint coverage</p>
            </Link>
            <Link href="/calculators/tile" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔲 Tile Calculator</h3>
              <p className="text-gray-600 text-sm">Calculate tile quantity and laying waste</p>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-gray-700">
            <strong>Disclaimer:</strong> Results are estimates only. Actual quantities depend on wall condition, application method, and product brand. We recommend purchasing 10-15% extra and consulting a professional.
          </p>
        </div>
      </div>
    </div>
  );
}

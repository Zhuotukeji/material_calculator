import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Material Calculator</h3>
            <p className="text-sm text-gray-600">Helping you accurately calculate renovation material quantities to avoid waste and shortage.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Calculators</h3>
            <ul className="space-y-2">
              <li><Link href="/calculators/paint" className="text-sm text-gray-600 hover:text-blue-600">Paint Calculator</Link></li>
              <li><Link href="/calculators/tile" className="text-sm text-gray-600 hover:text-blue-600">Tile Calculator</Link></li>
              <li><Link href="/calculators/flooring" className="text-sm text-gray-600 hover:text-blue-600">Flooring Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-gray-600 hover:text-blue-600">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">© {currentYear} Material Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

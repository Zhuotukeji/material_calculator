import Link from 'next/link';

export const metadata = {
  title: 'About Us - Material Calculator',
  description: 'Learn about Material Calculator\'s mission and services',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">About</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Helping every renovator calculate material quantities accurately</p>
        </div>

        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Material Calculator is dedicated to providing accurate and convenient material quantity calculation tools for homeowners. We understand the importance of material purchasing during renovation—buying too much wastes money, buying too little delays the project.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through our online calculators, you can quickly calculate precise quantities for paint, tiles, flooring and other common renovation materials, avoiding waste or shortage and making your renovation smoother.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Paint Calculator</h3>
                <p className="text-gray-600 text-sm">Calculate wall paint quantity based on room dimensions, including coats and waste</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tile Calculator</h3>
                <p className="text-gray-600 text-sm">Calculate tile quantity for different sizes and laying patterns with waste rates</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl mb-3">📐</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Flooring Calculator</h3>
                <p className="text-gray-600 text-sm">Calculate flooring quantity with waste rates for different installation methods</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <strong className="text-gray-900">Accurate Calculations:</strong>
                  <span className="text-gray-700"> Based on industry standards and practical experience for precise material estimates</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <strong className="text-gray-900">Easy to Use:</strong>
                  <span className="text-gray-700"> Clear interface, simple operation, get results in just a few steps</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <strong className="text-gray-900">Completely Free:</strong>
                  <span className="text-gray-700"> All calculation tools are completely free, no registration required</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <strong className="text-gray-900">Knowledge Sharing:</strong>
                  <span className="text-gray-700"> Provides renovation material guides and FAQ</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you encounter any issues or have suggestions and feedback, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> support@material-calculator.com
              </p>
              <p className="text-gray-700">
                We will reply to your email within 1-2 business days
              </p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 text-sm">
              Material Calculator © 2024 All rights reserved. Results provided by this website are for reference only. Actual quantities may vary due to construction conditions, material brands and other factors. We recommend consulting professionals before purchasing.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/calculators/paint"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Start Using Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}

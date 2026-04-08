import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer - Material Calculator',
  description: 'Terms of use and disclaimer for Material Calculator',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Disclaimer</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-gray-600">Last updated: January 1, 2024</p>
        </div>

        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h2>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-yellow-800">Please read carefully:</strong> By using the calculators and information provided on this website, you acknowledge that you have read, understood, and agreed to all terms of this disclaimer. If you do not agree to these terms, please do not use this website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Results</h2>
            <p className="text-gray-700 leading-relaxed mb-4">All calculator tools provided on this website (including but not limited to paint, tile, and flooring calculators) generate results for reference only.</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div>Results are based on standard industry formulas and empirical data, but actual quantities may vary due to:
                <ul className="mt-2 ml-6 space-y-1 text-sm">
                  <li>- Actual room shape and structure</li>
                  <li>- Material brand and specification differences</li>
                  <li>- Construction methods and worker skill levels</li>
                  <li>- Actual wall or floor conditions</li>
                  <li>- Environmental temperature and humidity</li>
                </ul>
              </div></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div>We recommend consulting a professional contractor or material supplier before making purchases.</div></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Information and suggestions on this website do not constitute professional renovation advice:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>We are not a professional renovation company or architectural firm</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Website content is for general information and educational purposes only</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>For specific renovation projects, please consult qualified professionals</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>We are not responsible for any decisions made based on this website's information</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">To the maximum extent permitted by law:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Material Loss:</strong> We are not liable for any excess or shortage of materials resulting from calculator results.</div></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Financial Loss:</strong> We are not responsible for any direct or indirect financial losses from using this website.</div></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Construction Issues:</strong> We are not responsible for any issues during the renovation process.</div></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Third-Party Links:</strong> This website may contain links to third-party sites; we are not responsible for their content or services.</div></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Accuracy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">While we strive to ensure accuracy and timeliness of website content:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>We do not guarantee content is completely accurate, complete, or current</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Content may contain technical or typographical errors</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>We reserve the right to modify or update content at any time without notice</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
            <p className="text-gray-700 leading-relaxed">We strive to maintain website availability but do not guarantee uninterrupted or error-free service. We may temporarily suspend service for maintenance, upgrades, or other reasons without notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">As a user, you should:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Enter accurate measurement data</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Understand that results are estimates only</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Verify before actual purchasing</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Consult professionals for specific advice</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Use this website at your own risk</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">All content on this website, including but not limited to text, graphics, code, and design, is protected by copyright law. Reproduction, modification, distribution, or commercial use without permission is prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If you have any questions about this disclaimer, please contact us:</p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700"><strong>Email:</strong> legal@material-calculator.com</p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600 italic">By using this website, you confirm that you have read, understood, and agreed to be bound by this disclaimer. If you do not agree to any part of this disclaimer, please stop using this website immediately.</p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

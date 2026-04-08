import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Material Calculator',
  description: 'Learn how we collect, use and protect your personal information',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Privacy Policy</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 1, 2024</p>
        </div>

        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">Material Calculator ("we") takes user privacy protection very seriously. This privacy policy explains how we collect, use, store and protect your personal information. By using our website, you agree to the terms of this privacy policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection</h2>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Usage Data:</strong> We may collect browser type, IP address, visit time, and page views when you visit our website.</div></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Calculator Data:</strong> Data you enter into our calculators (room dimensions, material specs, etc.) is processed locally and is not uploaded to our servers.</div></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Contact Information:</strong> When you contact us through our contact form, we collect the name, email and other information you provide.</div></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use collected information for the following purposes:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Provide and maintain our services</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Improve website functionality and user experience</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Respond to user inquiries and feedback</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Analyze website usage to optimize content</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Detect and prevent technical issues</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use cookies and similar technologies to improve your browsing experience:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Essential Cookies:</strong> Required for the website to function properly and cannot be disabled.</div></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Analytics Cookies:</strong> Help us understand how visitors use the website to improve our services.</div></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">You can manage cookie preferences through your browser settings, but disabling certain cookies may affect website functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may use the following third-party services:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Google Analytics:</strong> For analyzing website traffic and user behavior. Google Analytics has its own privacy policy.</div></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><div><strong>Google AdSense:</strong> For displaying relevant ads. Ad providers may use cookies to serve personalized ads.</div></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">We take reasonable technical and organizational measures to protect your personal information. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the following rights regarding your personal information:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Access and obtain a copy of your personal information</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Correct inaccurate personal information</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Request deletion of your personal information</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span><span>Object to or restrict certain data processing</span></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">To exercise these rights, please contact us through our contact page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">Our services are not directed at children under 13. We do not knowingly collect personal information from children under 13. If you discover that a child has provided us with personal information, please contact us and we will take steps to delete it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Changes</h2>
            <p className="text-gray-700 leading-relaxed">We may update this privacy policy from time to time. Updated policies will be posted on this page with a revised "Last Updated" date. We recommend checking this page periodically for changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If you have any questions about this privacy policy, please contact us:</p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700"><strong>Email:</strong> privacy@material-calculator.com</p>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

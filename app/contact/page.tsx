import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - Material Calculator',
  description: 'Contact the Material Calculator team for help and support',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Contact</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're always ready to help</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Brief description of your issue" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={6} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none" placeholder="Describe your question or suggestion in detail..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-2">support@material-calculator.com</p>
                  <p className="text-sm text-gray-500">We'll reply within 1-2 business days</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">FAQ</h3>
              <p className="text-gray-600 mb-4 text-sm">Before contacting us, check our FAQ page — you might find the answer you need.</p>
              <Link href="/faq" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                View FAQ
              </Link>
            </div>

            <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Feedback</h3>
              <p className="text-gray-600 text-sm">We value your feedback and suggestions. If you have any ideas for improving our calculators or would like to see new features, please let us know.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Technical Support</h3>
              <p className="text-gray-600 text-sm">If you encounter technical issues with our calculators, please describe the problem and your steps in detail.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Feature Requests</h3>
              <p className="text-gray-600 text-sm">We welcome new feature suggestions to help us improve and serve more users better.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Business Inquiries</h3>
              <p className="text-gray-600 text-sm">For business partnership opportunities, please reach out via email and we'll get back to you promptly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

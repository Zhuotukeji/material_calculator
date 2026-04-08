import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">装修材料计算器</h3>
            <p className="text-sm text-gray-600">
              帮助您准确计算装修材料用量，避免浪费和不足。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">计算工具</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calculators/paint" className="text-sm text-gray-600 hover:text-blue-600">
                  油漆计算器
                </Link>
              </li>
              <li>
                <Link href="/calculators/tile" className="text-sm text-gray-600 hover:text-blue-600">
                  瓷砖计算器
                </Link>
              </li>
              <li>
                <Link href="/calculators/flooring" className="text-sm text-gray-600 hover:text-blue-600">
                  地板计算器
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">
                  关于
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-gray-600 hover:text-blue-600">
                  免责声明
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} 装修材料计算器. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

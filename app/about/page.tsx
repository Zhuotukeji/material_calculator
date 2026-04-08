import Link from 'next/link';

export const metadata = {
  title: '关于我们 - 装修材料计算器',
  description: '了解装修材料计算器的使命和服务',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">关于我们</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            关于我们
          </h1>
          <p className="text-xl text-gray-600">
            帮助每一位装修者精确计算材料用量
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              装修材料计算器致力于为装修业主提供准确、便捷的材料用量计算工具。我们深知装修过程中材料采购的重要性——买多了浪费钱，买少了耽误工期。
            </p>
            <p className="text-gray-700 leading-relaxed">
              通过我们的在线计算器，您可以快速计算出油漆、瓷砖、地板等常用装修材料的精确用量，避免材料浪费或不足，让装修更加顺利。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">我们提供的服务</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">油漆计算器</h3>
                <p className="text-gray-600 text-sm">
                  根据房间尺寸计算墙面油漆用量，包含涂刷遍数和损耗
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">瓷砖计算器</h3>
                <p className="text-gray-600 text-sm">
                  计算瓷砖数量，支持不同规格和铺贴方式的损耗率
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl mb-3">📐</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">地板计算器</h3>
                <p className="text-gray-600 text-sm">
                  计算地板用量，包含不同铺装方式的损耗率
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">为什么选择我们</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <strong className="text-gray-900">精确计算：</strong>
                  <span className="text-gray-700">基于行业标准和实际经验，提供准确的材料用量计算</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <strong className="text-gray-900">简单易用：</strong>
                  <span className="text-gray-700">界面清晰，操作简单，几步即可得到结果</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <strong className="text-gray-900">完全免费：</strong>
                  <span className="text-gray-700">所有计算工具完全免费使用，无需注册</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <strong className="text-gray-900">知识分享：</strong>
                  <span className="text-gray-700">提供装修材料相关的知识文章和常见问题解答</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              如果您在使用过程中遇到任何问题，或者有任何建议和反馈，欢迎通过以下方式联系我们：
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>邮箱：</strong> support@material-calculator.com
              </p>
              <p className="text-gray-700">
                我们会在1-2个工作日内回复您的邮件
              </p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 text-sm">
              装修材料计算器 © 2024 版权所有。本网站提供的计算结果仅供参考，实际用量可能因施工条件、材料品牌等因素有所差异。建议在实际采购时咨询专业人士。
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/calculators/paint"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            开始使用计算器
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export const metadata = {
  title: '隐私政策 - 装修材料计算器',
  description: '了解我们如何收集、使用和保护您的个人信息',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">隐私政策</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            隐私政策
          </h1>
          <p className="text-gray-600">
            最后更新日期：2024年1月1日
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">引言</h2>
            <p className="text-gray-700 leading-relaxed">
              装修材料计算器（以下简称"我们"）非常重视用户的隐私保护。本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。使用我们的网站即表示您同意本隐私政策的条款。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">信息收集</h2>
            <h3 className="text-xl font-bold text-gray-900 mb-3">我们收集的信息</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>使用数据：</strong>我们可能收集您访问网站时的浏览器类型、IP地址、访问时间、页面浏览记录等信息。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>计算数据：</strong>您在使用计算器时输入的数据（如房间尺寸、材料规格等）仅在本地处理，不会被上传到我们的服务器。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>联系信息：</strong>当您通过联系表单与我们沟通时，我们会收集您提供的姓名、邮箱等信息。
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">信息使用</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们收集的信息用于以下目的：
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>提供和维护我们的服务</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>改进网站功能和用户体验</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>回复用户的咨询和反馈</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>分析网站使用情况，优化内容</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>检测和防止技术问题</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie使用</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们使用Cookie和类似技术来改善您的浏览体验：
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>必要Cookie：</strong>这些Cookie对网站正常运行是必需的，无法在我们的系统中关闭。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>分析Cookie：</strong>帮助我们了解访问者如何使用网站，以便改进服务。
                </div>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              您可以通过浏览器设置管理Cookie偏好，但禁用某些Cookie可能影响网站功能。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第三方服务</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们可能使用以下第三方服务：
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Google Analytics：</strong>用于分析网站流量和用户行为。Google Analytics有自己的隐私政策。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Google AdSense：</strong>用于展示相关广告。广告服务商可能使用Cookie来提供个性化广告。
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">数据安全</h2>
            <p className="text-gray-700 leading-relaxed">
              我们采取合理的技术和组织措施来保护您的个人信息安全。但请注意，互联网传输方法和电子存储方法都不是100%安全的，我们无法保证绝对安全。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">您的权利</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              您对自己的个人信息拥有以下权利：
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>访问和获取您的个人信息副本</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>更正不准确的个人信息</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>要求删除您的个人信息</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>反对或限制某些数据处理</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              如需行使这些权利，请通过联系页面与我们联系。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">儿童隐私</h2>
            <p className="text-gray-700 leading-relaxed">
              我们的服务不针对13岁以下的儿童。我们不会有意收集13岁以下儿童的个人信息。如果您发现儿童向我们提供了个人信息，请联系我们，我们将采取措施删除这些信息。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">隐私政策变更</h2>
            <p className="text-gray-700 leading-relaxed">
              我们可能会不时更新本隐私政策。更新后的政策将在本页面发布，并更新"最后更新日期"。我们建议您定期查看本页面以了解任何变更。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              如果您对本隐私政策有任何问题或疑虑，请通过以下方式联系我们：
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>邮箱：</strong> privacy@material-calculator.com
              </p>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 hover:underline font-semibold"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}

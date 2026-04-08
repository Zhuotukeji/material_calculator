import Link from 'next/link';

export const metadata = {
  title: '联系我们 - 装修材料计算器',
  description: '联系装修材料计算器团队，获取帮助和支持',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">联系我们</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            联系我们
          </h1>
          <p className="text-xl text-gray-600">
            我们随时准备为您提供帮助
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="请简要描述您的问题"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  消息内容
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="请详细描述您的问题或建议..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                发送消息
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">邮箱</h3>
                  <p className="text-gray-600 mb-2">
                    support@material-calculator.com
                  </p>
                  <p className="text-sm text-gray-500">
                    我们会在1-2个工作日内回复
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">工作时间</h3>
                  <p className="text-gray-600 mb-1">
                    周一至周五：9:00 - 18:00
                  </p>
                  <p className="text-gray-600">
                    周六至周日：休息
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">常见问题</h3>
              <p className="text-gray-600 mb-4 text-sm">
                在联系我们之前，您可以先查看常见问题页面，也许能找到您需要的答案。
              </p>
              <Link
                href="/faq"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
              >
                查看常见问题
              </Link>
            </div>

            <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">反馈建议</h3>
              <p className="text-gray-600 text-sm">
                我们非常重视用户的反馈和建议。如果您对我们的计算器有任何改进意见，或者希望我们添加新的功能，请随时告诉我们。
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-white rounded-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">关于我们的服务</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">技术支持</h3>
              <p className="text-gray-600 text-sm">
                如果您在使用计算器时遇到技术问题，请详细描述问题和您的操作步骤。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">功能建议</h3>
              <p className="text-gray-600 text-sm">
                我们欢迎您提出新功能建议，帮助我们改进产品，为更多用户提供更好的服务。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">合作咨询</h3>
              <p className="text-gray-600 text-sm">
                如果您有商务合作意向，请通过邮件联系我们，我们会尽快与您沟通。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

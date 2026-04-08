import Link from 'next/link';

export const metadata = {
  title: '免责声明 - 装修材料计算器',
  description: '装修材料计算器的使用条款和免责声明',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">免责声明</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            免责声明
          </h1>
          <p className="text-gray-600">
            最后更新日期：2024年1月1日
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">重要提示</h2>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-yellow-800">请仔细阅读：</strong>
                使用本网站提供的计算器和信息即表示您已阅读、理解并同意本免责声明的所有条款。如果您不同意这些条款，请不要使用本网站。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">计算结果的准确性</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本网站提供的所有计算器工具（包括但不限于油漆计算器、瓷砖计算器、地板计算器）所生成的结果仅供参考。
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  计算结果基于标准的行业公式和经验数据，但实际用量可能因以下因素而有所不同：
                  <ul className="mt-2 ml-6 space-y-1 text-sm">
                    <li>- 房间的实际形状和结构</li>
                    <li>- 材料的品牌和规格差异</li>
                    <li>- 施工方法和工人技术水平</li>
                    <li>- 墙面或地面的实际状况</li>
                    <li>- 环境温度和湿度</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  我们建议您在实际采购时，咨询专业的装修公司或材料供应商，并根据实际情况调整购买量。
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">专业建议</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本网站提供的信息和建议不构成专业的装修咨询或建议：
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>我们不是专业的装修公司或建筑设计机构</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>网站内容仅供一般信息和教育目的</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>对于具体的装修项目，请咨询有资质的专业人士</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>我们不对因使用本网站信息而做出的任何决策负责</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">责任限制</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              在法律允许的最大范围内：
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>材料损失：</strong>我们不对因使用计算器结果而导致的材料过多或不足承担任何责任。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>经济损失：</strong>我们不对因使用本网站而产生的任何直接或间接经济损失负责。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>施工问题：</strong>我们不对装修施工过程中出现的任何问题承担责任。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>第三方链接：</strong>本网站可能包含指向第三方网站的链接，我们不对这些网站的内容或服务负责。
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">内容准确性</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              虽然我们努力确保网站内容的准确性和时效性，但：
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>我们不保证网站内容完全准确、完整或最新</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>网站内容可能包含技术错误或排版错误</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>我们保留随时修改或更新内容的权利，恕不另行通知</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">服务可用性</h2>
            <p className="text-gray-700 leading-relaxed">
              我们努力保持网站的正常运行，但不保证网站服务不会中断或完全没有错误。我们可能因维护、升级或其他原因暂时中断服务，恕不另行通知。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">用户责任</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              作为用户，您应当：
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>准确输入测量数据</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>理解计算结果仅供参考</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>在实际采购前进行核实</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>咨询专业人士获取具体建议</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>自行承担使用本网站的风险</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">知识产权</h2>
            <p className="text-gray-700 leading-relaxed">
              本网站的所有内容，包括但不限于文本、图形、代码、设计，均受版权法保护。未经许可，不得复制、修改、分发或用于商业目的。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">法律适用</h2>
            <p className="text-gray-700 leading-relaxed">
              本免责声明受中华人民共和国法律管辖。因使用本网站而产生的任何争议，应首先通过友好协商解决；协商不成的，应提交至网站运营方所在地有管辖权的人民法院解决。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              如果您对本免责声明有任何疑问，请联系我们：
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>邮箱：</strong> legal@material-calculator.com
              </p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600 italic">
              通过使用本网站，您确认已阅读、理解并同意受本免责声明的约束。如果您不同意本免责声明的任何部分，请立即停止使用本网站。
            </p>
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

'use client';

import { useState } from 'react';

export default function FlooringForm() {
  const [area, setArea] = useState('');
  const [method, setMethod] = useState('straight');
  const [result, setResult] = useState<{ wasteRate: number; totalArea: number; purchase: number } | null>(null);

  function calculate() {
    const a = parseFloat(area);
    if (!a) return;
    const rates: Record<string, number> = { straight: 0.05, herringbone: 0.08, fishbone: 0.12 };
    const wasteRate = rates[method];
    const totalArea = a * (1 + wasteRate);
    const purchase = totalArea + 1;
    setResult({ wasteRate, totalArea, purchase });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">输入参数</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">铺装面积 (㎡)</label>
            <input type="number" value={area} onChange={(e) => setArea(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" placeholder="例如: 30" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">铺装方式</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500">
              <option value="straight">平直铺（损耗 5%）</option>
              <option value="herringbone">工字铺（损耗 8%）</option>
              <option value="fishbone">人字铺（损耗 12%）</option>
            </select>
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md">
            计算用量
          </button>
        </div>
      </div>
      {result && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">计算结果</h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b"><span>损耗率</span><span className="font-semibold">{(result.wasteRate * 100).toFixed(0)}%</span></div>
            <div className="flex justify-between py-2 border-b"><span>含损耗面积</span><span className="font-semibold">{result.totalArea.toFixed(1)} ㎡</span></div>
            <div className="flex justify-between py-2 bg-blue-50 px-4 rounded-md"><span className="font-medium">建议购买</span><span className="text-2xl font-bold text-blue-600">{result.purchase.toFixed(1)} ㎡</span></div>
            <p className="text-sm text-gray-500">* 已包含 1㎡ 备用量</p>
          </div>
        </div>
      )}
    </div>
  );
}

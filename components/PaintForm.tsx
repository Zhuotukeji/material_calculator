'use client';

import { useState } from 'react';

export default function PaintForm() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [coats, setCoats] = useState('2');
  const [coverage, setCoverage] = useState('35');
  const [result, setResult] = useState<{
    wallArea: number;
    totalArea: number;
    litersNeeded: number;
    bucketsNeeded: number;
  } | null>(null);

  function calculate() {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const c = parseInt(coats);
    const cov = parseFloat(coverage);

    if (!l || !w || !h || !c || !cov) return;

    const wallArea = 2 * (l + w) * h;
    const totalArea = wallArea * c;
    const litersNeeded = totalArea / cov;
    const bucketsNeeded = Math.ceil(litersNeeded / 5);

    setResult({ wallArea, totalArea, litersNeeded, bucketsNeeded });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">输入房间尺寸</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">房间长度 (米)</label>
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="例如: 5" step="0.1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">房间宽度 (米)</label>
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="例如: 4" step="0.1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">墙面高度 (米)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="例如: 2.8" step="0.1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">涂刷遍数</label>
            <select value={coats} onChange={(e) => setCoats(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="1">1 遍（底漆）</option>
              <option value="2">2 遍（标准）</option>
              <option value="3">3 遍（深色/旧墙）</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">单遍涂刷率 (㎡/5L)</label>
            <input type="number" value={coverage} onChange={(e) => setCoverage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="35" step="1" />
            <p className="text-xs text-gray-500 mt-1">标准值：35㎡/5L</p>
          </div>
          <button onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
            计算用量
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {result && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">计算结果</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">墙面面积</span>
                <span className="text-lg font-semibold text-gray-900">{result.wallArea.toFixed(1)} ㎡</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">总涂刷面积</span>
                <span className="text-lg font-semibold text-gray-900">{result.totalArea.toFixed(1)} ㎡</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">所需油漆</span>
                <span className="text-lg font-semibold text-gray-900">{result.litersNeeded.toFixed(1)} L</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-blue-50 px-4 rounded-md">
                <span className="text-gray-900 font-medium">建议购买</span>
                <span className="text-2xl font-bold text-blue-600">{result.bucketsNeeded} 桶</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">* 按 5L/桶 计算，已包含损耗</p>
            </div>
          </div>
        )}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 使用说明</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 本计算器计算四面墙的总面积</li>
            <li>• 未扣除门窗面积，实际用量会略少</li>
            <li>• 粗糙墙面建议增加 10-20% 用量</li>
            <li>• 深色漆可能需要 3 遍以上</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

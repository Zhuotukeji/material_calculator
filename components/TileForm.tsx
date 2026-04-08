'use client';

import { useState } from 'react';

export default function TileForm() {
  const [area, setArea] = useState('');
  const [tileLength, setTileLength] = useState('800');
  const [tileWidth, setTileWidth] = useState('800');
  const [layingMethod, setLayingMethod] = useState('straight');
  const [result, setResult] = useState<{
    tileArea: number;
    wasteRate: number;
    totalArea: number;
    tilesNeeded: number;
  } | null>(null);

  function calculate() {
    const a = parseFloat(area);
    const tl = parseFloat(tileLength) / 1000;
    const tw = parseFloat(tileWidth) / 1000;

    if (!a || !tl || !tw) return;

    const wasteRates: Record<string, number> = {
      straight: 0.08,
      diagonal: 0.15,
      herringbone: 0.12
    };

    const tileArea = tl * tw;
    const wasteRate = wasteRates[layingMethod];
    const totalArea = a * (1 + wasteRate);
    const tilesNeeded = Math.ceil(totalArea / tileArea);

    setResult({ tileArea, wasteRate, totalArea, tilesNeeded });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">输入参数</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">铺贴面积 (㎡)</label>
            <input type="number" value={area} onChange={(e) => setArea(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="例如: 20" step="0.1" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">瓷砖长度 (mm)</label>
              <input type="number" value={tileLength} onChange={(e) => setTileLength(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">瓷砖宽度 (mm)</label>
              <input type="number" value={tileWidth} onChange={(e) => setTileWidth(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">铺贴方式</label>
            <select value={layingMethod} onChange={(e) => setLayingMethod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
              <option value="straight">直铺（损耗 8%）</option>
              <option value="diagonal">斜铺（损耗 15%）</option>
              <option value="herringbone">工字铺（损耗 12%）</option>
            </select>
          </div>
          <button onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">
            计算数量
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {result && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">计算结果</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">单片面积</span>
                <span className="font-semibold">{result.tileArea.toFixed(4)} ㎡</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">损耗率</span>
                <span className="font-semibold">{(result.wasteRate * 100).toFixed(0)}%</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">含损耗面积</span>
                <span className="font-semibold">{result.totalArea.toFixed(1)} ㎡</span>
              </div>
              <div className="flex justify-between py-2 bg-blue-50 px-4 rounded-md">
                <span className="font-medium">建议购买</span>
                <span className="text-2xl font-bold text-blue-600">{result.tilesNeeded} 片</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">* 建议额外购买 2-3 片备用</p>
            </div>
          </div>
        )}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">💡 使用说明</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 直铺最省料，适合规则空间</li>
            <li>• 斜铺美观但损耗大</li>
            <li>• 异形空间建议增加 5% 损耗</li>
            <li>• 同批次购买避免色差</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

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
        <h2 className="text-xl font-semibold mb-4">Enter Parameters</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Installation Area (sqm)</label>
            <input type="number" value={area} onChange={(e) => setArea(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" placeholder="e.g. 30" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Installation Method</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500">
              <option value="straight">Straight Lay (5% waste)</option>
              <option value="herringbone">Brick Pattern (8% waste)</option>
              <option value="fishbone">Herringbone (12% waste)</option>
            </select>
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md">Calculate</button>
        </div>
      </div>
      {result && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b"><span>Waste Rate</span><span className="font-semibold">{(result.wasteRate * 100).toFixed(0)}%</span></div>
            <div className="flex justify-between py-2 border-b"><span>Area with Waste</span><span className="font-semibold">{result.totalArea.toFixed(1)} sqm</span></div>
            <div className="flex justify-between py-2 bg-blue-50 px-4 rounded-md"><span className="font-medium">Recommended Purchase</span><span className="text-2xl font-bold text-blue-600">{result.purchase.toFixed(1)} sqm</span></div>
            <p className="text-sm text-gray-500">* Includes 1 sqm spare</p>
          </div>
        </div>
      )}
    </div>
  );
}

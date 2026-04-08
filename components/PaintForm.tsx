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
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Room Dimensions</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Room Length (m)</label>
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g. 5" step="0.1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Room Width (m)</label>
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g. 4" step="0.1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Wall Height (m)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g. 2.8" step="0.1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Coats</label>
            <select value={coats} onChange={(e) => setCoats(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="1">1 coat (primer)</option>
              <option value="2">2 coats (standard)</option>
              <option value="3">3 coats (dark/old walls)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Coverage Rate (sqm per 5L)</label>
            <input type="number" value={coverage} onChange={(e) => setCoverage(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="35" step="1" />
            <p className="text-xs text-gray-500 mt-1">Standard: 35 sqm per 5L</p>
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
            Calculate
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {result && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Results</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Wall Area</span>
                <span className="text-lg font-semibold text-gray-900">{result.wallArea.toFixed(1)} sqm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Total Paint Area</span>
                <span className="text-lg font-semibold text-gray-900">{result.totalArea.toFixed(1)} sqm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Paint Needed</span>
                <span className="text-lg font-semibold text-gray-900">{result.litersNeeded.toFixed(1)} L</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-blue-50 px-4 rounded-md">
                <span className="text-gray-900 font-medium">Recommended Purchase</span>
                <span className="text-2xl font-bold text-blue-600">{result.bucketsNeeded} buckets</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">* Based on 5L per bucket, waste included</p>
            </div>
          </div>
        )}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Calculates total area of four walls</li>
            <li>• Does not deduct doors/windows — actual usage may be slightly less</li>
            <li>• Add 10-20% for rough walls</li>
            <li>• Dark colors may need 3+ coats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

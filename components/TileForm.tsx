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
    const wasteRates: Record<string, number> = { straight: 0.08, diagonal: 0.15, herringbone: 0.12 };
    const tileArea = tl * tw;
    const wasteRate = wasteRates[layingMethod];
    const totalArea = a * (1 + wasteRate);
    const tilesNeeded = Math.ceil(totalArea / tileArea);
    setResult({ tileArea, wasteRate, totalArea, tilesNeeded });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Parameters</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Area to Tile (sqm)</label>
            <input type="number" value={area} onChange={(e) => setArea(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="e.g. 20" step="0.1" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tile Length (mm)</label>
              <input type="number" value={tileLength} onChange={(e) => setTileLength(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tile Width (mm)</label>
              <input type="number" value={tileWidth} onChange={(e) => setTileWidth(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Laying Pattern</label>
            <select value={layingMethod} onChange={(e) => setLayingMethod(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
              <option value="straight">Straight Lay (8% waste)</option>
              <option value="diagonal">Diagonal Lay (15% waste)</option>
              <option value="herringbone">Brick Lay (12% waste)</option>
            </select>
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">Calculate</button>
        </div>
      </div>

      <div className="space-y-6">
        {result && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Results</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b"><span className="text-gray-600">Tile Area</span><span className="font-semibold">{result.tileArea.toFixed(4)} sqm</span></div>
              <div className="flex justify-between py-2 border-b"><span className="text-gray-600">Waste Rate</span><span className="font-semibold">{(result.wasteRate * 100).toFixed(0)}%</span></div>
              <div className="flex justify-between py-2 border-b"><span className="text-gray-600">Area with Waste</span><span className="font-semibold">{result.totalArea.toFixed(1)} sqm</span></div>
              <div className="flex justify-between py-2 bg-blue-50 px-4 rounded-md"><span className="font-medium">Recommended Purchase</span><span className="text-2xl font-bold text-blue-600">{result.tilesNeeded} tiles</span></div>
              <p className="text-sm text-gray-500 mt-2">* We recommend purchasing 2-3 extra tiles as spares</p>
            </div>
          </div>
        )}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">💡 Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Straight lay is most efficient for regular spaces</li>
            <li>• Diagonal lay looks great but wastes more</li>
            <li>• Add 5% for irregular spaces</li>
            <li>• Buy from the same batch to avoid color differences</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

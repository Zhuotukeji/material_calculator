'use client';

interface AfsAdUnitProps {
  className?: string;
}

export default function AfsAdUnit({ className = '' }: AfsAdUnitProps) {
  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center ${className}`}>
      <div className="text-gray-500 mb-2">
        <span className="text-xs font-semibold">广告位</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Google AdSense for Search (AFS) 广告将显示在此处
      </p>
      <div className="text-xs text-gray-500 space-y-1">
        <p>集成说明：</p>
        <p>1. 申请 Google AdSense for Search</p>
        <p>2. 获取搜索广告代码</p>
        <p>3. 替换此组件内容</p>
      </div>

      {/*
        TODO: 替换为实际的 AFS 代码

        示例集成代码：
        <script async src="https://cse.google.com/cse.js?cx=YOUR_SEARCH_ENGINE_ID"></script>
        <div className="gcse-searchresults-only"></div>

        或使用 AdSense 搜索广告单元代码
      */}
    </div>
  );
}

'use client';

interface AfsAdUnitProps {
  className?: string;
}

export default function AfsAdUnit({ className = '' }: AfsAdUnitProps) {
  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center ${className}`}>
      <div className="text-gray-500 mb-2">
        <span className="text-xs font-semibold">Ad Space</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Google AdSense for Search (AFS) ads will display here
      </p>
      <div className="text-xs text-gray-500 space-y-1">
        <p>Integration steps:</p>
        <p>1. Apply for Google AdSense for Search</p>
        <p>2. Obtain search ad code</p>
        <p>3. Replace this component content</p>
      </div>
    </div>
  );
}

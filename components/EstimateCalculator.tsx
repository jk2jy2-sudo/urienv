
import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

const EstimateCalculator: React.FC = () => {
  const [liters, setLiters] = useState<number>(20);
  const RATE_PER_LITER = 250; // Example rate

  const monthlyTotal = liters * 30 * RATE_PER_LITER;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 max-w-lg mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-forest-green/10 rounded-2xl">
          <CalcIcon className="w-6 h-6 text-forest-green" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">간편 견적 계산기</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-3">
            하루 배출량 (Liters)
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={liters}
              onChange={(e) => setLiters(parseInt(e.target.value))}
              className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-forest-green"
            />
            <span className="text-xl font-bold text-forest-green w-16 text-right">{liters}L</span>
          </div>
        </div>

        <div className="p-6 bg-warm-white rounded-2xl border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">예상 월 수거 비용</span>
            <span className="text-xs bg-forest-green text-white px-2 py-1 rounded-full">BEST VALUE</span>
          </div>
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl font-black text-gray-900">
              {monthlyTotal.toLocaleString()}
            </span>
            <span className="text-lg font-bold text-gray-600">원 / 월</span>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            * 위 금액은 단순 참고용이며, 정확한 견적은 현장 상담을 통해 확정됩니다.
          </p>
        </div>

        <button className="w-full py-4 bg-forest-green text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
          이 조건으로 상세 상담 신청하기
        </button>
      </div>
    </div>
  );
};

export default EstimateCalculator;

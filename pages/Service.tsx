
import React from 'react';
import { Truck, Store, Building2, Droplets, Trash2, ShieldCheck } from 'lucide-react';

const Service: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="relative py-24 bg-forest-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black mb-6">과정은 투명하게,<br />처리는 전문적으로</h1>
          <p className="text-xl text-green-100 max-w-2xl leading-relaxed">
            우리환경은 법적 규제를 준수하며, 최첨단 IT 시스템과 친환경 자원화 설비를 결합하여 사장님께 가장 편리한 수거 경험을 제공합니다.
          </p>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">대상별 맞춤 서비스</h2>
            <p className="text-gray-500">환경과 규모에 맞는 최적의 수거 솔루션을 제안합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-sky-blue/10 rounded-3xl flex items-center justify-center mb-8">
                <Store className="w-10 h-10 text-sky-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">식당 / 카페용</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• 소량 배출 및 잦은 수거 대응</li>
                <li>• 냄새 방지용 전용 밀폐 용기 무상 대여</li>
                <li>• 배출량이 적어도 월정액 합리적 산정</li>
                <li>• 매장 앞 청결 유지 관리 서비스</li>
              </ul>
              <button className="mt-auto px-8 py-3 bg-gray-900 text-white rounded-full font-bold">상담 010-6211-0154</button>
            </div>

            <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-forest-green/10 rounded-3xl flex items-center justify-center mb-8">
                <Building2 className="w-10 h-10 text-forest-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4">급식소 / 병원용</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• 대용량 전문 수거 시스템 가동</li>
                <li>• 엄격한 위생 관리 및 방역 서비스 병행</li>
                <li>• 실시간 배출량 데이터 리포트 제공</li>
                <li>• 전담 매니저 지정을 통한 밀착 관리</li>
              </ul>
              <button className="mt-auto px-8 py-3 bg-gray-900 text-white rounded-full font-bold">상담 010-5802-3262</button>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <Droplets className="w-10 h-10 text-sky-blue mb-4" />
                <h4 className="font-bold mb-2">고압 세척 서비스</h4>
                <p className="text-sm text-gray-500">수거 시마다 용기 내외부 고압 살균 세척</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm mt-8">
                <Trash2 className="w-10 h-10 text-red-500 mb-4" />
                <h4 className="font-bold mb-2">냄새 제로 보장</h4>
                <p className="text-sm text-gray-500">특수 실링 처리된 전용 용기 보급</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <Truck className="w-10 h-10 text-forest-green mb-4" />
                <h4 className="font-bold mb-2">긴급 수거 대응</h4>
                <p className="text-sm text-gray-500">갑작스러운 배출량 증가 시 2시간 내 출동</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm mt-8">
                <ShieldCheck className="w-10 h-10 text-yellow-600 mb-4" />
                <h4 className="font-bold mb-2">법적 책임 대행</h4>
                <p className="text-sm text-gray-500">폐기물 관련 모든 행정 서류 완벽 대행</p>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                쓰레기를 치우는 것,<br />
                그 이상의 <span className="text-forest-green">가치</span>를 드립니다.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                단순히 치우고 버리는 것이 아니라, 다시 자원이 될 수 있도록 선순환 구조를 만듭니다. 
                우리환경의 서비스는 업장 내부의 위생뿐만 아니라, 외부의 생태계까지 생각하는 친환경 솔루션입니다.
              </p>
              <img src="https://picsum.photos/id/191/800/600" alt="Process asset" className="rounded-3xl shadow-xl w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;

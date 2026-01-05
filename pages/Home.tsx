
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SERVICE_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[850px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cafeptthumb-phinf.pstatic.net/MjAyNjAxMDVfMTI2/MDAxNzY3NjAxOTMxODg1.94CZKeFbk9fQJHb4Df5rfJRqAJXA6I46fvuIcvMc31kg.KKTm8NuP7nR1HDEBwQkI6rvXcHd0KvJC2W9dfpSkNEwg.JPEG/hero.jpg?type=w1600" 
            alt="깨끗하고 정돈된 상업용 주방 전경"
            className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
            onError={(e) => {
              // 이미지 로드 실패 시 브랜드 컬러 배경 사용
              (e.target as HTMLImageElement).parentElement!.classList.add('bg-forest-green');
            }}
          />
          {/* 텍스트 가독성을 위한 오버레이: 주방의 청결한 느낌은 살리되 텍스트 대비를 높임 */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center py-1 px-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              주방 위생의 완성, 우리환경
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-8 drop-shadow-2xl">
              사장님은 요리에만<br />
              <span className="text-sky-blue">전념하세요.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-medium drop-shadow-md">
              [우리환경]이 보이지 않는 곳까지<br className="hidden md:block" />
              가장 깨끗하게 비워드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/support"
                className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-xl font-black rounded-2xl text-white bg-forest-green hover:bg-green-700 transition-all shadow-[0_20px_50px_rgba(45,90,39,0.3)] hover:scale-105 active:scale-95"
              >
                무료 견적 상담
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
              <Link
                to="/service"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/40 text-xl font-bold rounded-2xl text-white hover:bg-white/10 transition backdrop-blur-sm active:scale-95"
              >
                서비스 둘러보기
              </Link>
            </div>
          </div>
        </div>

        {/* 하단 우측 업체 정보 강조 */}
        <div className="absolute bottom-10 right-10 z-10 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl text-right">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">정식 허가 업체</p>
            <p className="text-white text-2xl font-black italic">허가번호 제 수집2017-1호</p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 p-5 bg-sky-blue/10 rounded-3xl group-hover:bg-sky-blue/20 transition-colors">
                <Star className="w-10 h-10 text-sky-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-3">압도적 만족도</h3>
              <p className="text-gray-500 leading-relaxed">사장님들이 먼저 추천하는<br />깔끔한 뒤처리 서비스</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 p-5 bg-forest-green/10 rounded-3xl group-hover:bg-forest-green/20 transition-colors">
                <ShieldCheck className="w-10 h-10 text-forest-green" />
              </div>
              <h3 className="text-2xl font-bold mb-3">법적 책임 보장</h3>
              <p className="text-gray-500 leading-relaxed">환경부 정식 허가 업체로서<br />완벽한 행정 서류 대행</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 p-5 bg-yellow-400/10 rounded-3xl group-hover:bg-yellow-400/20 transition-colors">
                <HeartHandshake className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">합리적 비용</h3>
              <p className="text-gray-500 leading-relaxed">배출량에 맞춘 투명하고<br />부담 없는 단가 제안</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">빈틈없는 수거 과정</h2>
              <p className="text-xl text-gray-500">우리환경이 하면 다릅니다.</p>
            </div>
            <Link to="/service" className="text-forest-green font-bold flex items-center hover:underline">
              자세한 과정 보기 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="inline-block p-4 bg-gray-50 rounded-2xl mb-8">
                  {step.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-forest-green text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
            사장님의 주방 고민,<br />
            이제 [우리환경]이 해결해 드립니다.
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-2xl mx-auto">
            정확한 견적은 현장 상담을 통해 가장 합리적으로 제안해 드립니다. 지금 바로 무료 상담을 신청하세요.
          </p>
          <Link
            to="/support"
            className="inline-flex items-center justify-center px-12 py-6 bg-white text-forest-green text-2xl font-black rounded-2xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            무료 견적 상담 신청하기
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      </section>
    </div>
  );
};

export default Home;

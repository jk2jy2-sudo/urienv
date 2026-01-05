
import React from 'react';
import { Leaf, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-gray-900">
              환경을 생각하는 마음이 <br />
              <span className="text-forest-green">내일의 가치</span>를 만듭니다.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              [우리환경]은 10년 역사의 폐기물 처리 노하우를 바탕으로 최적의 신속 수거 처리를 약속합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-xl font-bold mb-4">ESG 경영 실천</h3>
              <p className="text-gray-500 text-sm leading-relaxed">환경 오염 최소화를 위해 최적의 최신식 처리시설에서 자원 재활용으로 처리됩니다.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">전문 기술력</h3>
              <p className="text-gray-500 text-sm leading-relaxed">국내 최고 수준의 신속한 수거로 냄새와 오염 없는 처리를 보장합니다.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">수도권 네트워크</h3>
              <p className="text-gray-500 text-sm leading-relaxed">서울과 인천 수도권지역의 빈틈없는 수거 망을 자랑합니다.</p>
            </div> 
          </div>
        </div>
      </section>

      {/* Greetings */}
      <section className="py-24 bg-gray-900 text-white rounded-t-[60px] md:rounded-t-[100px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
             <img src="https://picsum.photos/id/64/150/150" alt="CEO" className="w-32 h-32 rounded-full mx-auto border-4 border-forest-green p-1" />
          </div>
          <h2 className="text-3xl font-black mb-8 italic">"단순히 쓰레기를 치우는 것이 아니라, <br />환경을 살리고 사장님의 불편을 덜어드립니다."</h2>
          <p className="text-lg text-gray-400 mb-8">
            현장에서 고생하시는 사장님들의 땀방울을 누구보다 잘 알기에, 보이지 않는 곳에서 가장 묵묵하고 성실하게 돕겠습니다.
            우리환경과 함께 더 깨끗하고 밝은 미래를 만들어 가시길 바랍니다.
          </p>
          <div className="text-right">
            <p className="text-xl font-bold">우리환경 임직원 일동</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

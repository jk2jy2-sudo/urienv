
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Send, PhoneCall, Clock } from 'lucide-react';
import { FAQS } from '../constants';

const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pb-20">
      <section className="py-24 bg-sky-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">고객센터</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            궁금하신 점이 있으신가요? 빠르고 친절하게 답변해 드리겠습니다.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ Section */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <span className="w-2 h-8 bg-forest-green rounded-full"></span>
              <h2 className="text-3xl font-black">자주 묻는 질문</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-800">{faq.question}</span>
                    {openIndex === idx ? (
                      <ChevronUp className="w-5 h-5 text-forest-green" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openIndex === idx && (
                    <div className="px-8 pb-8 text-gray-500 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-900 text-white p-10 rounded-3xl flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <PhoneCall className="w-12 h-12 text-forest-green" />
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold mb-1 text-sky-blue">빠른 전화 상담</h4>
                <p className="text-3xl font-black mb-2 tracking-tighter">010-5802-3262</p>
                <div className="flex items-center text-xs text-gray-400 space-x-3">
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> 평일 09:00 - 18:00</span>
                  <span>|</span>
                  <span>주말/공휴일 근무</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Section */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <span className="w-2 h-8 bg-sky-blue rounded-full"></span>
              <h2 className="text-3xl font-black">온라인 견적 문의</h2>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 p-12 rounded-[40px] text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-forest-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">문의가 접수되었습니다!</h3>
                <p className="text-gray-600">
                  담당자가 24시간 이내에 기재하신 연락처로 직접 연락드리겠습니다. 
                  우리환경을 믿고 맡겨주셔서 감사합니다.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-forest-green text-white rounded-full font-bold"
                >
                  새 문의 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[40px] shadow-lg border border-gray-100 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">상호명</label>
                    <input required type="text" placeholder="예: 우리식당 강남점" className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-forest-green outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                    <input required type="tel" placeholder="010-0000-0000" className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-forest-green outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">지역 (수거지 주소)</label>
                  <input required type="text" placeholder="예: 서울시 강남구 역삼동" className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-forest-green outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">대략적 일일 배출량 (L)</label>
                  <select className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-forest-green outline-none">
                    <option>5L 미만 (소규모 음식점,카페)</option>
                    <option>5L - 20L (일반 음식점)</option>
                    <option>20L - 50L (중대형 식당)</option>
                    <option>50L 이상 (대형 급식소)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">기타 문의사항 (선택)</label>
                  <textarea rows={4} placeholder="수거 요일 협의 등 추가 요청 사항을 적어주세요." className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-forest-green outline-none"></textarea>
                </div>
                <div className="flex items-center space-x-2 px-2">
                  <input required type="checkbox" id="privacy" className="rounded text-forest-green focus:ring-forest-green" />
                  <label htmlFor="privacy" className="text-xs text-gray-500">개인정보 수집 및 이용에 동의합니다. (필수)</label>
                </div>
                <button type="submit" className="w-full py-5 bg-forest-green text-white text-lg font-bold rounded-2xl shadow-xl hover:scale-[1.01] transition-transform flex items-center justify-center">
                  상담 신청하기
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

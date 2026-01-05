
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-forest-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">우</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-gray-900">[우리환경]</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-forest-green border-b-2 border-forest-green'
                    : 'text-gray-500 hover:text-forest-green'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/support"
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-semibold rounded-full text-white bg-forest-green hover:bg-green-800 transition shadow-md"
            >
              무료 견적 상담
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-forest-green hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/support"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-bold text-white bg-forest-green"
            >
              무료 견적 상담하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">우</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">[우리환경]</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-md">
              깨끗한 주방, 맑은 내일 - 우리환경이 사장님의 고민을 비워드립니다.
              전국 주요 사업장의 음식물 쓰레기 정기 수거 및 친환경 자원화 전문 기업입니다.
            </p>
            <div className="flex space-x-4">
              <span className="text-xs">사업자번호: 823-88-00454</span>
              <span className="text-xs">대표자: 송인광</span>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">빠른 메뉴</h3>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-forest-green transition-colors flex items-center">
                    <ChevronRight className="w-3 h-3 mr-1" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">고객센터</h3>
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">상담 전화</p>
              <p className="text-2xl font-bold text-white">010-5802-3262</p>
            </div>
            <p className="text-sm">평일 09:00 - 18:00 (토/일 근무)</p>
            <p className="text-sm">경기도 남양주시 진접읍 봉현로36번길 18</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          © 2024 (주)[우리환경]. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const StickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex space-x-4">
      <a
        href="tel:1588-0000"
        className="flex-1 flex items-center justify-center space-x-2 py-3 bg-white border border-forest-green text-forest-green font-bold rounded-xl active:bg-gray-50"
      >
        <Phone className="w-5 h-5" />
        <span>전화 연결</span>
      </a>
      <Link
        to="/support"
        className="flex-1 flex items-center justify-center space-x-2 py-3 bg-forest-green text-white font-bold rounded-xl active:bg-green-800"
      >
        <MessageSquare className="w-5 h-5" />
        <span>견적 상담</span>
      </Link>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
};

export default Layout;

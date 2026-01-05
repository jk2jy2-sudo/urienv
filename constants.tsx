
import React from 'react';
import { Search, PenTool, Truck, Leaf } from 'lucide-react';
import { NavItem, ServiceStep, FAQItem } from './types';

export const COLORS = {
  primary: '#2D5A27', // Forest Green
  secondary: '#87CEEB', // Sky Blue
  background: '#FDFBF7', // Warm White
};

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '서비스 소개', path: '/service' },
  { label: '회사 소개', path: '/about' },
  { label: '고객센터', path: '/support' },
];

export const SERVICE_STEPS: ServiceStep[] = [
  {
    title: '상담 및 견적',
    description: '전문 상담원이 업소 방문 또는 유선으로 최적의 플랜을 제안합니다.',
    icon: <Search className="w-12 h-12 text-forest-green" />,
  },
  {
    title: '계약 및 용기 비치',
    description: '깔끔하고 냄새 없는 전용 수거 용기를 즉시 제공해 드립니다.',
    icon: <PenTool className="w-12 h-12 text-forest-green" />,
  },
  {
    title: '정기 수거 서비스',
    description: '약속된 시간에 맞춰 정기적으로 신속하고 깨끗하게 수거합니다.',
    icon: <Truck className="w-12 h-12 text-forest-green" />,
  },
  {
    title: '친환경 자원화',
    description: '수거된 잔반은 최첨단 설비에서 사료나 퇴비로 재생산됩니다.',
    icon: <Leaf className="w-12 h-12 text-forest-green" />,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '수거 비용은 어떻게 산정되나요?',
    answer: '하루 평균 배출량(L), 수거 횟수, 그리고 업종의 성격에 따라 합리적으로 산정됩니다. 상세 상담을 통해 정확한 견적을 확인하실 수 있습니다.',
  },
  {
    question: '주말이나 공휴일에도 수거가 가능한가요?',
    answer: '네, 연중무휴 서비스를 원칙으로 합니다. 단, 계약 조건에 따라 수거 요일을 유동적으로 조절하실 수 있습니다.',
  },
  {
    question: '전용 용기는 따로 구매해야 하나요?',
    answer: '아니요, 우리환경은 계약 기간 동안 냄새 차단 효과가 뛰어난 전용 용기를 무상으로 대여해 드립니다.',
  },
  {
    question: '계약 시 필요 서류는 무엇인가요?',
    answer: '사업자등록증 사본과 담당자 연락처만 준비해 주시면 현장에서 즉시 계약 체결이 가능합니다.',
  },
];


export interface NavItem {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface InquiryFormData {
  businessName: string;
  contact: string;
  location: string;
  volume: string;
  message: string;
}

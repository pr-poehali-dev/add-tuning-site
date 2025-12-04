export interface ServiceItem {
  name: string;
  minPrice: number;
  maxPrice: number;
  category: string;
}

export interface Review {
  name: string;
  car: string;
  rating: number;
  text: string;
  date: string;
}

export interface PortfolioItem {
  car: string;
  year: string;
  stage: string;
  powerBefore: string;
  powerAfter: string;
  torqueBefore: string;
  torqueAfter: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface ContactInfo {
  phone: string;
  telegram: string;
  vk: string;
  whatsapp: string;
  email: string;
  address: string;
  workHours: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  mainTitle: string;
  mainSubtitle: string;
  experience: string;
  carsCount: string;
  warranty: string;
}

export type AcademicStageKey = 'eyfs' | 'primary' | 'lower-secondary' | 'igcse' | 'a-level';

export interface CurriculumStage {
  key: AcademicStageKey;
  title: string;
  subtitle: string;
  ageRange: string;
  years: string;
  overview: string;
  highlights: string[];
  subjects: string[];
  path: string;
  image: string;
}

export interface BoardingFee {
  gradeGroup: string;
  term1: number;
  term2: number;
  term3: number;
  totalAnnual: number;
}

export interface AdditionalCharge {
  item: string;
  amount: number;
  frequency: string;
  notes?: string;
}

export interface RequirementCategory {
  category: string;
  items: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'Academic' | 'Sports' | 'Arts' | 'Community' | 'Event';
  date: string;
  summary: string;
  content: string[];
  image: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Academics' | 'Sports' | 'Boarding' | 'Arts & Drama' | 'Events';
  image: string;
  caption: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  qualification: string;
  bio: string;
  image: string;
}

export interface DownloadDocument {
  id: string;
  title: string;
  category: 'Admissions' | 'Academic Calendar' | 'Fees & Policies' | 'Student Handbooks';
  fileSize: string;
  format: 'PDF';
  description: string;
  updatedDate: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Curriculum' | 'Boarding' | 'Fees' | 'Admissions' | 'General';
  tags: string[];
}

export interface AdmissionFormData {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  gradeApplying: string;
  type: 'Day' | 'Boarding';
  message: string;
}

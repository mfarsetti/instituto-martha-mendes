export type UserRole = 'admin' | 'editor';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface AuthSession {
  user: User;
  expiresAt: number;
}

export type PostStatus = 'draft' | 'published';
export type CourseStatus = 'draft' | 'published';
export type CourseModality = 'Presencial' | 'EAD' | 'Hibrido';
export type CourseCertification = 'Extensao' | 'Pos' | 'Mestrado' | 'Outro';

export interface Post {
  id: string;
  title: string;
  slug: string;
  summary: string;
  image: string;
  tags: string[];
  content: string;
  status: PostStatus;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  author?: string;
  readTime?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  topics: string[];
}

export interface CourseTeacher {
  id: string;
  name: string;
  photo: string;
  role: string;
  bio: string;
  specialties: string[];
}

export interface CourseFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  duration: string;
  modality: CourseModality;
  certification: CourseCertification;
  investment: string | null;
  startDates: string[];
  image: string;
  hotmartUrl?: string | null;
  hotmartText?: string | null;
  content: string;
  modules: CourseModule[];
  teachers: CourseTeacher[];
  faqs: CourseFAQ[];
  status: CourseStatus;
  seoTitle: string | null;
  seoDescription: string | null;
  createdAt: string;
  updatedAt: string;
  students?: number;
}

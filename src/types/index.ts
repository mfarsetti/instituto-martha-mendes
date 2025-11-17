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
export type CourseModality = 'Presencial' | 'EAD' | 'Híbrido';
export type CourseCertification = 'Extensão' | 'Pós' | 'Mestrado' | 'Outro';

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
  content: string;
  status: CourseStatus;
  seoTitle: string | null;
  seoDescription: string | null;
  createdAt: string;
  updatedAt: string;
  students?: number;
}

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Post, Course } from '@/types';
import { seedPosts, seedCourses } from '@/lib/seed-data';

interface DataContextType {
  posts: Post[];
  courses: Course[];
  createPost: (post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) => Post;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
  getPost: (id: string) => Post | undefined;
  getPostBySlug: (slug: string) => Post | undefined;
  createCourse: (course: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>) => Course;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  getCourse: (id: string) => Course | undefined;
  getCourseBySlug: (slug: string) => Course | undefined;
  isSlugUnique: (slug: string, excludeId?: string, type?: 'post' | 'course') => boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  // Initialize data from localStorage or seed
  useEffect(() => {
    const storedPosts = localStorage.getItem('imm_posts');
    const storedCourses = localStorage.getItem('imm_courses');

    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts(seedPosts);
      localStorage.setItem('imm_posts', JSON.stringify(seedPosts));
    }

    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    } else {
      setCourses(seedCourses);
      localStorage.setItem('imm_courses', JSON.stringify(seedCourses));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('imm_posts', JSON.stringify(posts));
    }
  }, [posts]);

  useEffect(() => {
    if (courses.length > 0) {
      localStorage.setItem('imm_courses', JSON.stringify(courses));
    }
  }, [courses]);

  const isSlugUnique = useCallback((slug: string, excludeId?: string, type?: 'post' | 'course') => {
    if (!type || type === 'post') {
      const existingPost = posts.find(p => p.slug === slug && p.id !== excludeId);
      if (existingPost) return false;
    }
    if (!type || type === 'course') {
      const existingCourse = courses.find(c => c.slug === slug && c.id !== excludeId);
      if (existingCourse) return false;
    }
    return true;
  }, [posts, courses]);

  // Post operations
  const createPost = useCallback((postData: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    const newPost: Post = {
      ...postData,
      id: `post_${Date.now()}`,
      createdAt: now,
      updatedAt: now,
    };
    setPosts(prev => [...prev, newPost]);
    return newPost;
  }, []);

  const updatePost = useCallback((id: string, postData: Partial<Post>) => {
    setPosts(prev => prev.map(post => 
      post.id === id 
        ? { ...post, ...postData, updatedAt: new Date().toISOString() }
        : post
    ));
  }, []);

  const deletePost = useCallback((id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  }, []);

  const getPost = useCallback((id: string) => {
    return posts.find(post => post.id === id);
  }, [posts]);

  const getPostBySlug = useCallback((slug: string) => {
    return posts.find(post => post.slug === slug);
  }, [posts]);

  // Course operations
  const createCourse = useCallback((courseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    const newCourse: Course = {
      ...courseData,
      id: `course_${Date.now()}`,
      createdAt: now,
      updatedAt: now,
    };
    setCourses(prev => [...prev, newCourse]);
    return newCourse;
  }, []);

  const updateCourse = useCallback((id: string, courseData: Partial<Course>) => {
    setCourses(prev => prev.map(course => 
      course.id === id 
        ? { ...course, ...courseData, updatedAt: new Date().toISOString() }
        : course
    ));
  }, []);

  const deleteCourse = useCallback((id: string) => {
    setCourses(prev => prev.filter(course => course.id !== id));
  }, []);

  const getCourse = useCallback((id: string) => {
    return courses.find(course => course.id === id);
  }, [courses]);

  const getCourseBySlug = useCallback((slug: string) => {
    return courses.find(course => course.slug === slug);
  }, [courses]);

  return (
    <DataContext.Provider value={{
      posts,
      courses,
      createPost,
      updatePost,
      deletePost,
      getPost,
      getPostBySlug,
      createCourse,
      updateCourse,
      deleteCourse,
      getCourse,
      getCourseBySlug,
      isSlugUnique,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

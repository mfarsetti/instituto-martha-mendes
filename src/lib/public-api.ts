import type { Course, Post } from "@/types";

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(path, { credentials: "include" });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return (await res.json()) as T;
}

export async function fetchPublishedPosts(): Promise<Post[]> {
  const data = await fetchJson<{ posts: Post[] }>("/api/posts");
  return data.posts;
}

export async function fetchPublishedPost(slug: string): Promise<Post> {
  const data = await fetchJson<{ post: Post }>(`/api/posts/${encodeURIComponent(slug)}`);
  return data.post;
}

export async function fetchPublishedCourses(): Promise<Course[]> {
  const data = await fetchJson<{ courses: Course[] }>("/api/courses");
  return data.courses;
}

export async function fetchPublishedCourse(slug: string): Promise<Course> {
  const data = await fetchJson<{ course: Course }>(`/api/courses/${encodeURIComponent(slug)}`);
  return data.course;
}


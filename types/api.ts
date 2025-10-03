// API Types - Mirror Django REST Framework structure
export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  profile?: UserProfile;
}

export interface UserProfile {
  id: number;
  user: number;
  bio: string;
  avatar: string;
  phone: string;
  location: string;
  website: string;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
  tags: Tag[];
  comments_count: number;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Comment {
  id: number;
  post: number;
  author: User;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ApiError {
  detail?: string;
  [key: string]: any;
}
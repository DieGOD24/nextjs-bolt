// Mock data to simulate Django REST Framework responses
import type { User, Post, Tag } from '@/types/api';

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    first_name: 'Admin',
    last_name: 'User',
    is_staff: true,
    is_active: true,
    date_joined: '2024-01-01T00:00:00Z',
  },
  {
    id: 2,
    username: 'john_doe',
    email: 'john@example.com',
    first_name: 'John',
    last_name: 'Doe',
    is_staff: false,
    is_active: true,
    date_joined: '2024-01-15T10:30:00Z',
  },
  {
    id: 3,
    username: 'jane_smith',
    email: 'jane@example.com',
    first_name: 'Jane',
    last_name: 'Smith',
    is_staff: false,
    is_active: true,
    date_joined: '2024-02-01T14:20:00Z',
  },
];

export const mockTags: Tag[] = [
  { id: 1, name: 'Technology', slug: 'technology' },
  { id: 2, name: 'Web Development', slug: 'web-development' },
  { id: 3, name: 'Django', slug: 'django' },
  { id: 4, name: 'React', slug: 'react' },
  { id: 5, name: 'Tutorial', slug: 'tutorial' },
];

export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with Django REST Framework',
    content: 'Django REST Framework is a powerful toolkit for building Web APIs. In this post, we\'ll explore the basics...',
    author: mockUsers[0],
    slug: 'getting-started-with-django-rest-framework',
    status: 'published',
    created_at: '2024-01-20T09:00:00Z',
    updated_at: '2024-01-20T09:00:00Z',
    tags: [mockTags[2], mockTags[4]],
    comments_count: 12,
  },
  {
    id: 2,
    title: 'Building Modern UIs with React and Next.js',
    content: 'React has revolutionized the way we build user interfaces. Combined with Next.js, we can create...',
    author: mockUsers[1],
    slug: 'building-modern-uis-with-react-nextjs',
    status: 'published',
    created_at: '2024-01-25T11:30:00Z',
    updated_at: '2024-01-25T11:30:00Z',
    tags: [mockTags[1], mockTags[3], mockTags[4]],
    comments_count: 8,
  },
  {
    id: 3,
    title: 'Advanced API Design Patterns',
    content: 'When designing APIs, there are several patterns and best practices to consider...',
    author: mockUsers[2],
    slug: 'advanced-api-design-patterns',
    status: 'draft',
    created_at: '2024-02-01T16:15:00Z',
    updated_at: '2024-02-01T16:15:00Z',
    tags: [mockTags[0], mockTags[1]],
    comments_count: 0,
  },
];

export const mockDashboardStats = {
  total_users: 156,
  total_posts: 89,
  published_posts: 67,
  total_comments: 234,
  recent_activity: [
    { id: 1, type: 'user_joined', user: 'new_user_123', timestamp: '2024-01-30T10:15:00Z' },
    { id: 2, type: 'post_published', user: 'jane_smith', title: 'New Article', timestamp: '2024-01-30T09:30:00Z' },
    { id: 3, type: 'comment_added', user: 'john_doe', post: 'Getting Started with Django', timestamp: '2024-01-30T08:45:00Z' },
  ],
};

// Mock API functions for development
export const mockApi = {
  async login(credentials: { username: string; password: string }) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      return {
        access: 'mock-access-token-' + Date.now(),
        refresh: 'mock-refresh-token-' + Date.now(),
      };
    }
    throw new Error('Invalid credentials');
  },

  async getUsers(params?: Record<string, string>) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      count: mockUsers.length,
      next: null,
      previous: null,
      results: mockUsers,
    };
  },

  async getPosts(params?: Record<string, string>) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      count: mockPosts.length,
      next: null,
      previous: null,
      results: mockPosts,
    };
  },

  async getDashboardStats() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockDashboardStats;
  },
};
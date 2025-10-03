// API Client for Django REST Framework
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    // Try to get token from localStorage on client side
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('access_token');
    }
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', token);
    }
  }

  removeToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth endpoints
  async login(credentials: { username: string; password: string }) {
    return this.request<{ access: string; refresh: string }>('/auth/login/', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData: any) {
    return this.request<User>('/auth/register/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async refreshToken(refresh: string) {
    return this.request<{ access: string }>('/auth/token/refresh/', {
      method: 'POST',
      body: JSON.stringify({ refresh }),
    });
  }

  // User endpoints
  async getUsers(params?: Record<string, string>) {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return this.request<{ count: number; next: string | null; previous: string | null; results: User[] }>(`/users/${queryString}`);
  }

  async getUser(id: number) {
    return this.request<User>(`/users/${id}/`);
  }

  async updateUser(id: number, data: Partial<User>) {
    return this.request<User>(`/users/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteUser(id: number) {
    return this.request<void>(`/users/${id}/`, {
      method: 'DELETE',
    });
  }

  // Posts endpoints
  async getPosts(params?: Record<string, string>) {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return this.request<{ count: number; next: string | null; previous: string | null; results: Post[] }>(`/posts/${queryString}`);
  }

  async getPost(id: number) {
    return this.request<Post>(`/posts/${id}/`);
  }

  async createPost(data: Omit<Post, 'id' | 'author' | 'created_at' | 'updated_at'>) {
    return this.request<Post>('/posts/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updatePost(id: number, data: Partial<Post>) {
    return this.request<Post>(`/posts/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deletePost(id: number) {
    return this.request<void>(`/posts/${id}/`, {
      method: 'DELETE',
    });
  }

  // Dashboard stats
  async getDashboardStats() {
    return this.request<{
      total_users: number;
      total_posts: number;
      published_posts: number;
      total_comments: number;
      recent_activity: any[];
    }>('/dashboard/stats/');
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
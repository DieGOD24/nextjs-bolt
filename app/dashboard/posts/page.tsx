'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { PostsTable } from '@/components/dashboard/PostsTable';
import { mockApi } from '@/lib/mock-data';
import type { Post } from '@/types/api';

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await mockApi.getPosts();
        setPosts(response.results);
      } catch (error) {
        console.error('Failed to load posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
          <p className="text-muted-foreground">
            Manage content and blog posts
          </p>
        </div>

        <PostsTable posts={posts} isLoading={isLoading} />
      </div>
    </DashboardLayout>
  );
}
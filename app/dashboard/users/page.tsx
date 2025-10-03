'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { UsersTable } from '@/components/dashboard/UsersTable';
import { mockApi } from '@/lib/mock-data';
import type { User } from '@/types/api';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await mockApi.getUsers();
        setUsers(response.results);
      } catch (error) {
        console.error('Failed to load users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Manage platform users and their permissions
          </p>
        </div>

        <UsersTable users={users} isLoading={isLoading} />
      </div>
    </DashboardLayout>
  );
}
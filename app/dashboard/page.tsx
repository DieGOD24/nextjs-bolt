'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockApi, mockDashboardStats } from '@/lib/mock-data';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Activity, Zap, Database, Shield, Sparkles, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const [stats, setStats] = useState(mockDashboardStats);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await mockApi.getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to load dashboard stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStats();
  }, []);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="p-6 space-y-6 relative">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 glass-effect animate-pulse rounded-lg electric-glow" />
            ))}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-8 relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-electric-400 to-cosmic-500 electric-glow animate-pulse-slow">
                <Sparkles className="h-6 w-6 text-white animate-spin-slow" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-electric-400 via-neon-400 to-cosmic-400 bg-clip-text text-transparent animate-gradient-x">
                Cosmic Dashboard
              </h1>
            </div>
            <p className="text-white/70 text-lg">
              Overview of your platform activity and statistics
            </p>
          </div>
          <Badge className="px-4 py-2 bg-gradient-to-r from-neon-400 to-electric-500 text-white border-none neon-glow animate-pulse-slow">
            <Zap className="h-4 w-4 mr-2 animate-bounce" />
            Django REST Ready
          </Badge>
        </div>

        <StatsCards stats={stats} />

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="glass-effect cosmic-glow hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-500/20 to-electric-500/20 opacity-50"></div>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cosmic-400 to-cosmic-600 cosmic-glow">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">Recent Activity</CardTitle>
                  <CardDescription className="text-white/60">Latest platform activities</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-4">
                {stats.recent_activity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg glass-effect hover:bg-white/10 transition-all duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neon-400 to-electric-500 neon-glow text-white text-sm font-bold animate-float">
                      {activity.user[0].toUpperCase()}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm text-white">
                        <span className="font-bold text-electric-400">{activity.user}</span>
                        {activity.type === 'user_joined' && ' joined the platform'}
                        {activity.type === 'post_published' && ` published "${activity.title}"`}
                        {activity.type === 'comment_added' && ` commented on "${activity.post}"`}
                      </p>
                      <p className="text-xs text-white/50">
                        {format(new Date(activity.timestamp), 'MMM dd, yyyy HH:mm')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect electric-glow hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-500/20 to-neon-500/20 opacity-50"></div>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-electric-400 to-electric-600 electric-glow">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">API Integration</CardTitle>
                  <CardDescription className="text-white/60">Django REST Framework configuration</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-electric-400" />
                  Backend Endpoints:
                </h4>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 rounded glass-effect text-electric-400">POST /api/auth/login/</div>
                  <div className="p-2 rounded glass-effect text-neon-400">GET /api/users/</div>
                  <div className="p-2 rounded glass-effect text-cosmic-400">GET /api/posts/</div>
                  <div className="p-2 rounded glass-effect text-sunset-400">GET /api/dashboard/stats/</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-neon-400" />
                  Features:
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-neon-400">
                    <Zap className="h-3 w-3 mr-2" />
                    JWT Authentication
                  </div>
                  <div className="flex items-center text-electric-400">
                    <Zap className="h-3 w-3 mr-2" />
                    Pagination Support
                  </div>
                  <div className="flex items-center text-cosmic-400">
                    <Zap className="h-3 w-3 mr-2" />
                    Error Handling
                  </div>
                  <div className="flex items-center text-sunset-400">
                    <Zap className="h-3 w-3 mr-2" />
                    TypeScript Types
                  </div>
                </div>
              </div>
              
              <Badge className="w-full justify-center bg-gradient-to-r from-electric-400 to-neon-500 text-white border-none electric-glow animate-pulse-slow py-2">
                <Sparkles className="h-4 w-4 mr-2 animate-spin-slow" />
                Ready for Django Backend
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
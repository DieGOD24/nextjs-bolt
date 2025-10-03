'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, MessageSquare, TrendingUp, Sparkles, Zap, Heart, Star } from 'lucide-react';

interface StatsCardsProps {
  stats: {
    total_users: number;
    total_posts: number;
    published_posts: number;
    total_comments: number;
  };
}

export function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: 'Total Users',
      value: stats.total_users,
      icon: Users,
      description: 'Active platform users',
      gradient: 'from-electric-400 to-electric-600',
      glow: 'electric-glow',
      bgGradient: 'from-electric-500/20 to-electric-600/20',
    },
    {
      title: 'Total Posts',
      value: stats.total_posts,
      icon: FileText,
      description: 'All posts created',
      gradient: 'from-neon-400 to-neon-600',
      glow: 'neon-glow',
      bgGradient: 'from-neon-500/20 to-neon-600/20',
    },
    {
      title: 'Published Posts',
      value: stats.published_posts,
      icon: TrendingUp,
      description: 'Live content',
      gradient: 'from-cosmic-400 to-cosmic-600',
      glow: 'cosmic-glow',
      bgGradient: 'from-cosmic-500/20 to-cosmic-600/20',
    },
    {
      title: 'Comments',
      value: stats.total_comments,
      icon: MessageSquare,
      description: 'User interactions',
      gradient: 'from-sunset-400 to-sunset-600',
      glow: 'sunset-glow',
      bgGradient: 'from-sunset-500/20 to-sunset-600/20',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Card key={card.title} className={`glass-effect ${card.glow} hover:scale-105 transition-all duration-300 group relative overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-50`}></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-white/90">{card.title}</CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-br ${card.gradient} ${card.glow} group-hover:animate-bounce`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-white mb-1 group-hover:animate-pulse">
                {card.value.toLocaleString()}
              </div>
              <p className="text-xs text-white/60">{card.description}</p>
              <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="h-8 w-8 text-white animate-spin-slow" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
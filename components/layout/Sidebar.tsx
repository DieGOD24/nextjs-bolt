'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  Menu,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    gradient: 'from-electric-400 to-electric-600',
    glow: 'electric-glow',
  },
  {
    name: 'Users',
    href: '/dashboard/users',
    icon: Users,
    gradient: 'from-neon-400 to-neon-600',
    glow: 'neon-glow',
  },
  {
    name: 'Posts',
    href: '/dashboard/posts',
    icon: FileText,
    gradient: 'from-cosmic-400 to-cosmic-600',
    glow: 'cosmic-glow',
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    gradient: 'from-sunset-400 to-sunset-600',
    glow: 'sunset-glow',
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { logout, user } = useAuth();

  const SidebarContent = () => (
    <div className="flex h-full flex-col glass-effect">
      {/* Header */}
      <div className="flex h-16 items-center border-b border-white/20 px-6">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric-400 to-cosmic-500 electric-glow animate-pulse-slow">
            <Sparkles className="h-5 w-5 text-white animate-spin-slow" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-electric-400 to-cosmic-400 bg-clip-text text-transparent">
                Cosmic Admin
              </h1>
              <p className="text-xs text-white/60">Creative Dashboard</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start relative overflow-hidden group transition-all duration-300 hover:scale-105',
                    collapsed && 'justify-center px-2',
                    isActive 
                      ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg ${item.glow} animate-pulse-slow` 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  )}
                >
                  <Icon className={cn(
                    "h-5 w-5 transition-all duration-300",
                    isActive && "animate-bounce-slow"
                  )} />
                  {!collapsed && (
                    <span className="ml-3 font-medium">{item.name}</span>
                  )}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient-x" />
                  )}
                </Button>
              </Link>
            );
          })}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-white/20 p-4">
        {!collapsed && user && (
          <div className="mb-4 flex items-center space-x-3 p-3 rounded-xl glass-effect">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neon-400 to-electric-500 neon-glow animate-float">
              <span className="text-sm font-bold text-white">
                {user.first_name?.[0]}{user.last_name?.[0]}
              </span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium text-white">{user.first_name} {user.last_name}</p>
              <p className="truncate text-xs text-white/60">{user.email}</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start text-white/70 hover:text-white hover:bg-red-500/20 transition-all duration-300 group',
            collapsed && 'justify-center px-2'
          )}
          onClick={logout}
        >
          <LogOut className="h-4 w-4 group-hover:animate-bounce" />
          {!collapsed && <span className="ml-3 font-medium">Logout</span>}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={cn(
          'hidden md:flex md:flex-col md:fixed md:inset-y-0 transition-all duration-500 z-50',
          collapsed ? 'md:w-16' : 'md:w-64',
          className
        )}
      >
        <SidebarContent />
        <Button
          variant="ghost"
          size="sm" 
          className="absolute -right-4 top-20 z-10 h-8 w-8 rounded-full glass-effect electric-glow p-0 hover:scale-110 transition-all duration-300"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-white" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-white" />
          )}
        </Button>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="mr-2 glass-effect electric-glow">
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LayoutDashboard, Users, FileText, Shield, Database, ArrowRight, Code as Code2, Zap, Globe, Sparkles, Rocket, Star, Heart } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: LayoutDashboard,
      title: 'Modern Dashboard',
      description: 'Clean, responsive admin interface with real-time data visualization',
      gradient: 'from-electric-400 to-electric-600',
      glow: 'electric-glow',
    },
    {
      icon: Shield,
      title: 'JWT Authentication',
      description: 'Secure token-based authentication ready for Django REST Framework',
      gradient: 'from-neon-400 to-neon-600',
      glow: 'neon-glow',
    },
    {
      icon: Database,
      title: 'API Integration',
      description: 'Complete API client with TypeScript support and error handling',
      gradient: 'from-cosmic-400 to-cosmic-600',
      glow: 'cosmic-glow',
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Full CRUD operations for users with role-based permissions',
      gradient: 'from-sunset-400 to-sunset-600',
      glow: 'sunset-glow',
    },
    {
      icon: FileText,
      title: 'Content Management',
      description: 'Manage posts, comments, and content with rich text editing',
      gradient: 'from-electric-400 to-neon-500',
      glow: 'electric-glow',
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Built with Next.js 13+ app router and server components',
      gradient: 'from-cosmic-400 to-sunset-500',
      glow: 'cosmic-glow',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cosmic-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating icons */}
        <div className="absolute top-20 right-20 text-white/5 animate-float">
          <Star className="h-12 w-12 animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 left-20 text-white/5 animate-bounce-slow">
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute top-1/2 right-10 text-white/5 animate-pulse-slow">
          <Rocket className="h-16 w-16" />
        </div>
        <div className="absolute top-1/3 left-10 text-white/5 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="h-10 w-10" />
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge className="px-6 py-2 text-sm bg-gradient-to-r from-electric-400 to-neon-500 text-white border-none electric-glow animate-pulse-slow">
              <Rocket className="h-4 w-4 mr-2 animate-bounce" />
              NextJS + Django REST Framework
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-electric-400 via-neon-400 via-cosmic-400 to-sunset-400 bg-clip-text text-transparent animate-gradient-x">
              Creative Fullstack
              <br />
              Experience
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary NextJS frontend with stunning visuals, built to seamlessly integrate with Django REST Framework backends. 
              Experience the future of web development with our creative dashboard.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-4 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-600 hover:to-neon-600 text-white font-bold electric-glow hover:scale-110 transition-all duration-300 group">
              <Link href="/login">
                <Rocket className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Launch Dashboard
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 py-4 glass-effect border-white/30 text-white hover:bg-white/10 cosmic-glow hover:scale-110 transition-all duration-300 group">
              <Link href="https://github.com" target="_blank">
                <Globe className="h-5 w-5 mr-2 group-hover:animate-spin" />
                Documentation
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className={`glass-effect ${feature.glow} hover:scale-105 transition-all duration-500 group relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} ${feature.glow} group-hover:animate-bounce`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white font-bold">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-white/70 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Sparkles className="h-8 w-8 text-white animate-spin-slow" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Stack */}
        <div className="mt-32 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-electric-400 to-cosmic-400 bg-clip-text text-transparent">
              Built for the Future
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              This frontend is production-ready and designed to work seamlessly with Django REST Framework backends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card className="glass-effect electric-glow hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/20 to-neon-500/20 opacity-50"></div>
              <CardHeader>
                <CardTitle className="flex items-center text-white text-xl">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-electric-400 to-electric-600 electric-glow mr-3">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  Frontend Magic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-to-r from-electric-400 to-electric-600 text-white border-none">Next.js 13+</Badge>
                  <Badge className="bg-gradient-to-r from-neon-400 to-neon-600 text-white border-none">TypeScript</Badge>
                  <Badge className="bg-gradient-to-r from-cosmic-400 to-cosmic-600 text-white border-none">Tailwind CSS</Badge>
                  <Badge className="bg-gradient-to-r from-sunset-400 to-sunset-600 text-white border-none">shadcn/ui</Badge>
                  <Badge className="bg-gradient-to-r from-electric-400 to-neon-500 text-white border-none">React Hook Form</Badge>
                  <Badge className="bg-gradient-to-r from-cosmic-400 to-sunset-500 text-white border-none">Creative Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect cosmic-glow hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-500/20 to-sunset-500/20 opacity-50"></div>
              <CardHeader>
                <CardTitle className="flex items-center text-white text-xl">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cosmic-400 to-cosmic-600 cosmic-glow mr-3">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  Backend Power
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-to-r from-cosmic-400 to-cosmic-600 text-white border-none">Django REST Framework</Badge>
                  <Badge className="bg-gradient-to-r from-neon-400 to-neon-600 text-white border-none">JWT Authentication</Badge>
                  <Badge className="bg-gradient-to-r from-electric-400 to-electric-600 text-white border-none">PostgreSQL</Badge>
                  <Badge className="bg-gradient-to-r from-sunset-400 to-sunset-600 text-white border-none">Redis Caching</Badge>
                  <Badge className="bg-gradient-to-r from-electric-400 to-cosmic-500 text-white border-none">Celery Tasks</Badge>
                  <Badge className="bg-gradient-to-r from-neon-400 to-sunset-500 text-white border-none">Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center space-y-8">
          <Card className="glass-effect electric-glow bg-gradient-to-r from-electric-500/20 to-cosmic-500/20 max-w-4xl mx-auto hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-500/30 to-cosmic-500/30 animate-gradient-x"></div>
            <CardContent className="p-16 relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-electric-400 to-cosmic-500 electric-glow animate-float">
                  <Rocket className="h-12 w-12 text-white animate-pulse-slow" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-electric-400 to-neon-400 bg-clip-text text-transparent">
                Ready to Launch into the Future?
              </h3>
              <p className="text-white/80 mb-8 text-xl leading-relaxed">
                Experience our creative dashboard with demo data, then connect your Django REST Framework backend to unleash the full power.
              </p>
              <Button size="lg" asChild className="px-10 py-4 bg-gradient-to-r from-neon-500 to-electric-500 hover:from-neon-600 hover:to-electric-600 text-white font-bold neon-glow hover:scale-110 transition-all duration-300 group">
                <Link href="/login">
                  <Sparkles className="h-6 w-6 mr-2 group-hover:animate-spin" />
                  Launch Experience
                  <ArrowRight className="h-6 w-6 ml-2 group-hover:animate-bounce" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
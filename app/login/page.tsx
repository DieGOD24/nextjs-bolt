'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LayoutDashboard, Loader as Loader2, Sparkles, Zap, Star, Rocket } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await login(formData);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cosmic-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-10 right-10 text-white/10">
          <Star className="h-8 w-8 animate-spin-slow" />
        </div>
        <div className="absolute bottom-10 left-10 text-white/10">
          <Sparkles className="h-6 w-6 animate-bounce-slow" />
        </div>
        <div className="absolute top-1/2 right-20 text-white/10">
          <Zap className="h-10 w-10 animate-pulse-slow" />
        </div>
      </div>
      
      <div className="w-full max-w-md">
        <Card className="glass-effect electric-glow border-white/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-cosmic-500/10"></div>
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-400 via-neon-400 to-cosmic-500 electric-glow animate-float group-hover:animate-bounce">
                <Rocket className="h-8 w-8 text-white animate-pulse-slow" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-electric-400 via-neon-400 to-cosmic-400 bg-clip-text text-transparent animate-gradient-x">
              Welcome to the Future
            </CardTitle>
            <CardDescription className="text-white/70 text-lg">
              Sign in to your admin dashboard
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 relative z-10">
              {error && (
                <Alert variant="destructive" className="glass-effect border-red-500/50 bg-red-500/20">
                  <AlertDescription className="text-white">{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="username" className="text-white font-medium">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  disabled={isLoading}
                  required
                  className="glass-effect border-white/30 text-white placeholder:text-white/50 focus:border-electric-400 focus:ring-electric-400/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  disabled={isLoading}
                  required
                  className="glass-effect border-white/30 text-white placeholder:text-white/50 focus:border-electric-400 focus:ring-electric-400/50"
                />
              </div>

              <div className="glass-effect p-4 rounded-xl border border-neon-400/30 neon-glow">
                <div className="flex items-center mb-2">
                  <Sparkles className="h-4 w-4 text-neon-400 mr-2 animate-spin-slow" />
                  <strong className="text-neon-400 font-bold">Demo Credentials:</strong>
                </div>
                <div className="text-white/80 space-y-1">
                  <div>Username: <code className="bg-white/20 px-2 py-1 rounded text-electric-400 font-mono">admin</code></div>
                  <div>Password: <code className="bg-white/20 px-2 py-1 rounded text-electric-400 font-mono">admin</code></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-600 hover:to-neon-600 text-white font-bold py-3 electric-glow hover:scale-105 transition-all duration-300 group" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Launching into space...
                  </>
                ) : (
                  <>
                    <Rocket className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Launch Dashboard
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-8 text-center text-white/60 space-y-2">
          <p className="flex items-center justify-center">
            <Zap className="h-4 w-4 mr-2 text-electric-400" />
            Creative NextJS frontend for
          </p>
          <p className="text-lg">
            <strong className="bg-gradient-to-r from-electric-400 to-neon-400 bg-clip-text text-transparent">
              Django REST Framework
            </strong> backend APIs
          </p>
        </div>
      </div>
    </div>
  );
}
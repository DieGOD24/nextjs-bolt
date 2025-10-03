'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Save, Server, Database, Shield, Bell } from 'lucide-react';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Configure your application and Django backend integration
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Server className="h-5 w-5" />
                <CardTitle>Django Backend Configuration</CardTitle>
              </div>
              <CardDescription>
                Configure connection to your Django REST Framework backend
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="api-url">API Base URL</Label>
                  <Input
                    id="api-url"
                    placeholder="http://localhost:8000/api"
                    defaultValue="http://localhost:8000/api"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeout">Request Timeout (ms)</Label>
                  <Input
                    id="timeout"
                    type="number"
                    placeholder="5000"
                    defaultValue="5000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>API Status</Label>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Mocked (Demo Mode)</Badge>
                  <span className="text-sm text-muted-foreground">
                    Switch to Django backend when available
                  </span>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Required Django Settings:</h4>
                <div className="bg-muted p-4 rounded-lg text-sm font-mono space-y-1">
                  <div># settings.py</div>
                  <div>CORS_ALLOWED_ORIGINS = ["http://localhost:3000"]</div>
                  <div>REST_FRAMEWORK = {`{`}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;'DEFAULT_AUTHENTICATION_CLASSES': [</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'rest_framework_simplejwt.authentication.JWTAuthentication',</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;]</div>
                  <div>{`}`}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <CardTitle>Authentication Settings</CardTitle>
              </div>
              <CardDescription>
                Configure JWT and authentication behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="token-lifetime">Token Lifetime (minutes)</Label>
                  <Input
                    id="token-lifetime"
                    type="number"
                    placeholder="60"
                    defaultValue="60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="refresh-lifetime">Refresh Lifetime (days)</Label>
                  <Input
                    id="refresh-lifetime"
                    type="number"
                    placeholder="7"
                    defaultValue="7"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto Refresh Tokens</Label>
                  <div className="text-sm text-muted-foreground">
                    Automatically refresh tokens before expiration
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Remember Login</Label>
                  <div className="text-sm text-muted-foreground">
                    Keep users logged in across browser sessions
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <CardTitle>Data & Pagination</CardTitle>
              </div>
              <CardDescription>
                Configure how data is fetched and displayed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="page-size">Page Size</Label>
                  <Input
                    id="page-size"
                    type="number"
                    placeholder="25"
                    defaultValue="25"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-page-size">Max Page Size</Label>
                  <Input
                    id="max-page-size"
                    type="number"
                    placeholder="100"
                    defaultValue="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cache-timeout">Cache Timeout (sec)</Label>
                  <Input
                    id="cache-timeout"
                    type="number"
                    placeholder="300"
                    defaultValue="300"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Data Caching</Label>
                  <div className="text-sm text-muted-foreground">
                    Cache API responses for better performance
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <CardTitle>Notifications</CardTitle>
              </div>
              <CardDescription>
                Configure system notifications and alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>API Error Notifications</Label>
                  <div className="text-sm text-muted-foreground">
                    Show toast notifications for API errors
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Success Confirmations</Label>
                  <div className="text-sm text-muted-foreground">
                    Show confirmations for successful actions
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Real-time Updates</Label>
                  <div className="text-sm text-muted-foreground">
                    Enable WebSocket connections for live data
                  </div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="px-8">
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
# NextJS Frontend for Django REST Framework

A modern, production-ready NextJS frontend designed to seamlessly integrate with Django REST Framework backends. This project provides a complete admin dashboard with authentication, user management, and content management features.

## 🚀 Features

### Frontend Features
- **Modern Dashboard**: Clean, responsive admin interface built with Next.js 13+ and TypeScript
- **Authentication System**: JWT-based authentication ready for Django backends  
- **User Management**: Complete CRUD operations for users with role-based permissions
- **Content Management**: Manage posts, comments, and content with rich interfaces
- **API Integration**: Full TypeScript API client with error handling and pagination
- **Real-time Updates**: WebSocket support for live data updates
- **Responsive Design**: Mobile-first design with Tailwind CSS

### Technical Stack
- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React Context + Custom hooks
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Fetch API with custom wrapper
- **Date Handling**: date-fns library

## 🔧 Django Backend Requirements

This frontend is designed to work with a Django REST Framework backend with the following configuration:

### Required Django Packages
```bash
pip install django djangorestframework djangorestframework-simplejwt django-cors-headers
```

### Django Settings
```python
# settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    # Your apps here
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    # ... other middleware
]

# CORS Configuration
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # NextJS dev server
    "https://your-domain.com",  # Production domain
]

# DRF Configuration
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 25,
}

# JWT Configuration
from datetime import timedelta
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
}
```

### Required API Endpoints

The frontend expects these Django REST Framework endpoints:

#### Authentication
- `POST /api/auth/login/` - User login
- `POST /api/auth/register/` - User registration  
- `POST /api/auth/token/refresh/` - Token refresh

#### Users
- `GET /api/users/` - List users (paginated)
- `GET /api/users/{id}/` - Get user details
- `PATCH /api/users/{id}/` - Update user
- `DELETE /api/users/{id}/` - Delete user

#### Posts  
- `GET /api/posts/` - List posts (paginated)
- `GET /api/posts/{id}/` - Get post details
- `POST /api/posts/` - Create post
- `PATCH /api/posts/{id}/` - Update post
- `DELETE /api/posts/{id}/` - Delete post

#### Dashboard
- `GET /api/dashboard/stats/` - Dashboard statistics

## 🎯 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd nextjs-django-frontend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Demo Mode

The application runs in demo mode with mock data by default. Use these credentials to login:
- Username: `admin`
- Password: `admin`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   ├── login/            # Authentication pages
│   └── layout.tsx        # Root layout
├── components/            # React components
│   ├── dashboard/        # Dashboard-specific components
│   ├── layout/          # Layout components
│   └── ui/              # Reusable UI components
├── contexts/             # React contexts
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
└── hooks/               # Custom React hooks
```

## 🔌 API Integration

### Switching from Mock to Django Backend

1. Update the API base URL in your environment variables
2. The API client (`lib/api.ts`) is already configured for Django REST Framework
3. All TypeScript types match Django model structures
4. Authentication flow supports JWT tokens

### Example API Usage
```typescript
import { apiClient } from '@/lib/api';

// Login user
const tokens = await apiClient.login({ username: 'user', password: 'pass' });
apiClient.setToken(tokens.access);

// Fetch users
const users = await apiClient.getUsers({ page: 1, page_size: 25 });

// Create post
const newPost = await apiClient.createPost({
  title: 'My Post',
  content: 'Post content...',
  status: 'published'
});
```

## 🎨 Customization

### Theming
The application uses Tailwind CSS with shadcn/ui components. Customize the theme in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - CSS custom properties

### Components
All UI components are in the `components/ui` directory and can be customized using the shadcn/ui CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables for Production
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

## 📋 TODO / Roadmap

- [ ] Real-time notifications with WebSockets
- [ ] File upload components
- [ ] Advanced filtering and search
- [ ] Export functionality (PDF, CSV)
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Advanced role-based permissions UI

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Django REST Framework](https://www.django-rest-framework.org/) - API backend
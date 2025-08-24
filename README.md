# FASHIONATE - Fashion Search Platform

A modern fashion search platform built with React frontend and Node.js backend, featuring AI-powered search capabilities and beautiful 3D animations.

## 🚀 Features

- **Modern UI/UX**: Beautiful landing page with 3D Spline animations
- **User Authentication**: Secure sign-up and sign-in with JWT tokens
- **Fashion Search Engine**: AI-powered search with Google Custom Search API
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Protected Routes**: Secure access to authenticated features
- **Real-time Search**: Live search results with error handling

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Axios for API calls
- Spline 3D animations

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT Authentication
- Google Custom Search API
- Multer for file uploads
- bcryptjs for password hashing

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Google Custom Search API key
- Google Custom Search Engine ID

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd hackwave
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fashionate
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
GOOGLE_API_KEY=your-google-api-key
GOOGLE_CSE_ID=your-google-custom-search-engine-id
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

### 4. Start the Servers

#### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```

#### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check` - Check authentication status

### Search
- `GET /api/search?q=query&brand=brand&price=price` - Text search
- `POST /api/search/image` - Image search (multipart form)

## 🔐 Authentication Flow

1. **Sign Up**: Users create accounts with email, password, and gender
2. **Sign In**: Users authenticate with email and password
3. **JWT Tokens**: Secure authentication using HTTP-only cookies
4. **Protected Routes**: Fashion search page requires authentication
5. **Logout**: Secure logout with token invalidation

## 🎨 UI Components

- **Landing Page**: Hero section, product suggestions, CTA
- **Authentication Pages**: Sign-in/Sign-up with 3D animations
- **Fashion Search**: Interactive search with trending terms
- **About Page**: Team showcase and mission statement
- **Responsive Navbar**: Dynamic navigation with auth status

## 🔍 Search Features

- **Text Search**: Search for fashion items by keywords
- **Category Filtering**: Filter by clothing categories
- **Trending Searches**: Quick access to popular terms
- **Style Inspiration**: Visual style categories
- **Real Results**: Integration with Google Custom Search

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Adaptive layouts for all screen sizes

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to platforms like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or GitHub Pages

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fashionate
JWT_SECRET=your-super-secret-jwt-key
GOOGLE_API_KEY=your-google-api-key
GOOGLE_CSE_ID=your-google-custom-search-engine-id
```

### Frontend (vite.config.js)
```javascript
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
```

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS is configured for frontend URL
2. **MongoDB Connection**: Check MongoDB URI and network connectivity
3. **Google API**: Verify API key and Custom Search Engine ID
4. **Port Conflicts**: Ensure ports 5000 (backend) and 5173 (frontend) are available

### Debug Mode

Backend: `DEBUG=* npm run dev`
Frontend: Check browser console for errors

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Frontend Developer**: Alex Chen
- **Backend Developer**: Sarah Rodriguez  
- **UI/UX Designer**: Marcus Johnson
- **Connectivity Specialist**: Priya Patel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**FASHIONATE** - Where Style Meets Technology ✨
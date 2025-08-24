import axios from 'axios';

// Create axios instance with base configuration
const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
api.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('user');
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

// Auth API functions
export const authAPI = {
  // Sign up user
  signup: async (userData) => {
    const response = await api.post('/auth/signup', {
      fullName: userData.username,
      email: userData.email,
      password: userData.password,
      gender: userData.gender.toLowerCase()
    });
    return response.data;
  },

  // Sign in user
  login: async (userData) => {
    const response = await api.post('/auth/login', {
      email: userData.email,
      password: userData.password
    });
    return response.data;
  },

  // Logout user
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  // Check if user is authenticated
  checkAuth: async () => {
    const response = await api.get('/auth/check');
    return response.data;
  }
};

// Search API functions
export const searchAPI = {
  // Text search
  textSearch: async (query, brand = '', price = '') => {
    const params = new URLSearchParams({ q: query });
    if (brand) params.append('brand', brand);
    if (price) params.append('price', price);
    
    const response = await api.get(`/search?${params.toString()}`);
    return response.data;
  },

  // Image search
  imageSearch: async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await api.post('/search/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
};

export default api;


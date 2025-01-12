import axios from 'axios';

let accessToken: string | null = null;

// Create Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: true, // Include cookies in requests
});

// Add Authorization header for requests
api.interceptors.request.use(
  (config) => {
    if (!accessToken && typeof window !== 'undefined') {
      accessToken = localStorage.getItem('accessToken'); // Safely fetch from localStorage
    }

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      console.log('Authorization header added:', config.headers['Authorization']);
    } else {
      console.warn('Access token is missing!');
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Set accessToken utility function
export const setAccessToken = (token: string | null) => {
  accessToken = token;
  if (typeof window !== 'undefined') {
    if (token) {
      localStorage.setItem('accessToken', token); // Safely store in localStorage
    } else {
      localStorage.removeItem('accessToken'); // Remove token if null
    }
  }
  console.log('Access token set:', accessToken);
};

export default api;

import { useRouter } from 'next/navigation';
import { setAccessToken } from '@/lib/axiosInstance'; // Axios instance and token setter

export default function useLogout() {
  const router = useRouter();

  const logout = async () => {
    try {
      // Clear the access token from memory
      setAccessToken(null);

      // Clear any tokens stored in localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
      }

      // Redirect to login page
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      router.push('/login'); // Redirect even if logout API fails
    }
  };

  return logout;
};

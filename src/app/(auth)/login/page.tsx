'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Alert from '@/components/ui/alert';
import { setAccessToken } from '@/lib/axiosInstance';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null); // Clear error messages

    if (!formData.email || !formData.password) {
      setErrorMessage('Email and password are required!');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/users/login',
        formData,
        { withCredentials: true }
      );

      const { accessToken } = response.data;
      setAccessToken(accessToken); // Save token in localStorage and memory
      router.push('/dashboard'); // Navigate to dashboard
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || 'Login failed!');
      } else {
        setErrorMessage('Login failed!');
      }
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 shadow-lg bg-white rounded-lg">
      <h2 className="text-center text-xl font-bold">Login</h2>
      {errorMessage && (
        <Alert type="error" onDismiss={() => setErrorMessage(null)}>
          {errorMessage}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

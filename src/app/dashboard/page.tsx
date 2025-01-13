/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HeroParallax } from '@/components/ui/hero-parallax';
import useLogout from '@/hooks/useLogout';
import api, { setAccessToken } from '@/lib/axiosInstance';

const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cursor.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editorially.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editrix.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
  },
];

export default function Dashboard() {
  const [user, setUser] = useState<any>(null); // User data state
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter();
  const logout = useLogout();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('accessToken'); // Get token from localStorage
        if (!token) {
          console.warn('No access token found. Redirecting to login...');
          router.push('/login');
          return;
        }

        setAccessToken(token); // Set token in memory for Axios instance
        const response = await api.get('/users/me'); // Fetch user data
        setUser(response.data);
      } catch {
        console.error('Error fetching user details:');
        router.push('/login'); // Redirect to login on error
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>; // Show loading spinner or message
  }

  if (!user) {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="w-full h-full bg-black">
      <div className="flex flex-col items-center justify-center bg-black">
        <nav className="w-full flex justify-end p-4 bg-black shadow-md">
          <button
            onClick={logout}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Logout
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>
      </div>
      <HeroParallax products={products} />
    </div>
  );
}

import React from 'react';
import { Login } from '@/screens/Login';

export const metadata = {
  title: 'Login to FalconSpido Terminal - Advanced Algorithmic Trading',
  description: 'Log in to your secure FalconSpido advisor portal. Access your favorited indicators, custom strategy results, and personalized Pine Script settings.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function LoginPage() {
  return <Login />;
}

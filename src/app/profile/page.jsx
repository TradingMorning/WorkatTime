'use client'
import React from 'react';
import { Profile } from '@/screens/Profile';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );
}

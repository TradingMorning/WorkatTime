import React from 'react';
import { Register } from '@/screens/Register';

export const metadata = {
  title: 'Register Developer Account - FalconSpido Terminal',
  description: 'Join FalconSpido. Secure your developer portal, publish technical pine script indicators, upload backtest files, and showcase strategies or scripts.',
  openGraph: {
    title: 'Register Developer Account - FalconSpido Terminal',
    description: 'Join FalconSpido. Secure your developer portal, publish technical pine script indicators, upload backtest files, and showcase strategies or scripts.',
    type: 'website',
  }
};

export default function RegisterPage() {
  return <Register />;
}

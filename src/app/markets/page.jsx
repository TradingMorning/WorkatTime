import React from 'react';
import { Markets } from '@/screens/Markets';

export const metadata = {
  title: 'Real-time Markets Heatmap, Cryptocurrencies & Forex Hub - FalconSpido',
  description: 'Filter global indices, forex pairs, and crypto tokens dynamically. View instant changes, high/low distributions, and overall technical oscillator ratings.',
  openGraph: {
    title: 'Real-time Markets Heatmap, Cryptocurrencies & Forex Hub - FalconSpido',
    description: 'Filter global indices, forex pairs, and crypto tokens dynamically. View instant changes, high/low distributions, and overall technical oscillator ratings.',
    type: 'website',
  }
};

export default function MarketsPage() {
  return <Markets />;
}

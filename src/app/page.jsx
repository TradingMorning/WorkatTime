import React from 'react';
import { Home } from '@/screens/Home';

export const metadata = {
  title: 'FalconSpido Terminal - Premium Technical Indicators & Pine Script Strategies',
  description: 'Explore the definitive directory of premium trading indicators, algorithmic Pine Script templates, expert advisors, custom indicators, and risk management calculators.',
  openGraph: {
    title: 'FalconSpido Terminal - Premium Technical Indicators & Pine Script Strategies',
    description: 'Explore the definitive directory of premium trading indicators, algorithmic Pine Script templates, expert advisors, custom indicators, and risk management calculators.',
    url: 'https://falconspido.com',
    type: 'website',
  }
};

export default function HomePage() {
  return <Home />;
}

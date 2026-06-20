import React from 'react';
import { Compare } from '@/screens/Compare';

export const metadata = {
  title: 'Compare Technical Indicators & Pine Script Strategies - FalconSpido',
  description: 'Side-by-side performance comparatives of premium trading indicators, algorithmic Pine Script codes, win-rates, maximum drawdowns, and pricing schedules.',
  openGraph: {
    title: 'Compare Technical Indicators & Pine Script Strategies - FalconSpido',
    description: 'Side-by-side performance comparatives of premium trading indicators, algorithmic Pine Script codes, win-rates, maximum drawdowns, and pricing schedules.',
    type: 'website',
  }
};

export default function ComparePage() {
  return <Compare />;
}

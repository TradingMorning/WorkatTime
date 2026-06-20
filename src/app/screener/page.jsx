import React from 'react';
import { Screener } from '@/screens/Screener';

export const metadata = {
  title: 'Interactive Multi-Asset Market Screener & Oscillator Scanner - FalconSpido',
  description: 'Screen international indices, foreign exchange, or crypto assets by overbought/oversold relative strength thresholds, moving averages cross-overs, or MACD divergences.',
  openGraph: {
    title: 'Interactive Multi-Asset Market Screener & Oscillator Scanner - FalconSpido',
    description: 'Screen international indices, foreign exchange, or crypto assets by overbought/oversold relative strength thresholds, moving averages cross-overs, or MACD divergences.',
    type: 'website',
  }
};

export default function ScreenerPage() {
  return <Screener />;
}

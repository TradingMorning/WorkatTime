import React from 'react';
import { Strategy } from '@/screens/Strategy';

export const metadata = {
  title: 'AI Trading Signal Discovery & Pine Script Backtest Logs - FalconSpido',
  description: 'Uncover real algorithmic trade results. Scan detailed profit factors, win trades ratio graphs, average exit drawdowns, and optimal indicator trigger settings.',
  openGraph: {
    title: 'AI Trading Signal Discovery & Pine Script Backtest Logs - FalconSpido',
    description: 'Uncover real algorithmic trade results. Scan detailed profit factors, win trades ratio graphs, average exit drawdowns, and optimal indicator trigger settings.',
    type: 'website',
  }
};

export default function StrategyPage() {
  return <Strategy />;
}

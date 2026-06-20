import React from 'react';
import { Indicators } from '@/screens/Indicators';

export const metadata = {
  title: 'Premium Technical Indicators Catalog & Pine Script Strategies - FalconSpido',
  description: 'Access the largest directory of premium tools for TradingView, MetaTrader 4/5, NinjaTrader and cTrader. Filter by asset class, pricing models, and direct verification tiers.',
  openGraph: {
    title: 'Premium Technical Indicators Catalog & Pine Script Strategies - FalconSpido',
    description: 'Access the largest directory of premium tools for TradingView, MetaTrader 4/5, NinjaTrader and cTrader. Filter by asset class, pricing models, and direct verification tiers.',
    type: 'website',
  }
};

export default function IndicatorsPage() {
  return <Indicators />;
}

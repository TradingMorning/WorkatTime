import React from 'react';
import { IndicatorDetail } from '@/screens/IndicatorDetail';

function formatSlug(slug) {
  if (!slug) return '';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }) {
  // Await params if it's treated as a promise in dynamic APIs
  const resolvedParams = await params;
  const slugName = formatSlug(resolvedParams?.slug);

  return {
    title: `${slugName || 'Premium'} Trading Indicator & Performance Review - FalconSpido`,
    description: `Analyze live backtest logs, win-rates, preset parameters, buy/sell alerts, and verified community reviews for ${slugName || 'this indicator'} on FalconSpido.`,
    openGraph: {
      title: `${slugName || 'Premium'} Trading Indicator & Performance Review`,
      description: `Analyze live backtest logs, win-rates, preset parameters, buy/sell alerts, and verified community reviews for ${slugName || 'this indicator'} on FalconSpido.`,
      type: 'article',
    }
  };
}

export default function IndicatorDetailPage() {
  return <IndicatorDetail />;
}

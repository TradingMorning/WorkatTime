import React from 'react';
import { News } from '@/screens/News';

export const metadata = {
  title: 'Breaking Financial News Ingestion & Volatility Alert Feed - FalconSpido',
  description: 'Instant multi-source news indexing. Track market sentiment triggers, inflation headlines, commodity trends, and geopolitics dynamically via FalconSpido.',
  openGraph: {
    title: 'Breaking Financial News Ingestion & Volatility Alert Feed - FalconSpido',
    description: 'Instant multi-source news indexing. Track market sentiment triggers, inflation headlines, commodity trends, and geopolitics dynamically via FalconSpido.',
    type: 'website',
  }
};

export default function NewsPage() {
  return <News />;
}

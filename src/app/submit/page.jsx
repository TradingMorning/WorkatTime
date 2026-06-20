import React from 'react';
import { SubmitListing } from '@/screens/SubmitListing';

export const metadata = {
  title: 'Publish custom Pine Script Indicators & Trading Systems - FalconSpido',
  description: 'Submit your proprietary technical indicators, setup guidelines, EA presets, and backtest results. Establish algorithmic verified trust badges for potential clients.',
  openGraph: {
    title: 'Publish custom Pine Script Indicators & Trading Systems - FalconSpido',
    description: 'Submit your proprietary technical indicators, setup guidelines, EA presets, and backtest results. Establish algorithmic verified trust badges for potential clients.',
    type: 'website',
  }
};

export default function SubmitListingPage() {
  return <SubmitListing />;
}

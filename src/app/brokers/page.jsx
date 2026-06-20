import React from 'react';
import { Brokers } from '@/screens/Brokers';

export const metadata = {
  title: 'Trading Broker Affiliations & Verification - FalconSpido',
  description: 'Compare and research top regulated multi-asset brokers. Find optimal latency setups and API integration configurations for automatic executing terminals.',
  openGraph: {
    title: 'Trading Broker Affiliations & Verification - FalconSpido',
    description: 'Compare and research top regulated multi-asset brokers. Find optimal latency setups and API integration configurations for automatic executing terminals.',
    type: 'website',
  }
};

export default function BrokersPage() {
  return <Brokers />;
}

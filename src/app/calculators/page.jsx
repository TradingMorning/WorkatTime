import React from 'react';
import { Calculators } from '@/screens/Calculators';

export const metadata = {
  title: 'Trading Calculators: Position Sizing, DCA Grid & Risk Estimator - FalconSpido',
  description: 'Manage capital risk dynamically. Calculate exact lot/contract sizes, leverage requirements, fractional liquidation thresholds, and Dollar Cost Averaging (DCA) paths.',
  openGraph: {
    title: 'Trading Calculators: Position Sizing, DCA Grid & Risk Estimator - FalconSpido',
    description: 'Manage capital risk dynamically. Calculate exact lot/contract sizes, leverage requirements, fractional liquidation thresholds, and Dollar Cost Averaging (DCA) paths.',
    type: 'website',
  }
};

export default function CalculatorsPage() {
  return <Calculators />;
}

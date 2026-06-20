import React from 'react';
import { TermsOfService } from '@/screens/TermsOfService';

export const metadata = {
  title: 'Terms of Service, Licensing & Risk Disclosure Policies - FalconSpido',
  description: 'Understand operational legal terms, algorithmic indicator software licensing conditions, risk warning templates, and customer compliance standards.',
  openGraph: {
    title: 'Terms of Service, Licensing & Risk Disclosure Policies - FalconSpido',
    description: 'Understand operational legal terms, algorithmic indicator software licensing conditions, risk warning templates, and customer compliance standards.',
    type: 'website',
  }
};

export default function TermsPage() {
  return <TermsOfService />;
}

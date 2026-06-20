import React from 'react';
import { PrivacyPolicy } from '@/screens/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy & Cookie Disclosures - FalconSpido',
  description: 'Understand how FalconSpido Terminal processes user log metrics, encrypted JWT authentication files, and saved custom strategy favorites to safeguard sensitive account identities.',
  openGraph: {
    title: 'Privacy Policy & Cookie Disclosures - FalconSpido',
    description: 'Understand how FalconSpido Terminal processes user log metrics, encrypted JWT authentication files, and saved custom strategy favorites to safeguard sensitive account identities.',
    type: 'website',
  }
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}

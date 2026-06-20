import React from 'react';
import { MacroCalendar } from '@/screens/MacroCalendar';

export const metadata = {
  title: 'Global Economic Macro Calendar & Trading Catalyst Alerts - FalconSpido',
  description: 'Track key central bank decisions, CPI inflation announcements, GDP indexes, and unemployment releases. Stay alert to systemic pricing risks and volatility triggers.',
  openGraph: {
    title: 'Global Economic Macro Calendar & Trading Catalyst Alerts - FalconSpido',
    description: 'Track key central bank decisions, CPI inflation announcements, GDP indexes, and unemployment releases. Stay alert to systemic pricing risks and volatility triggers.',
    type: 'website',
  }
};

export default function MacroCalendarPage() {
  return <MacroCalendar />;
}

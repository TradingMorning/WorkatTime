import React from 'react';
import '../index.css';
import { ClientProviders } from './ClientProviders';

export const metadata = {
  title: 'FalconSpido - Premium Technical Indicators & Pine Script Strategies',
  description: 'Explore premium technical indicators, pine script strategies, expert advisors, real-time market data, risk calculators, and interactive screener tools on FalconSpido terminal.',
  metadataBase: new URL('https://falconspido.com'),
  alternates: {
    canonical: '/',
  },
  // Viewport and theme configuration handled cleanly by Next.js
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#040406',
  other: {
    'msapplication-TileColor': '#040406',
    'mobile-web-app-capable': 'yes',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'FalconSpido',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'FalconSpido - Premium Technical Indicators & Pine Script Strategies',
    description: 'Explore premium technical indicators, pine script strategies, expert advisors, real-time market data, risk calculators, and interactive screener tools on FalconSpido terminal.',
    type: 'website',
    url: 'https://falconspido.com',
    siteName: 'FalconSpido',
    images: [
      {
        url: 'https://falconspido.com/logo.png', // Absolute path ensures previews always render
        width: 512,
        height: 512,
        alt: 'FalconSpido Logo',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FalconSpido - Premium Technical Indicators & Pine Script Strategies',
    description: 'Explore premium technical indicators, pine script strategies, expert advisors, real-time market data, risk calculators, and interactive screener tools on FalconSpido terminal.',
    images: ['https://falconspido.com/logo.png'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      {/* 
        Next.js manually handles <head> metadata injected above. 
        No need to repeat metadata tags here to avoid duplication issues.
      */}
      <body className="min-h-screen bg-[#040406] text-slate-100 font-sans selection:bg-amber-500 selection:text-black antialiased">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}









// import React from 'react';
// import '../index.css';
// import { ClientProviders } from './ClientProviders';

// export const metadata = {
//   title: 'FalconSpido - Premium Technical Indicators & Pine Script Strategies',
//   description: 'Explore premium technical indicators, pine script strategies, expert advisors, real-time market data, risk calculators, and interactive screener tools on FalconSpido terminal.',
//   metadataBase: new URL('https://falconspido.com'),
//   alternates: {
//     canonical: '/',
//   },
//   icons: {
//     icon: '/logo.png',
//     shortcut: '/logo.png',
//     apple: '/logo.png',
//   },
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: 'black-translucent',
//     title: 'FalconSpido',
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   openGraph: {
//     title: 'FalconSpido - Premium Technical Indicators & Pine Script Strategies',
//     description: 'Explore premium technical indicators, pine script strategies, expert advisors, real-time market data, risk calculators, and interactive screener tools on FalconSpido terminal.',
//     type: 'website',
//     url: 'https://falconspido.com',
//     siteName: 'FalconSpido',
//     images: [
//       {
//         url: '/logo.png',
//         width: 512,
//         height: 512,
//         alt: 'FalconSpido Terminal Logo',
//       }
//     ]
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'FalconSpido - Premium Technical Indicators & Pine Script Strategies',
//     description: 'Explore premium technical indicators, pine script strategies, expert advisors, real-time market data, risk calculators, and interactive screener tools on FalconSpido terminal.',
//     images: ['/logo.png'],
//   }
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="dark">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
//         <meta name="theme-color" content="#06060c" />
//         <meta name="msapplication-TileColor" content="#06060c" />
//         <meta name="mobile-web-app-capable" content="yes" />
//       </head>
//       <body className="min-h-screen bg-[#040406] text-slate-100 font-sans selection:bg-amber-500 selection:text-black antialiased">
//         <ClientProviders>
//           {children}
//         </ClientProviders>
//       </body>
//     </html>
//   );
// }

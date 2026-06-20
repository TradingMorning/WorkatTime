export default function manifest() {
  return {
    name: 'FalconSpido Quantitative Terminal',
    short_name: 'FalconSpido',
    description: 'Elite trading indicators directory, robust expert advisors backtests, and quantitative strategy risk calculators.',
    start_url: '/',
    display: 'standalone',
    background_color: '#06060c',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };
}

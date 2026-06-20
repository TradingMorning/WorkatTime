export default async function sitemap() {
  const baseUrl = 'https://falconspido.com';
  
  // Static route nodes
  const staticPaths = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/brokers',
    '/macro-calendar',
    '/screener',
    '/markets',
    '/news',
    '/calculators',
    '/submit',
    '/indicators'
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Core indicator products slugs matching internal repository schemas
  const indicatorSlugs = [
    'apex-trend-sentinel-pro',
    'quantum-entropy-scalper-ea',
    'order-flow-delta-matrix',
    'falcon-multi-breakout-bot',
    'cybernetic-range-oscillator'
  ];

  const dynamicEntries = indicatorSlugs.map((slug) => ({
    url: `${baseUrl}/indicators/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticEntries, ...dynamicEntries];
}

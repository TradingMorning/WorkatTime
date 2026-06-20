export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/profile', 
        '/admin', 
        '/login', 
        '/register', 
        '/api/'
      ],
    },
    sitemap: 'https://falconspido.com/sitemap.xml',
  };
}

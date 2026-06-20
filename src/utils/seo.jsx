export function setSeo({ title, description, path = '', keywords = '', robots = 'index, follow', schema = null }) {
  if (typeof window === 'undefined') return;
  
  // Set window document title
  document.title = title || 'FalconSpido';
  
  const url = `https://falconspido.com${path}`;

  const upsert = (selector, attrName, attrValue, content) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement(attrName === 'rel' ? 'link' : 'meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    if (attrName === 'rel') {
      el.setAttribute('href', content);
    } else {
      el.setAttribute('content', content);
    }
  };

  // Base Description elements
  if (description) {
    upsert('meta[name="description"]', 'name', 'description', description);
    upsert('meta[property="og:description"]', 'property', 'og:description', description);
    upsert('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }

  // Open Graph Base Tags
  upsert('meta[property="og:title"]', 'property', 'og:title', title);
  upsert('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  upsert('meta[property="og:url"]', 'property', 'og:url', url);
  upsert('meta[property="og:type"]', 'property', 'og:type', 'website');
  upsert('meta[property="og:site_name"]', 'property', 'og:site_name', 'FalconSpido');
  upsert('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  
  // Image Meta Tags (Branding & Logo Sharing Setup)
  upsert('meta[property="og:image"]', 'property', 'og:image', 'https://falconspido.com/logo.png');
  upsert('meta[property="og:image:alt"]', 'property', 'og:image:alt', 'FalconSpido Terminal Logo');
  upsert('meta[property="og:image:type"]', 'property', 'og:image:type', 'image/png');
  upsert('meta[property="og:image:width"]', 'property', 'og:image:width', '512');
  upsert('meta[property="og:image:height"]', 'property', 'og:image:height', '512');
  upsert('meta[name="twitter:image"]', 'name', 'twitter:image', 'https://falconspido.com/logo.png');
  
  // Canonical links
  upsert('link[rel="canonical"]', 'rel', 'canonical', url);

  // Set robots indexing configuration
  upsert('meta[name="robots"]', 'name', 'robots', robots);

  // Set page meta keywords
  if (keywords) {
    upsert('meta[name="keywords"]', 'name', 'keywords', keywords);
  }

  // Inject additional custom rich-data Schema JSON-LD if provided
  if (schema) {
    const schemaId = 'dynamic-page-jsonld-schema';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.innerHTML = JSON.stringify(schema);
  }
}

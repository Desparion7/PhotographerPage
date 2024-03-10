const fs = require('fs');
const path = require('path');

// Lista ścieżek twojej strony
const pages = ['/', '/oferta', '/kontakt', '/portfolio'];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) =>
			`<url>
  <loc>${`https://www.adrianpruchnik.pl${page}`}</loc>
</url>`
	)
	.join('')}
</urlset>
`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);

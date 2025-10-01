export async function GET() {
	const site = 'https://syr.is';
	const urls = [
		{
			loc: `/`,
			changefreq: 'monthly',
			priority: '1.0'
		}
	];

	const urlset = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"> 
${urls
	.map(
		(u) => `  <url>
    <loc>${site}/${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(urlset, {
		headers: { 'Content-Type': 'application/xml' }
	});
}

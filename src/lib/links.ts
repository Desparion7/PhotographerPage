export const links = [
	{ name: 'strona główna', path: '/' },
	{ name: 'oferta', path: '/oferta' },
	{ name: 'portfolio', path: '/portfolio' },
	{ name: 'kontakt', path: '/kontakt' },
] as const;

export const linksMobile = [
	{
		name: 'Strona główna',
		hash: '/',
	},
	{
		name: 'portfolio',
		hash: '/portfolio',
	},
	{
		name: 'Kontakt',
		hash: '/kontakt',
	},
	{
		name: 'Oferta',
		hash: '/oferta',
	},
] as const;

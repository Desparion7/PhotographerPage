import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'main-background': 'var(--main-background)',
			},
			colors: {
				'main-color': 'var(--main-color)',
				'second-color': 'var(--second-color)',
			},
			screens: {
				custom: '315px',
			},
		},
	},
	plugins: [],
};
export default config;

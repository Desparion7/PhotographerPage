import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const montserrat = Montserrat({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
	title: 'Adrian Pruchnik - Profesjonalna Fotografia Ślubna i Okolicznościowa w Rzeszowie',
	description:
		'Odkryj niezapomniane zdjęcia ślubne i okolicznościowe z Rzeszowa od Adriana Pruchnika. Specjalizujemy się w tworzeniu emocjonalnych, autentycznych fotografii, które uwiecznią Twoje najważniejsze chwile. Zarezerwuj sesję już dziś!',
	icons: {
		icon: '/logo.png',
	},
	keywords:
		'Fotografia ślubna Rzeszów, fotograf okolicznościowy Rzeszów, profesjonalny fotograf, sesje ślubne, zdjęcia okolicznościowe, Adrian Pruchnik',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${montserrat.className} bg-main-background`}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}

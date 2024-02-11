import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const montserrat = Roboto_Slab({
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
		<html lang='pl'>
			<body className={`${montserrat.className} bg-main-background`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

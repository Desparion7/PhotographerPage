import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Toast from '@/ui/toast';

const montserrat = Roboto_Slab({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
	title: 'Adrian Pruchnik - Profesjonalna Fotografia Ślubna i Okolicznościowa w Rzeszowie',
	description:
		'Poznaj magię profesjonalnej fotografii ślubnej i okolicznościowej w Rzeszowie od Adriana Pruchnika. Specjalista w uchwyceniu niepowtarzalnych momentów i emocji. Adrian Pruchnik oferuje szeroki zakres usług fotograficznych: od sesji zaręczynowych, poprzez reportaż ślubny, aż po sesje rodzinne i okolicznościowe. Każda sesja to gwarancja wysokiej jakości zdjęć, które staną się bezcenną pamiątką na lata. Skontaktuj się i zarezerwuj termin, aby uwiecznić swoje wyjątkowe chwile w unikatowy sposób.',
	icons: {
		icon: '/favicon.ico',
	},
	twitter: {
		card: 'summary_large_image',
	},
	keywords:
		'Fotografia ślubna Rzeszów, fotograf okolicznościowy Rzeszów, Adrian Pruchnik, sesje zaręczynowe, reportaż ślubny, sesje rodzinne, fotografie pełne emocji, profesjonalna fotografia, pamiątka na lata, sesje zdjęciowe Rzeszów, najlepszy fotograf w Rzeszowie, zdjęcia ślubne Rzeszów, zdjęcia okolicznościowe, unikatowe sesje zdjęciowe',
	openGraph: {
		title: 'Adrian Pruchnik - Profesjonalna Fotografia Ślubna i Okolicznościowa',
		description:
			'Poznaj magię profesjonalnej fotografii ślubnej i okolicznościowej',
		url: 'https://www.adrianpruchnik.pl',
		images: [
			{
				url: 'https://www.adrianpruchnik.pl/opengraph-image.jpg',
				width: 1200,
				height: 600,
			},
		],
		type: 'website',
	},
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
				<Toast />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

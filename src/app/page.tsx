import Intro from './components/intro';
import AboutMe from './components/about-me';
import ButtonsSection from './components/buttons-section';
import CarouselSection from './components/carousel-section';
import AboutMyPhotos from './components/about-my-photos';
import PortfolioIntroduction from './components/portfolio-introduction';
import MyAdvices from './components/my-advices';
import ContactForm from './components/contact-form';
import ContactSection from './components/contact-section';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<script type='application/ld+json'>
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ProfessionalService',
						name: 'Adrian Pruchnik - Profesjonalna Fotografia Ślubna i Okolicznościowa',
						image: 'https://www.adrianpruchnik.pl/logo.jpg',
						'@id': '',
						url: 'https://www.adrianpruchnik.pl/',
						telephone: '+48-796-390-226',
						openingHoursSpecification: [
							{
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: [
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
								],
								opens: '08:00',
								closes: '16:00',
							},
						],
						sameAs: [
							'https://www.facebook.com/adrianpruchnikfotografia',
						],
						serviceArea: {
							'@type': 'AdministrativeArea',
							name: 'Polska',
						},
					})}
				</script>
			</Head>
			<Intro />
			<ButtonsSection />
			<AboutMe />
			<CarouselSection />
			<AboutMyPhotos />
			<PortfolioIntroduction />
			<MyAdvices />
			<ContactSection />
			<ContactForm />
		</>
	);
}

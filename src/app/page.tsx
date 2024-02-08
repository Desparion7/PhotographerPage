import Intro from './components/intro';
import AboutMe from './components/about-me';
import ButtonsSection from './components/buttons-section';
import CarouselSection from './components/carousel-section';
import AboutMyPhotos from './components/about-my-photos';
import PortfolioIntroduction from './components/portfolio-introduction';
import MyAdvices from './components/my-advices';
import Contact from './components/contact';
import ContactForm from './components/contact-form';

export default function Home() {
	return (
		<>
			<Intro />
			<ButtonsSection />
			<AboutMe />
			<CarouselSection />
			<AboutMyPhotos />
			<PortfolioIntroduction />
			<MyAdvices />
			<Contact />
			<ContactForm />
		</>
	);
}

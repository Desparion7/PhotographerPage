import Intro from './components/intro';
import ZoomOnScrollImage from '../components/zoomPhoto';
import AboutMe from './components/about-me';
import ButtonsSection from './components/buttons-section';
import CarouselSection from './components/carousel-section';

export default function Home() {
	return (
		<>
			<Intro />
			<ButtonsSection />
			<AboutMe />
			<CarouselSection />
			{/* <ZoomOnScrollImage /> */}
			<div className='min-h-[100vh]'></div>
		</>
	);
}

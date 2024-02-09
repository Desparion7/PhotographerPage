'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const AboutMyPhotos = () => {
	return (
		<section className='relative container mx-auto items-center w-[100%] py-5 xl:py-10 px-2 xl:px-5'>
			<div className='xl:mx-20'>
				<motion.h2
					className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold mb-3'
					initial={{ x: '-100px', opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
					viewport={{ once: true }}
				>
					CO WYRÓŻNIA FOTOGRAFIE ŚLUBNĄ W MOIM WYKONANIU
				</motion.h2>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
					<motion.div
						className='p-4 shadow-lg rounded-lg'
						initial={{ x: '-100px', opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ ease: 'easeOut', duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h3 className='font-semibold text-lg'>
							Wyczucie estetyki i kompozycji
						</h3>
						<p className='xl:text-lg leading-8'>
							Każde ujęcie, które tworzę, jest owocem głębokiego
							zrozumienia zasad kompozycji i estetyki. Starannie
							dobieram kąty, światło i kolor, aby moje zdjęcia nie
							tylko przyciągały wzrok, ale także opowiadały
							historie i budowały emocjonalny związek z widzem.
						</p>
					</motion.div>
					<motion.div
						className='p-4 shadow-lg rounded-lg'
						initial={{ x: '-100px', opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ ease: 'easeOut', duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h3 className='font-semibold text-lg'>
							Techniczna wiedza i innowacyjność
						</h3>
						<p className='xl:text-lg leading-8'>
							Moje doświadczenie i ciągłe dążenie do doskonałości
							w obszarze fotografii pozwala mi na wykorzystywanie
							najnowszych technologii i technik. Dzięki temu
							jestem w stanie realizować nawet najbardziej
							skomplikowane projekty, zapewniając zdjęcia
							najwyższej jakości.
						</p>
					</motion.div>
					<motion.div
						className='p-4 shadow-lg rounded-lg'
						initial={{ x: '-100px', opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ ease: 'easeOut', duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h3 className='font-semibold text-lg'>
							Umiejętność pracy z ludźmi
						</h3>
						<p className='xl:text-lg leading-8'>
							Fotografia to nie tylko praca z aparatem, ale przede
							wszystkim z ludźmi. Posiadam zdolność budowania
							relacji, dzięki czemu osoby fotografowane czują się
							komfortowo i swobodnie przed moim obiektywem. To
							pozwala mi uchwycić ich prawdziwe emocje i
							osobowość, co jest kluczowe dla tworzenia
							autentycznych i wyrazistych portretów.
						</p>
					</motion.div>
					<motion.div
						className='p-4 shadow-lg rounded-lg'
						initial={{ x: '-100px', opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ ease: 'easeOut', duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h3 className='font-semibold text-lg'>
							Elastyczność i adaptacja
						</h3>
						<p className='xl:text-lg leading-8'>
							W mojej pracy nie ma miejsca na stagnację. Jestem
							otwarty na nowe wyzwania i adaptuję się do
							zmieniających się warunków i oczekiwań klientów. Ta
							elastyczność pozwala mi na ciągły rozwój i tworzenie
							zdjęć, które nie tylko spełniają, ale często
							przekraczają oczekiwania.
						</p>
					</motion.div>
				</div>
				<motion.div
					className='mt-10'
					initial={{ opacity: 0 }}
					transition={{ duration: 2 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
				>
					<Image
						src='/main_page_photos/main-page-2-desktop.jpg'
						width={1980}
						height={1320}
						alt='Zjęcie tańczącej młodej pary wykonane przez Adriana Pruchnika'
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutMyPhotos;

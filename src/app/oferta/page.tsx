'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

const Offert = () => {
	return (
		<section className='relative lg:container lg:mx-auto px-4 w-[100%] lg:py-10 sm:px-5'>
			<motion.div
				className='px-2 xl:mx-20'
				initial={{ x: '-100px', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				viewport={{ once: true }}
			>
				<h1 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold my-5'>
					OFERTA
				</h1>
				<p className='mb-5 xl:text-lg leading-8'>
					Poniżej przedstawię Państwu pakiety zawierające najczęściej
					wybierane usługi- każdy pakiet możemy w dowolny sposób
					modyfikować. Jeśli któryś z pakietów przypadł Wam do gustu
					zachęcam do kontaktu oraz ewentualnych pytań i sugestii
				</p>
				<div className='flex items-center gap-2  lg:text-3xl'>
					<FaPhoneAlt  className='text-second-color'/>
					<p>+48 575 631 571</p>
				</div>
			</motion.div>
			<motion.div
				className='px-2 xl:mx-20'
				initial={{ x: '-100px', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				viewport={{ once: true }}
			>
				<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold my-5'>
					PAKIET: „KAMERALNIE” CENA PAKIETU: 2700 ZŁ
				</h2>
				<p className='mb-1 xl:text-lg leading-8'>
					Wykonanie reportażu od ceremonii w kościele/urzędzie do
					około godziny 22.00 – czas pracy do 10h
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Wykonanie zdjęć grupowych/pozowanych według wskazówek
					Państwa Młodych
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Plener w wybranym i zaakceptowanym przez Młodych oraz
					fotografa miejscu oraz terminie (łączny czas na plener wraz
					z dojazdem 8 godzin)
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Zdjęcia w formie elektronicznej do pobrania z bezpiecznego
					serwera, zabezpieczone hasłem
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Dojazd do 100 km od Rzeszowa
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Łączna liczba zdjęć z reportażu: 300
				</p>
			</motion.div>
			<motion.div
				className='px-2 xl:mx-20'
				initial={{ x: '-100px', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				viewport={{ once: true }}
			>
				<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold my-5'>
					PAKIET: „UROCZYŚCIE” CENA PAKIETU: 3200 ZŁ
				</h2>
				<p className='mb-1 xl:text-lg leading-8'>
					Wykonanie reportażu przygotowań do końca oczepin lub do
					około godziny 1.00 – czas pracy około 12-13 godzin
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Wykonanie zdjęć grupowych/pozowanych według wskazówek
					Państwa Młodych
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Plener w wybranym i zaakceptowanym przez Młodych oraz
					fotografa miejscu oraz terminie (łączny czas na plener wraz
					z dojazdem 12 godzin)
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Zdjęcia w formie elektronicznej do pobrania z bezpiecznego
					serwera, zabezpieczone hasłem
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Dojazd do 100 km od Rzeszowa
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Łączna liczba zdjęć z reportażu: 400
				</p>
			</motion.div>
			<motion.div
				className='px-2 xl:mx-20'
				initial={{ x: '-100px', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				viewport={{ once: true }}
			>
				<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold my-5'>
					PAKIET: „BEZGRANICZNIE” CENA PAKIETU: 3500 ZŁ
				</h2>
				<p className='mb-1 xl:text-lg leading-8'>
					Wykonanie reportażu przygotowań do końca oczepin lub do
					około godziny 1.00 – czas pracy około 12-13 godzin
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Wykonanie zdjęć grupowych/pozowanych według wskazówek
					Państwa Młodych
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Plener w wybranym i zaakceptowanym przez Młodych oraz
					fotografa miejscu oraz terminie (łączny czas na plener wraz
					z dojazdem 16 godzin)
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Zdjęcia w formie elektronicznej do pobrania z bezpiecznego
					serwera, zabezpieczone hasłem
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Dojazd do 150 km od Rzeszowa
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Łączna liczba zdjęć z reportażu: 550
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Fotoalbum na 15 rozkładówek- o wymiarach 25x25
				</p>
			</motion.div>
			<motion.div
				className='px-2 xl:mx-20'
				initial={{ x: '-100px', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				viewport={{ once: true }}
			>
				<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold my-5'>
					DLA CHCĄCYCH WIĘCEJ:
				</h2>
				<p className='mb-1 xl:text-lg leading-8'>
					Możliwość wykonania fotoksiążki, fotoalbumu, albumu,
					fotokalendarza oraz innych fotoproduktów ze zdjęciami z
					Waszego dnia – cena zależna od produktu Drugi fotograf-
					jeśli Twoje wesele ma być duże a zależy Ci na sporej ilości
					detali oraz dużej liczbie zdjęć – cena: do pakietu
					„Kameralnie” 1200 zł, do pakietu „Uroczyście” 1500 zł, do
					pakietu „Bezgranicznie” 1800 zł
				</p>
				<p className='mb-1 xl:text-lg leading-8'>
					Dodatkowa liczba zdjęć: 300 zł za 100 zdjęć
				</p>
			</motion.div>
		</section>
	);
};

export default Offert;

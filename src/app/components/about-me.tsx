'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutMe = () => {
	return (
		<section className='relative lg:container lg:mx-auto w-[100%] py-10 px-4 xl:px-5'>
			<motion.div
				className=' xl:mx-20 flex flex-col lg:flex-row justify-center items-center lg:justify-around'
				initial={{ opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
			>
				<div className='relative lg:w-[40%] mb-5 flex  justify-center rounded-lg'>
					<Image
						src='/Adrian Pruchnik Fotograf.jpg'
						width={500}
						height={500}
						alt='Zdjęcie Adriana Pruchnika Fotografa'
						className='w-[100%] rounded-lg'
					/>
				</div>
				<div className='lg:w-[50%]  shadow-lg rounded-lg p-3'>
					<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold mb-3'>
						O Mnie
					</h2>
					<p className='xl:text-lg  leading-8 mb-3'>
						Cześć, jestem Adrian. Nie będę pisał, że fotografia jest
						moją pasją, ponieważ w innym przypadku nie trafilibyście
						tutaj.
					</p>
					<p className='xl:text-lg leading-8'>
						Napisze tylko, że zawsze jeśli czegoś się podejmę
						wkładam w to całe swoje zaangażowanie. Nie inaczej jest
						przy świadczenia usług moim klientom. Jako fotograf
						ślubny pracuje od kilku lat. Jest to moja pasja, która
						sprawia mi ogrom przyjemności. Fotografuje głównie w
						okolicach Rzeszowa, województwo podkarpackie, lecz nic
						nie stoi na przeszkodzie aby wykonać sesje poza jego
						obrębem. Na pewno się dogadamy.
					</p>
				</div>
			</motion.div>
		</section>
	);
};

export default AboutMe;

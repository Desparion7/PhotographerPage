'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Intro = ({}) => {
	return (
		<section className='relative bg-black  flex justify-center items-center w-[100%] h-[88vh] sm:h-[90vh] bg-opacity-40 mb-20'>
			<div>
				<Image
					src='/main_page_photos/main-page.webp'
					alt='Uroczystości i eventy fotografowane przez Adriana Pruchnika'
					sizes='100vw'
					fill
					priority
					className='hidden custom:inline h-[90vh] object-cover z-[-3] '
				/>
				<Image
					src='/main_page_photos/main-page-mobile.webp'
					alt='Uroczystości i eventy fotografowane przez Adriana Pruchnika'
					sizes='100vw'
					fill
					priority
					className='custom:hidden h-[88vh] object-cover z-[-3] '
				/>
			</div>
			<div className='relative flex flex-col justify-center md:items-center h-[100vh] w-[100%]'>
				<motion.h1
					className='sm:flex relative uppercase text-center justify-center text-lg sm:text-3xl lg:text-4xl   p-4  text-white bg-black bg-opacity-60 tracking-wider w-[100%]'
					initial={{ x: '-50px', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
				>
					FOTOGRAF ŚLUBNY RZESZÓW, PODKARPACKIE
				</motion.h1>
				<motion.p
					initial={{ x: '-50px', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5, delay: 1 }}
					className='relative flex justify-center text-md sm:text-2xl lg:text-3xl  text-center p-4 text-white bg-black bg-opacity-60 tracking-wider w-[100%]'
				>
					&quot;PATRZ OCZYMA - FOTOGRAFUJ SERCEM&quot;
				</motion.p>
			</div>
		</section>
	);
};

export default Intro;

'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import ScrollDownBtn from '@/ui/scroll-down-btn';
import Link from 'next/link';

const Intro = ({}) => {
	return (
		<section className='relative bg-black  flex justify-center items-center w-[100%] h-[100vh] bg-opacity-40'>
			<div className=''>
				<Image
					src='/main-page.JPG'
					alt='Uroczystości i eventy fotografowane przez Adriana Pruchnika'
					sizes='100vw'
					fill
					priority
					className='hidden custom:inline object-cover z-[-3] '
				/>
				<Image
					src='/main-page-mobile.jpg'
					alt='Uroczystości i eventy fotografowane przez Adriana Pruchnika'
					sizes='100vw'
					fill
					priority
					className='custom:hidden object-cover z-[-3] '
				/>
			</div>
			<div className='relative flex flex-col gap-3 justify-center md:items-center h-[100vh] w-[100%]'>
				<motion.h1
					className='sm:flex relative uppercase text-center justify-center text-lg sm:text-3xl lg:text-4xl  font-bold p-4 mb-4 text-white bg-black bg-opacity-80 tracking-wider'
					initial={{ x: '-50px', opacity: 0 }} // Start poza ekranem z lewej
					animate={{ x: 0, opacity: 1 }} // Animuj do pozycji początkowej
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					FOTOGRAF ŚLUBNY RZESZÓW, PODKARPACKIE
				</motion.h1>
				<motion.p
					initial={{ x: '-50px', opacity: 0 }} // Start poza ekranem z lewej
					animate={{ x: 0, opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
					className='relative flex justify-center text-md sm:text-2xl lg:text-3xl  text-center p-4 text-white bg-black bg-opacity-80 tracking-wider'
				>
					&quot;PATRZ OCZYMA - FOTOGRAFUJ SERCEM&quot;
				</motion.p>
			</div>
			{/* <ScrollDownBtn /> */}
		</section>
	);
};

export default Intro;

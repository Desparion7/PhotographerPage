'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// const ZoomOnScrollImage = ({ src, alt }) => {
const ZoomOnScrollImage = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(
		scrollYProgress,
		[0.25, 0.5, 0.75, 1,],
		[1.5, 1.3, 1.1, 1,]
	);

	return (
		<div className='overflow-hidden relative w-[40vw] h-[50vh] mx-auto my-8'>
			<motion.div
				className='absolute inset-0 w-full h-full'
				style={{ scale }}
				transition={{ type: 'spring', stiffness: 100, damping: 10 }}
			>
				<Image
					src='/49_mobile.jpg'
					width={500}
					height={500}
					alt='Zdjęcie pry młodej wykonane'
					className=' '
				/>
			</motion.div>
		</div>
	);
};

export default ZoomOnScrollImage;

'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImagePopup from '@/components/image-popup';
import { photosList } from '@/lib/photo';
import PhotosSecondGroup from './components/photos-second-group';

const Portfolio = () => {
	const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(
		null
	);

	const handleImageClick = (index: number) => {
		setSelectedImgIndex(index);
	};
	return (
		<>
			<section className='relative bg-black  flex justify-center items-center w-[100%] h-[91vh] bg-opacity-40'>
				<Image
					src='/portfolio/portfolio-1-desktop.jpg'
					alt='Uroczystości i eventy fotografowane przez Adriana Pruchnika'
					sizes='100vw'
					fill
					priority
					className='hidden lg:inline object-cover z-[-3] '
				/>
				<Image
					src='/portfolio/portfolio-1-mobile.jpg'
					alt='Uroczystości i eventy fotografowane przez Adriana Pruchnika'
					sizes='100vw'
					fill
					priority
					className='lg:hidden object-cover  z-[-3] '
				/>
				<div className='relative flex flex-col justify-center md:items-center h-[100vh] w-[100%]'>
					<motion.h1
						className='sm:flex relative uppercase text-center justify-center text-lg sm:text-3xl lg:text-4xl   p-4 text-white bg-black bg-opacity-60 tracking-wider w-[100%]'
						initial={{ x: '-50px', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							delay: 0.5,
						}}
					>
						GALERIA ZDJĘĆ
					</motion.h1>
					<motion.p
						initial={{ x: '-50px', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							delay: 1,
						}}
						className='relative flex justify-center text-md sm:text-2xl lg:text-3xl  text-center p-4 pt-2 text-white bg-black bg-opacity-60 tracking-wider w-[100%]'
					>
						Zapraszam do przeglądania moich realizacji
					</motion.p>
				</div>
			</section>
			<section className='relative lg:container lg:mx-auto flex flex-col items-center w-[100%] px-4 lg:py-10 sm:px-5'>
				<motion.div
					className='px-2 xl:mx-20'
					initial={{ x: '-100px', opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold my-5'>
						ZDJĘCIA ŚLUBNE - ULUBIONE KADRY
					</h2>
				</motion.div>
				<div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
					{photosList.map((image, index) => (
						<motion.div
							initial={{ scale: 0.9 }}
							whileHover={{ scale: 1 }}
							transition={{ duration: 0.3 }}
							key={index}
							className='w-full h-full cursor-pointer'
							onClick={() => handleImageClick(index)}
						>
							<Image
								src={image.src}
								width={1169}
								height={780}
								alt={image.alt}
								placeholder='blur'
							/>
						</motion.div>
					))}
				</div>
				<PhotosSecondGroup />
				{selectedImgIndex !== null && (
					<ImagePopup
						src={photosList[selectedImgIndex].src}
						onClose={() => setSelectedImgIndex(null)}
						currentIndex={selectedImgIndex}
						setImageIndex={setSelectedImgIndex}
						totalImages={photosList.length}
					/>
				)}
			</section>
		</>
	);
};

export default Portfolio;

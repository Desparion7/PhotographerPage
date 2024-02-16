'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const images = [
	{
		src: '/main_page_photos/portfolio1_desktop.jpg',
		width: 1980,
		height: 1322,
		alt: 'tancząca młoda para- zdjęcie wykonane przez Adriana Pruchnika',
	},
	{
		src: '/main_page_photos/portfolio2_desktop.jpg',
		width: 1980,
		height: 1322,
		alt: 'tancząca młoda para- zdjęcie wykonane przez Adriana Pruchnika',
	},
	{
		src: '/main_page_photos/portfolio3_desktop.jpg',
		width: 1024,
		height: 684,
		alt: 'tancząca młoda para- zdjęcie wykonane przez Adriana Pruchnika',
	},
	{
		src: '/main_page_photos/portfolio4_desktop.jpg',
		width: 1980,
		height: 1322,
		alt: 'tancząca młoda para- zdjęcie wykonane przez Adriana Pruchnika',
	},
];

const PortfolioIntroduction = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [activeImageSrc, setActiveImageSrc] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (imageSrc: string) => {
		setActiveImageSrc(imageSrc);
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	const buttonVariants = {
		hover: {
			scale: 1.05,
			transition: { duration: 0.3 },
		},
	};
	const arrowVariants = {
		initial: { x: 0 },
		hover: {
			x: 10,
			transition: {
				duration: 0.3,
				repeat: Infinity,
				repeatType: 'reverse' as const,
			},
		},
	};
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModal();
			}
		};
		if (isModalOpen) {
			window.addEventListener('keydown', handleKeyDown);
		}
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isModalOpen]);
	return (
		<section className='relative container mx-auto items-center w-[100%] py-5 xl:py-10 px-2  xl:px-5'>
			<div className='xl:mx-20'>
				<motion.div
					initial={{ x: '-100px', opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold mb-3'>
						PORTFOLIO - ZOBACZ JAK MOGĄ WYGLĄDAĆ TWOJE ZDJĘCIA
					</h2>
					<p className='mb-5 xl:text-lg leading-8'>
						W tym miejscu możesz zapoznać się z kilkoma zdjęciami
						jakie wykonałem dla moich par młodych – mam nadzieję, że
						nasze gusty w kwestii fotografii okażą się podobne.
						Zapraszam do portfolio gdzie prezentowana jest bogatsza
						galeria zdjęć.
					</p>
					<Link href='/portfolio' className='my-5 sm:my-10'>
						<motion.button
							className='flex flex-row items-center gap-3 border-black border-4 py-3  px-6 rounded-3xl bg-black  text-main-color uppercase'
							onHoverStart={() => setIsHovered(true)}
							onHoverEnd={() => setIsHovered(false)}
							variants={buttonVariants}
							whileHover='hover'
						>
							<span>Galeria</span>
							<motion.span
								className='inline-block'
								variants={arrowVariants}
								animate={isHovered ? 'hover' : 'initial'}
							>
								<FaArrowRight />
							</motion.span>
						</motion.button>
					</Link>
				</motion.div>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
					{images.map((image, index) => (
						<div
							key={index}
							className='overflow-hidden cursor-pointer rounded-lg'
							onClick={() => openModal(image.src)}
						>
							<motion.div
								initial={{ scale: 1.2 }}
								whileHover={{ scale: 1 }}
								transition={{ duration: 0.3 }}
								className='overflow-hidden rounded-lg'
							>
								<Image
									src={image.src}
									width={image.width}
									height={image.height}
									alt={image.alt}
									className='rounded-lg'
								/>
							</motion.div>
						</div>
					))}
				</div>
				{isModalOpen && (
					<div
						className='fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center'
						onClick={closeModal}
					>
						<Image
							src={activeImageSrc}
							objectFit='contain'
							alt='Pełnoekranowe zdjęcie'
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default PortfolioIntroduction;

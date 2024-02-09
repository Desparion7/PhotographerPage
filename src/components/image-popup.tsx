'use client';
import React, { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

type ImagePopupProps = {
	src: StaticImageData | string;
	onClose: () => void;
	currentIndex: number;
	setImageIndex: (index: number) => void;
	totalImages: number;
};
const ImagePopup = ({
	src,
	onClose,
	currentIndex,
	setImageIndex,
	totalImages,
}: ImagePopupProps) => {
	const handlePrev = useCallback(() => {
		const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
		setImageIndex(prevIndex);
	}, [currentIndex, totalImages, setImageIndex]);

	const handleNext = useCallback(() => {
		const nextIndex = (currentIndex + 1) % totalImages;
		setImageIndex(nextIndex);
	}, [currentIndex, totalImages, setImageIndex]);

	const handleCloseClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClose();
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'Escape':
					onClose();
					break;
				case 'ArrowLeft':
					handlePrev();
					break;
				case 'ArrowRight':
					handleNext();
					break;
				default:
					break;
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [currentIndex, onClose, handlePrev, handleNext]);

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='fixed inset-0 z-50 flex items-center justify-center h-screen w-full'
				onClick={handleCloseClick}
				style={{ background: 'rgba(0, 0, 0, 0.8)' }}
			>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 50, opacity: 0 }}
					className='relative w-full h-full'
					onClick={(e) => e.stopPropagation()}
				>
					<Image
						src={src}
						alt='Zdjęcie'
						layout='fill'
						objectFit='contain'
						priority
					/>

					<div className='absolute top-0 left-0 z-50 p-2 xl:p-4 xl:text-2xl text-white bg-black bg-opacity-35 rounded-full'>
						{currentIndex + 1} / {totalImages}
					</div>
					<motion.button
						onClick={handlePrev}
						className='absolute flex left-0 top-[50%] z-50 p-2 m-2 xl:text-3xl bg-black bg-opacity-35 text-white rounded-full'
						aria-label='Poprzedni obraz'
						whileHover={{ scale: 1.2 }}
					>
						<MdOutlineArrowBackIos />
					</motion.button>
					<motion.button
						onClick={handleNext}
						className='absolute right-0 top-[50%] z-50 p-2 m-2 xl:text-3xl text-white bg-black bg-opacity-35 rounded-full'
						aria-label='Następny obraz'
						whileHover={{ scale: 1.2 }}
					>
						<MdArrowForwardIos />
					</motion.button>
					<motion.button
						onClick={handleCloseClick}
						className='absolute top-0 right-0 z-50 p-3 m-2 xl:text-2xl text-white bg-black bg-opacity-35 rounded-full'
						aria-label='Zamknij'
						whileHover={{ scale: 1.2 }}
						transition={{ duration: 0.3 }}
					>
						<GrClose />
					</motion.button>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ImagePopup;

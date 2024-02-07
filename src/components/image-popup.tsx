'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
	MdArrowForwardIos,
	MdArrowBackIos,
	MdOutlineArrowBackIos,
} from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

type ImagePopupProps = {
	src: string;
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
	const handlePrev = () => {
		const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
		setImageIndex(prevIndex);
	};
	const handleNext = () => {
		const nextIndex = (currentIndex + 1) % totalImages;
		setImageIndex(nextIndex);
	};
	const handleCloseClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClose();
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='fixed inset-0 z-50 flex items-center justify-center p-4'
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
					<div className='absolute top-0 left-0 z-50 p-4 text-2xl text-white'>
						{currentIndex + 1} / {totalImages}
					</div>
					<motion.button
						onClick={handlePrev}
						className='absolute flex left-20 top-[50%] z-50 p-2 m-2 text-3xl bg-black bg-opacity-35 text-white rounded-full'
						aria-label='Poprzedni obraz'
						whileHover={{ scale: 1.2 }}
					>
						<MdOutlineArrowBackIos />
					</motion.button>
					<motion.button
						onClick={handleNext}
						className='absolute right-20 top-[50%] z-50 p-2 m-2 text-3xl text-white bg-black bg-opacity-35 rounded-full'
						aria-label='Następny obraz'
						whileHover={{ scale: 1.2 }}
					>
						<MdArrowForwardIos />
					</motion.button>
					<Image
						src={src}
						alt='Zdjęcie'
						layout='fill'
						objectFit='contain'
						priority
					/>
					<motion.button
						onClick={handleCloseClick}
						className='absolute top-0 right-20 z-50 p-3 m-2 text-2xl text-white bg-black bg-opacity-35 rounded-full'
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

{
	/* <motion.div
	className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center p-4'
	initial={{ opacity: 0 }}
	animate={{ opacity: 1 }}
	exit={{ opacity: 0 }}
	onClick={handleCloseClick}
>
	<motion.div
		initial={{ scale: 0 }}
		animate={{ scale: 1 }}
		exit={{ scale: 0 }}
	>
		<Image
			src={src}
			width={1169}
			height={780}
			alt='Zdjęcie'
			layout='responsive'
		/>
	</motion.div>
</motion.div>; */
}

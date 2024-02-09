import React, { useState } from 'react';
import { photosList2 } from '@/lib/photo';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ImagePopup from '@/components/image-popup';

const PhotosSecondGroup = () => {
	const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(
		null
	);

	const handleImageClick = (index: number) => {
		setSelectedImgIndex(index);
	};
	return (
		<>
			<motion.div
				className='px-2 xl:mx-20'
				initial={{ x: '-100px', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				viewport={{ once: true }}
			>
				<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold my-5'>
					ZDJĘCIA INNYCH OKAZJI - ULUBIONE KADRY
				</h2>
			</motion.div>
			<div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
				{photosList2.map((image, index) => (
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
			{selectedImgIndex !== null && (
				<ImagePopup
					src={photosList2[selectedImgIndex].src}
					onClose={() => setSelectedImgIndex(null)}
					currentIndex={selectedImgIndex}
					setImageIndex={setSelectedImgIndex}
					totalImages={photosList2.length}
				/>
			)}
		</>
	);
};

export default PhotosSecondGroup;

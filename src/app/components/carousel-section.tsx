'use client';
import ImagePopup from '@/components/image-popup';
import Image from 'next/image';
import React, { useState } from 'react';

const images = [
	{
		src: '/13_mobile.jpg',
		alt: 'zdjęcie Panny młodej wykonane przez Adrian Pruchnik',
	},
	{
		src: '/33_mobile.jpg',
		alt: 'zdjęcie Panny młodej wykonane przez Adrian Pruchnik',
	},
	{
		src: '/10_mobile.jpg',
		alt: 'zdjęcie Panny młodej wykonane przez Adrian Pruchnik',
	},
	{
		src: '/22_mobile.jpg',
		alt: 'zdjęcie Panny młodej wykonane przez Adrian Pruchnik',
	},
	{
		src: '/48_mobile.jpg',
		alt: 'zdjęcie Panny młodej wykonane przez Adrian Pruchnik',
	},
	{
		src: '/21_mobile.jpg',
		alt: 'zdjęcie Panny młodej wykonane przez Adrian Pruchnik',
	},
];

const CarouselSection = () => {
	const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(
		null
	);

	const handleImageClick = (index: number) => {
		setSelectedImgIndex(index);
	};

	return (
		<section>
			<div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
				{images.map((image, index) => (
					<div
						key={index}
						className='w-full h-full cursor-pointer'
						onClick={() => handleImageClick(index)}
					>
						<Image
							src={image.src}
							width={1169}
							height={780}
							alt={image.alt}
							layout='responsive'
						/>
					</div>
				))}
			</div>
			{selectedImgIndex !== null && (
				<ImagePopup
					src={images[selectedImgIndex].src}
					onClose={() => setSelectedImgIndex(null)}
					currentIndex={selectedImgIndex}
					setImageIndex={setSelectedImgIndex}
					totalImages={images.length}
				/>
			)}
		</section>
	);
};

export default CarouselSection;

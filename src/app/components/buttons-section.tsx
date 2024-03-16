'use client';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ButtonsSection = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
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
	return (
		<section className='relative container mx-auto flex justify-center items-center w-[100%] lg:py-10 mt-5 sm:px-5'>
			<div className='flex flex-col lg:flex-row justify-center gap-3 w-[100%]'>
				<motion.div
					className='flex flex-col justify-center items-center'
					initial={{ opacity: 0, translateX: '-200px' }}
					whileInView={{ opacity: 1, translateX: 0 }}
					transition={{ ease: 'easeOut', duration: 1 }}
					viewport={{
						once: true,
					}}
				>
					<h2 className='text-black my-5 sm:my-10 text-2xl sm:text-4xl text-center'>
						Profesjonalne Zdjęcia Ślubne
					</h2>
					<div className='flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 text-sm sm:text-md w-[100%]'>
						<Link href='/oferta'>
							<motion.button
								className='flex flex-row items-center gap-3 border-black border-4 py-3 px-6 rounded-3xl bg-black  text-main-color uppercase shadow-btn'
								onHoverStart={() => setIsHovered(true)}
								onHoverEnd={() => setIsHovered(false)}
								variants={buttonVariants}
								whileHover='hover'
							>
								<span>Moja Oferta </span>
								<motion.span
									className='inline-block'
									variants={arrowVariants}
									animate={isHovered ? 'hover' : 'initial'}
								>
									<FaArrowRight />
								</motion.span>
							</motion.button>
						</Link>
						<Link href='/kontakt'>
							<motion.button
								className='flex flex-row items-center gap-3 border-black border-4 py-3 px-6 rounded-3xl uppercase shadow-btn'
								onHoverStart={() => setIsHovered2(true)}
								onHoverEnd={() => setIsHovered2(false)}
								variants={buttonVariants}
								whileHover='hover'
							>
								<span>Skontaktuj się</span>
								<motion.span
									className='inline-block'
									variants={arrowVariants}
									animate={isHovered2 ? 'hover' : 'initial'}
								>
									<FaArrowRight />
								</motion.span>
							</motion.button>
						</Link>
					</div>
				</motion.div>
				<div className='lg:w-[40%]'>
					<div
						className='xl:relative  xl:mb-5 flex justify-center rounded-lg'
						// initial={{ opacity: 0, translateX: 200 }}
						// whileInView={{ opacity: 1, translateX: 0 }}
						// transition={{ ease: 'easeOut', duration: 1 }}
						// viewport={{
						// 	once: true,
						// }}
					>
						<Image
							src='/camera.png'
							width={600}
							height={766}
							alt='aparat fotograficzny'
							className='w-[18rem] '
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ButtonsSection;

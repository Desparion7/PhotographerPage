'use client';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { motion } from 'framer-motion';

const ContactSection = () => {
	return (
		<section className='relative container mx-auto items-center w-[100%] py-5 xl:py-10 px-2  xl:px-5 text-black'>
			<motion.div
				className='xl:mx-20'
				initial={{ x: '-100px', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				viewport={{ once: true }}
			>
				<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold mb-3'>
					KONTAKT
				</h2>
				<div className='flex flex-col gap-3'>
					<div className='flex items-center gap-2  lg:text-3xl'>
						<FaPhoneAlt />
						<p>+48 575 631 571</p>
					</div>
					<div className='flex items-center gap-2 '>
						<MdOutlineMailOutline />
						<p>E-mail: adrianpruchnik@gmail.com</p>
					</div>
					<div className='flex items-center gap-2'>
						<FaFacebookMessenger />
						<p>@adrianpruchnikfotografia</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default ContactSection;

import Image from 'next/image';
import React from 'react';
import { FaFacebookMessenger, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

const Footer = () => {
	return (
		<footer
			className='text-main-color relative flex flex-col justify-around items-center w-[100%] 
		 bg-black bg-opacity-90 min-h-[20vh]'
		>
			<div>
				<Image
					src='/main_page_photos/footer-bg.jpg'
					alt='backgorund'
					sizes='100vw'
					fill
					priority
					className='object-cover z-[-3] '
				/>
			</div>
			<div className='relative container mx-auto w-[100%] flex flex-col sm:flex-row justify-around gap-2 sm:gap-5 py-5 px-2 xl:px-5'>
				<div className='relative w-[6rem]'>
					<Image
						src='/logo.PNG'
						alt='logo'
						width={239}
						height={251}
						priority
					/>
				</div>
				<div>
					<h3 className='uppercase text-xl mb-2'>
						Adrian pruchnik fotograf ślubny
					</h3>
					<p>- Zdjęcia Ślubne i Weselne</p>
					<p>- Sesje Ślubne</p>
					<p>- Wieczory Panieńskie i Kawalerskie</p>
				</div>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center gap-2  lg:text-xl'>
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
			</div>
		</footer>
	);
};

export default Footer;

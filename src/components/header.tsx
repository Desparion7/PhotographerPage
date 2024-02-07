'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BurgerMenuBtn from '@/ui/burger-menu-btn';
import { cn } from '@/lib/utilis';
import { usePathname } from 'next/navigation';
import MobileMenu from './mobile-menu';
import { links } from '@/lib/links';

const Header = () => {
	const url = usePathname();
	const [menuVisible, setMenuVisible] = useState(false);

	const handleToggleMenu = () => {
		setMenuVisible((prev) => {
			!prev
				? (document.body.style.overflow = 'hidden')
				: (document.body.style.overflow = 'auto');
			return !prev;
		});
	};

	return (
		<>
			<motion.header
				className='absolute flex sm:justify-center justify-between w-[100%] sm:h-[9vh] z-10 top-0 bg-black  text-white'
				variants={{
					visible: { y: 0 },
					hidden: { y: -200 },
				}}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				<motion.nav
					className='sm:container  flex justify-between items-center py-2 w-[100vw]'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div>
						<Link href='/'>
							<motion.div
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
								className='flex items-center'
							>
								<div className='hidden custom:inline ml-[1rem] sm:ml-0 w-[3rem] sm:w-[4rem] h-auto'>
									<Image
										src='/logo.png'
										alt='logo'
										width={239}
										height={251}
										priority
									/>
								</div>
								<p className=' ml-[1rem] sm:ml-[0] text-main-color text-xl uppercase'>
									Adrian Pruchnik{' '}
									<span className='hidden custom:inline'>
										Fotograf
									</span>
								</p>
							</motion.div>
						</Link>
					</div>
					<div className='hidden lg:flex items-center py-4 px-5'>
						<ul className='flex gap-6 uppercase items-center text-xl tracking-wider'>
							{links.map((link, index) => (
								<li
									key={index}
									className={cn(
										`lg:text-md hover:text-main-color transition-colors`,
										{
											'text-main-color':
												url === link.path,
										}
									)}
								>
									<Link href={link.path}>{link.name}</Link>
								</li>
							))}
						</ul>
					</div>
					<motion.div
						className='relative lg:hidden pr-2 py-4 mr-2 sm:pr-3 z-30 '
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<BurgerMenuBtn
							isMenuVisible={menuVisible}
							toggle={handleToggleMenu}
						/>
					</motion.div>
				</motion.nav>
				<MobileMenu
					handleToggleMenu={handleToggleMenu}
					menuVisible={menuVisible}
				/>
			</motion.header>
		</>
	);
};

export default Header;

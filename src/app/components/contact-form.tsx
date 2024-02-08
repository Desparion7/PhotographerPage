'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { FormData } from '@/lib/contact-form';
import { sendFormData } from '@/lib/contact-form';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

const ContactForm = () => {
	const [isHovered, setIsHovered] = useState(false);
	const { control, handleSubmit, reset } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const url =
			'https://modezp.com/wp/wp-json/contact-form-7/v1/contact-forms/27/feedback';
		try {
			const result = await sendFormData(data, url);
			if (result) {
				// toast.success('Wiadomość została wysłana');
			}
			reset();
		} catch (error) {
			// toast.error('Coś poszło nie tak');
		}
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
	return (
		<section className=' text-white relative flex flex-col justify-around items-center w-[100%] min-h-[55vh] bg-black bg-opacity-60'>
			<div>
				<Image
					src='/main_page_photos/form-bg.jpg'
					alt='backgorund'
					sizes='100vw'
					fill
					priority
					className='object-cover z-[-3] '
				/>
			</div>
			<div className='relative container mx-auto items-center w-[100%] py-5 xl:py-10 px-2 xl:px-5 flex'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col justify-around gap-1 text-sm sm:text-md 2xl:w-[50%] xl:mx-20 container'
				>
					<h2 className=' text-xl mb-3'>Napisz wiadomość</h2>
					<Controller
						name='yourName'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<input
								{...field}
								type='text'
								className='p-2 outline-none focus:border-second-color border-black border-2 bg-white  placeholder:text-gray-500 xl:text-lg text-black'
								placeholder='Imię i nazwisko'
							/>
						)}
					/>
					<Controller
						name='yourEmail'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<input
								{...field}
								type='email'
								className='p-2 outline-none focus:border-second-color border-black border-2 bg-white  placeholder:text-gray-500 xl:text-lg text-black'
								placeholder='Twój e-mail'
							/>
						)}
					/>
					<Controller
						name='yourPhone'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<input
								{...field}
								type='number'
								className='p-2 outline-none focus:border-second-color border-black border-2 bg-white  placeholder:text-gray-500 xl:text-lg text-black'
								placeholder='Twój numer telefonu'
							/>
						)}
					/>
					<Controller
						name='yourMessage'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<textarea
								{...field}
								className='p-2 outline-none focus:border-second-color border-black border-2 bg-white  placeholder:text-gray-500 xl:text-lg text-black'
								placeholder='Wiadomość'
								cols={30}
								rows={5}
								style={{ resize: 'none' }}
							/>
						)}
					/>
					<label htmlFor='agreement' className='flex gap-3 mt-2'>
						<input
							type='checkbox'
							className='w-[20px] h-[20px]'
							required
						/>
						<p className='text-[12px] xl:text-sm'>
							Zgadzam się na przetwarzanie moich danych osobowych
							przez Adrian Pruchnik,w celu kontaktu z Tobą na
							Twoją prośbę zgodnie z polityką prywatności.
						</p>
					</label>
					<div className='flex mt-5'>
						<motion.button
							className='flex flex-row items-center gap-3 bg-second-color font-bold text-sm text-black py-3 px-6 rounded-3xl uppercase'
							onHoverStart={() => setIsHovered(true)}
							onHoverEnd={() => setIsHovered(false)}
							variants={buttonVariants}
							whileHover='hover'
						>
							<span>Wyślij</span>
							<motion.span
								className='inline-block'
								variants={arrowVariants}
								animate={isHovered ? 'hover' : 'initial'}
							>
								<FaArrowRight />
							</motion.span>
						</motion.button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;

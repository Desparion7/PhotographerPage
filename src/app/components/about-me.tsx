import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
	return (
		<section className='relative container mx-auto flex justify-center items-center w-[100%] py-10 px-2 xl:px-5 flex-col lg:flex-row gap-3 lg:justify-between '>
			<div className='relative lg:w-[40%] mb-5 flex  justify-center'>
				<Image
					src='/adrian.png'
					width={500}
					height={500}
					alt='Zdjęcie Adriana Pruchnika Fotografa'
					className='w-[100%]'
				/>
			</div>
			<div className='lg:w-[50%] sm:mx-2'>
				<h2 className='text-xl custom:text-2xl xl:text-3xl text-second-color uppercase font-semibold mb-3'>
					O Mnie
				</h2>
				<p className='text-sm custom:text-lg sm:text-lg leading-10 mb-3'>
					Cześć, jestem Adrian. Nie będę pisał, że fotografia jest
					moją pasją, ponieważ w innym przypadku nie trafilibyście
					tutaj.
				</p>
				<p className='text-sm custom:text-lg sm:text-lg leading-10'>
					Napisze tylko, że zawsze jeśli czegoś się podejmę wkładam w
					to całe swoje zaangażowanie. Nie inaczej jest przy
					świadczenia usług moim klientom. Jako fotograf ślubny
					pracuje od kilku lat. Jest to moja pasja, która sprawia mi
					ogrom przyjemności. Fotografuje głównie w okolicach
					Rzeszowa, województwo podkarpackie, lecz nic nie stoi na
					przeszkodzie aby wykonać sesje poza jego obrębem. Na pewno
					się dogadamy.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;

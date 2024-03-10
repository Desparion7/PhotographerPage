'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const MyAdvices = () => {
	return (
		<section className='relative lg:container lg:mx-auto items-center w-[100%] py-5 xl:py-10 px-4  xl:px-5'>
			<motion.div
				className='xl:mx-20'
				initial={{ x: '-100px', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				viewport={{ once: true }}
			>
				<h2 className='custom:text-xl xl:text-3xl text-second-color uppercase font-semibold mb-3'>
					RADY FOTOGRAFA ŚLUBNEGO NA TEMAT SESJI ŚLUBNEJ
				</h2>
				<p className='mb-5 xl:text-lg leading-8'>
					Sesja ślubna jest istotnym elementem całego reportażu
					ślubnego. To właśnie na niej powstają Wasze wspólne, piękne
					zdjęcia, które nie miałyby szans zostać wykonane na sali
					weselnej. Dlatego we wszystkich moich pakietach ofert jest
					ona ujęta w cenie. Jednak niewielka grupa fotografów nadal
					świadczy usługę takiej sesji w trakcie trwania przyjęcia
					weselnego. To rozwiązanie powoduję, że znikacie z przyjęcia
					weselnego na kilka godzin i tracicie wiele cennych momentów
					z własnego wesela.
				</p>
				<p className='mb-5 xl:text-lg leading-8'>
					W dniu ślubu wykonuję mini sesje w okolicach sali trwające
					około 20 minut chyba że para młoda ma ochotę na więcej.
					Dzięki temu nie musicie się martwić, że ominą Was cenne
					momenty zabawy z gośćmi. Zdecydowanie odradzam wybór
					fotografów, którzy namawiają na długie sesje wiążące się z
					wyjazdem w dniu śluby. Jest to fatalny pomysł z wielu
					powodów. Jednym z nich jest okazanie braku szacunku na
					przybyłych gości, którzy są na zabawie weselnej przede
					wszystkim dla was, aby wspólnie celebrować Wasze szczęście.
					Dlatego nie może zabraknąć najważniejszych osób.
				</p>
				<p className='mb-5 xl:text-lg leading-8'>
					Sesja zdjęciowa w innym terminie otwiera przed nami szerokie
					możliwości. Możemy wspólnie stworzyć dokładny plan sesji i
					wyselekcjonować idealne miejsce. Jeśli jednak szukacie
					inspiracji co do lokalizacji, moje bogate doświadczenie
					pozwala na rekomendację wielu malowniczych miejsc w
					województwie podkarpackim, idealnych na niezapomniane
					zdjęcia. Zapewnię profesjonalne doradztwo, aby wspólnie
					stworzyć sesję zdjęciową, która stanie się wyjątkowym
					świadectwem Waszego wydarzenia.
				</p>
			</motion.div>
			<motion.div
				className='mt-10'
				initial={{ opacity: 0 }}
				transition={{ duration: 2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
			>
				<Image
					src='/main_page_photos/portfolio5_desktop.jpg'
					width={1354}
					height={889}
					alt='Zjęcie tańczącej młodej pary wykonane przez Adriana Pruchnika'
				/>
			</motion.div>
			<motion.div
				className='xl:mx-20 mt-5'
				initial={{ x: '-100px', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				viewport={{ once: true }}
			>
				<p className='mb-5 xl:text-lg leading-8'>
					Sesja zdjęciowa w innym terminie otwiera przed nami szerokie
					możliwości. Możemy wspólnie stworzyć dokładny plan sesji i
					wyselekcjonować idealne miejsce. Jeśli jednak szukacie
					inspiracji co do lokalizacji, moje bogate doświadczenie
					pozwala na rekomendację wielu malowniczych miejsc w
					województwie podkarpackim, idealnych na niezapomniane
					zdjęcia. Zapewnię profesjonalne doradztwo, aby wspólnie
					stworzyć sesję zdjęciową, która stanie się wyjątkowym
					świadectwem Waszego wydarzenia.
				</p>
				<p className='xl:text-lg leading-8'>
					Jak będą wyglądały Wasze zdjęcia z tego wyjątkowego dnia,
					zależy od trzech kluczowych elementów. Po pierwsze,
					najistotniejsze jest Wasze nastawienie i emocje, które
					towarzyszą Wam w tych chwilach. Biorąc pod uwagę, że to
					jeden z najpiękniejszych dni w życiu, ten aspekt mamy już
					zabezpieczony. Drugi element to wybór fotografa, którego
					styl i podejście do fotografii rezonują z tym, co jest dla
					Was ważne. Jeśli dotarliście na moją stronę, to znaczy, że
					jesteśmy na dobrej drodze do osiągnięcia wymarzonego
					rezultatu. Trzeci, równie istotny czynnik, to nasza
					współpraca w dniu ślubu. W moich reportażach dążę do tego,
					by być jak najmniej zauważalnym, choć są momenty, które
					wymagają naszej bezpośredniej współpracy, aby efekt finalny
					zdjęć był powalający. Ta współpraca jest jednak zawsze
					przyjemna i pełna pozytywnych emocji, więc i ten etap możemy
					uznać za formalność. Jestem przekonany, że w Waszym
					przypadku, poza wymienionymi, znajdą się dodatkowe, unikalne
					czynniki, które uczynią Wasze zdjęcia jeszcze bardziej
					wyjątkowymi.
				</p>
			</motion.div>
		</section>
	);
};

export default MyAdvices;

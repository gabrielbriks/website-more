'use client';

import {
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

import { getTextsCardsServiceByLanguage } from '@/dictionaries/others/cards-info-service';
import type { Locale } from '@/i18n-config';
import { CardInfoServiceType } from '@/types/card-info-service-type';
import ButtonLinkCard from './layout/buttons/button-link-card';

interface CardServicesProps {
	lang: Locale;
}

export default function CardServices({ lang }: CardServicesProps) {
	const [apiCarrousel, setApiCarrousel] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [infoServicesCards, setInfoServicesCards] = useState<
		CardInfoServiceType[]
	>([]);
	const [count, setCount] = useState(4);

	useEffect(() => {
		if (!apiCarrousel) {
			return;
		}

		const infoServices = getTextsCardsServiceByLanguage(lang);

		setInfoServicesCards(infoServices);

		setCount(apiCarrousel.scrollSnapList().length);
		setCurrent(apiCarrousel.selectedScrollSnap() + 1);

		apiCarrousel.on('select', () => {
			setCurrent(apiCarrousel.selectedScrollSnap() + 1);
		});
	}, [apiCarrousel, lang]);

	return (
		<div className="container max-w-screen-2xl rounded-lg border">
			<Carousel
				setApi={setApiCarrousel}
				className="h-full min-w-full max-w-screen-lg rounded-lg border-red-600"
			>
				<CarouselContent className="min-w-full">
					{infoServicesCards.map((item, index) => (
						<CarouselItem
							key={index}
							className="max-sm:basis-1/1 min-w-56 max-w-[392px] md:basis-1/2 lg:basis-1/3 lg:pl-5 xl:basis-1/4 2xl:basis-1/4"
						>
							<div className="p-1">
								<Card className="my-2 flex max-h-[500px] min-h-[500px] min-w-[200px] flex-col shadow-lg">
									<CardContent className="flex items-center justify-center ">
										<div className="mt-16 flex w-full flex-col items-center  border-none bg-transparent px-4 pb-1 pt-8  max-md:mt-10">
											<Image
												alt="any"
												loading="lazy"
												src={item.icon}
												className="aspect-[1.22] w-[66px]"
											/>
											<div className="mt-8 text-2xl font-bold text-gray-800">
												{item.nameService}
											</div>
											<div className="mt-6 self-stretch text-center text-lg leading-7 text-neutral-500">
												{item.descriptionService}
											</div>
										</div>
									</CardContent>
									<CardFooter className="flex w-full items-center justify-center self-end">
										<ButtonLinkCard
											urlTarget={item.urlTarget}
											text={item.buttonName}
										/>
									</CardFooter>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="bg-cm-gradient-imgcolor" />
				<CarouselNext className="bg-cm-gradient-imgcolor" />
			</Carousel>
			<div className="z-10 my-6 flex justify-center gap-2 transition duration-700">
				{Array.from({ length: count }).map((_, indexDot) => (
					<Button
						key={indexDot}
						variant="outline"
						role="tab"
						aria-selected={current - 1 === indexDot ? 'true' : 'false'}
						aria-label={`Slide ${indexDot + 1}}`}
						onClick={() => apiCarrousel?.scrollTo(indexDot)}
						className={cn(
							'h-2 w-4 rounded-full transition duration-700 ',
							current - 1 === indexDot
								? 'bg-cm-gradient-imgcolor'
								: 'border border-purple-500/30 bg-slate-100/40',
						)}
					/>
				))}
			</div>
		</div>
	);
}

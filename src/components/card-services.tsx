'use client';

import {
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'akar-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

import { getTextsCardsServiceByLanguage } from '@/dictionaries/others/cards-info-service';
import type { Locale } from '@/i18n-config';
import { CardInfoServiceType } from '@/types/card-info-service-type';

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
							className="max-sm:basis-1/1 min-w-56 max-w-[392px] pl-5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
						>
							<div className="p-1">
								<Card className="my-2 h-full min-w-[285px] shadow-lg">
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<div className="mt-16 flex flex-1 flex-col items-center  border-none bg-transparent px-4 pb-1 pt-8  max-md:mt-10">
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
									<CardFooter className="flex h-full w-full items-center justify-center">
										<Link
											className="flex h-14  justify-between gap-2.5 self-center rounded-[45px] border-pink-600 bg-cm-gradient-imgcolor px-8 py-4 font-medium text-white transition duration-500 hover:text-white hover:opacity-90 max-md:px-5"
											href={`${item.urlTarget}?plan=true`}
										>
											<span className="h-auto uppercase">
												{item.buttonName}
											</span>
											<ArrowUpRight
												size={20}
												className="stroke-white transition duration-700"
											/>
										</Link>
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

'use client';

import { type CarouselApi } from '@/components/ui/carousel';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Click_AdsenseSVG from '../assets/icons-services/click-adsense.svg';
import Click_EcomSVG from '../assets/icons-services/click-ecom.svg';
import Click_MediaSVG from '../assets/icons-services/click-media.svg';
import Click_PagesSVG from '../assets/icons-services/click-pages.svg';
import Click_WebSVG from '../assets/icons-services/click-web.svg';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';

type CardInfoService = {
	icon: any;
	nameService: string;
	descriptionService: string;
	buttonName: string;
};

const InfoServices: CardInfoService[] = [
	{
		icon: Click_AdsenseSVG,
		nameService: 'ClickAdsense',
		descriptionService:
			'ClickAdsense elevates your online presence, captivate audiences, ensuring your brand is the first choice.',
		buttonName: 'Learn More',
	},
	{
		icon: Click_MediaSVG,
		nameService: 'ClickMedia',
		descriptionService:
			'ClickAdsense elevates your online presence, captivate audiences, ensuring your brand is the first choice.',
		buttonName: 'Learn More',
	},
	{
		icon: Click_PagesSVG,
		nameService: 'ClickPages',
		descriptionService:
			'ClickAdsense elevates your online presence, captivate audiences, ensuring your brand is the first choice.',
		buttonName: 'Learn More',
	},
	{
		icon: Click_WebSVG,
		nameService: 'ClickWeb',
		descriptionService:
			'ClickAdsense elevates your online presence, captivate audiences, ensuring your brand is the first choice.',
		buttonName: 'Learn More',
	},
	{
		icon: Click_EcomSVG,
		nameService: 'ClickEcom',
		descriptionService:
			'ClickAdsense elevates your online presence, captivate audiences, ensuring your brand is the first choice.',
		buttonName: 'Learn More',
	},
];

interface CardServicesProps {}

export default function CardServices(params: CardServicesProps) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			console.log('current');
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		//TODO: remover border
		<div className="container max-w-screen-2xl rounded-lg border">
			<Carousel className="h-full min-w-full max-w-screen-lg rounded-lg border-red-600">
				<CarouselContent className="min-w-full">
					{InfoServices.map((item, index) => (
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
										<Button
											variant="outline"
											className="flex h-14 justify-between gap-2.5 self-center rounded-[45px] border-pink-600 bg-button-gradient px-8 py-5 text-white transition duration-500 hover:text-white hover:opacity-90 max-md:px-5"
										>
											<span className="uppercase">{item.buttonName}</span>
											<ArrowUpRight
												size={20}
												className="stroke-white transition duration-700"
											/>
										</Button>
									</CardFooter>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}

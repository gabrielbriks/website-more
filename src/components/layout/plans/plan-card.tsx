'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Check } from 'akar-icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import BGCoverNamePlanMax from '../../../assets/layout/bg-cover-name-plan-max.svg';
import BGCoverNamePlanPro from '../../../assets/layout/bg-cover-name-plan-pro.svg';
import BGCoverNamePlanStart from '../../../assets/layout/bg-cover-name-plan-start.svg';
import ButtonHireCard from './button-hire-card';

interface CardPlanProps {
	namePlan: string;
	valuePlan: string;
	periodSubscription: string;
	itemsIncluded: string[];
	urlTarget: string;
	nameButton: string;
	typePlan?: 'start' | 'max' | 'pro';
}

export default function CardPlanIdea2(params: CardPlanProps) {
	const navigation = useRouter();

	let bgCoverNamePlan = '';

	switch (params.typePlan) {
		case 'start':
			bgCoverNamePlan = BGCoverNamePlanStart;
			break;
		case 'max':
			bgCoverNamePlan = BGCoverNamePlanMax;
			break;
		case 'pro':
			bgCoverNamePlan = BGCoverNamePlanPro;
			break;
		default:
			bgCoverNamePlan = BGCoverNamePlanStart;
			break;
	}

	return (
		<div className="flex max-h-full min-h-full w-full max-w-lg flex-col max-md:justify-center lg:w-[33%]">
			{/*div border*/}
			<div className="flex min-h-full w-full flex-col rounded-3xl bg-gradient-to-b from-pink-300 to-purple-300 p-px ">
				<Card className="flex min-h-full w-full transform flex-col rounded-[calc(1.5rem-1px)] bg-white font-kanit transition duration-700 hover:scale-105">
					<CardHeader className="">
						<CardTitle className="absolute -ml-10 mb-2 py-2 text-slate-800">
							<Image
								alt="background title page"
								loading="lazy"
								src={bgCoverNamePlan}
								className="absolute inset-0 size-auto max-h-[60px] min-h-full min-w-full max-w-[190px] object-cover"
							/>
							<span className="relative ml-9 text-center text-2xl font-bold leading-8 text-white ">
								{params.namePlan}
							</span>
						</CardTitle>
						<CardDescription>
							<div className="flex w-full flex-col pt-10 font-kanit">
								<span className="relative mt-6 self-center text-6xl font-semibold uppercase leading-[48.24px] text-purple-800 max-md:text-6xl max-sm:text-5xl">
									¥{params.valuePlan}
								</span>
								<span className="relative mt-1.5 w-full px-10 text-end text-xl font-medium uppercase text-purple-800 max-md:mr-20">
									{params.periodSubscription}
									{/* /month */}
								</span>
							</div>
						</CardDescription>
					</CardHeader>
					<CardContent className="flex h-full w-full flex-col items-start justify-start gap-1 px-2.5 ">
						<span className="text-md font-nunito font-medium max-md:text-sm">
							What's included:
						</span>
						<div className="flex flex-col items-start justify-start px-2">
							{params.itemsIncluded.map((item, index) => (
								<div
									key={index}
									className="relative flex  items-center justify-start gap-2 py-2 pl-1 text-gray-800 max-md:pl-5"
								>
									<span className="rounded-full border bg-lime-500 p-1 font-semibold ">
										<Check color="#fff" size={14} strokeWidth={4} />
									</span>
									<span className="font-nunito font-bold">{item}</span>
								</div>
							))}
						</div>
					</CardContent>
					<CardFooter className="flex w-full flex-1 items-center justify-center px-20 ">
						<ButtonHireCard
							text={params.nameButton}
							urlTarget={params.urlTarget}
						/>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}

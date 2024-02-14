'use client';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Check } from 'akar-icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BGCoverNamePlanMax from '../../../assets/layout/bg-cover-name-plan-max.svg';
import BGCoverNamePlanPro from '../../../assets/layout/bg-cover-name-plan-pro.svg';
import BGCoverNamePlanStart from '../../../assets/layout/bg-cover-name-plan-start.svg';

interface CardPlanProps {
	namePlan: string;
	valuePlan: string;
	periodSubscription: string;
	itemsIncluded: string[];
	urlTarget: string;
	nameButton: string;
	typePlan?: 'start' | 'max' | 'pro';
}

const planInfo = {
	namePlan: 'ClickStart',
	valuePlan: '¥35,000',
	periodSubscription: '/MONTH',
	items: ['Google and Meta advertising campaigns', 'Reports every 15 days'],
	urlTarget: '/click-adsense',
	nameButton: 'hire',
	typePlan: 'start',
};

export default function CardPlanIdea1(params: CardPlanProps) {
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
		<div className="max-w-1xl flex h-full last:flex-col max-md:max-h-[580px] lg:w-[33%]">
			<div className="relative flex aspect-[0.62] flex-col items-start overflow-visible rounded-xl border border-purple-800 py-12 text-base font-medium text-slate-800 max-md:mt-9">
				<div className="absolute -ml-3.5 mb-2 py-2">
					<Image
						alt="background title page"
						loading="lazy"
						src={bgCoverNamePlan}
						className="absolute inset-0 size-auto max-h-[60px] min-h-full min-w-full max-w-[190px] object-cover"
					/>
					<h3 className="relative ml-7 text-3xl font-bold leading-10 text-white max-md:ml-2.5">
						{params.namePlan}
					</h3>
				</div>

				<div className="mt-2 flex w-full flex-col font-kanit">
					<span className="relative mt-16 self-center text-6xl uppercase leading-[48.24px] text-purple-800 max-md:text-6xl max-sm:text-5xl">
						¥{params.valuePlan}
					</span>
					<span className="relative mr-16 mt-1.5 self-end text-xl uppercase text-purple-800">
						{params.periodSubscription}
						{/* /month */}
					</span>
				</div>
				<div className="mt-6 flex h-auto w-full flex-col items-start justify-start gap-1 px-2.5">
					<span className="text-md font-nunito font-medium max-md:text-sm">
						What's included:
					</span>
					{params.itemsIncluded.map((item, index) => (
						<div
							key={index}
							className="relative flex items-center justify-center gap-2 py-2 pl-4 text-gray-800 max-md:pl-5"
						>
							<span className="rounded-full border border-purple-800 p-1 font-semibold ">
								<Check color="#6b21a8" size={16} strokeWidth={4} />
							</span>
							<span>{item}</span>
						</div>
					))}
				</div>
				<div className="relative flex flex-col self-stretch px-16 max-md:px-5">
					<div className="mt-20 flex w-full items-start justify-center gap-5 pr-1.5 uppercase text-white max-md:mt-10">
						<Button
							onClick={() => navigation.push(params.urlTarget)}
							className=" flex h-14 min-w-full max-w-[200px] justify-center gap-2.5 rounded-[45px] border-pink-600 bg-button-gradient px-8 py-5 text-white transition duration-500 hover:text-white hover:opacity-90 max-md:px-5"
						>
							<span className="uppercase">{params.nameButton}</span>
							<ArrowUpRight
								size={20}
								className="stroke-white transition duration-700"
							/>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

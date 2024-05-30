import Faq from '@/components/faq';
import Footer from '@/components/layout/footer/footer';
import PlanCard from '@/components/layout/plans/plan-card';
import VideoComponent from '@/components/video-component';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ButtonPrimePlan from '@/components/layout/plans/button-prime-plan';
import { getPlansClickAdsense } from '@/dictionaries/others/plans/click-adsense';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import arrowRightSitemap from '../../../../assets/arrow-right-sitemap.webp';
import clickAdSenseHeader from '../../../../assets/click-adsense-bg-header.webp';
import clickMoreAskedQuestions from '../../../../assets/click-more-sede-photo.svg';
import bgCoverTitleTopPage from '../../../../assets/layout/bg-cover-title-pages.png';
import leftArrowClickPhrase from '../../../../assets/left-arrow-click-phrase.svg';

export const metadata: Metadata = {
	title: 'ClickAdsense',
	description: '',
};

interface ClickAdsensePageProps {
	params: { lang: Locale };
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

export default async function ClickAdsensePage({
	params,
}: ClickAdsensePageProps) {
	const dictionary = await getDictionary(params.lang);

	return (
		<div className="flex flex-col bg-white">
			<div className="flex min-h-[500px] w-full flex-col items-center bg-black px-16 pb-12 pt-8 backdrop-blur-xl max-md:max-w-full max-md:px-5">
				<div className="relative mt-20 flex min-h-[187px] w-[499px] max-w-full flex-col items-center justify-center overflow-hidden whitespace-nowrap text-white">
					<Image
						alt="background title page"
						loading="lazy"
						src={bgCoverTitleTopPage}
						className="inset-0 w-full object-cover"
					/>
					<div className="absolute  max-sm:px-7 max-sm:py-8 max-[500px]:py-4 md:px-10 lg:px-14 lg:py-12">
						<h1 className="relative text-center text-xl font-bold uppercase leading-[58.24px] max-md:text-3xl max-[639px]:text-3xl max-[639px]:leading-[48.24px] md:text-4xl lg:text-5xl">
							ClickAdsense
						</h1>
						<div className="relative mt-2.5 flex justify-center gap-3.5 self-center  text-lg leading-5 max-lg:mt-2 max-sm:text-sm ">
							<Link href={'/home'} className="">
								Home
							</Link>
							<Image
								alt=""
								loading="lazy"
								src={arrowRightSitemap}
								className="my-auto aspect-square w-[15px]"
							/>
							<div className="">ClickAdsense</div>
						</div>
					</div>
				</div>
				<Image
					alt="ClickAdsense header background"
					loading="lazy"
					src={clickAdSenseHeader}
					className="absolute inset-0 -z-20 size-full object-cover opacity-20"
				/>
			</div>

			<div className="z-10 w-full max-w-[1304px] self-center px-5 max-lg:mt-16 lg:-mt-12 ">
				<div className="container flex gap-5 max-lg:flex-col max-lg:items-center max-md:gap-4 max-sm:gap-3">
					{getPlansClickAdsense(params.lang).map((plan, index) => (
						<PlanCard
							key={`${plan.typePlan}_${index}`}
							itemsIncluded={plan.items}
							nameButton={plan.nameButton}
							namePlan={plan.namePlan}
							periodSubscription={plan.periodSubscription}
							urlTarget={plan.urlTarget}
							valuePlan={plan.valuePlan}
							typePlan={plan.typePlan}
						/>
					))}
				</div>
			</div>
			<div className="container mt-40 flex w-full max-w-[1200px] justify-between gap-5 self-center max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
				{/* Start Area ClickPrime */}
				<div className="flex h-full w-full items-center justify-center">
					{/*border*/}
					<div className="h-full w-full rounded-3xl bg-gradient-to-b from-pink-300 to-purple-300 p-px ">
						{/*bg*/}
						<div className="flex h-full w-full items-center rounded-[calc(1.5rem-1px)] bg-white p-4 max-lg:flex-col max-lg:justify-center max-lg:gap-4 ">
							<div className="flex flex-1 flex-col items-start px-5 max-md:max-w-full">
								<div className="flex w-full gap-1 whitespace-nowrap text-base font-medium text-pink-600 max-lg:items-center max-lg:justify-center">
									<Image
										alt="any"
										loading="lazy"
										src={leftArrowClickPhrase}
										className="aspect-square h-auto w-5  fill-pink-700 stroke-pink-700"
									/>
									<h3 className="my-auto uppercase">
										{dictionary.pages.clickAdsense.areaPrime.subTitleTop}
									</h3>
								</div>
								<h1 className="w-full text-5xl font-bold uppercase leading-[48.08px] text-gray-800 max-lg:text-center max-md:text-4xl max-sm:text-3xl  lg:mt-2">
									{dictionary.pages.clickAdsense.areaPrime.title}
								</h1>
								<p className="mt-4 self-stretch text-lg leading-7 text-neutral-600 max-md:max-w-full max-md:text-center">
									{dictionary.pages.clickAdsense.areaPrime.textDescription}
								</p>
							</div>
							<ButtonPrimePlan
								text={
									dictionary.pages.clickAdsense.areaPrime.nameButtonAppointment
								}
								urlTarget={`/${params.lang}/subscription`}
							/>
						</div>
					</div>
				</div>
				{/* End Area ClickPrime */}
			</div>
			<div className="my-6 mb-20 h-full w-full">
				<VideoComponent lang={params.lang} />
			</div>

			<div className="container mt-24 w-full rounded-[32px_0px_0px_32px] py-12 pl-20 max-md:mt-10 max-md:max-w-full max-md:pl-5">
				<div className="flex gap-5 max-lg:flex-col-reverse max-md:gap-0">
					<div className="flex w-6/12 flex-col max-lg:w-full max-md:ml-0">
						{/* Start Faq */}
						<Faq namePage="clickAdsense" lang={params.lang} />

						{/* End Faq */}
					</div>
					<div className=" flex w-6/12 flex-col items-center justify-center max-lg:mt-20 max-lg:w-full max-lg:px-10 max-md:ml-0">
						<Image
							alt="click more adsense photo"
							loading="lazy"
							src={clickMoreAskedQuestions}
							className="z-10 -mb-16 aspect-[1.23] w-full grow max-lg:max-w-[520px] max-md:mt-10"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

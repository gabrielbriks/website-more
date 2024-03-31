import Faq from '@/components/faq';
import Footer from '@/components/layout/footer/footer';
import PlanCard from '@/components/layout/plans/plan-card';
import { Button } from '@/components/ui/button';
import VideoComponent from '@/components/video-component';
import { ArrowUpRight } from 'akar-icons';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import arrowRightSitemap from '@/assets/arrow-right-sitemap.webp';
import bgCoverTitleTopPage from '@/assets/layout/bg-cover-title-pages.png';
import leftArrowClickPhrase from '@/assets/left-arrow-click-phrase.svg';
import clickMoreAskedQuestions from '@/assets/pages/click-web/asked-questions-image.png';
import clickWebHeader from '@/assets/pages/click-web/click-web-bg-header.webp';
import { Locale } from '@/i18n-config';

interface ClickWebProps {
	params: { lang: Locale };
}

export const metadata: Metadata = {
	title: 'ClickWeb',
	description: '',
};

const planInfo = {
	namePlan: 'WebStart',
	valuePlan: '¥35,000',
	periodSubscription: '/MONTH',
	items: ['Google and Meta advertising campaigns', 'Reports every 15 days'],
	urlTarget: '/click-web', //TODO: Alterar para destino correto
	nameButton: 'hire',
	typePlan: 'start',
};

export default function ClickWeb({ params }: ClickWebProps) {
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
							ClickWeb
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
							<div className="">ClickWeb</div>
						</div>
					</div>
				</div>
				<Image
					alt="ClickWeb header background"
					loading="lazy"
					src={clickWebHeader}
					className="absolute inset-0 -z-20 size-full object-cover opacity-20"
				/>
			</div>

			<div className="z-10 w-full max-w-[1304px] self-center px-5 max-lg:mt-16 lg:-mt-12 ">
				<div className="container flex gap-5 max-lg:flex-col max-lg:items-center max-md:gap-4 max-sm:gap-3">
					<PlanCard
						itemsIncluded={[
							...planInfo.items,
							'1 image for up to 10 products or services',
						]}
						nameButton="hire"
						namePlan="WebStart"
						periodSubscription="/month"
						urlTarget="/add-cart"
						valuePlan="35,000"
						typePlan="start"
					/>

					<PlanCard
						itemsIncluded={[
							...planInfo.items,
							'1 image for up to 10 products or services',
						]}
						nameButton="hire"
						namePlan="WebMax"
						periodSubscription="/month"
						urlTarget="/add-cart"
						valuePlan="50,000"
						typePlan="max"
					/>

					<PlanCard
						itemsIncluded={[
							...planInfo.items,
							'1 image for up to 10 products or services',
							'1 image for up to 10 products or services',
							'1 image for up to 10 products or services',
							'1 image for up to 10 products or services',
						]}
						nameButton="hire"
						namePlan="WebPro"
						periodSubscription="/month"
						urlTarget="/add-cart"
						valuePlan="75,000"
						typePlan="pro"
					/>
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
									<h3 className="my-auto uppercase">custom advertising plan</h3>
								</div>
								<h1 className="w-full text-5xl font-bold uppercase leading-[48.08px] text-gray-800 max-lg:text-center  max-md:text-4xl max-sm:text-3xl lg:mt-2">
									WebPrime
								</h1>
								<p className="mt-4 self-stretch text-lg leading-7 text-neutral-600 max-md:max-w-full max-md:text-center">
									Create your custom advertising plan that meets all your
									company's needs. Talk to a specialist.
								</p>
							</div>
							<Button className=" flex h-14 justify-center gap-2.5 rounded-[45px] border-pink-600 bg-cm-gradient-imgcolor px-8 py-5 text-white transition duration-500 hover:text-white hover:opacity-90 max-md:px-5">
								<span className="uppercase">Book an appointment</span>
								<ArrowUpRight
									size={20}
									className="stroke-white transition duration-700"
								/>
							</Button>
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
						<Faq lang={params.lang} />

						{/* End Faq */}
					</div>
					<div className=" flex w-6/12 flex-col items-center justify-center max-lg:mt-20 max-lg:w-full max-lg:px-10 max-md:ml-0">
						<Image
							alt="click more web photo"
							loading="lazy"
							src={clickMoreAskedQuestions}
							className="z-10 -mb-16 aspect-[1.23] max-h-[570px] w-full grow max-lg:max-w-[620px] max-md:mt-10"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

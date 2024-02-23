import Faq from '@/components/faq';
import Footer from '@/components/layout/footer/footer';
import PlanCard from '@/components/layout/plans/plan-card';
import { Button } from '@/components/ui/button';
import VideoComponent from '@/components/video-component';
import { ArrowUpRight } from 'akar-icons';
import { Metadata } from 'next';
import Image from 'next/image';
import ArrowRightSitemap from '../../../../assets/arrow-right-sitemap.svg';
import ClickAdSenseHeader from '../../../../assets/click-adsense-bg-header.svg';
import clickMoreSedePhoto from '../../../../assets/click-more-sede-photo.svg';
import BGCoverTitleTopPage from '../../../../assets/layout/bg-cover-title-pages.svg';
import LeftArrowClickPhrase from '../../../../assets/left-arrow-click-phrase.svg';

export const metadata: Metadata = {
	title: 'ClickAdsense',
	description: '',
};

interface ClickAdsensePageProps {}

const planInfo = {
	namePlan: 'ClickStart',
	valuePlan: '¥35,000',
	periodSubscription: '/MONTH',
	items: ['Google and Meta advertising campaigns', 'Reports every 15 days'],
	urlTarget: '/click-adsense',
	nameButton: 'hire',
	typePlan: 'start',
};

export default function ClickAdsensePage(params: ClickAdsensePageProps) {
	return (
		<div className="flex flex-col bg-white">
			<div className="flex min-h-[500px] w-full flex-col items-center bg-black px-16 pb-12 pt-8 backdrop-blur-xl max-md:max-w-full max-md:px-5">
				<div className="relative mt-20 flex min-h-[187px] w-[499px] max-w-full flex-col overflow-hidden whitespace-nowrap  px-14 py-12 text-white max-md:px-5">
					<Image
						alt="background title page"
						loading="lazy"
						src={BGCoverTitleTopPage}
						className="absolute inset-0 size-auto object-cover"
					/>
					<h1 className="relative text-center text-5xl font-bold uppercase leading-[58.24px] max-md:text-4xl">
						ClickAdsense
					</h1>
					<div className="relative mt-2.5 flex gap-3.5 self-center text-lg leading-5">
						<div className="grow">Home</div>
						<Image
							alt=""
							loading="lazy"
							src={ArrowRightSitemap}
							className="my-auto aspect-square w-[15px]"
						/>
						<div className="grow">ClickAdsense</div>
					</div>
				</div>
				<Image
					alt="ClickAdsense header background"
					loading="lazy"
					src={ClickAdSenseHeader}
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
						namePlan="ClickStart"
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
						namePlan="ClickMax"
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
						namePlan="ClickPro"
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
										src={LeftArrowClickPhrase}
										className="aspect-square h-auto w-5  fill-pink-700 stroke-pink-700"
									/>
									<h3 className="my-auto uppercase">custom advertising plan</h3>
								</div>
								<h1 className="w-full text-5xl font-bold uppercase leading-[48.08px] text-gray-800 max-lg:text-center lg:mt-2">
									ClickPrime
								</h1>
								<p className="mt-4 self-stretch text-lg leading-7 text-neutral-600 max-md:max-w-full max-md:text-center">
									Create your custom advertising plan that meets all your
									company's needs. Talk to a specialist.
								</p>
							</div>
							<Button className=" flex h-14 justify-center gap-2.5 rounded-[45px] border-pink-600 bg-button-gradient px-8 py-5 text-white transition duration-500 hover:text-white hover:opacity-90 max-md:px-5">
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
				<VideoComponent />
			</div>

			<div className="container mt-24 w-full rounded-[32px_0px_0px_32px] py-12 pl-20 max-md:mt-10 max-md:max-w-full max-md:pl-5">
				<div className="flex gap-5 max-lg:flex-col-reverse max-md:gap-0">
					<div className="flex w-6/12 flex-col max-lg:w-full max-md:ml-0">
						{/* Start Faq */}
						<Faq />

						{/* End Faq */}
					</div>
					<div className=" flex w-6/12 flex-col items-center justify-center max-lg:mt-20 max-lg:w-full max-lg:px-10 max-md:ml-0">
						<Image
							alt="click more adsense photo"
							loading="lazy"
							src={clickMoreSedePhoto}
							className="z-10 -mb-16 aspect-[1.23] w-full grow max-lg:max-w-[520px] max-md:mt-10"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

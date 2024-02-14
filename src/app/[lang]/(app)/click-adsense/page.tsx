import Faq from '@/components/faq';
import Footer from '@/components/layout/footer';
import PlanCard from '@/components/layout/plans/plan-card';
import { Metadata } from 'next';
import Image from 'next/image';
import clickMoreSedePhoto from '../../../../assets/click-more-sede-photo.svg';
import BGCoverTitleTopPage from '../../../../assets/layout/bg-cover-title-pages.svg';

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
			<div className="flex w-full flex-col items-center bg-zinc-400 px-16 pb-12 pt-8 backdrop-blur-xl max-md:max-w-full max-md:px-5">
				<div className="relative mt-20 flex min-h-[187px] w-[499px] max-w-full flex-col overflow-hidden whitespace-nowrap  px-14 py-12 text-white max-md:px-5">
					<Image
						alt="background title page"
						loading="lazy"
						src={BGCoverTitleTopPage} //"https://cdn.builder.io/api/v1/image/assets/TEMP/3a89e18f46d6d31b6d5a16e2cb21b81914f058ac6d6c34387275b76615278b03?"
						className="absolute inset-0 size-auto object-cover"
					/>
					<h1 className="relative text-center text-5xl font-bold uppercase leading-[58.24px] max-md:text-4xl">
						ClickAdsense
					</h1>
					<div className="relative mt-2.5 flex gap-3.5 self-center text-lg leading-5">
						<div className="grow">Home</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/e744c98d59ee115b5f58304f72ef08a5df50ed0e72578039b77b8832f54959b1?"
							className="my-auto aspect-square w-[15px]"
						/>
						<div className="grow">ClickAdsense</div>
					</div>
				</div>
				<img
					loading="lazy"
					srcSet="..."
					className="mb-11 mt-40 aspect-[7.14] w-[196px] max-w-full max-md:my-10"
				/>
			</div>
			<div className="z-10 mt-10 w-full max-w-[1304px] self-center px-5 max-md:mt-0 max-md:max-w-full">
				<div className="flex gap-5 max-md:container max-md:flex-col max-md:gap-4 max-sm:gap-3">
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
			<div className="mt-40 flex w-full max-w-[1200px] justify-between gap-5 self-center max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
				{/* Start Area ClickPrime */}
				<div className="flex h-full w-full items-center justify-center">
					{/*border*/}
					<div className="h-full w-full rounded-3xl bg-gradient-to-b from-pink-300 to-purple-300 p-px ">
						{/*bg*/}
						<div className="flex h-full w-full rounded-[calc(1.5rem-1px)] bg-white p-4 ">
							<div className="flex flex-1 flex-col items-start px-5 max-md:max-w-full">
								<div className="flex gap-1 whitespace-nowrap text-base font-medium uppercase text-pink-600">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4f0ed251f4ecc848dce1a7555e83cac9ea9c5fecbd9896c81a6b13ffad10407?"
										className="aspect-square w-5"
									/>
									<div className="my-auto grow">custom advertising plan</div>
								</div>
								<div className="mt-4 text-5xl font-bold uppercase leading-[58.08px] text-gray-800">
									ClickPrime
								</div>
								<div className="mt-4 self-stretch text-lg leading-7 text-neutral-600 max-md:max-w-full">
									Create your custom advertising plan that meets all your
									company's needs. Talk to a specialist.
								</div>
							</div>
							<div className="my-auto flex justify-center gap-2.5 whitespace-nowrap rounded-[45px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-4 py-3.5 text-base font-medium uppercase text-white">
								<div className="my-auto grow">Book an appointment</div>{' '}
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/e237755a401fa47f435500db22a86d48e95c4987631c515ab8a345b8a32e3af5?"
									className="aspect-square w-5"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* End Area ClickPrime */}
			</div>
			<img
				loading="lazy"
				srcSet="..."
				className="mt-40 aspect-[2.27] w-full max-w-[1318px] self-center rounded-[32px] max-md:mt-10 max-md:max-w-full"
			/>
			<div className="mt-24 w-full rounded-[32px_0px_0px_32px] py-12 pl-20 max-md:mt-10 max-md:max-w-full max-md:pl-5">
				<div className="max-md: flex gap-5 max-md:flex-col-reverse max-md:gap-0">
					<div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
						{/* Start Faq */}
						<Faq />

						{/* End Faq */}
					</div>
					<div className="ml-5 flex w-6/12 flex-col items-center justify-center max-md:ml-0 max-md:w-full">
						<Image
							alt="click more adsense photo"
							loading="lazy"
							src={clickMoreSedePhoto}
							className="z-10 -mb-16 aspect-[1.23] w-full grow max-md:mt-10 max-md:max-w-[520px]"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

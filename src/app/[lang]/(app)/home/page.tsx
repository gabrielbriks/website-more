import bgColorFull from '@/assets/colorful-background.svg';
import AreaLogosPlatforms from '@/components/area-logos-platforms';
import CardServices from '@/components/card-services';
import Faq from '@/components/faq';
import { NavBarLinks } from '@/components/layout/nav-bar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import VideoComponent from '@/components/video-component';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import BgColorFullHero from '../../../../assets/colorful-background.svg';
import JapaneseFAQImage from '../../../../assets/japanase-faq-photo.svg';
import LeftArrowClickPhrase from '../../../../assets/left-arrow-click-phrase.svg';
import MenPhotoTopHero from '../../../../assets/men-photo-top-hero.svg';
import OurMissionPhoto from '../../../../assets/our-mission-photo.svg';
import PointerClickLeft from '../../../../assets/pointer-click-left.svg';
import PointerClickRight from '../../../../assets/pointer-click-right.svg';

interface HomeProps {
	lang: Locale;
}

export const metadata: Metadata = {
	title: 'Home',
	description: '',
};

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);

	return (
		<div className="flex flex-col bg-white">
			<div className="flex w-full flex-col max-md:max-w-full">
				<div className="relative flex w-full flex-col pb-12 pt-8 max-lg:px-10 max-md:h-auto max-md:max-w-full max-md:px-5 lg:min-h-[788px] lg:overflow-hidden lg:px-16">
					<Image
						priority
						src={BgColorFullHero}
						alt={''}
						className="absolute inset-0 size-full object-cover opacity-70"
					/>

					<div className="relative ml-40 mt-12 flex w-[76px] items-center justify-center self-center rounded-full p-px mix-blend-multiply max-md:mt-10">
						<img
							alt="any"
							loading="lazy"
							src={bgColorFull}
							className="aspect-[1.01] w-full"
						/>
					</div>

					<div className="relative mt-1 max-md:mt-20 max-md:max-w-full  lg:mb-0 lg:pb-0">
						<div className="flex min-h-full gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
								<div className="relative z-10 flex flex-col text-base font-medium max-md:max-w-full">
									<div className="flex gap-1 self-start whitespace-nowrap uppercase text-purple-800 max-md:w-full ">
										<h2 className="max my-auto flex grow gap-1 max-md:justify-center max-md:text-center">
											<Image
												alt="any"
												loading="lazy"
												src={LeftArrowClickPhrase}
												className="aspect-square w-5"
											/>
											{dictionary['home-page'].heroSubtitleTop}
											{/* One Stop Solution for business */}
										</h2>
									</div>
									<h1 className="mt-4 text-6xl font-bold uppercase leading-[58px] text-gray-800 max-md:max-w-full max-md:justify-center max-md:text-center max-md:text-4xl max-md:leading-10">
										{dictionary['home-page'].heroTitle}
										{/* Turning Clicks into <br />
										Business Opportunities */}
									</h1>
									<p className="mt-6 font-nunito text-lg leading-7 text-neutral-600 max-md:max-w-full max-md:justify-center max-md:text-center">
										{dictionary['home-page'].heroTextDescription}
										{/* Welcome to ClickMore, your trusted partner in achieving
										visibility and success in the digital world. If you're ready
										to take your business to the next level, you're in the right
										place. We're here to present innovative solutions that
										exceed expectations, putting your brand in the spotlight and
										driving business growth. */}
									</p>

									<div className="mt-8 flex justify-between gap-5 self-start whitespace-nowrap uppercase">
										<Button
											variant="outline"
											className="flex h-14 justify-between gap-2.5 rounded-[45px] border-pink-600 bg-button-gradient px-8 py-5 text-white transition duration-500 hover:text-white hover:opacity-90 max-md:px-5"
										>
											<span className="uppercase">Learn More</span>
											<ArrowUpRight
												size={20}
												className="stroke-white transition duration-700"
											/>
										</Button>

										<Button
											variant="outline"
											className="group flex h-14 justify-between gap-2.5 rounded-[45px] border-pink-600 bg-transparent px-8 py-5 text-pink-600 transition duration-500 hover:bg-transparent max-md:px-5"
										>
											<span className="uppercase">Hire now</span>
											<ArrowUpRight
												size={20}
												className="stroke-pink-600 transition duration-700 group-hover:stroke-black"
											/>
										</Button>
									</div>
								</div>
							</div>

							<div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full lg:mb-0 lg:min-h-[650px] lg:pb-0">
								<div className="relative flex grow flex-col max-md:mt-5 max-md:max-w-full">
									<div className="flex max-w-full items-start justify-between gap-5 self-end whitespace-nowrap text-slate-800 max-md:absolute max-md:w-full max-md:flex-wrap lg:w-[488px]">
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/98c87d022ef7dc2057245eb843cbc73d947926eafa2fbaf3288e04a27841e662?"
											className="mt-9 aspect-square w-[54px] self-end"
										/>
										<div className="flex flex-col self-start rounded-[36.69px] bg-white px-5 pb-2.5 pt-4 shadow-lg">
											<div className="flex flex-col px-3.5 py-px">
												<div className="w-full text-base font-bold leading-loose">
													New Traffic
												</div>
												<hr className="min-w-full bg-slate-500" />

												<div className="mt-1 flex gap-3.5 self-center">
													<div className="text-sm font-bold leading-4">
														11,756
													</div>
													<div className="my-auto flex gap-0 text-xs font-medium leading-tight">
														<img
															alt="any"
															loading="lazy"
															src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9bf481ee0d1150337abdad42f941397d7206cad3637f1b2acbc84bd9312b76?"
															className="aspect-square w-[3px] self-start fill-green-600"
														/>
														<div className="grow font-bold">23%</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="absolute bottom-0 left-0 z-10 flex w-44 max-w-full flex-col rounded-lg bg-white pb-7 pl-6 pt-3 shadow-lg max-md:mt-10 max-md:pl-5">
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/07970124becef53e8ed85d68cf50c18c36eb580032d68f6fe7e90c5c6b1a19a6?"
											className="mr-3 aspect-square w-[18px] self-end max-md:mr-2.5"
										/>
										<div className="mt-1.5 self-center text-center text-3xl font-bold leading-9 tracking-normal text-slate-800">
											45K+
										</div>
										<div className="mt-3 self-center whitespace-nowrap text-center font-nunito text-sm font-semibold leading-4 tracking-wide text-slate-800">
											Happy Customers
										</div>
										<div className="mt-5 flex justify-between gap-1.5 overflow-hidden">
											<Avatar>
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>

											<Avatar>
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>

											<Avatar>
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>

											<Avatar>
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>
										</div>
									</div>

									<Image
										src={MenPhotoTopHero}
										loading="lazy"
										alt=""
										className="max-md:bottom-0 max-md:h-full max-md:max-h-[700px] max-md:w-full max-md:max-w-full md:lg:min-h-[820px] lg:absolute lg:right-0 lg:top-0 lg:min-h-[820px]"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex w-full flex-col justify-center bg-slate-100 px-16 py-8 max-md:max-w-full max-md:px-5">
					<AreaLogosPlatforms />
				</div>
			</div>

			<div className="container z-10 mt-24 flex w-full items-center gap-14 max-lg:flex-col max-md:mt-10 max-md:max-w-full max-md:px-5 lg:px-12">
				<div className="w-full min-w-[380px]">
					<img
						alt="any"
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/79895db067e321e3f33e480d95d96a1ac8fbb345fd12eb03b0841bb1386ab5a2?"
						className="aspect-[1.25] w-full max-w-[680px] self-start"
					/>
				</div>

				<div className="mb-20 flex h-full w-full flex-col items-center justify-center">
					<div className="h-full w-full max-lg:text-center">
						<span className="z-10 mt-0 flex justify-start gap-1 self-center whitespace-nowrap text-base font-medium uppercase text-purple-800 max-md:mt-0">
							<h4 className="max-lg:justify-content my-auto flex w-full grow gap-2 max-lg:justify-center ">
								<img
									alt="any"
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e02b7ceeacdfde81ab2746bc5369238ad5429edc9013167db33890c4651d003?"
									className="aspect-square w-5"
								/>
								Our values
							</h4>
						</span>
						<h2 className="text-5xl font-bold uppercase text-gray-800 max-lg:w-full max-lg:justify-center max-lg:text-center max-md:mr-2 max-md:max-w-full">
							Values That Define Us
						</h2>

						<p className="mt-6 w-[564px] text-lg leading-7 text-neutral-600 max-lg:w-full max-lg:text-center max-md:mr-2 max-md:max-w-full">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</p>
					</div>
				</div>

				<img
					alt="any"
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cd5416aeb42460204ee3846304bae6694a26b16ca1ec3c03c143235e206aecf?"
					className="absolute z-10 mt-36 aspect-square w-[54px] max-md:mt-10"
				/>
			</div>

			<div className="-mt-3 flex w-full max-w-[985px] items-start justify-between self-center max-md:max-w-full max-md:flex-wrap lg:gap-5">
				<img
					alt="any"
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/76564161ebe71a26c0e1c53d524200686aac22436c5688ae5944a0beb25f83fd?"
					className="absolute aspect-square w-[54px] self-start"
				/>
				<div className="mt-6 flex flex-col self-end max-md:max-w-full">
					<h4 className="flex gap-1 self-center whitespace-nowrap text-base font-medium uppercase text-purple-800">
						<img
							alt="any"
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/8166fcd3004dfbe088a729de6ed9379b26f5e1c445166c3e414d74924eb0711d?"
							className="aspect-square w-5"
						/>
						Our Services
					</h4>

					<h2 className="mt-4 text-center text-5xl font-bold uppercase text-gray-800 max-md:max-w-full">
						Our Tailored Digital Services
					</h2>
					<p className="mt-6 text-center text-lg leading-7 text-neutral-600 max-md:max-w-full">
						From innovative solutions to transformative strategies, we craft
						success through tailored and dynamic offerings. Explore limitless
						possibilities with us.
					</p>
				</div>
			</div>

			<div className="mt-12 flex w-full flex-col max-md:mt-10 max-md:max-w-full">
				<div className="z-10 flex w-full min-w-full flex-col items-center justify-center ">
					{/*pl-6 pr-16 max-md:px-5*/}
					<div className="container flex h-full min-w-full items-center justify-center">
						<CardServices />
					</div>
					{/* Start Area PlayVideo */}
					<div className="mb-20 ">
						<VideoComponent />
					</div>

					{/* End Area PlayVideo */}

					{/* <img
						alt="any"
						loading="lazy"
						src={bgColorFull}
						className=" mt-24 aspect-[2.27] w-full rounded-[32px] max-md:mt-10 max-md:max-w-full"
					/> */}
					<div className="ml-10 mt-24 max-md:mt-10 max-md:max-w-full lg:mt-32">
						<div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
								<div className="mt-10 flex flex-col max-md:mt-10 max-md:max-w-full">
									<Image
										alt="any"
										loading="lazy"
										src={PointerClickLeft}
										className="aspect-square w-[54px] self-end opacity-70"
									/>
									<div className="mt-7 flex gap-1 self-start whitespace-nowrap text-base font-medium uppercase text-purple-800">
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d7c37bd57d608796de75592d6439efa4f43f801cdf524694baa16f1aa93cec?"
											className="aspect-square w-5"
										/>
										<div className="my-auto grow">Our mission</div>
									</div>
									<div className="mt-4 text-5xl font-bold uppercase leading-[58px] text-gray-800 max-md:max-w-full">
										ClickMore and Your <br />
										Company Together
									</div>
									<div className="mt-6 text-lg leading-7 text-neutral-600 max-md:max-w-full">
										ClickMore is not just an agency; we are your partners in
										growth. With personalized service and strategies tailored to
										your needs, we ensure that small and medium-sized businesses
										achieve significant results. Trust, visibility, and success
										– all in one place.
									</div>
								</div>
							</div>
							<div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
								<Image
									alt="any"
									loading="lazy"
									src={OurMissionPhoto}
									className="aspect-[1.37] w-full grow max-md:mt-10 max-md:max-w-full"
								/>
							</div>
						</div>
					</div>
					<div className="mt-24 max-md:mt-10 max-md:max-w-full">
						<div className="max-md: container flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex w-[46%] flex-col max-md:ml-0 max-md:w-full">
								<div className="mt-3 flex grow flex-col max-md:mt-10 max-md:max-w-full">
									<Image
										alt="any"
										loading="lazy"
										src={PointerClickRight}
										className="aspect-square w-[54px] self-end opacity-70"
									/>
									{/* Japanese FAQ */}
									<div className="relative mt-3.5 flex min-h-[611px] w-full flex-col items-start overflow-hidden px-2 pb-6 max-md:max-w-full max-md:items-end max-md:px-5 max-md:pb-8">
										<Image
											alt="any"
											loading="lazy"
											src={JapaneseFAQImage}
											className="z-10 mb-96 mt-0 aspect-[0.98] h-full max-h-[600px] w-full max-w-full max-md:mb-10"
										/>
									</div>
								</div>
							</div>

							<div className="ml-5 flex w-[54%] flex-col max-md:ml-0 max-md:w-full">
								<Faq />
							</div>
						</div>
					</div>
				</div>

				<div className="relative flex min-h-[757px] w-full flex-col overflow-hidden px-16 pt-12 max-md:max-w-full max-md:px-5">
					<img
						alt="any"
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d233a0220a01bb640550de61c2aa054617df9cb8565a0f03792586ad9e46f6a?"
						className="absolute inset-0 size-full object-cover"
					/>
					<div className="relative mt-12 max-md:mt-10 max-md:max-w-full">
						<div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
								<form className="relative flex w-full grow flex-col rounded-2xl border-2 border-solid border-purple-800 bg-white py-12 pl-16 pr-2.5 text-base text-gray-500 shadow-lg max-md:mt-10 max-md:max-w-full max-md:pl-5">
									<div className="mt-3 flex gap-1 self-start whitespace-nowrap font-medium uppercase text-purple-800">
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/b521be8c6bf1b04ba68eeeeb5ecaf26d1d08033afc51ae3353ac3e0c15d5c38d?"
											className="aspect-square w-5"
										/>
										<h3 className="my-auto grow">Have any questions</h3>
									</div>

									<h1 className="mt-4 text-5xl font-bold uppercase leading-[58.08px] text-gray-800 max-md:max-w-full">
										Send A Message
									</h1>

									<div className="mt-11 justify-center whitespace-nowrap border-b border-solid border-b-slate-200 max-md:mt-10 max-md:max-w-full">
										<Input
											placeholder="Name"
											className="border-none py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
										/>
									</div>

									<div className="mt-11 flex justify-between gap-5 whitespace-nowrap max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
										<div className="flex flex-1 flex-col justify-center">
											<div className="justify-center border-b border-solid border-b-slate-200">
												<Input
													placeholder="Email"
													className="border-none py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
												/>
											</div>
										</div>

										<div className="flex flex-1 flex-col justify-center">
											<div className="justify-center border-b border-solid border-b-slate-200">
												<Input
													placeholder="Phone"
													className="border-none py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
												/>
											</div>
										</div>
									</div>

									<div className="mt-11 w-full self-start border-b border-solid border-b-slate-200 max-md:mt-10">
										<Textarea
											placeholder="Tell us about your query"
											className="min-w-full border-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
										/>
										{/* Tell us about your query */}
									</div>

									<div className="flex w-full items-start justify-start">
										<Button
											type="submit"
											className="mt-10 h-11 gap-1 rounded-full bg-button-gradient uppercase"
										>
											Get in touch
											<ArrowUpRight
												size={20}
												className="stroke-white transition duration-700 group-hover:stroke-black"
											/>
										</Button>
									</div>
								</form>
							</div>

							<div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
								<div className="relative my-auto flex flex-col self-stretch max-md:mt-10 max-md:max-w-full">
									<div className="flex gap-1 self-start whitespace-nowrap text-base font-medium uppercase text-purple-800">
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/15fbb5a901b3008ff9924eed664c9a3cdf687d9e38d18e7caa35c2566045280b?"
											className="aspect-square w-5"
										/>
										<div className="my-auto grow">Contact us</div>
									</div>
									<div className="mt-4 text-5xl font-bold uppercase leading-[58.08px] text-gray-800 max-md:max-w-full">
										Contact Information
									</div>
									<div className="mt-6 text-lg leading-7 text-neutral-600 max-md:max-w-full">
										Need help assessing difficult situations? Or if you have any
										other questions, please feel free to contact us. We are
										happy to help you!
									</div>
									<div className="mt-11 max-md:mt-10 max-md:max-w-full">
										<div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
											<div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
												<div className="flex grow flex-col max-md:mt-10">
													<h4 className="text-2xl font-semibold text-gray-800">
														Phone
													</h4>
													<div className="mt-6 text-lg leading-7 text-neutral-600">
														090-8321-8676
														<br />
														080-6369-2395
													</div>
													<h4 className="mt-11 self-start text-2xl font-semibold text-gray-800 max-md:mt-10">
														Follow us
													</h4>
													<div className="mt-6 flex gap-4 self-start pr-1.5">
														RedesSociais
														<div className="flex aspect-square h-10 flex-1 items-center justify-center rounded-[100px] border border-solid border-[color:var(--CM-Para,#525252)] bg-white bg-opacity-10 px-2.5">
															<img
																alt="any"
																loading="lazy"
																src="https://cdn.builder.io/api/v1/image/assets/TEMP/c48cb2927a8be5a0df4b15650a5067344bc108217a425dfa6dcd8fa1335cb6de?"
																className="aspect-square w-full"
															/>
														</div>
														<div className="flex aspect-square h-10 flex-1 items-center justify-center rounded-[100px] border border-solid border-[color:var(--CM-Para,#525252)] bg-white bg-opacity-10 px-2.5">
															<img
																alt="any"
																loading="lazy"
																src="https://cdn.builder.io/api/v1/image/assets/TEMP/c743cc814befe879b2c3279289168bccbe744234fb5af049c876942b800946a6?"
																className="aspect-square w-full"
															/>
														</div>
														<div className="flex aspect-square h-10 flex-1 items-center justify-center rounded-[100px] border border-solid border-[color:var(--CM-Para,#525252)] bg-white bg-opacity-10 px-2.5">
															<img
																alt="any"
																loading="lazy"
																src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1816e1398626731b545516ded9ef847971d6789a174d5a2b6ceca2074ec2df1?"
																className="aspect-square w-full"
															/>
														</div>
													</div>
												</div>
											</div>

											<div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
												<div className="flex flex-col text-2xl font-semibold text-gray-800 max-md:mt-10">
													<div>Address</div>
													<div className="mt-6 text-lg leading-7 text-neutral-600">
														55 Main Street, The Grand
														<br />
														Avenue 2nd Block, New York City
													</div>
													<div className="mt-12 self-start max-md:mt-10">
														Email
													</div>
													<div className="mt-6 self-start text-lg leading-7 text-neutral-600">
														support@clickmore.co.jp
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<footer className="mt-24 flex w-full flex-col justify-end rounded-[40px_40px_0px_0px] bg-slate-950 pt-12 max-md:mt-10 max-md:max-w-full">
					<div className="mt-6 flex w-full max-w-screen-xl items-center justify-center self-center px-16 max-md:max-w-full max-md:px-5">
						<div className="flex w-[544px] max-w-full flex-col items-center">
							<img
								alt="any"
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/47daef5d1b1fa6af16155139993c767a610df7f0dc9b38931b0c0bc8d4d371da?"
								className="aspect-[4.76] w-[230px] max-w-full"
							/>
							<div className="mt-4 self-stretch text-center text-3xl font-semibold uppercase leading-9 text-white max-md:max-w-full">
								Get Latest Updates, News & Offers
								<br />
								from Clickmore
							</div>
							<div className="mt-10 flex justify-between gap-2 self-stretch whitespace-nowrap max-md:max-w-full max-md:flex-wrap">
								<div className="flex w-full max-w-md items-center justify-center gap-3 space-x-2">
									<Input
										type="email"
										placeholder="Enter your email"
										className="rounded-full  border-slate-500 bg-transparent text-white focus-visible:border-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
									/>
									<Button
										type="submit"
										className="h-11 gap-1 rounded-full bg-button-gradient uppercase"
									>
										Subscribe
										<ArrowUpRight
											size={20}
											className="stroke-white transition duration-700 group-hover:stroke-black"
										/>
									</Button>
								</div>
							</div>
							<div className="mt-10 flex gap-4">
								<div className="flex aspect-square h-10 flex-1 items-center justify-center rounded-[100px] border border-solid border-white border-opacity-20 bg-white bg-opacity-10 px-2.5">
									<img
										alt="any"
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/eca97086b0e70083102c647e7b8f06809a1c76d437d35f8f9e68f5b61b647126?"
										className="aspect-square w-full"
									/>
								</div>
								<div className="flex aspect-square h-10 flex-1 items-center justify-center rounded-[100px] border border-solid border-white border-opacity-20 bg-white bg-opacity-10 px-2.5">
									<img
										alt="any"
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8870e43769571c35702bebcb35ce152320c3d99c3e4e91ed140a08844628986?"
										className="aspect-square w-full"
									/>
								</div>
								<div className="flex aspect-square h-10 flex-1 items-center justify-center rounded-[100px] border border-solid border-white border-opacity-20 bg-white bg-opacity-10 px-2.5">
									<img
										alt="any"
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/607c884601d04ebf0b4f1ce7d5933754c7548f26e1c9500f5e70c3e56fb4b89a?"
										className="aspect-square w-full"
									/>
								</div>
							</div>
							<div className="mt-10 flex justify-between gap-5 text-base uppercase text-neutral-300">
								<NavBarLinks showInFooter={true} />
							</div>
						</div>
					</div>
					<div className="mt-16 min-h-[8px] w-full bg-purple-800 max-md:mt-10 max-md:max-w-full" />
				</footer>
			</div>
		</div>
	);
}

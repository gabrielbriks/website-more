import AreaLogosPlatforms from '@/components/area-logos-platforms';
import CardServices from '@/components/card-services';
import Faq from '@/components/faq';
import Footer from '@/components/layout/footer/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import VideoComponent from '@/components/video-component';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { ArrowUpRight, Heart } from 'akar-icons';
import { ArrowBigUpDash } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

import BgColorFullHero from '../../../../assets/colorful-background.svg';
import IconCircleGraphBlue from '../../../../assets/iconCircle-graph.svg';
import ValuesClickMOre from '../../../../assets/image-values.svg';
import JapaneseFAQImage from '../../../../assets/japanase-faq-photo.svg';
import LeftArrowClickPhrase from '../../../../assets/left-arrow-click-phrase.svg';
import MapWorldDoted from '../../../../assets/map-world-dotted.svg';
import MenPhotoTopHero from '../../../../assets/men-photo-top-hero.svg';
import OurMissionPhoto from '../../../../assets/our-mission-photo.svg';
import PointerClickLeft from '../../../../assets/pointer-click-left.svg';
import PointerClickRight from '../../../../assets/pointer-click-right.svg';

interface HomeProps {
	params: { lang: Locale };
}

export const metadata: Metadata = {
	title: 'Home',
	description: '',
};

export default async function Home(props: HomeProps) {
	const dictionary = await getDictionary(props.params.lang);

	return (
		<main className="flex flex-col bg-white">
			<section className="flex w-full flex-col max-md:max-w-full">
				<div className="relative flex w-full flex-col pb-12 pt-8 max-lg:px-10 max-md:h-auto max-md:max-w-full max-md:px-5 lg:min-h-[788px] lg:overflow-hidden lg:px-16">
					<Image
						priority={true}
						src={BgColorFullHero}
						alt={''}
						className="absolute inset-0 size-full object-cover opacity-70"
					/>

					<div className="absolute ml-40 mt-48 flex w-[76px] items-center justify-center self-center rounded-full p-px mix-blend-multiply max-md:mt-10"></div>

					<div className="relative mt-20 max-md:mt-20 max-md:max-w-full  lg:mb-0 lg:pb-0">
						<div className="flex min-h-full gap-5 max-lg:flex-col max-md:mt-24 max-md:gap-0">
							<div className="mt-10 flex w-6/12 flex-col max-lg:w-full max-md:ml-0">
								<div className="relative z-10 flex flex-col text-base font-medium max-lg:max-w-full">
									<div className="flex gap-1 self-start whitespace-nowrap uppercase text-purple-800 max-lg:w-full max-lg:items-center max-lg:justify-center ">
										<h2 className="flex gap-1 max-lg:justify-center max-lg:text-center">
											<Image
												alt="any"
												loading="lazy"
												src={LeftArrowClickPhrase}
												className="aspect-square h-auto w-5"
											/>
											{dictionary['pages'].home.heroSubtitleTop}
											{/* One Stop Solution for business */}
										</h2>
									</div>
									<h1 className="mt-4 text-6xl font-bold uppercase leading-[58px] text-gray-800 max-lg:max-w-full max-lg:justify-center max-lg:text-center max-md:text-4xl max-md:leading-10">
										{dictionary['pages'].home.heroTitle}
										{/* Turning Clicks into <br />
										Business Opportunities */}
									</h1>
									<p className="mt-6 font-nunito text-lg leading-7 text-neutral-600 max-lg:max-w-full max-lg:justify-center max-lg:text-center">
										{dictionary['pages'].home.heroTextDescription}
										{/* Welcome to ClickMore, your trusted partner in achieving
										visibility and success in the digital world. If you're ready
										to take your business to the next level, you're in the right
										place. We're here to present innovative solutions that
										exceed expectations, putting your brand in the spotlight and
										driving business growth. */}
									</p>

									<div className="mt-8 flex justify-between gap-5 whitespace-nowrap uppercase max-lg:mb-10 max-lg:w-full max-lg:justify-center lg:self-start">
										<Button
											variant="outline"
											className="flex h-14 justify-between gap-2.5 rounded-[45px] border-pink-600 bg-cm-gradient-imgcolor px-8 py-5 text-white transition duration-500 hover:text-white hover:opacity-90 max-md:px-5"
										>
											<span className="uppercase">
												{dictionary['layout'].buttons.learnMore}
											</span>
											<ArrowUpRight
												size={20}
												className="stroke-white transition duration-700"
											/>
										</Button>

										<Button
											variant="outline"
											className="group flex h-14 justify-between gap-2.5 rounded-[45px] border-pink-600 bg-transparent px-8 py-5 text-pink-600 transition duration-500 hover:bg-transparent max-md:px-5"
										>
											<span className="uppercase">
												{dictionary['layout'].buttons.hireNow}
											</span>
											<ArrowUpRight
												size={20}
												className="stroke-pink-600 transition duration-700 group-hover:stroke-black"
											/>
										</Button>
									</div>
								</div>
							</div>

							<div className="ml-5 flex flex-col max-md:ml-0 max-md:w-full lg:mb-0 lg:min-h-[650px] lg:w-6/12 lg:pb-0">
								<div className="relative flex grow flex-col max-md:mt-5 max-md:max-w-full">
									<div className="absolute flex max-w-full items-start justify-between gap-5 self-end whitespace-nowrap text-slate-800 max-lg:w-full max-md:flex-wrap lg:w-[488px]">
										<Image
											alt="icon click left"
											loading="lazy"
											src={PointerClickLeft}
											className="z-10 mt-32 aspect-square w-[54px] self-end opacity-50 max-lg:ml-36 max-md:ml-28 max-sm:ml-5 max-sm:w-11"
										/>
										<div className="absolute right-20 z-10 mt-24 flex flex-col justify-self-end rounded-[36.69px] bg-white px-5 pb-2.5 pt-4 shadow-lg max-lg:ml-11 max-md:right-16 max-[639px]:right-0 sm:right-24 md:right-0">
											<div className="flex flex-col py-px md:px-3.5 ">
												<div className="w-full text-center text-base font-bold leading-loose max-sm:text-sm">
													New Traffic
												</div>
												<hr className="min-w-full bg-slate-500" />

												<div className="mt-1 flex gap-3.5 self-center">
													<div className="text-sm font-bold leading-4">
														11,756
													</div>
													<div className="my-auto flex gap-0 text-xs font-medium leading-tight">
														<ArrowBigUpDash
															size={12}
															color=""
															className="fill-green-600 stroke-green-600"
														/>
														<div className="grow font-bold">23%</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="absolute bottom-0 left-0 z-10 flex w-44 max-w-full flex-col rounded-lg bg-white pb-7 pl-6 pt-3 shadow-lg max-md:mt-10 max-md:pl-5 max-sm:mt-3 max-sm:w-32 max-sm:pl-0">
										<span className="flex w-full items-end justify-end px-4">
											<Heart
												size={20}
												color=""
												className="self-end fill-red-600 stroke-red-600"
											/>
										</span>

										<span className="mt-1.5 self-center text-center font-bold leading-9 tracking-normal text-slate-800 max-md:text-2xl md:text-3xl">
											45K+
										</span>
										<span className="mt-3 self-center text-center font-nunito text-sm font-semibold leading-4 tracking-wide text-slate-800 max-sm:px-2 md:whitespace-nowrap">
											Happy Customers
										</span>
										<div className="mt-5 flex justify-between gap-1.5 overflow-hidden max-sm:mt-3 max-sm:hidden">
											<Avatar className="max-sm:h-8 max-sm:w-8">
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>

											<Avatar className="max-sm:h-8 max-sm:w-8">
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>

											<Avatar className="max-sm:h-8 max-sm:w-8">
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>

											<Avatar className="max-sm:h-8 max-sm:w-8">
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>
										</div>
									</div>
									<Image
										alt="any"
										loading="lazy"
										src={IconCircleGraphBlue}
										className="absolute z-10 ml-20 mt-12 aspect-[1.01] w-20 max-lg:ml-44 max-lg:hidden max-sm:ml-4 max-sm:mt-5"
									/>
									<Image
										src={MenPhotoTopHero}
										loading="lazy"
										alt=""
										className="max-lg:bottom-0 max-lg:-mb-[105px] max-lg:h-full max-lg:max-h-[700px] max-lg:w-full max-lg:max-w-full max-sm:-mb-24 max-[639px]:-mb-[88px] lg:absolute lg:right-0 lg:top-0 lg:min-h-[820px] "
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex w-full flex-col justify-center bg-slate-100 px-16 py-8 max-md:max-w-full max-md:px-5">
					<AreaLogosPlatforms />
				</div>
			</section>

			<section
				id="who-we-are"
				className="container z-10 mt-24 flex w-full items-center gap-14 max-lg:flex-col max-md:mt-10 max-md:max-w-full max-md:px-5 lg:px-12"
			>
				<div className="w-full min-w-[380px]">
					<Image
						alt="any"
						loading="lazy"
						src={ValuesClickMOre}
						className="aspect-[1.25] w-full max-w-[680px] self-start"
					/>
				</div>

				<div className="mb-20 flex h-full w-full flex-col items-center justify-center">
					<div className="h-full w-full max-lg:text-center">
						<span className="z-10 mt-0 flex justify-start gap-1 self-center whitespace-nowrap text-base font-medium uppercase text-purple-800 max-md:mt-0">
							<h4 className="max-lg:justify-content my-auto flex w-full grow gap-2 max-lg:justify-center ">
								<Image
									alt="any"
									loading="lazy"
									src={LeftArrowClickPhrase}
									className="aspect-square w-5"
								/>
								{dictionary['pages'].home['section-define-us'].subTitleTop}
							</h4>
						</span>
						<h2 className="text-5xl font-bold uppercase text-gray-800 max-lg:w-full max-lg:justify-center max-lg:text-center max-md:mr-2 max-md:max-w-full">
							{dictionary['pages'].home['section-define-us'].title}
						</h2>

						<p className="mt-6 w-[564px] text-lg leading-7 text-neutral-600 max-lg:w-full max-lg:text-center max-md:mr-2 max-md:max-w-full">
							{dictionary['pages'].home['section-define-us'].textDescription}

							{/* Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. */}
						</p>
					</div>
				</div>

				<Image
					alt="any"
					loading="lazy"
					src={PointerClickRight}
					className="absolute z-10 mt-36 aspect-square w-[54px] max-md:mt-10"
				/>
			</section>

			<section
				id="services"
				className="-mt-3 flex w-full max-w-[985px] items-start justify-between self-center max-md:max-w-full max-md:flex-wrap lg:gap-5"
			>
				<Image
					alt="any"
					loading="lazy"
					src={PointerClickLeft}
					className="absolute aspect-square w-[54px] self-start"
				/>
				<div className="mt-6 flex flex-col self-end max-md:max-w-full">
					<h4 className="flex gap-1 self-center whitespace-nowrap text-base font-medium uppercase text-purple-800">
						<Image
							alt="any"
							loading="lazy"
							src={LeftArrowClickPhrase}
							className="aspect-square w-5"
						/>
						{dictionary['pages'].home['section-services'].subTitleTop}
					</h4>

					<h2 className="mt-4 text-center text-5xl font-bold uppercase text-gray-800 max-md:max-w-full">
						{dictionary['pages'].home['section-services'].title}
					</h2>
					<p className="mt-6 text-center text-lg leading-7 text-neutral-600 max-md:max-w-full">
						{dictionary['pages'].home['section-services'].textDescription}
						{/* From innovative solutions to transformative strategies, we craft
						success through tailored and dynamic offerings. Explore limitless
						possibilities with us. */}
					</p>
				</div>
			</section>

			<section className="mt-12 flex w-full flex-col max-md:mt-10 max-md:max-w-full">
				<div className="z-10 flex w-full min-w-full flex-col items-center justify-center ">
					{/*pl-6 pr-16 max-md:px-5*/}
					<div className="container flex h-full min-w-full items-center justify-center">
						<CardServices lang={props.params.lang} />
					</div>

					{/* Start Area PlayVideo */}
					<div className="mb-20 ">
						<VideoComponent lang={props.params.lang} />
					</div>

					{/* End Area PlayVideo */}

					{/* <Image
						alt="any"
						loading="lazy"
						src={bgColorFull}
						className=" mt-24 aspect-[2.27] w-full rounded-[32px] max-md:mt-10 max-md:max-w-full"
					/> */}
					<section className="ml-10 mt-24 max-lg:mt-10 max-lg:max-w-full lg:mt-32">
						<div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
							<div className="flex w-6/12 flex-col max-lg:ml-0 max-lg:w-full">
								<div className="mt-10 flex flex-col max-lg:mt-10 max-lg:max-w-full">
									<Image
										alt="any"
										loading="lazy"
										src={PointerClickLeft}
										className="aspect-square w-[54px] self-end opacity-70"
									/>
									<div className="mt-7 flex gap-1 self-start whitespace-nowrap text-base font-medium uppercase text-purple-800">
										<Image
											alt="any"
											loading="lazy"
											src={LeftArrowClickPhrase}
											className="aspect-square w-5"
										/>
										<div className="my-auto grow">
											{
												dictionary['pages'].home['section-ourMission']
													.subTitleTop
											}
										</div>
									</div>
									<div className="mt-4 text-5xl font-bold uppercase leading-[58px] text-gray-800 max-md:max-w-full">
										{dictionary['pages'].home['section-ourMission'].title}
										{/* ClickMore and Your <br className="max-md:hidden" />
										Company Together */}
									</div>
									<div className="mt-6 text-lg leading-7 text-neutral-600 max-md:max-w-full">
										{
											dictionary['pages'].home['section-ourMission']
												.textDescription
										}

										{/* ClickMore is not just an agency; we are your partners in
										growth. With personalized service and strategies tailored to
										your needs, we ensure that small and medium-sized businesses
										achieve significant results. Trust, visibility, and success
										– all in one place. */}
									</div>
								</div>
							</div>
							<div className="ml-5 flex w-6/12 flex-col max-lg:ml-0 max-lg:w-full">
								<Image
									alt="any"
									loading="lazy"
									src={OurMissionPhoto}
									className="aspect-[1.37] w-full grow max-lg:mt-10 max-lg:max-w-full"
								/>
							</div>
						</div>
					</section>

					<section className="mt-24 max-md:mt-10 max-md:max-w-full">
						<div className="container flex max-lg:flex-col max-md:gap-0 lg:gap-5">
							<div className="flex w-[46%] flex-col max-lg:w-full max-md:ml-0">
								<div className="mt-3 flex grow flex-col max-md:mt-10 max-md:max-w-full">
									<Image
										alt="any"
										loading="lazy"
										src={PointerClickRight}
										className="aspect-square w-[54px] self-end opacity-70"
									/>
									{/* Japanese FAQ */}
									<div className="relative mt-3.5 flex w-full flex-col overflow-hidden px-2 max-lg:-mb-3 max-lg:min-w-full max-md:max-w-full  max-md:px-5 max-md:pb-0 md:min-h-[611px] md:items-start ">
										<Image
											alt="any"
											loading="lazy"
											src={JapaneseFAQImage}
											className="z-10 mt-0 h-full max-h-[600px]  max-lg:mb-0 max-sm:bottom-0 max-sm:-mb-0 md:aspect-[0.98] lg:mb-96"
										/>
									</div>
								</div>
							</div>

							<div
								aria-roledescription="Frequently asked questions"
								className="flex w-[54%] flex-col max-lg:ml-0 max-lg:w-full max-sm:mt-3 lg:ml-5"
							>
								<Faq lang={props.params.lang} />
							</div>
						</div>
					</section>
				</div>

				<div className="relative flex min-h-[757px] w-full flex-col overflow-hidden px-16 pt-12 max-md:max-w-full max-md:px-5">
					<Image
						alt="any"
						loading="lazy"
						src={MapWorldDoted}
						className="absolute inset-0 size-full object-cover"
					/>
					<section
						id="contact"
						className="relative mt-12 max-md:mt-10 max-md:max-w-full"
					>
						<div className="flex gap-5 max-lg:flex-col max-md:gap-0">
							<div className="flex w-full max-w-screen-lg flex-col max-md:ml-0">
								<form className="relative flex w-full grow flex-col rounded-2xl border-2 border-solid border-purple-800 bg-white py-12 pl-16 pr-2.5 text-base text-gray-500 shadow-lg max-md:mt-10 max-md:max-w-full max-md:pl-5">
									<div className="mt-3 flex gap-1 self-start whitespace-nowrap font-medium uppercase text-purple-800">
										<Image
											alt="any"
											loading="lazy"
											src={LeftArrowClickPhrase}
											className="aspect-square w-5"
										/>
										<h3 className="my-auto grow">
											{
												dictionary['pages'].home['section-contact']
													.areaSendMessage.subTitleTop
											}
										</h3>
									</div>

									<h1 className="mt-4 text-5xl font-bold uppercase leading-[58.08px] text-gray-800 max-md:max-w-full">
										{
											dictionary['pages'].home['section-contact']
												.areaSendMessage.title
										}
									</h1>

									<div className="mt-11 justify-center whitespace-nowrap border-b border-solid border-b-slate-200 max-md:mt-10 max-md:max-w-full">
										<Input
											placeholder={
												dictionary['pages'].home['section-contact']
													.areaSendMessage.inputsPlaceholders.name
											}
											className="border-none py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
										/>
									</div>

									<div className="mt-11 flex justify-between gap-5 whitespace-nowrap max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
										<div className="flex flex-1 flex-col justify-center">
											<div className="justify-center border-b border-solid border-b-slate-200">
												<Input
													placeholder={
														dictionary['pages'].home['section-contact']
															.areaSendMessage.inputsPlaceholders.email
													}
													className="border-none py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
												/>
											</div>
										</div>

										<div className="flex flex-1 flex-col justify-center">
											<div className="justify-center border-b border-solid border-b-slate-200">
												<Input
													placeholder={
														dictionary['pages'].home['section-contact']
															.areaSendMessage.inputsPlaceholders.phone
													}
													className="border-none py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
												/>
											</div>
										</div>
									</div>

									<div className="mt-11 w-full self-start border-b border-solid border-b-slate-200 max-md:mt-10">
										<Textarea
											placeholder={
												dictionary['pages'].home['section-contact']
													.areaSendMessage.inputsPlaceholders.msgText
											}
											className="min-w-full border-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
										/>
									</div>

									<div className="flex w-full items-start justify-start">
										<Button
											type="submit"
											className="mt-10 h-11 gap-1 rounded-full bg-cm-gradient-imgcolor uppercase"
										>
											{
												dictionary['pages'].home['section-contact']
													.areaSendMessage.buttonSubmitName
											}
											<ArrowUpRight
												size={20}
												className="stroke-white transition duration-700 group-hover:stroke-black"
											/>
										</Button>
									</div>
								</form>
							</div>

							<div className="ml-5 flex w-6/12 flex-col max-lg:ml-0 max-lg:w-full">
								<div className="relative my-auto flex flex-col self-stretch max-lg:mt-10 max-lg:max-w-full">
									<div className="flex gap-1 self-start whitespace-nowrap text-base font-medium uppercase text-purple-800">
										<Image
											alt="any"
											loading="lazy"
											src={LeftArrowClickPhrase}
											className="aspect-square w-5"
										/>
										<div className="my-auto grow">
											{
												dictionary['pages'].home['section-contact'][
													'contact-information'
												].subTitleTop
											}
										</div>
									</div>
									<h3 className="mt-4 w-full text-5xl font-bold uppercase leading-[58.08px] text-gray-800 max-lg:max-w-full">
										{
											dictionary['pages'].home['section-contact'][
												'contact-information'
											].title
										}
									</h3>
									<div className="mt-6 text-lg leading-7 text-neutral-600 max-md:max-w-full">
										{
											dictionary['pages'].home['section-contact'][
												'contact-information'
											].textDescription
										}
									</div>
									<div className="mt-11 w-full max-lg:max-w-full max-md:mt-10 ">
										<div className="grid w-full grid-cols-2 max-xl:grid-cols-1 max-lg:gap-5	">
											<div className="ml-5 flex w-full flex-col md:ml-0 lg:w-6/12">
												<div className="flex flex-col text-2xl font-semibold text-gray-800 max-2xl:mt-10">
													<div>
														{
															dictionary['pages'].home['section-contact'][
																'contact-information'
															].labelEmail
														}
													</div>
													<div className="mt-2 text-lg leading-7 text-neutral-600">
														support@clickmore.org
													</div>
												</div>
											</div>

											<div className="ml-5 flex w-6/12 flex-col	md:ml-0 md:w-full">
												<div className="flex grow flex-col max-2xl:mt-10">
													<h4 className="text-2xl font-semibold text-gray-800">
														{
															dictionary['pages'].home['section-contact'][
																'contact-information'
															].labelPhone
														}
													</h4>
													<div className="mt-2 text-lg leading-7 text-neutral-600">
														090-8321-8676
													</div>
												</div>
											</div>

											<div className="ml-5 flex w-6/12 flex-col  md:ml-0 md:w-full">
												<div className="mt-10 flex flex-col text-2xl font-semibold text-gray-800">
													<div>
														{
															dictionary['pages'].home['section-contact'][
																'contact-information'
															].labelLocation
														}
													</div>
													<div className="mt-2 text-lg leading-7 text-neutral-600">
														Komaki, Aichi Prefecture
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<Footer />
			</section>
		</main>
	);
}

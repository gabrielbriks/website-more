import bgColorFull from '@/assets/colorful-background.svg';
import Image from 'next/image';
import SVGIMG from '../assets/colorful-background.svg';
import LeftArrowClickPhrase from '../assets/left-arrow-click-phrase.svg';
export function HeroHome(props: any) {
	return (
		<div className="flex flex-col bg-white">
			<div className="flex w-full flex-col max-md:max-w-full">
				<div className="relative flex min-h-[777px] w-full flex-col overflow-hidden px-16 pb-12 pt-8 max-md:max-w-full max-md:px-5">
					<Image
						priority
						src={SVGIMG}
						alt={''}
						className="absolute inset-0 size-full object-cover"
					/>

					<div className="relative ml-40 mt-12 flex w-[76px] items-center justify-center self-center rounded-full p-px mix-blend-multiply max-md:mt-10">
						<img
							alt="any"
							loading="lazy"
							src={bgColorFull}
							className="aspect-[1.01] w-full"
						/>
					</div>
					<div className="relative mb-10 mt-1 max-md:max-w-full">
						<div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
								<div className="relative z-10 flex flex-col text-base font-medium max-md:max-w-full">
									<div className="flex gap-1 self-start whitespace-nowrap uppercase text-purple-800">
										<Image
											alt="any"
											loading="lazy"
											src={LeftArrowClickPhrase} //"https://cdn.builder.io/api/v1/image/assets/TEMP/9a1ebe4e0fb1dab7af0402423b499b223b872e4b0c02c4193d0d4e08e899c17c?"
											className="aspect-square w-5"
										/>
										<div className="my-auto grow">
											One Stop Solution for business
										</div>
									</div>
									<div className="mt-4 text-6xl font-bold uppercase leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-10">
										Turning Clicks into <br />
										Business Opportunities
									</div>
									<div className="mt-6 text-lg leading-7 text-neutral-600 max-md:max-w-full">
										Welcome to ClickMore, your trusted partner in achieving
										visibility and success in the digital world. If you're ready
										to take your business to the next level, you're in the right
										place. We're here to present innovative solutions that
										exceed expectations, putting your brand in the spotlight and
										driving business growth.
									</div>{' '}
									<div className="mt-8 flex justify-between gap-5 self-start whitespace-nowrap uppercase">
										<div className="flex justify-between gap-2.5 rounded-[45px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-8 py-5 text-white max-md:px-5">
											<div className="my-auto grow">Learn More</div>{' '}
											<img
												alt="any"
												loading="lazy"
												src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c8188bb935f3c80f18ef0feb38225398da4f41d254bbd5a29d1237bb5cd785?"
												className="aspect-square w-5"
											/>
										</div>{' '}
										<div className="flex justify-between gap-2.5 rounded-[45px] border border-solid border-[color:var(--CC-Grad,text-pink-600)] px-8 py-5 text-pink-600 max-md:px-5">
											<div className="my-auto grow">Hire now</div>{' '}
											<img
												alt="any"
												loading="lazy"
												src="https://cdn.builder.io/api/v1/image/assets/TEMP/feaea49ee5b1654de24d1dd8eb513b905a5825248af00943e56bbf9f80066dff?"
												className="aspect-square w-5"
											/>
										</div>
									</div>
								</div>
							</div>{' '}
							<div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
								<div className="relative mt-5 flex grow flex-col max-md:max-w-full">
									<div className="flex w-[488px] max-w-full items-start justify-between gap-5 self-end whitespace-nowrap text-slate-800 max-md:flex-wrap">
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/98c87d022ef7dc2057245eb843cbc73d947926eafa2fbaf3288e04a27841e662?"
											className="mt-9 aspect-square w-[54px] self-end"
										/>{' '}
										<div className="flex flex-col self-start rounded-[36.69px] bg-white px-5 pb-2.5 pt-4 shadow-lg">
											<div className="flex flex-col px-3.5 py-px">
												<div className="text-base font-bold leading-loose">
													New Traffic
												</div>{' '}
												<div className="mt-5 flex gap-3.5 self-center">
													<div className="text-sm font-bold leading-4">
														11,756
													</div>{' '}
													<div className="my-auto flex gap-0 text-xs font-medium leading-tight">
														<img
															alt="any"
															loading="lazy"
															src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9bf481ee0d1150337abdad42f941397d7206cad3637f1b2acbc84bd9312b76?"
															className="aspect-square w-[3px] self-start fill-green-600"
														/>{' '}
														<div className="grow">23%</div>
													</div>
												</div>
											</div>
										</div>
									</div>{' '}
									<div className="mt-48 flex w-44 max-w-full flex-col rounded-lg bg-white pb-7 pl-6 pt-3 shadow-lg max-md:mt-10 max-md:pl-5">
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/07970124becef53e8ed85d68cf50c18c36eb580032d68f6fe7e90c5c6b1a19a6?"
											className="mr-3 aspect-square w-[18px] self-end max-md:mr-2.5"
										/>{' '}
										<div className="mt-1.5 self-center text-center text-3xl font-bold leading-9 tracking-normal text-slate-800">
											45K+
										</div>{' '}
										<div className="mt-3 self-center whitespace-nowrap text-center text-sm leading-4 tracking-wide text-slate-800">
											Happy Customers
										</div>{' '}
										<div className="mt-5 flex justify-between gap-1.5">
											<img
												alt="any"
												loading="lazy"
												src={bgColorFull}
												className="aspect-[1.03] w-9 rounded-full"
											/>{' '}
											<img
												alt="any"
												loading="lazy"
												src={bgColorFull}
												className="aspect-[1.03] w-9 rounded-full"
											/>{' '}
											<img
												alt="any"
												loading="lazy"
												src={bgColorFull}
												className="aspect-square w-[35px] rounded-full"
											/>{' '}
											<img
												alt="any"
												loading="lazy"
												src={bgColorFull}
												className="aspect-[0.74] w-[26px] rounded-full"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>{' '}
				<div className="flex w-full flex-col justify-center bg-slate-100 px-16 py-12 max-md:max-w-full max-md:px-5">
					<div className="flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
						<img
							alt="any"
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dadfe7e6e70258506788ce4fd43f16d19bc12dff64a9680c65be00b4b532c14?"
							className="my-auto aspect-[2.94] w-[122px] max-w-full self-stretch"
						/>{' '}
						<img
							alt="any"
							loading="lazy"
							src={bgColorFull}
							className="my-auto aspect-[2.13] w-[107px] max-w-full self-stretch"
						/>{' '}
						<img
							alt="any"
							loading="lazy"
							src={bgColorFull}
							className="aspect-[2.94] w-[163px] max-w-full self-stretch"
						/>{' '}
						<img
							alt="any"
							loading="lazy"
							src={bgColorFull}
							className="my-auto aspect-[3.03] w-[104px] max-w-full self-stretch"
						/>{' '}
						<img
							alt="any"
							loading="lazy"
							src={bgColorFull}
							className="my-auto aspect-[3.33] w-[148px] max-w-full self-stretch"
						/>
					</div>
				</div>
			</div>{' '}
			<div className="z-10 mt-24 flex w-full flex-col items-end px-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
				<img
					alt="any"
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/79895db067e321e3f33e480d95d96a1ac8fbb345fd12eb03b0841bb1386ab5a2?"
					className="aspect-[1.25] w-[680px] max-w-full self-start"
				/>{' '}
				<div className="z-10 ml-40 mt-0 flex gap-1 self-center whitespace-nowrap text-base font-medium uppercase text-purple-800 max-md:mt-0">
					<img
						alt="any"
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e02b7ceeacdfde81ab2746bc5369238ad5429edc9013167db33890c4651d003?"
						className="aspect-square w-5"
					/>{' '}
					<div className="my-auto grow">Our values</div>
				</div>{' '}
				<div className="mt-4 text-5xl font-bold uppercase leading-[58.08px] text-gray-800 max-md:mr-2 max-md:max-w-full">
					Values That Define Us
				</div>{' '}
				<div className="mt-6 w-[564px] text-lg leading-7 text-neutral-600 max-md:mr-2 max-md:max-w-full">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</div>
				<img
					alt="any"
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cd5416aeb42460204ee3846304bae6694a26b16ca1ec3c03c143235e206aecf?"
					className="mt-36 aspect-square w-[54px] max-md:mt-10"
				/>
			</div>
			<div className="-mt-3 flex w-full max-w-[985px] items-start justify-between gap-5 self-center max-md:max-w-full max-md:flex-wrap">
				<img
					alt="any"
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/76564161ebe71a26c0e1c53d524200686aac22436c5688ae5944a0beb25f83fd?"
					className="aspect-square w-[54px] self-start"
				/>
				<div className="mt-6 flex flex-col self-end max-md:max-w-full">
					<div className="flex gap-1 self-center whitespace-nowrap text-base font-medium uppercase text-purple-800">
						<img
							alt="any"
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/8166fcd3004dfbe088a729de6ed9379b26f5e1c445166c3e414d74924eb0711d?"
							className="aspect-square w-5"
						/>
						<div className="my-auto grow">Our Services</div>
					</div>
					<div className="mt-4 text-center text-5xl font-bold uppercase leading-[58.08px] text-gray-800 max-md:max-w-full">
						Our Tailored Digital Services
					</div>
					<div className="mt-6 text-center text-lg leading-7 text-neutral-600 max-md:max-w-full">
						From innovative solutions to transformative strategies, we craft
						success through tailored and dynamic offerings. Explore limitless
						possibilities with us.
					</div>
				</div>
			</div>
			<div className="mt-12 flex w-full flex-col max-md:mt-10 max-md:max-w-full">
				<div className="z-10 flex w-full flex-col pl-6 pr-16 max-md:max-w-full max-md:px-5">
					<div className="ml-10 flex items-end justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
						<div className="mt-16 flex flex-1 flex-col items-center rounded-xl bg-white px-4 pb-1 pt-8 shadow-lg max-md:mt-10">
							<img
								alt="any"
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/79bb963534f4b34b43cde66169dd04adc533a9b20bab26ffa7a05131d0f19ea4?"
								className="aspect-[1.22] w-[66px]"
							/>
							<div className="mt-8 text-2xl font-bold text-gray-800">
								ClickAdsense
							</div>
							<div className="mt-6 self-stretch text-center text-lg leading-7 text-neutral-500">
								ClickAdsense elevates your online presence, captivate audiences,
								ensuring your brand is the first choice.
							</div>
							<div className="mt-14 flex justify-center gap-2.5 whitespace-nowrap rounded-[45px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-6 py-3.5 text-base font-medium uppercase text-white max-md:mt-10 max-md:px-5">
								<div className="my-auto grow">Learn More</div>
								<img
									alt="any"
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c8188bb935f3c80f18ef0feb38225398da4f41d254bbd5a29d1237bb5cd785?"
									className="aspect-square w-5"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center self-start rounded-xl bg-white px-4 py-8 shadow-lg">
							<img
								alt="any"
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/abd2ed400c6e2e23515fe8c2b700b04d4898f8386e6be25121c23caa73aa2a1c?"
								className="aspect-[1.27] w-[68px]"
							/>
							<div className="mt-8 text-2xl font-bold text-gray-800">
								ClickMedia
							</div>
							<div className="mt-6 self-stretch text-center text-lg leading-7 text-neutral-500">
								ClickAdsense elevates your online presence, captivate audiences,
								ensuring your brand is the first choice.
							</div>
							<div className="mt-8 flex justify-center gap-2.5 whitespace-nowrap rounded-[45px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-6 py-3.5 text-base font-medium uppercase text-white max-md:px-5">
								<div className="my-auto grow">Learn More</div>
								<img
									alt="any"
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c8188bb935f3c80f18ef0feb38225398da4f41d254bbd5a29d1237bb5cd785?"
									className="aspect-square w-5"
								/>
							</div>
						</div>
						<div className="mt-16 flex flex-1 flex-col items-center rounded-xl bg-white px-4 py-8 shadow-lg max-md:mt-10">
							<img
								alt="any"
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacfe9131b071455c9acabc4b1e70914f1375d76c8c03ad1818471b52ee3174f?"
								className="aspect-[1.27] w-[68px]"
							/>
							<div className="mt-8 text-2xl font-bold text-gray-800">
								ClickPages
							</div>
							<div className="mt-6 self-stretch text-center text-lg leading-7 text-neutral-500">
								ClickAdsense elevates your online presence, captivate audiences,
								ensuring your brand is the first choice.
							</div>
							<div className="mt-8 flex justify-center gap-2.5 whitespace-nowrap rounded-[45px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-6 py-3.5 text-base font-medium uppercase text-white max-md:px-5">
								<div className="my-auto grow">Learn More</div>
								<img
									alt="any"
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c8188bb935f3c80f18ef0feb38225398da4f41d254bbd5a29d1237bb5cd785?"
									className="aspect-square w-5"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-center self-start rounded-xl bg-white px-4 py-8 shadow-lg">
							<img
								alt="any"
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/1961e7f01fec72290053f3c4dea9a1dda93237d3db3bcbab943b5883b0f014cd?"
								className="aspect-[1.27] w-[68px]"
							/>
							<div className="mt-8 text-2xl font-bold text-gray-800">
								ClickWeb
							</div>
							<div className="mt-6 self-stretch text-center text-lg leading-7 text-neutral-500">
								ClickAdsense elevates your online presence, captivate audiences,
								ensuring your brand is the first choice.
							</div>
							<div className="mt-8 flex justify-center gap-2.5 whitespace-nowrap rounded-[45px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-6 py-3.5 text-base font-medium uppercase text-white max-md:px-5">
								<div className="my-auto grow">Learn More</div>
								<img
									alt="any"
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c8188bb935f3c80f18ef0feb38225398da4f41d254bbd5a29d1237bb5cd785?"
									className="aspect-square w-5"
								/>
							</div>
						</div>
						<div className="mt-16 flex flex-1 flex-col items-center rounded-xl bg-white px-4 py-8 shadow-lg max-md:mt-10">
							<img
								alt="any"
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/29e416c95e207b051d8a493046c3dfdee5dfc62b4676a6be6ee132741cbc7ab0?"
								className="aspect-[1.27] w-[68px]"
							/>
							<div className="mt-8 text-2xl font-bold text-gray-800">
								ClickEcom
							</div>
							<div className="mt-6 self-stretch text-center text-lg leading-7 text-neutral-500">
								ClickAdsense elevates your online presence, captivate audiences,
								ensuring your brand is the first choice.
							</div>
							<div className="mt-8 flex justify-center gap-2.5 whitespace-nowrap rounded-[45px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-6 py-3.5 text-base font-medium uppercase text-white max-md:px-5">
								<div className="my-auto grow">Learn More</div>
								<img
									alt="any"
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c8188bb935f3c80f18ef0feb38225398da4f41d254bbd5a29d1237bb5cd785?"
									className="aspect-square w-5"
								/>
							</div>
						</div>
					</div>
					<img
						alt="any"
						loading="lazy"
						src={bgColorFull}
						className="ml-10 mt-24 aspect-[2.27] w-full rounded-[32px] max-md:mt-10 max-md:max-w-full"
					/>
					<div className="ml-10 mt-24 max-md:mt-10 max-md:max-w-full">
						<div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
								<div className="mt-10 flex flex-col max-md:mt-10 max-md:max-w-full">
									<img
										alt="any"
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/492e26773f4bf6b8d95bc737bd691936ab4d0a0cf66f547b06ad703e5c47bc00?"
										className="aspect-square w-[54px] self-end"
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
								<img
									alt="any"
									loading="lazy"
									src={bgColorFull}
									className="aspect-[1.37] w-full grow max-md:mt-10 max-md:max-w-full"
								/>
							</div>
						</div>
					</div>
					<div className="mt-24 max-md:mt-10 max-md:max-w-full">
						<div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex w-[42%] flex-col max-md:ml-0 max-md:w-full">
								<div className="mt-3 flex grow flex-col max-md:mt-10 max-md:max-w-full">
									<img
										alt="any"
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/927a0cb5bea08523b9ad307d1996857ef56e9a845cc11946961a51cb3f6089fa?"
										className="mr-10 aspect-square w-[54px] self-end max-md:mr-2.5"
									/>
									<div className="relative mt-3.5 flex min-h-[611px] w-full flex-col items-start overflow-hidden px-11 pb-12 max-md:max-w-full max-md:px-5">
										<img
											alt="any"
											loading="lazy"
											src={bgColorFull}
											className="absolute inset-0 size-full object-cover"
										/>
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/61ab0bd55d7249ba9485d4835d986f923512491726a5816c6cfe8bd75174cad7?"
											className="z-10 mb-96 mt-0 aspect-[0.98] w-[136px] max-w-full max-md:mb-10"
										/>
									</div>
								</div>
							</div>
							<div className="ml-5 flex w-[58%] flex-col max-md:ml-0 max-md:w-full">
								<div className="flex w-full grow flex-col rounded-[32px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-11 py-12 text-xl font-medium text-gray-800 max-md:mt-10 max-md:max-w-full max-md:px-5">
									<div className="mt-12 flex w-[54px] gap-1 whitespace-nowrap text-base uppercase text-white max-md:mt-10">
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9d0eea3000d8deaaedd53acc827818f93569a5635eb28ffa45e4726f2073596?"
											className="aspect-square w-full flex-1 shrink-0"
										/>
										<div className="my-auto grow">faq</div>
									</div>
									<div className="mt-4 text-5xl font-bold uppercase leading-[58.08px] text-white max-md:max-w-full">
										Frequently asked questions
									</div>
									<div className="mt-11 flex justify-between gap-5 rounded-lg bg-white px-4 py-6 max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
										<div className="flex-auto">Which plan is best for me?</div>
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/c917b098f604744390b6ab72075646554d7e414d180913e73c5fc177b933ff99?"
											className="my-auto aspect-[1.85] w-[13px] stroke-neutral-800 stroke-[1.606px]"
										/>
									</div>
									<div className="ml-8 mt-4 self-start text-lg leading-7 text-neutral-300 max-md:max-w-full">
										Choose based on your goals and budget.
									</div>
									<div className="mt-4 flex justify-between gap-5 rounded-lg bg-white px-4 py-6 max-md:max-w-full max-md:flex-wrap">
										<div className="flex-auto">Do plans include support?</div>
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/c917b098f604744390b6ab72075646554d7e414d180913e73c5fc177b933ff99?"
											className="my-auto aspect-[1.85] w-[13px] stroke-neutral-800 stroke-[1.606px]"
										/>
									</div>
									<div className="mt-4 flex justify-between gap-5 rounded-lg bg-white px-4 py-6 max-md:max-w-full max-md:flex-wrap">
										<div className="flex-auto">Can I adjust my plan?</div>
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/c917b098f604744390b6ab72075646554d7e414d180913e73c5fc177b933ff99?"
											className="my-auto aspect-[1.85] w-[13px] stroke-neutral-800 stroke-[1.606px]"
										/>
									</div>
									<div className="mt-4 flex justify-between gap-5 rounded-lg bg-white px-4 py-6 max-md:max-w-full max-md:flex-wrap">
										<div className="flex-auto">
											Do plan prices include all fees?
										</div>
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/c917b098f604744390b6ab72075646554d7e414d180913e73c5fc177b933ff99?"
											className="my-auto aspect-[1.85] w-[13px] stroke-neutral-800 stroke-[1.606px]"
										/>
									</div>
									<div className="mt-4 flex justify-between gap-5 rounded-lg bg-white px-4 py-6 max-md:max-w-full max-md:flex-wrap">
										<div className="flex-auto">How do I cancel my plan?</div>
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/c917b098f604744390b6ab72075646554d7e414d180913e73c5fc177b933ff99?"
											className="my-auto aspect-[1.85] w-[13px] stroke-neutral-800 stroke-[1.606px]"
										/>
									</div>
								</div>
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
								<div className="relative flex w-full grow flex-col rounded-2xl border-2 border-solid border-purple-800 bg-white py-12 pl-16 pr-2.5 text-base text-gray-500 shadow-lg max-md:mt-10 max-md:max-w-full max-md:pl-5">
									<div className="mt-3 flex gap-1 self-start whitespace-nowrap font-medium uppercase text-purple-800">
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/b521be8c6bf1b04ba68eeeeb5ecaf26d1d08033afc51ae3353ac3e0c15d5c38d?"
											className="aspect-square w-5"
										/>
										<div className="my-auto grow">Have any questions</div>
									</div>
									<div className="mt-4 text-5xl font-bold uppercase leading-[58.08px] text-gray-800 max-md:max-w-full">
										Send A MEssage
									</div>
									<div className="mt-11 justify-center whitespace-nowrap border-b border-solid border-b-slate-200 py-5 max-md:mt-10 max-md:max-w-full">
										Name
									</div>
									<div className="mt-11 flex justify-between gap-5 whitespace-nowrap max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
										<div className="flex flex-1 flex-col justify-center">
											<div className="justify-center border-b border-solid border-b-slate-200 py-5">
												Email
											</div>
										</div>
										<div className="flex flex-1 flex-col justify-center">
											<div className="justify-center border-b border-solid border-b-slate-200 py-5">
												Phone
											</div>
										</div>
									</div>
									<div className="mt-11 self-start border-b border-solid border-b-slate-200 pb-20 pt-4 max-md:mt-10">
										Tell us about your query
									</div>
									<div className="mt-12 flex justify-center gap-2.5 self-start whitespace-nowrap rounded-[45px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-8 py-5 font-medium uppercase text-white max-md:mt-10 max-md:px-5">
										<div className="my-auto grow">Get in touch</div>
										<img
											alt="any"
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c8188bb935f3c80f18ef0feb38225398da4f41d254bbd5a29d1237bb5cd785?"
											className="aspect-square w-5"
										/>
									</div>
								</div>
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
													<div className="text-2xl font-semibold text-gray-800">
														Phone
													</div>
													<div className="mt-6 text-lg leading-7 text-neutral-600">
														090-8321-8676
														<br />
														080-6369-2395
													</div>
													<div className="mt-11 self-start text-2xl font-semibold text-gray-800 max-md:mt-10">
														Follow us
													</div>
													<div className="mt-6 flex gap-4 self-start pr-1.5">
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
				<div className="mt-24 flex w-full flex-col justify-end rounded-[40px_40px_0px_0px] bg-slate-950 pt-12 max-md:mt-10 max-md:max-w-full">
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
								<div className="flex justify-between gap-2.5 rounded-[35px] border border-solid border-white border-opacity-20 px-6 py-4 text-sm leading-5 text-white text-opacity-70 max-md:px-5">
									<img
										alt="any"
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/e76dc092ab7628a8a6a060dedab5122a1e4d31e49b3e57ec2d832bc1aa2563a2?"
										className="aspect-square w-5"
									/>
									<div className="grow">Enter your email</div>
								</div>
								<div className="flex justify-between gap-2.5 rounded-[45px] bg-[linear-gradient(134deg,#6E07AD_2.81%,#CB457A_75.03%,#E85A6A_95.48%)] px-8 py-4 text-base font-medium uppercase text-white max-md:px-5">
									<div className="my-auto grow">Subscribe</div>
									<img
										alt="any"
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/d57328880a976390a902064e78ed8489cdc73ddfc18d5eb1ccff7498dec13c4b?"
										className="aspect-square w-5"
									/>
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
								<div className="grow font-medium text-pink-600">Home</div>
								<div>Who we are </div>
								<div>Plans</div>
								<div className="grow">Contact</div>
							</div>
						</div>
					</div>
					<div className="mt-16 min-h-[8px] w-full bg-purple-800 max-md:mt-10 max-md:max-w-full" />
				</div>
			</div>
		</div>
	);
}

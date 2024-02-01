import { Metadata } from "next";

interface HomeProps {}

export const metadata: Metadata = {
	title: "Home",
	description: "",
};
export default function Home(params: HomeProps) {
	return (
		<div className=" font-kanit flex h-full w-full flex-1 flex-col bg-zinc-50">
			{/* <h1 className="text-center text-3xl ">Home</h1> */}

			<main className="flex h-full w-full flex-col">
				{/* remover min-h-screen : ajustar para mobile */}
				<div className="flex h-[700px] max-h-[820px] min-h-full w-full ">
					{/* content top page */}
					<div className="container ml-5 mt-16 w-full pb-16">
						<h3 className="ml-1 uppercase">One Stop Solution for business</h3>
						<div className="inline-flex items-start justify-start gap-2.5">
							<h1 className="font-kanit text-5xl font-bold uppercase leading-[1.1] text-gray-800">
								Turning Clicks into <br />
								Business Opportunities
							</h1>
						</div>
						<div className="w-full max-w-[767px]">
							<p className="py-6 text-center font-nunito text-lg font-normal leading-7 text-neutral-600 lg:text-left">
								Welcome to ClickMore, your trusted partner in achieving
								visibility and success in the digital world. If you're ready to
								take your business to the next level, you're in the right place.
								We're here to present innovative solutions that exceed
								expectations, putting your brand in the spotlight and driving
								business growth.
							</p>
						</div>

						{/* TODO: remove mb */}
						<div className=" flex gap-4">
							<button className="inline-flex h-[60px] w-[190px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-purple-800 via-pink-600 to-red-400 px-2 py-4">
								<div className="flex items-start justify-start gap-2.5">
									<div className="font-kanit text-base font-medium uppercase text-white">
										Learn More
									</div>
								</div>
								<div className="relative h-5 w-5"> {"->"}</div>
							</button>

							<button className="inline-flex h-[60px] w-[190px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-purple-800 via-pink-600 to-red-400 px-2 py-4">
								<div className="flex items-start justify-start gap-2.5">
									<div className="font-kanit text-base font-medium uppercase text-white">
										Learn More
									</div>
								</div>
								<div className="relative h-5 w-5"> {"->"}</div>
							</button>
						</div>
					</div>
					{/* END content top */}

					{/* content top right */}
					<div className="w-full min-w-[600px]  bg-slate-800">
						<h1>TESTANDO</h1>
					</div>
					{/* END content top right */}
				</div>
				<div className="flex h-24 w-full items-center justify-between bg-slate-100 px-10">
					<span>Google</span>
					<span>Stripe</span>
					<span>Instagram</span>
					<span>Meta</span>
					<span>Facebook</span>
				</div>

				<div className="mt-10">
					<div className="container mb-6 flex flex-1 ">
						<div className=" m-2 h-[500px] w-[500px] max-w-[680px] bg-pink-500 p-4">
							<div className="h-full w-full bg-slate-500 "></div>
						</div>
						<div className=" flex p-4">
							<div className="tex-center flex min-h-full min-w-[480px] max-w-[520px] flex-col  justify-center ">
								<h3 className="m-3 h-2.5 w-full items-start justify-start gap-2.5 text-left font-kanit text-base font-medium uppercase text-purple-800">
									Our values
								</h3>

								<h2 className="text-left font-kanit text-3xl font-bold uppercase leading-8 text-gray-800">
									Values That Define Us
								</h2>

								<p className="text-left font-nunito text-lg font-normal leading-[27px] text-neutral-600">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged.
								</p>
							</div>
						</div>
					</div>

					<div className="mt-10 w-full ">
						<div className="flex flex-col items-center justify-center">
							<h3 className="font-kanit text-base font-medium uppercase text-purple-800">
								Our Services
							</h3>
							<h3 className="text-center font-kanit text-[44px] font-bold uppercase leading-[58px] text-gray-800">
								Our Tailored Digital Services
							</h3>
							<p className="w-[680px] text-center font-nunito text-lg font-normal leading-5 text-neutral-600 ">
								From innovative solutions to transformative strategies, we craft
								success through tailored and dynamic offerings. Explore
								limitless possibilities with us.
							</p>
						</div>
					</div>
				</div>

				<div className="min-h-[400px] w-full">
					<div className="container mt-8 flex h-full min-w-full items-center justify-center gap-8">
						{Array.from({ length: 5 }).map((_, i) => (
							<div
								key={i}
								className="flex min-h-80 max-w-60  flex-col items-center gap-4 rounded-md bg-white p-6 shadow-md shadow-pink-100"
							>
								<div className="top-0 flex h-[64px] w-[54px] items-center justify-center bg-slate-800 font-semibold text-white">
									Icone
								</div>
								<div>
									<p className="text-center font-nunito text-lg font-normal text-neutral-500">
										ClickAdsense elevates your online presence, captivate
										audiences, ensuring your brand is the first choice.
									</p>
								</div>
								<button className="inline-flex h-[30px] w-[140px] items-center justify-center  rounded-full bg-gradient-to-br from-purple-800 via-pink-600 to-red-400 px-2 py-4">
									<div className="flex items-start justify-start">
										<div className="font-kanit text-sm font-medium uppercase text-white">
											Learn More
										</div>
									</div>
									<div className="relative h-5 w-5 text-white"> {"->"}</div>
								</button>
							</div>
						))}
					</div>
				</div>
				<div className="container my-24">
					<div className=" flex h-[277px] w-full max-w-[1318px]  rounded-[32px] bg-gradient-to-br from-purple-800 via-pink-600 to-red-400">
						<div className=" absolute -mt-14 ml-24 h-[383px] w-[424px] self-start rounded-[32px] bg-neutral-500 mix-blend-multiply" />

						<div className="flex h-full w-full items-center justify-end px-32">
							<h2 className="flex justify-self-end text-lg font-semibold text-white">
								Teste testando agora
							</h2>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

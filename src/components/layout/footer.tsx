import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { NavBarLinks } from './nav-bar';

interface FooterProps {}

export default function Footer(params: FooterProps) {
	return (
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
	);
}

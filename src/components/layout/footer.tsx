import {
	ArrowUpRight,
	FacebookFill,
	InstagramFill,
	TwitterFill,
} from 'akar-icons';
import Image from 'next/image';
import Logo from '../../assets/logo-clickmore.svg';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { NavBarLinks } from './nav-bar-links';

interface FooterProps {}

export default function Footer(params: FooterProps) {
	return (
		<footer className="mt-24 flex w-full flex-col justify-end rounded-[40px_40px_0px_0px] bg-slate-950 pt-12 max-md:mt-10 max-md:max-w-full">
			<div className="mt-6 flex w-full max-w-screen-xl items-center justify-center self-center max-lg:px-5 max-md:max-w-full lg:px-8">
				<div className="flex w-[544px] max-w-full flex-col items-center">
					<Image
						alt="click more logo"
						loading="lazy"
						src={Logo}
						className="aspect-[4.76] max-w-full self-start max-lg:w-[200px] max-sm:w-[195px] lg:w-[255px]"
					/>
					<div className="mt-4 self-stretch text-center text-3xl font-semibold uppercase leading-9 text-white max-md:max-w-full">
						Get Latest Updates, News & Offers
						<br />
						from Clickmore
					</div>
					<div className="mt-10 flex justify-between gap-2 self-stretch whitespace-nowrap max-md:max-w-full max-md:flex-wrap">
						<div className="flex min-w-full max-w-md items-center justify-center gap-3 space-x-2 max-sm:flex-col max-sm:px-5">
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
							<InstagramFill width={20} height={20} color="#d6d6d6" />
						</div>
						<div className="flex aspect-square h-10 flex-1 items-center justify-center rounded-[100px] border border-solid border-white border-opacity-20 bg-white bg-opacity-10 px-2.5">
							<FacebookFill width={20} height={20} color="#d6d6d6" />
						</div>
						<div className="flex aspect-square h-10 flex-1 items-center justify-center rounded-[100px] border border-solid border-white border-opacity-20 bg-white bg-opacity-10 px-2.5">
							<TwitterFill width={20} height={20} color="#d6d6d6" />
						</div>
					</div>
					<div className="mt-10 flex justify-between gap-5 text-base uppercase text-neutral-300">
						<NavBarLinks showInFooter={true} />
					</div>
				</div>
			</div>
			<div className="mt-16 min-h-[8px] w-full bg-pink-500 max-md:mt-10 max-md:max-w-full" />
		</footer>
	);
}

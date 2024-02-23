import { FacebookFill, InstagramFill, TwitterFill } from 'akar-icons';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../assets/logo-clickmore.svg';

interface FooterProps {}

export default function Footer(params: FooterProps) {
	return (
		<footer className="mt-24 flex h-full w-full max-w-full flex-col justify-end rounded-[40px_40px_0px_0px] bg-slate-950 pt-5 max-md:mt-10">
			<div className="px-11">
				<div className="flex flex-col ">
					<div className="6 mt-6 flex flex-col pr-2 text-sm">
						<Image
							alt="click more logo"
							loading="lazy"
							src={Logo}
							className="aspect-[4.76] max-w-full self-start max-lg:w-[200px] max-sm:w-[195px] lg:w-[200px]"
						/>
						<p className="mt-4 max-w-[250px] text-zinc-50 lg:block">
							clickmore.com®️ é uma marca registada por clickmore.com, Inc.
							Todos os direitos reservados.
						</p>
					</div>
					<div className="mt-4 flex h-12 w-full place-items-center gap-3">
						<Link
							href="#"
							className="flex aspect-square h-10 max-w-11 flex-1 items-center justify-center rounded-full border border-solid border-white border-opacity-20 bg-white bg-opacity-10 px-2.5"
						>
							<InstagramFill width={20} height={20} color="#d6d6d6" />
						</Link>
						<Link
							href="#"
							className="flex aspect-square h-10 max-w-11 flex-1 items-center justify-center rounded-[100px] border border-solid border-white border-opacity-20 bg-white bg-opacity-10 px-2.5"
						>
							<FacebookFill width={20} height={20} color="#d6d6d6" />
						</Link>
						<Link
							href="#"
							className="flex aspect-square h-10 max-w-11 flex-1 items-center justify-center rounded-[100px] border border-solid border-white border-opacity-20 bg-white bg-opacity-10 px-2.5"
						>
							<TwitterFill width={20} height={20} color="#d6d6d6" />
						</Link>
					</div>
				</div>

				<div className="mt-10 flex h-full w-full ">
					<nav className="grid w-full grid-cols-1 gap-x-4 gap-y-10 leading-10 text-zinc-50 sm:grid-cols-2 md:grid-cols-4 ">
						<ul>
							<li className="text-lg font-semibold uppercase">Company</li>
							<li className="pt-4 text-lg ">
								<Link
									className="hover:text-cm_gradient flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
									href="https://github.com/calcom/cal.com"
								>
									Terms
								</Link>
							</li>
						</ul>

						<ul>
							<li className="text-lg font-semibold uppercase">Solutions</li>
						</ul>

						<ul>
							<li className="text-lg font-semibold uppercase">Resources</li>
						</ul>

						<ul>
							<li className="text-lg font-semibold uppercase">Use Cases</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="mt-16 min-h-[8px] w-full bg-pink-500 max-md:mt-10 max-md:max-w-full" />
		</footer>
	);
}

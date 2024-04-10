'use client';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavBarLinksPagePlans from './nav-bar-links-page-plans';

import ClickMoreLogoWhite from '../../assets/clickmore-logo-white.svg';

export default function MenuMobile() {
	const searchParams = useSearchParams();
	const [isPlanPage, setIsPlanPage] = useState<boolean | null>(null);

	useEffect(() => {
		const existParamPlan = searchParams.has('plan');
		setIsPlanPage(existParamPlan);
	}, [searchParams]);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<button
					type="button"
					className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cm-gradient-imgcolor p-2 text-sm text-white hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-purple-800 md:hidden"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Open menu</span>
					<svg
						className="h-5 w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
			</SheetTrigger>
			<SheetContent className="h-full w-full bg-cm-gradient-imgcolor text-white">
				<SheetHeader className="flex items-center justify-center">
					<SheetTitle>
						<Image
							alt="Logo click more purple "
							loading="lazy"
							src={ClickMoreLogoWhite}
							className="my-auto aspect-[4.76] w-[185px] max-w-full self-stretch"
						/>
					</SheetTitle>
					{/* <SheetDescription></SheetDescription> */}
				</SheetHeader>

				<div>
					<NavBarLinksPagePlans showInMobile={true} />
				</div>
			</SheetContent>
		</Sheet>
	);
}

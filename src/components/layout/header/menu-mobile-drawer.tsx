'use client';
import { X } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '../../ui/drawer';

import { Locale } from '@/i18n-config';
import { cn } from '@/lib/utils';
import { Cart } from 'akar-icons';
import Image from 'next/image';
import NavBarLinksPagePlans from './nav-bar-links-page-plans';

import ClickMoreLogoWhite from '@/assets/clickmore-logo-white.svg';
import LocaleSwitcher from '../../locale-switcher';

interface MenuMobileDrawerProps {
	lang: Locale;
}

export default function MenuMobileDrawer({ lang }: MenuMobileDrawerProps) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const [isPlanPage, setIsPlanPage] = useState<boolean | null>(null);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	useEffect(() => {
		const existParamPlan = searchParams.has('plan');
		setIsPlanPage(existParamPlan);
	}, [searchParams]);

	useEffect(() => {
		setDrawerOpen(false);
	}, [pathname]);

	return (
		<Drawer direction="right">
			<DrawerTrigger asChild>
				<Button
					// onClick={() => setDrawerOpen(true)}
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
				</Button>
			</DrawerTrigger>
			<DrawerContent className="bg-cm-gradient-imgcolor text-white">
				<DrawerHeader className="relative">
					<DrawerClose className="absolute right-0 top-0">
						<Button variant="ghost" className="group rounded-lg">
							<X className="stroke-white group-hover:stroke-slate-950" />
						</Button>
					</DrawerClose>
					<DrawerTitle className="mt-10 flex w-full items-center  justify-center gap-5 ">
						<Image
							alt="Logo click more purple "
							loading="lazy"
							src={ClickMoreLogoWhite}
							className="my-auto aspect-[4.76] w-[185px] max-w-full self-center"
						/>

						{/* Are you absolutely sure? */}
					</DrawerTitle>
					{/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
				</DrawerHeader>
				<div className="mt-2 flex justify-between px-10 text-lg font-semibold">
					<Button variant="ghost" className="relative p-2 hover:bg-slate-100/5">
						<span className="absolute right-0 top-0  flex h-4 w-4 items-center justify-center rounded-full bg-white p-1 font-kanit text-sm text-cm-primary">
							1
						</span>
						<Cart
							className={cn('my-auto self-stretch stroke-white')}
							size={30}
						/>
					</Button>
					<LocaleSwitcher withPhotoInBackground={true} langCurrent={lang} />
				</div>
				<div>
					<NavBarLinksPagePlans showInMobile={true} />
				</div>
				{/* <DrawerFooter>
					<Button>Submit</Button>
				</DrawerFooter> */}
			</DrawerContent>
		</Drawer>
	);

	// return (
	// 	<Sheet>
	// 		<SheetTrigger asChild>
	// 			<button
	// 				type="button"
	// 				className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cm-gradient-imgcolor p-2 text-sm text-white hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-purple-800 md:hidden"
	// 				aria-controls="navbar-default"
	// 				aria-expanded="false"
	// 			>
	// 				<span className="sr-only">Open menu</span>
	// 				<svg
	// 					className="h-5 w-5"
	// 					aria-hidden="true"
	// 					xmlns="http://www.w3.org/2000/svg"
	// 					fill="none"
	// 					viewBox="0 0 17 14"
	// 				>
	// 					<path
	// 						stroke="currentColor"
	// 						strokeLinecap="round"
	// 						strokeLinejoin="round"
	// 						strokeWidth="2"
	// 						d="M1 1h15M1 7h15M1 13h15"
	// 					/>
	// 				</svg>
	// 			</button>
	// 		</SheetTrigger>
	// 		<SheetContent className="h-full w-full bg-cm-gradient-imgcolor text-white">
	// 			<SheetHeader className="flex items-center justify-center">
	// 				<SheetTitle>
	// 					<Image
	// 						alt="Logo click more purple "
	// 						loading="lazy"
	// 						src={ClickMoreLogoWhite}
	// 						className="my-auto aspect-[4.76] w-[185px] max-w-full self-stretch"
	// 					/>
	// 				</SheetTitle>
	// 				{/* <SheetDescription></SheetDescription> */}
	// 			</SheetHeader>

	// 			<div>
	// 				<NavBarLinksPagePlans showInMobile={true} />
	// 			</div>
	// 		</SheetContent>
	// 	</Sheet>
	// );
}

'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../ui/button';

interface NavBarLinksPagePlansProps {
	showInFooter?: boolean;
	showInMobile?: boolean;
}

export default function NavBarLinksPagePlans({
	showInFooter = false,
	showInMobile = false,
}: NavBarLinksPagePlansProps) {
	const searchParams = useSearchParams();
	const [isPlanPage, setIsPlanPage] = useState<boolean | null>(null);
	const navigation = useRouter();

	useEffect(() => {
		const existParamPlan = searchParams.has('plan');
		setIsPlanPage(existParamPlan);
	}, [searchParams]);

	return (
		<nav
			className={cn(
				'my-auto flex gap-5',
				!showInMobile &&
					'max-md:hidden max-md:justify-center lg:justify-between',
				!showInFooter && (isPlanPage === null || !isPlanPage)
					? 'text-slate-800'
					: isPlanPage
						? 'text-white'
						: 'text-zinc-300',
				showInMobile &&
					'mt-10 flex flex-col items-center justify-center gap-5 text-white',
			)}
		>
			<Button
				onClick={() => (window.location.href = '/home')}
				className={twMerge(
					'flex w-full grow items-center justify-center rounded-lg bg-transparent p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
				)}
			>
				Home
			</Button>

			{/* <Collapsible className="w-full">
				<CollapsibleTrigger className="flex w-full grow items-center justify-center gap-2 rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600">
					Plans
					<ArrowDownNarrowWideIcon size={16} />
				</CollapsibleTrigger>
				<CollapsibleContent className="flex flex-col gap-5"> */}
			<Button
				onClick={() => (window.location.href = '/click-adsense?plan=true')}
				className={twMerge(
					'ml-4 flex w-full grow items-start justify-center rounded-lg bg-transparent p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
				)}
			>
				ClickAdsense
			</Button>

			<Button
				onClick={() => (window.location.href = '/click-media?plan=true')}
				className={twMerge(
					'ml-4 flex w-full grow items-start justify-center rounded-lg bg-transparent p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
				)}
			>
				ClickMedia
			</Button>

			<Button
				onClick={() => (window.location.href = '/click-pages?plan=true')}
				className={twMerge(
					'ml-4 flex w-full grow items-start justify-center rounded-lg bg-transparent p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
				)}
			>
				ClickPages
			</Button>

			<Button
				onClick={() => (window.location.href = '/click-web?plan=true')}
				className={twMerge(
					'ml-4 flex w-full grow items-start justify-center rounded-lg bg-transparent p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
				)}
			>
				ClickWeb
			</Button>
			{/* </CollapsibleContent>
			</Collapsible> */}

			{!showInMobile && (
				<Link
					// onClick={() => (window.location.href = '/home#contact')}
					href={{
						href: '/home',
						hash: 'contact',
					}}
					className={twMerge(
						'flex w-full grow items-center justify-center rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
					)}
				>
					Contact
				</Link>
			)}
		</nav>
	);
}

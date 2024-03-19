'use client';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

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
			<Link
				href="/home"
				className={twMerge(
					'flex w-full grow items-center justify-center rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
				)}
			>
				Home
			</Link>
			<Link
				href="#who-we-are"
				className={twMerge(
					'flex w-full grow items-center justify-center rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
				)}
			>
				Who we are
			</Link>

			<Collapsible className="w-full">
				<CollapsibleTrigger className="flex w-full grow items-center justify-center rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600">
					Plans
				</CollapsibleTrigger>
				<CollapsibleContent className="flex flex-col gap-5">
					<Link
						href="#services"
						className={twMerge(
							'ml-4 flex w-full grow items-start justify-center rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
						)}
					>
						ClickAdsense
					</Link>

					<Link
						href="#services"
						className={twMerge(
							'ml-4 flex w-full grow items-start justify-center rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
						)}
					>
						ClickMedia
					</Link>

					<Link
						href="#services"
						className={twMerge(
							'ml-4 flex w-full grow items-start justify-center rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
						)}
					>
						ClickPages
					</Link>

					<Link
						href="#services"
						className={twMerge(
							'ml-4 flex w-full grow items-start justify-center rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
						)}
					>
						ClickWeb
					</Link>
				</CollapsibleContent>
			</Collapsible>

			<Link
				href="#contact"
				className={twMerge(
					'flex w-full grow items-center justify-center rounded-lg p-2 text-center text-xl font-medium text-white transition duration-700 hover:bg-white hover:text-pink-600',
				)}
			>
				Contact
			</Link>
		</nav>
	);
}

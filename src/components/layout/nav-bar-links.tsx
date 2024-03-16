'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface NavBarLinksProps {
	showInFooter?: boolean;
}

export function NavBarLinks({ showInFooter = false }: NavBarLinksProps) {
	const pathname_hook = usePathname();
	const searchParams = useSearchParams();
	const navigation = useRouter();
	const [pathname, setPathname] = useState(pathname_hook);

	const [withPhotoInBackground, setWithPhotoInBackground] = useState<
		boolean | null
	>(null);

	useEffect(() => {
		if (window === undefined) {
			return;
		}

		let hashURL = window.location.hash;

		if (hashURL !== '') {
			setPathname(window.location.hash);
		} else {
			setPathname(pathname_hook);
		}

		const existParamPlan = searchParams.has('plan');
		setWithPhotoInBackground(existParamPlan);
	}, [pathname_hook, searchParams]);

	return (
		<nav
			className={cn(
				'my-auto flex gap-5 max-md:justify-center lg:justify-between',
				!showInFooter &&
					(withPhotoInBackground === null || !withPhotoInBackground)
					? 'text-slate-800'
					: withPhotoInBackground
						? 'text-white'
						: 'text-zinc-300',
			)}
		>
			<Link
				href="/home"
				className={twMerge(
					pathname == ''
						? 'grow font-medium text-pink-600'
						: 'hover:text-pink-600',
				)}
			>
				Home
			</Link>
			<Link
				href="#who-we-are"
				className={twMerge(
					pathname === '#who-we-are'
						? 'grow font-medium text-pink-600'
						: 'hover:text-pink-600',
				)}
			>
				Who we are
			</Link>
			<Link
				href="#services"
				className={twMerge(
					pathname === '#services'
						? 'grow font-medium text-pink-600'
						: 'hover:text-pink-600',
				)}
			>
				Plans
			</Link>
			<Link
				href="#contact"
				className={twMerge(
					pathname === '#contact'
						? 'grow font-medium text-pink-600'
						: 'hover:text-pink-600',
				)}
			>
				Contact
			</Link>
		</nav>
	);
}

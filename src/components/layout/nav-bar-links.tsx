'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface NavBarLinksProps {
	showInFooter?: boolean;
}

export function NavBarLinks({ showInFooter = false }: NavBarLinksProps) {
	const pathname_hook = usePathname();
	const searchParams = useSearchParams();
	const [pathname, setPathname] = useState(pathname_hook);

	useEffect(() => {
		console.log(pathname_hook, ' >> ' + window.location.hash);
		window !== undefined
			? setPathname(window.location.hash)
			: setPathname(pathname_hook);
	}, [pathname_hook, searchParams]);

	return (
		<nav
			className={cn(
				'my-auto flex gap-5 max-md:justify-center lg:justify-between',
				!showInFooter ? 'text-gray-800' : 'text-gray-500',
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

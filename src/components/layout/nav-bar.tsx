'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface NavBarLinksProps {
	showInFooter?: boolean;
}

export function NavBarLinks({ showInFooter = false }: NavBarLinksProps) {
	const pathname = usePathname();

	return (
		<nav
			className={cn(
				'my-auto flex justify-between gap-5 self-stretch',
				!showInFooter ? 'text-gray-800' : 'text-gray-500',
			)}
		>
			<Link
				href="/home"
				className={twMerge(
					pathname.endsWith('home')
						? 'grow font-medium text-pink-600'
						: 'hover:text-pink-600',
				)}
			>
				Home
			</Link>
			<Link
				href="/who-we-are"
				className={twMerge(
					pathname.endsWith('who-we-are')
						? 'grow font-medium text-pink-600'
						: 'hover:text-pink-600',
				)}
			>
				Who we are
			</Link>
			<Link
				href="/plans"
				className={twMerge(
					pathname.endsWith('plans')
						? 'grow font-medium text-pink-600'
						: 'hover:text-pink-600',
				)}
			>
				Plans
			</Link>
			<Link
				href="/contact"
				className={twMerge(
					pathname.endsWith('contact')
						? 'grow font-medium text-pink-600'
						: 'hover:text-pink-600',
				)}
			>
				Contact
			</Link>
		</nav>
	);
}

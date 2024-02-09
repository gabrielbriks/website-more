'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function NavBarLinks() {
	const pathname = usePathname();

	return (
		<nav className="my-auto flex justify-between gap-5 self-stretch text-gray-800">
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

'use client';
import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n-config';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Cart } from 'akar-icons';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ClickMoreLogoPurple from '../../assets/click-more-purple.svg';
import ClickMoreLogoWhite from '../../assets/click-more-white.svg';
import LocaleSwitcher from '../locale-switcher';
import { NavBarLinks } from './nav-bar-links';

interface HeaderProps {
	lang: Locale;
}

export function Header({ lang }: HeaderProps) {
	const params = useSearchParams();
	const [withPhotoInBackground, setWithPhotoInBackground] = useState<
		boolean | null
	>(null);

	useEffect(() => {
		if (window === undefined) {
			return;
		}

		const currentHash = window.location.hash.replace('#', '');
		// console.log(currentHash);
	}, [params]);

	return (
		<header className="absolute z-10 flex w-full flex-wrap items-center gap-5 overflow-hidden px-16 pt-8 text-base uppercase max-md:max-w-full max-md:flex-col max-md:justify-center lg:justify-between">
			<Image
				alt="Logo click more purple "
				loading="lazy"
				src={
					withPhotoInBackground !== null && withPhotoInBackground
						? ClickMoreLogoWhite
						: ClickMoreLogoPurple
				}
				className="my-auto aspect-[4.76] w-64 max-w-full self-stretch"
			/>
			<NavBarLinks />
			<div className="flex items-center justify-between gap-5 self-stretch whitespace-nowrap font-medium text-pink-600">
				<div>
					<Cart className="my-auto self-stretch stroke-pink-600" size={20} />
				</div>
				<LocaleSwitcher langCurrent={lang} />

				<Button
					variant="outline"
					className={cn(
						' flex items-center justify-between gap-2.5 self-stretch rounded-[45px] border border-solid  px-8 py-6 max-md:px-5',
						withPhotoInBackground !== null && withPhotoInBackground
							? 'transform border-purple-700/50 bg-button-gradient tracking-widest text-white transition duration-700 hover:scale-105 hover:text-pink-50'
							: 'group border-pink-600 bg-transparent transition duration-700 hover:bg-button-gradient hover:text-white hover:transition-colors hover:duration-1000',
					)}
				>
					<span className="uppercase">Client Area</span>
					<ArrowUpRight
						size={20}
						color="#db2777"
						className={cn(
							'transition duration-700',
							withPhotoInBackground !== null && withPhotoInBackground
								? 'stroke-white hover:stroke-pink-100'
								: 'group-hover:stroke-white',
						)}
					/>
				</Button>
			</div>
		</header>
	);
}

'use client';
import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n-config';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Cart } from 'akar-icons';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import LocaleSwitcher from '../locale-switcher';
import { NavBarLinks } from './nav-bar-links';

import ClickMoreLogoPurple from '../../assets/click-more-purple.svg';
import ClickMoreLogoWhite from '../../assets/click-more-white.svg';
import MenuMobile from '../header/menu-mobile';

interface HeaderProps {
	lang: Locale;
}

export function Header({ lang }: HeaderProps) {
	const [withPhotoInBackground, setWithPhotoInBackground] = useState<
		boolean | null
	>(null);
	const params = useSearchParams();

	useEffect(() => {
		if (window === undefined) {
			return;
		}

		setWithPhotoInBackground(params.has('plan'));
	}, [params]);

	return (
		<header className="absolute z-10 flex w-full flex-wrap items-center gap-5 overflow-hidden px-16 pt-8 text-base uppercase max-md:flex max-md:max-w-full max-md:justify-between lg:justify-between">
			<Image
				alt="Logo click more purple "
				loading="lazy"
				src={
					withPhotoInBackground !== null && withPhotoInBackground
						? ClickMoreLogoWhite
						: ClickMoreLogoPurple
				}
				className="my-auto aspect-[4.76] max-w-full self-stretch max-md:w-48 lg:w-64"
			/>

			<MenuMobile />

			<NavBarLinks />

			<div className="flex items-center justify-between gap-5 self-stretch whitespace-nowrap font-medium text-pink-600 max-lg:hidden">
				<div>
					<Cart className="my-auto self-stretch stroke-pink-600" size={20} />
				</div>
				<LocaleSwitcher langCurrent={lang} />

				<Button
					variant="outline"
					className={cn(
						' flex items-center justify-between gap-2.5 self-stretch rounded-[45px] border border-solid  px-8 py-6 max-md:px-5',
						withPhotoInBackground !== null && withPhotoInBackground
							? 'bg-cm-gradient-imgcolor transform border-purple-700/50 tracking-widest text-white transition duration-700 hover:scale-105 hover:text-pink-50'
							: 'hover:bg-cm-gradient-imgcolor group border-pink-600 bg-transparent transition duration-700 hover:text-white hover:transition-colors hover:duration-1000',
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

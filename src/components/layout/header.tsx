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

import { useDictionaryContext } from '@/contexts/dictionaryContext';
import Link from 'next/link';
import ClickMoreLogoPurple from '../../assets/click-more-purple.svg';
import ClickMoreLogoWhite from '../../assets/click-more-white.svg';
import MenuMobileDrawer from '../header/menu-mobile-drawer';
import LoaderGlobal from './loadings/loading-global';

interface HeaderProps {
	lang: Locale;
}

export function Header({ lang }: HeaderProps) {
	const [withPhotoInBackground, setWithPhotoInBackground] = useState<
		boolean | null
	>(null);
	// const [loading, setLoading] = useState(true);

	const params = useSearchParams();
	const { dictionary, loading } = useDictionaryContext();

	useEffect(() => {
		if (window === undefined) {
			return;
		}

		setWithPhotoInBackground(params.has('plan'));
	}, [params]);

	// useEffect(() => {
	// 	if (Object.keys(dictionary).length > 0) {
	// 		setLoading(false);
	// 	}
	// }, [dictionary]);

	if (loading) {
		return <LoaderGlobal />;
	}

	return (
		<header className="absolute z-10 flex w-full flex-wrap items-center gap-5 overflow-hidden pt-8 text-base uppercase max-md:flex max-md:max-w-full max-md:justify-between max-md:px-6 lg:justify-between lg:px-16">
			<Link href="/home">
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
			</Link>

			{/* <MenuMobile /> */}
			<MenuMobileDrawer lang={lang} />

			<NavBarLinks />

			<div className="flex items-center justify-between gap-5 self-stretch whitespace-nowrap font-medium text-purple-700 max-lg:hidden">
				<div>
					<Cart
						className={cn(
							'my-auto self-stretch stroke-purple-700',
							withPhotoInBackground && ' stroke-white',
						)}
						size={20}
					/>
				</div>

				<LocaleSwitcher
					withPhotoInBackground={withPhotoInBackground}
					langCurrent={lang}
				/>

				<Button
					variant="outline"
					className={cn(
						' flex items-center justify-between gap-2.5 self-stretch rounded-[45px] border border-solid  px-8 py-6 max-md:px-5',
						withPhotoInBackground !== null && withPhotoInBackground
							? 'transform border-purple-700/50 bg-cm-gradient-imgcolor tracking-widest text-white transition duration-700 hover:scale-105 hover:text-pink-50'
							: 'group border-cm-primary bg-transparent transition duration-700 hover:bg-cm-gradient-imgcolor hover:text-white hover:transition-colors hover:duration-1000',
					)}
				>
					<span
						className={cn(
							'uppercase text-cm-primary transition duration-1000 group-hover:text-white',
							withPhotoInBackground && 'text-white',
						)}
					>
						{dictionary.layout.header.buttonClientArea}
					</span>
					<ArrowUpRight
						size={20}
						// color="#db2777"
						className={cn(
							'stroke-cm-primary transition duration-700',
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

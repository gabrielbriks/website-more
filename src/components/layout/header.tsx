'use client';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ShoppingCart } from 'lucide-react';
import { NavBarLinks } from './nav-bar-links';

import { Locale } from '@/i18n-config';
import LocaleSwitcher from '../locale-switcher';

interface HeaderProps {
	lang: Locale;
}

export function Header({ lang }: HeaderProps) {
	return (
		<header className="absolute z-10 flex w-full items-center gap-5 px-16 pt-8 text-base uppercase max-md:max-w-full max-md:flex-col max-md:flex-wrap max-md:justify-center lg:justify-between">
			<img
				alt="any"
				loading="lazy"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/257c8423ead96b0f8bc54adb8d5087d640a15d0783ec2955b954bf5a86816ae9?"
				className="my-auto aspect-[4.76] w-64 max-w-full self-stretch"
			/>
			<NavBarLinks />
			<div className="flex items-center justify-between gap-5 self-stretch whitespace-nowrap font-medium text-pink-600">
				<div>
					<ShoppingCart
						className="my-auto self-stretch stroke-pink-600"
						size={20}
					/>
				</div>

				<LocaleSwitcher langCurrent={lang} />

				<Button
					variant="outline"
					className="group flex items-center justify-between gap-2.5 self-stretch rounded-[45px] border border-solid border-pink-600 bg-transparent px-8 py-6 transition duration-700 hover:bg-button-gradient hover:text-white hover:transition-colors hover:duration-1000 max-md:px-5"
				>
					<span className="uppercase">Create Account</span>
					<ArrowUpRight
						size={20}
						color="#db2777"
						className="transition duration-700 group-hover:stroke-white"
					/>
				</Button>
			</div>
		</header>
	);
}

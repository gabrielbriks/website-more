'use client';
import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n-config';
import { ArrowUpRight, Cart } from 'akar-icons';
import Image from 'next/image';
import ClickMoreLogoPurple from '../../assets/click-more-purple.svg';
import LocaleSwitcher from '../locale-switcher';
import { NavBarLinks } from './nav-bar-links';

interface HeaderProps {
	lang: Locale;
}

export function Header({ lang }: HeaderProps) {
	return (
		<header className="absolute z-10 flex w-full flex-wrap items-center gap-5 overflow-hidden px-16 pt-8 text-base uppercase max-md:max-w-full max-md:flex-col max-md:justify-center lg:justify-between">
			<Image
				alt="Logo click more purple "
				loading="lazy"
				src={ClickMoreLogoPurple} //"https://cdn.builder.io/api/v1/image/assets/TEMP/257c8423ead96b0f8bc54adb8d5087d640a15d0783ec2955b954bf5a86816ae9?"
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

'use client';
import Image from 'next/image';
import FacebookLogo from '../assets/icons-business/facebook-logo.svg';
import GoogleLogo from '../assets/icons-business/google-logo.svg';
import InstagramLogo from '../assets/icons-business/instagram-logo.svg';
import MetaLogo from '../assets/icons-business/meta-logo.svg';
import StripeLogo from '../assets/icons-business/stripe-logo.svg';
import ParallaxLogos from './parallax-logos';

interface AreaLogosPlatformsProps {}

export default function AreaLogosPlatforms(params: AreaLogosPlatformsProps) {
	return (
		<ParallaxLogos baseVelocity={1}>
			<div className="flex min-w-full items-center justify-between gap-5 overflow-hidden whitespace-nowrap ">
				<Image
					alt="any"
					loading="lazy"
					src={GoogleLogo}
					className="my-auto aspect-[2.94] w-[122px] max-w-full self-stretch"
				/>
				<Image
					alt="any"
					loading="lazy"
					src={StripeLogo}
					className="my-auto aspect-[2.13] w-[107px] max-w-full self-stretch"
				/>
				<Image
					alt="any"
					loading="lazy"
					src={InstagramLogo}
					className="aspect-[2.94] w-[163px] max-w-full self-stretch"
				/>
				<Image
					alt="any"
					loading="lazy"
					src={MetaLogo}
					className="my-auto aspect-[3.03] w-[104px] max-w-full self-stretch"
				/>
				<Image
					alt="any"
					loading="lazy"
					src={FacebookLogo}
					className="my-auto aspect-[3.33] w-[148px] max-w-full self-stretch"
				/>
			</div>
		</ParallaxLogos>
	);
}

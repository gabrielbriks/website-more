'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import FacebookLogo from '../assets/icons-business/facebook-logo.svg';
import GoogleLogo from '../assets/icons-business/google-logo.svg';
import InstagramLogo from '../assets/icons-business/instagram-logo.svg';
import MetaLogo from '../assets/icons-business/meta-logo.svg';
import StripeLogo from '../assets/icons-business/stripe-logo.svg';

interface AreaLogosPlatformsProps {}

export default function AreaLogosPlatforms(params: AreaLogosPlatformsProps) {
	return (
		<Marquee className="flex gap-10">
			<Image
				alt="any"
				loading="lazy"
				src={GoogleLogo}
				className="mx-14 my-auto aspect-[2.94] w-[122px] max-w-full self-stretch"
			/>
			<Image
				alt="any"
				loading="lazy"
				src={StripeLogo}
				className="mx-14 my-auto aspect-[2.13] w-[107px] max-w-full self-stretch"
			/>
			<Image
				alt="any"
				loading="lazy"
				src={InstagramLogo}
				className="mx-14 aspect-[2.94] w-[163px] max-w-full self-stretch"
			/>
			<Image
				alt="any"
				loading="lazy"
				src={MetaLogo}
				className="mx-14 my-auto aspect-[3.03] w-[104px] max-w-full self-stretch"
			/>
			<Image
				alt="any"
				loading="lazy"
				src={FacebookLogo}
				className="mx-14 my-auto aspect-[3.33] w-[148px] max-w-full self-stretch"
			/>
		</Marquee>
	);
}

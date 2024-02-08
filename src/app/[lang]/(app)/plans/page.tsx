import { ClickAdsense } from '@/components/hero-click-adsense';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Plans',
	description: '',
};

export default function Plans() {
	return (
		<div className="flex h-full w-full flex-1 flex-col font-kanit">
			<h1 className="text-center text-3xl">Plans</h1>

			<ClickAdsense />
		</div>
	);
}

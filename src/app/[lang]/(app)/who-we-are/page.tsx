import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Who We Are',
	description: '',
};

export default function WhoWeAre() {
	return (
		<div className="flex h-full w-full flex-1 flex-col font-kanit">
			<h1 className="text-center text-3xl">Who We Are</h1>
		</div>
	);
}

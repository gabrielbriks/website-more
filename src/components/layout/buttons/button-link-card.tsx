import { ArrowUpRight } from 'akar-icons';
import Link from 'next/link';

interface ButtonLinkCardProps {
	urlTarget: string;
	text: string;
	locale: string;
}

export default function ButtonLinkCard({
	urlTarget,
	text,
	locale,
}: ButtonLinkCardProps) {
	return (
		<Link
			className="flex max-h-14 justify-between gap-2.5 self-center rounded-[45px] border-purple-950 bg-cm-primary px-8 py-3 font-medium text-white transition duration-500 hover:text-white hover:opacity-90 max-md:px-5"
			href={`${urlTarget}?plan=true`}
			locale={locale}
		>
			<span className="h-auto uppercase max-sm:text-sm sm:text-base">
				{text}
			</span>
			<ArrowUpRight
				size={20}
				className="stroke-white transition duration-700"
			/>
		</Link>
	);
}

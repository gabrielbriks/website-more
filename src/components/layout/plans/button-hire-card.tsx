import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'akar-icons';
import { useRouter } from 'next/navigation';

interface ButtonHireCardProps {
	text: string;
	urlTarget: string;
}

export default function ButtonHireCard({
	text,
	urlTarget,
}: ButtonHireCardProps) {
	const navigation = useRouter();

	return (
		<Button
			onClick={() => navigation.push(urlTarget)}
			className="flex h-14 min-w-full max-w-[200px] transform justify-center gap-2.5 rounded-[45px] border-purple-800 bg-cm-primary px-8 py-5 tracking-widest text-white transition duration-700 hover:scale-105 hover:bg-purple-950"
		>
			<span className="font-kanit text-lg font-normal uppercase leading-4 max-sm:text-base">
				{text}
			</span>
			<ArrowUpRight
				size={20}
				className="stroke-white transition duration-700"
			/>
		</Button>
	);
}

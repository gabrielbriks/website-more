import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'akar-icons';
import { AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Cookies from 'universal-cookie';
interface ButtonHireCardProps {
	text: string;
	urlTarget: string;
}

export default function ButtonHireCard({
	text,
	urlTarget,
}: ButtonHireCardProps) {
	const navigation = useRouter();
	const cookies = new Cookies();

	const redirectToUrlTargetPlan = (url: string) => {
		const planSelected = url && url.split('?').toString().split('=')[1];

		// console.log('planSelected', planSelected);

		if (planSelected) cookies.set('planSelected', planSelected);
		else {
			toast('Ops! Not found plan selected. ', {
				description:
					'Oops!  Not found selection of plan. Refresh the page for select plan again.',
				duration: 5000,
				icon: <AlertCircle className="bg-red-700" />,
			});
		}
		navigation.push(url);
	};

	return (
		<Button
			onClick={() => redirectToUrlTargetPlan(urlTarget)}
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

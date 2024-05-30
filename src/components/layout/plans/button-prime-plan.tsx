'use client';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'akar-icons';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
interface ButtonHireCardProps {
	text: string;
	urlTarget: string;
}

export default function ButtonPrimePlan({
	text,
	urlTarget,
}: ButtonHireCardProps) {
	const navigation = useRouter();
	const cookies = new Cookies();

	const redirectToUrlTargetPlan = (url: string) => {
		//TODO: ## Melhorar fluxo para a necessidade especifica
		cookies.set('planSelected', 'PRIME');

		navigation.push(url);
	};

	return (
		<Button
			onClick={() => redirectToUrlTargetPlan(urlTarget)}
			className="flex h-14 justify-center gap-2.5 rounded-[45px] border-pink-600 bg-cm-gradient-imgcolor px-8 py-5 text-white transition duration-500 hover:text-white hover:opacity-90 max-md:px-5"
		>
			<span className="uppercase">{text}</span>
			<ArrowUpRight
				size={20}
				className="stroke-white transition duration-700"
			/>
		</Button>
	);
}

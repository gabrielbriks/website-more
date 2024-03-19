import { ArrowUpRight } from 'akar-icons';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

interface NewsLetterProps {}

export default function NewsLetter(params: NewsLetterProps) {
	return (
		<div className="flex min-w-full max-w-md items-center justify-center gap-3 space-x-2 max-sm:flex-col max-sm:px-5">
			<div className="flex w-full max-w-md items-center justify-center gap-3 space-x-2 max-sm:flex-col max-sm:px-5">
				<Input
					type="email"
					placeholder="Enter your email"
					className="rounded-full  border-slate-500 bg-transparent text-white focus-visible:border-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
				/>
				<Button
					type="submit"
					className="bg-cm-gradient-imgcolor h-11 gap-1 rounded-full uppercase"
				>
					Subscribe
					<ArrowUpRight
						size={20}
						className="stroke-white transition duration-700 group-hover:stroke-black"
					/>
				</Button>
			</div>
		</div>
	);
}

import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex h-full min-h-screen w-full flex-1 flex-col items-center justify-center gap-2.5 bg-slate-50 bg-cover">
			<h2 className="text-4xl font-semibold">Not found – 404!</h2>
			<p className="text-lg ">Could not find requested resource</p>
			<Link
				href="/home"
				className="rounded-md bg-purple-900 p-2 text-lg font-semibold text-white transition-all duration-500 hover:rounded-none "
			>
				Return Home
			</Link>
		</div>
	);
}

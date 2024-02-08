import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex h-full min-h-screen w-full flex-1 flex-col items-center justify-center gap-2.5 bg-slate-50 bg-cover">
			<h2 className="text-4xl font-semibold">Not Found</h2>
			<p className="text-lg ">Could not find requested resource</p>
			<Link href="/home" className="font-semibold">
				Return Home
			</Link>
		</div>
	);
}

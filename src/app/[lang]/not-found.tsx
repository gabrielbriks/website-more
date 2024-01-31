import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex bg-slate-50 flex-1 w-full h-full justify-center items-center flex-col ">
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/home">Return Home</Link>
		</div>
	);
}

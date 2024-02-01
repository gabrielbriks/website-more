import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Plans",
	description: "",
};

export default function Plans() {
	return (
		<div className="font-kanit flex h-full w-full flex-1 flex-col">
			<h1 className="text-center text-3xl">Plans</h1>
		</div>
	);
}

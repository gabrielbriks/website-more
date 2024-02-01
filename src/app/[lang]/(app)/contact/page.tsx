import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "",
};

export default function Contact() {
	return (
		<div className="font-kanit flex h-full w-full flex-1 flex-col">
			<h1 className="text-center text-3xl">Contact</h1>
		</div>
	);
}

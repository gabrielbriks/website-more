import { Metadata } from "next";

interface HomeProps {}

export const metadata: Metadata = {
	title: "Home",
	description: "",
};
export default function Home(params: HomeProps) {
	return (
		<div className="font-kanit flex w-full h-full justify-center items-center">
			<h1 className="text-2xl font-semibold">Home</h1>
		</div>
	);
}

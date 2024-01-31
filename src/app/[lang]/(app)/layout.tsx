import "@/app/globals.css";
import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

interface AppLayoutProps {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: "Home",
	description: "Pagina inicial",
};

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<>
			<header className="flex min-w-full flex-1 justify-between gap-4 p-4 px-16">
				<span>
					<h1 className="text-2xl font-semibold uppercase">Click More</h1>
				</span>
				<nav className=" flex gap-4 pt-2">
					<Link href="/" className="uppercase">
						Home
					</Link>
					<Link href="/who-we-are" className="uppercase">
						Who we are
					</Link>
					<Link href="/plans" className="uppercase">
						Plans
					</Link>
					<Link href="/contact" className="uppercase">
						Contacts
					</Link>
				</nav>
				<div>
					<button>Create Account</button>
				</div>
			</header>
			<main className="mt-12 flex h-full min-h-full w-full flex-col">
				{children}
			</main>
		</>
	);
}

import '@/app/globals.css';
import { Header } from '@/components/layout/header';
import { Metadata } from 'next';
import { ReactNode } from 'react';

interface AppLayoutProps {
	children: ReactNode;
}

export const metadata: Metadata = {
	// metadataBase: new URL("https://clickmore.com"),
	title: {
		default: 'Click More',
		template: '%s | clickmore.com',
	},
	alternates: {
		canonical: '/',
		languages: {
			en: '/en',
			ja: '/ja',
			pt: '/pt',
		},
	},
	// openGraph: {
	//   images: "/og-image.png",
	// },
	// keywords: ['Next.js', 'React', 'JavaScript'],
};

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<>
			<Header />
			{/* <header className="absolute z-10 flex min-w-full flex-1 justify-between gap-4 p-4 px-16 font-kanit">
				<span>
					<h1 className="text-2xl font-semibold uppercase">Click More</h1>
				</span>
				<nav className=" flex gap-4 pt-2">
					<Link href="/home" className="uppercase">
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
			</header> */}
			<main className="flex h-full min-h-full w-full flex-col">{children}</main>
		</>
	);
}

import '@/app/globals.css';
import { i18n, type Locale } from '@/i18n-config';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Kanit, Nunito, Open_Sans } from 'next/font/google';
import { Suspense } from 'react';

const nunito = Nunito({
	subsets: ['latin'],
	variable: '--font-nunito',
	display: 'swap',
});

const kanit = Kanit({
	subsets: ['latin'],
	variable: '--font-kanit',
	display: 'swap',
	weight: ['800', '700', '600', '500', '400'],
});

const opens_sans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-opens-sans',
	display: 'swap',
});

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

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

//TODO: move for new component
const FallbackLoading = () => (
	<div className="flex min-h-screen min-w-full flex-1 items-center justify-center ">
		<h1 className="flex w-full animate-pulse text-center font-nunito text-2xl font-semibold text-pink-800">
			Loading ...
		</h1>
	</div>
);
export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: Locale };
}>) {
	return (
		<html lang={params.lang.toString()}>
			<body
				className={`${nunito.variable} ${kanit.variable} ${opens_sans.variable}`}
			>
				<Suspense fallback={<FallbackLoading />}>
					{children}
					<SpeedInsights />
					<Analytics />
				</Suspense>
			</body>
		</html>
	);
}

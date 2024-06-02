import '@/app/globals.css';
import CookieConsent from '@/components/layout/cookie-consent';
import FallbackLoading from '@/components/layout/loadings/fallback-loading';
import { Toaster } from '@/components/ui/sonner';
import { DictionaryProvider } from '@/contexts/dictionaryContext';
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
	metadataBase: new URL('https://clickmore.org'),
	title: {
		default: 'Click More',
		template: '%s | clickmore.org',
	},
	alternates: {
		canonical: '/',
		languages: {
			en: '/en',
			ja: '/ja',
			pt: '/pt',
		},
	},
	openGraph: {
		images: '/open-graph-image.png',
		description: 'CLICKMORE - CHANGING CLICKS INTO BUSINESS OPPORTUNITIES',
		alternateLocale: ['en', 'ja', 'pt'],
		siteName: 'click more',
	},
	keywords: [
		'click more',
		'marketing',
		'digital services',
		'social media',
		'traffic analysis',
	],
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	themeColor: '#fff',
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

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
					<DictionaryProvider lang={params.lang}>
						{children}
						<CookieConsent demo={false} />
					</DictionaryProvider>
					{/* {children} */}
					<SpeedInsights />
					<Analytics />
				</Suspense>
				<Toaster position="top-right" richColors />
			</body>
		</html>
	);
}

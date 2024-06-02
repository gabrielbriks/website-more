import '@/app/globals.css';
import { Header } from '@/components/layout/header/header';
import FallbackLoading from '@/components/layout/loadings/fallback-loading';
import { i18n, type Locale } from '@/i18n-config';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

interface AppLayoutProps {
	children: ReactNode;
}

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

export default function AppLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: Locale };
}>) {
	// const locale = useLocale();
	// const { loading } = useDictionaryContext();

	// if (loading) {
	// 	return <LoaderGlobal />;
	// }

	return (
		<>
			<Suspense fallback={<FallbackLoading />}>
				<Header lang={params.lang} />
				<div className="flex h-full min-h-full w-full flex-col">
					{/* <DictionaryProvider lang={params.lang}>{children}</DictionaryProvider> */}
					{children}
					<SpeedInsights />
					{/* <NavigationEvents /> */}
				</div>
			</Suspense>
		</>
	);
}

import '@/app/globals.css';
import { Header } from '@/components/layout/header';
import FallbackLoading from '@/components/layout/loadings/fallback-loading';
import { NavigationEvents } from '@/components/navigation-events';
import { i18n, type Locale } from '@/i18n-config';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

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
					<NavigationEvents />
				</div>
			</Suspense>
		</>
	);
}

'use client';
import FallbackLoading from '@/components/layout/loadings/fallback-loading';
import { i18n, Locale } from '@/i18n-config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function IndexPage({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	// const dictionary = await getDictionary(lang);
	const navigate = useRouter();

	const setLocaleInCookie = async () => {
		await fetch('/api/set-locale', {
			method: 'POST',
			body: JSON.stringify({ locale: lang }),
		})
			.then((response) => response.json())
			.catch((error) => {
				console.error('Erro ao definir o local:', error);
				navigate.replace(`${i18n.defaultLocale}/home`); // navega mesmo se a configuração falhar, utilizando localeDefault
			});
	};

	useEffect(() => {
		if (lang != undefined) {
			setLocaleInCookie();
			window.location.href = `${lang}/home`;
		}
	}, [lang]);

	return <FallbackLoading />;
}

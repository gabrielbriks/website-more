'use client';
import FallbackLoading from '@/components/layout/loadings/fallback-loading';
import { Locale } from '@/i18n-config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function IndexPage({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	// const dictionary = await getDictionary(lang);
	const navigate = useRouter();

	console.log('Rota base');

	const setLocaleInCookie = async () => {
		await fetch('/api/set-locale', {
			method: 'POST',
			body: JSON.stringify({ locale: lang }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Resposta de configuração de local:', data);

				// navigate.push(`${lang}/home`);
			})
			.catch((error) => {
				console.error('Erro ao definir o local:', error);
				navigate.replace(`${lang}/home`); // navega mesmo se a configuração falhar
			});
	};

	useEffect(() => {
		if (lang != undefined) {
			setLocaleInCookie();
			window.location.href = `${lang}/home`;
		}
	}, []);

	return <FallbackLoading />;
}

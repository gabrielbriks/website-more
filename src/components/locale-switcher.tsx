'use client';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { i18n, type Locale } from '@/i18n-config';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface LocaleSwitcherParams {
	langCurrent: Locale;
	withPhotoInBackground?: boolean | null;
}

export default function LocaleSwitcher({
	langCurrent,
	withPhotoInBackground = false,
}: LocaleSwitcherParams) {
	const pathName = usePathname();
	const [langState, setLangState] = useState(pathName.split('/')[1]);
	const navigate = useRouter();

	// Função para verificar o idioma armazenado no armazenamento local
	const getStoredLocale = () => {
		try {
			const storedLocale = localStorage.getItem('lang') as Locale | undefined;
			return storedLocale && i18n.locales.includes(storedLocale)
				? storedLocale
				: undefined;
		} catch (error) {
			console.error(
				'Erro ao recuperar o idioma do armazenamento local:',
				error,
			);
			return undefined;
		}
	};

	// useEffect(() => {
	// 	const storedLocale = getStoredLocale();
	// 	setLangState(storedLocale || pathName.split('/')[1]);
	// }, [langState]);

	const redirectedPathName = async (locale: Locale) => {
		const searchParams = window.location.search;
		const hashParams = window.location.hash;

		if (!pathName) return '/';

		const segments = pathName.split('/');
		segments[1] = locale;

		let pathTarget = segments.join('/');

		if (hashParams) {
			pathTarget += hashParams;
		}

		if (searchParams) {
			pathTarget += searchParams;
		}

		// localStorage.setItem('lang', locale);

		if (!locale) return;

		await fetch('/api/set-locale', {
			method: 'POST',
			body: JSON.stringify({ locale: locale }),
		})
			.then((res) => navigate.push(pathTarget))
			.catch((error) => {
				console.error('Erro ao definir o local(Switch):', error);
				navigate.push(pathTarget); // navega mesmo se a configuração falhar
			});
	};

	return (
		<>
			<Select
				onValueChange={(value: Locale) => redirectedPathName(value)}
				defaultValue={langState}
			>
				<SelectTrigger
					className={cn(
						'text-md group my-auto flex w-10 justify-center gap-1 self-stretch border-none bg-transparent px-0 transition duration-500 hover:bg-transparent',
						withPhotoInBackground && 'text-white',
					)}
				>
					<SelectValue placeholder={langState?.toUpperCase()} />
				</SelectTrigger>
				<SelectContent className="group-transition group-duration-500">
					<SelectGroup>
						{i18n.locales.map((locale) => (
							<SelectItem key={locale} value={locale}>
								{locale.toUpperCase()}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	);
}

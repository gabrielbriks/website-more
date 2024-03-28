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

	const redirectedPathName = (locale: Locale) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;

		const pathTarget = segments.join('/');
		navigate.push(pathTarget);
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

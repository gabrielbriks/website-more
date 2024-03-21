'use client';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';
import DictionaryCustomType from '@/types/dictionary-18next-type';
import { useEffect, useState } from 'react';

interface useDictionaryProps {
	lang: Locale;
}

function useDictionary({ lang }: useDictionaryProps): DictionaryCustomType {
	const [dictionary, setDictionary] = useState<DictionaryCustomType>(
		{} as DictionaryCustomType,
	);

	useEffect(() => {
		let isMounted = true;

		getDictionary(lang).then((result) => {
			if (isMounted) {
				setDictionary(result);
			}
		});

		return () => {
			isMounted = false;
		};
	}, [lang]);

	return dictionary;
}

export default useDictionary;

'use client';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';
import DictionaryCustomType from '@/types/dictionary-18next-type';
import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

type Dictionary = Record<string, any>;

interface DictionaryContextType {
	dictionary: DictionaryCustomType;
	loading: boolean;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(
	undefined,
);

export const useDictionaryContext = () => {
	const context = useContext(DictionaryContext);
	if (!context) {
		throw new Error(
			'useDictionaryContext must be used within a DictionaryProvider',
		);
	}
	return context;
};

interface DictionaryProviderProps {
	lang: Locale;
	children: ReactNode;
}
export const DictionaryProvider: React.FC<DictionaryProviderProps> = ({
	lang,
	children,
}) => {
	const [dictionary, setDictionary] = useState<DictionaryCustomType>(
		{} as DictionaryCustomType,
	);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		getDictionary(lang).then((result) => {
			setDictionary(result);
			setLoading(false);
		});
	}, [lang]);

	return (
		<DictionaryContext.Provider value={{ dictionary, loading }}>
			{children}
		</DictionaryContext.Provider>
	);
};

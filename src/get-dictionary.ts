// import 'server-only';
import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
	en: () => import('./dictionaries/en.json').then((module) => module.default),
	ja: () => import('./dictionaries/ja.json').then((module) => module.default),
	pt: () => import('./dictionaries/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
	switch (locale) {
		case 'en':
			return await dictionaries.en();
			break;
		case 'pt':
			return await dictionaries.pt();
			break;
		default:
			return await dictionaries.ja();
			break;
	}
};

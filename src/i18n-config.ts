import { Config } from 'next-i18n-router/dist/types';
export const i18n = {
	defaultLocale: 'ja',
	locales: ['en', 'pt', 'ja'],
	localeCookie: 'locale',
	serverSetCookie: 'always',
} as Config;

//TODO: Rever aspectos do video(https://www.youtube.com/watch?v=1S7yFzU2ulg) para refinamento

export type Locale = (typeof i18n)['locales'][number];

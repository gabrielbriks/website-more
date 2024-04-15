export const i18n = {
	defaultLocale: 'ja',
	locales: ['en', 'pt', 'ja'],
} as const;

//TODO: Rever aspectos do video(https://www.youtube.com/watch?v=1S7yFzU2ulg) para refinamento

export type Locale = (typeof i18n)['locales'][number];

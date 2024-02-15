export const i18n = {
	defaultLocale: 'en', //TODO: Alterar para 'ja'
	locales: ['en', 'ja', 'pt'],
} as const;

//TODO: Rever aspectos do video(https://www.youtube.com/watch?v=1S7yFzU2ulg) para refinamento

export type Locale = (typeof i18n)['locales'][number];

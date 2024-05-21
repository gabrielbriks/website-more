import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n, Locale } from './i18n-config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocaleFromCookie(request: NextRequest): string | undefined {
	const cookieHeader = request.headers.get('Cookie');

	if (!cookieHeader) return undefined;

	const cookieRegex = /locale=([^;]+)/;
	const cookieMatch = cookieHeader.match(cookieRegex);

	if (!cookieMatch) return undefined;

	const locale = cookieMatch[1] as Locale;
	return i18n.locales.includes(locale) ? locale : undefined;
}

function getLocale(request: NextRequest): string | undefined {
	const storedLocale = getLocaleFromCookie(request) as Locale | undefined;

	if (storedLocale && i18n.locales.includes(storedLocale)) {
		return storedLocale;
	}

	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// @ts-ignore locales are readonly
	const locales: string[] = i18n.locales;

	// Use negotiator and intl-localematcher to get best locale
	let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales,
	);

	const locale = matchLocale(languages, locales, i18n.defaultLocale);

	return locale;
}

const cookieName = 'locale';
const fallbackLng = 'ja';

export function middleware(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams.toString();
	const hashParams = req.nextUrl.hash.toString();
	let lng;
	let urlTarget: string;
	let newURL;

	// console.log('1:: ', req.nextUrl.locale);

	if (req.cookies.has(cookieName)) {
		const locale = req.cookies.get(cookieName)!.value;
		lng = locale;
	}

	// if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
	if (!lng) lng = fallbackLng;

	// Redirect if lng in path is not supported
	if (
		!i18n.locales.some((lang) => req.nextUrl.pathname.startsWith(`/${lang}`)) &&
		!req.nextUrl.pathname.startsWith('/_next')
	) {
		console.log('lng in path is not');
		return NextResponse.redirect(
			new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
		);
	}

	if (req.headers.has('referer')) {
		const refererUrl = new URL(req.headers.get('referer')!);

		const langInReferer = i18n.locales.find((lang) =>
			refererUrl.pathname.startsWith(`/${lang}`),
		);

		// const response = NextResponse.next();

		if (langInReferer) {
			console.log('YEP referer');
			const langRefererUrl = refererUrl.pathname.split('/')[1];

			if (req.cookies.has('lang')) {
				if (langRefererUrl == req.cookies.get('lang')?.value) {
					urlTarget = `/${langRefererUrl}${req.nextUrl.pathname.slice(3)}`;
					// newURL = new URL(refererUrl.pathname, req.nextUrl.origin);
				} else {
					lng = req.cookies.get('lang')?.value;
					urlTarget = `/${lng}${req.nextUrl.pathname.slice(3)}`;
				}
			} else {
				req.cookies.set('lang', langRefererUrl);
				urlTarget = `/${langRefererUrl}${req.nextUrl.pathname.slice(3)}`;
			}

			// if (langInReferer && !req.cookies.get('lang')?.value) {
			// 	req.cookies.set('lang', lng);
			// }
		}

		// if(!langInReferer)

		// if (langInReferer) response.cookies.set(cookieName, langInReferer);

		if (hashParams) {
			urlTarget! += `#${hashParams}`;
		}

		if (searchParams) {
			urlTarget! += `?${searchParams}`;
		}

		urlTarget = `/${lng}${req.nextUrl.pathname.slice(3)}`;

		//Fix: Tratativa para impedir remoção de parâmetros na urlWithLocale
		if (hashParams) {
			urlTarget! += `#${hashParams}`;
		}

		if (searchParams) {
			urlTarget! += `?${searchParams}`;
		}

		newURL = new URL(urlTarget, req.nextUrl.origin);

		return NextResponse.rewrite(newURL);
	} else {
		const langInURL = req.nextUrl.pathname.split('/')[1];

		const langOfCookie = req.cookies.get('lang')?.value;

		if (langOfCookie || i18n.locales.some((lang) => lang == langInURL)) {
			console.log('langOfCookie || i18n.locales.some', {
				langOfCookie,
				langInURL,
			});

			if (langInURL && langOfCookie !== undefined) {
				req.cookies.set('lang', langInURL);
			}

			urlTarget = req.nextUrl.pathname;
		} else {
			console.log(
				'req.cookies.set(lang, langInURL) IS_FALSE',
				req.nextUrl.pathname,
			);
			urlTarget = req.nextUrl.pathname;
		}

		//Fix: Tratativa para impedir remoção de parâmetros na urlWithLocale
		if (hashParams) {
			urlTarget! += `#${hashParams}`;
		}

		if (searchParams) {
			urlTarget! += `?${searchParams}`;
		}

		// newURL = new URL(urlTarget, req.nextUrl.origin);
	}

	newURL = new URL(urlTarget, req.nextUrl.origin);

	console.log('urlTarget', urlTarget);
	if (newURL) NextResponse.redirect(newURL);

	NextResponse.next();
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

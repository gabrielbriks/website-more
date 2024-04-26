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

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname.toLocaleLowerCase();
	const searchParams = request.nextUrl.searchParams.toString();
	const hashParams = request.nextUrl.hash.toString();

	const storedLocale = getLocaleFromCookie(request);
	// console.log('storedLocale', storedLocale);
	// console.log('pathname', pathname);

	// Redirect if there is no locale
	if (
		!storedLocale &&
		i18n.locales.every((locale) => {
			return !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`;
		})
	) {
		console.log('Redirect if there is no locale');

		const locale = getLocale(request) as string;
		console.log('locale', locale);
		// e.g. incoming request is /products
		// The new URL is now /en-US/products
		let url = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`;

		//Fix: Tratativa para impedir remoção de parâmetros na url
		if (hashParams) {
			url += `#${hashParams}`;
		}

		if (searchParams) {
			url += `?${searchParams}`;
		}

		return NextResponse.redirect(new URL(url, request.url));
	} else if (
		!pathname.startsWith(`/${storedLocale}/`) &&
		pathname !== `/${storedLocale}`
	) {
		console.log('url', pathname);

		let url = `/${storedLocale}${pathname}`;

		// //Fix: Tratativa para impedir remoção de parâmetros na url
		if (hashParams) {
			url += `#${hashParams}`;
		}

		if (searchParams) {
			url += `?${searchParams}`;
		}

		return NextResponse.redirect(new URL(url, request.url));
	}
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

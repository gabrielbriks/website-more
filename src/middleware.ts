import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n, Locale } from './i18n-config';

function getLocaleFromCookie(request: NextRequest): string | undefined {
	const cookieHeader = request.headers.get('Cookie');

	if (!cookieHeader) return undefined;

	const cookieRegex = /locale=([^;]+)/;
	const cookieMatch = cookieHeader.match(cookieRegex);

	if (!cookieMatch) return undefined;

	const locale = cookieMatch[1] as Locale;
	return i18n.locales.includes(locale) ? locale : undefined;
}

///Fix: Tratativa para impedir remoção de parâmetros na urlWithLocale
function addParamsURL(req: NextRequest, urlTarget: string): string {
	const searchParams = req.nextUrl.searchParams.toString();
	const hashParams = req.nextUrl.hash.toString();

	if (hashParams) {
		urlTarget! += `#${hashParams}`;
	}

	if (searchParams) {
		urlTarget! += `?${searchParams}`;
	}

	return urlTarget;
}

const cookieName = 'locale';
const fallbackLng = 'ja';

export function middleware(req: NextRequest) {
	let lng;
	let urlTarget: string = '';
	let newURL;

	if (req.cookies.has(cookieName)) {
		const locale = req.cookies.get(cookieName)!.value;
		lng = locale;
	}

	if (!lng) lng = fallbackLng;

	// Redirect if lng in path is not supported
	if (
		!i18n.locales.some((lang) => req.nextUrl.pathname.startsWith(`/${lang}`)) &&
		!req.nextUrl.pathname.startsWith('/_next')
	) {
		return NextResponse.redirect(
			new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
		);
	}

	if (req.headers.has('referer')) {
		const refererUrl = new URL(req.headers.get('referer')!);

		const langInReferer = i18n.locales.find((lang) =>
			refererUrl.pathname.startsWith(`/${lang}`),
		);

		if (langInReferer) {
			const langRefererUrl = refererUrl.pathname.split('/')[1];

			if (req.cookies.has('lang')) {
				if (langRefererUrl == req.cookies.get('lang')?.value) {
					urlTarget = `/${langRefererUrl}${req.nextUrl.pathname.slice(3)}`;
				} else {
					lng = req.cookies.get('lang')?.value;
					urlTarget = `/${lng}${req.nextUrl.pathname.slice(3)}`;
				}
			} else {
				req.cookies.set('lang', langRefererUrl);
				urlTarget = `/${langRefererUrl}${req.nextUrl.pathname.slice(3)}`;
			}
		}

		//Transfer params url to target url
		urlTarget += addParamsURL(req, urlTarget!);

		urlTarget = `/${lng}${req.nextUrl.pathname.slice(3)}`;

		newURL = new URL(urlTarget, req.nextUrl.origin);

		return NextResponse.rewrite(newURL);
	} else {
		const langInURL = req.nextUrl.pathname.split('/')[1];

		const langOfCookie = req.cookies.get('lang')?.value;

		if (langOfCookie || i18n.locales.some((lang) => lang == langInURL)) {
			if (langInURL && langOfCookie !== undefined) {
				req.cookies.set('lang', langInURL);
			}

			urlTarget = req.nextUrl.pathname;
		} else {
			urlTarget = req.nextUrl.pathname;
		}

		//Transfer params url to target url
		urlTarget += addParamsURL(req, urlTarget!);
	}

	newURL = new URL(urlTarget, req.nextUrl.origin);

	// console.log('urlTarget', urlTarget);
	if (newURL) NextResponse.redirect(newURL);

	NextResponse.next();
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

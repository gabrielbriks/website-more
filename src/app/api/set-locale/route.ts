import { i18n } from '@/i18n-config';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { locale } = await req.json();

	// console.log('api-locale', locale);

	if (!locale || !i18n.locales.includes(locale)) {
		return new Response('Local inválido', {
			status: 400,
		});
	}

	const response = NextResponse.next();

	// res.setHeader('Set-Cookie', `locale=${locale}; Path=/;`);
	response.cookies.set('lang', locale);

	// return NextResponse;

	return new Response('Local definido com sucesso', {
		status: 200,
		headers: { 'Set-Cookie': `locale=${locale}; Path=/;` },
	});
}

import { i18n } from '@/i18n-config';
import { NextApiResponse } from 'next';

export async function POST(req: Request, res: NextApiResponse) {
	const { locale } = await req.json();

	console.log('api-locale', locale);

	if (!locale || !i18n.locales.includes(locale)) {
		return new Response('Local inválido', {
			status: 400,
		});
	}

	// res.setHeader('Set-Cookie', `locale=${locale}; Path=/;`);
	return new Response('Local definido com sucesso', {
		status: 200,
		headers: { 'Set-Cookie': `locale=${locale}; Path=/;` },
	});
}

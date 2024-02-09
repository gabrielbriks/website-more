import Counter from '@/components/counter';
import LocaleSwitcher from '@/components/locale-switcher';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Link from 'next/link';

export default async function IndexPage({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);

	return (
		<div className="container py-24">
			<div className="flex h-full max-h-48 w-full items-center justify-center ">
				<Link href={'/home'} className="text-1xl p-2 font-medium">
					{' '}
					Ir para Home
				</Link>
			</div>
			<LocaleSwitcher langCurrent={lang} />
			<h2 className="flex gap-2 py-4 text-2xl">
				Current locale:
				<span className="font-semibold uppercase">{lang}</span>
			</h2>
			<p className="text-md text-base">
				This text is rendered on the server:{' '}
				<span className="text-2xl font-semibold">
					{dictionary['server-component'].welcome}
				</span>
			</p>
			<Counter dictionary={dictionary.counter} />
		</div>
	);
}

'use client';
import { Locale } from '@/i18n-config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function IndexPage({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	// const dictionary = await getDictionary(lang);
	const navigation = useRouter();

	useEffect(() => {
		navigation.replace('/home');
	}, []);
}

'use client';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { useDictionaryContext } from '@/contexts/dictionaryContext';
import { getItemsFAQs } from '@/dictionaries/others/faqs/faqs-questions';
import type { Locale } from '@/i18n-config';
import { DataFAQS } from '@/types/data-faqs-type';
import { MousePointerClick } from 'lucide-react';
import { useEffect, useState } from 'react';
import LoadingLanguage from './layout/loadings/loading-language';

interface FaqProps {
	lang: Locale;
	namePage: 'home' | 'clickAdsense' | 'clickMedia' | 'clickWeb' | 'clickPages';
}

export default function Faq({ lang, namePage }: FaqProps) {
	// const dictionary = await getDictionary(lang);

	const { dictionary, loading } = useDictionaryContext();

	const [dataFaqs, setDataFaqs] = useState<DataFAQS[]>(
		getItemsFAQs(lang, namePage),
	);

	useEffect(() => {
		const faqs = getItemsFAQs(lang, namePage);
		setDataFaqs(faqs);
	}, [lang, namePage]);

	if (loading) {
		return <LoadingLanguage />;
	}

	return (
		<Accordion
			type="single"
			collapsible
			className="w-full rounded-2xl bg-cm-primary p-6"
		>
			<div className="mt-12 flex w-[54px] max-md:mt-10">
				<h3 className="my-auto flex grow gap-1 whitespace-nowrap text-base font-semibold uppercase text-white ">
					<MousePointerClick
						className="stroke-white"
						style={{ transform: 'rotate(90deg)' }}
					/>
					{dictionary['pages'].home.faq.subTitleTop}
				</h3>
			</div>
			<h1 className="mt-2 pb-4 text-5xl font-bold uppercase leading-[48.08px] text-white max-md:max-w-full max-md:text-center max-md:text-4xl">
				{dictionary['pages'].home.faq.title}

				{/* Frequently asked questions */}
			</h1>
			<div className="flex flex-col gap-3">
				{dataFaqs?.map((item) => (
					<AccordionItem
						key={item.valueItem}
						value={item.valueItem}
						className="rounded-xl bg-white p-1 text-zinc-800 "
					>
						<AccordionTrigger className="px-3 text-start text-lg">
							{item.nameTrigger}
						</AccordionTrigger>
						<AccordionContent className="max-w-[470px] bg-transparent px-4 font-nunito text-base">
							<item.descriptionItem />

							{/* {item.valueItem == 'item-1' ? (
								<span
									dangerouslySetInnerHTML={{ __html: item.descriptionItem }}
								/>
							) : (
								item.descriptionItem
							)} */}
						</AccordionContent>
					</AccordionItem>
				))}
			</div>
		</Accordion>
	);
}

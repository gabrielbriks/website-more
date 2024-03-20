import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { MousePointerClick } from 'lucide-react';

type DataFAQS = {
	valueItem: string;
	nameTrigger: string;
	descriptionItem: string;
};

const dataFAQS: DataFAQS[] = [
	{
		valueItem: 'item-1',
		nameTrigger: 'Which plan is best for me?',
		descriptionItem:
			'Magna est fugiat veniam ipsum in commodo amet ea minim occaecat ipsum duis. Sit laboris sint exercitation ullamco consectetur veniam ullamco ea laborum adipisicing non quis. <br /><br /> Voluptate consequat culpa veniam velit nostrud nulla. Incididunt nulla minim do commodo Lorem esse est ipsum id veniam qui dolor.',
	},
	{
		valueItem: 'item-2',
		nameTrigger: 'Do plans include support?',
		descriptionItem:
			'Magna est fugiat veniam ipsum in commodo amet ea minim occaecat ipsum duis. Sit laboris sint exercitation ullamco consectetur veniam ullamco ea laborum adipisicing non quis.',
	},
	{
		valueItem: 'item-3',
		nameTrigger: 'Can I adjust my plan?',
		descriptionItem: 'Lorem',
	},
	{
		valueItem: 'item-4',
		nameTrigger: 'Do plan prices include all fees?',
		descriptionItem: 'Lorem Do plan prices include all fees',
	},
	{
		valueItem: 'item-5',
		nameTrigger: 'How do I cancel my plan?',
		descriptionItem: 'How do I cancel my plan',
	},
];

interface FaqProps {}

export default function Faq(params: FaqProps) {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full rounded-2xl bg-cm-gradient-imgcolor p-6"
		>
			<div className="mt-12 flex w-[54px] max-md:mt-10">
				<h3 className="my-auto flex grow gap-1 whitespace-nowrap text-base font-semibold uppercase text-white ">
					<MousePointerClick
						className="stroke-white"
						style={{ transform: 'rotate(90deg)' }}
					/>
					FAQ
				</h3>
			</div>
			<h1 className="mt-2 pb-4 text-5xl font-bold uppercase leading-[48.08px] text-white max-md:max-w-full max-md:text-4xl">
				Frequently asked questions
			</h1>
			<div className="flex flex-col gap-3">
				{dataFAQS.map((item) => (
					<AccordionItem
						key={item.valueItem}
						value={item.valueItem}
						className="rounded-xl bg-white p-1 text-zinc-800 "
					>
						<AccordionTrigger className="px-3 text-lg">
							{item.nameTrigger}
						</AccordionTrigger>
						<AccordionContent className="max-w-[470px] bg-transparent px-4 font-nunito text-base">
							{item.valueItem == 'item-1' ? (
								<span
									dangerouslySetInnerHTML={{ __html: item.descriptionItem }}
								/>
							) : (
								item.descriptionItem
							)}
						</AccordionContent>
					</AccordionItem>
				))}
			</div>
		</Accordion>
	);
}

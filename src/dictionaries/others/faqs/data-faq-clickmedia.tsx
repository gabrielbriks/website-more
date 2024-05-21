import { Locale } from '@/i18n-config';
import { DataFAQS } from '@/types/data-faqs-type';

export const faqClickMediaPT: DataFAQS[] = [
	{
		valueItem: 'item-1',
		nameTrigger:
			'Tem algum plano que gerencia as redes sociais da minha empresa?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					Sim , contrate agora o plano MediaPro que gerenciamos e implementamos
					o ClickBot para responder os seus clientes.
				</p>
			</span>
		),
	},
	// {
	// 	valueItem: 'item-2',
	// 	nameTrigger: 'como faço para contratar algum serviço ?',
	// 	descriptionItem: () => (
	// 		<span className="flex w-full flex-col gap-2 text-start">
	// 			<p>
	// 				Para contratar é simples e rápido , escolha o seu plano , coloque
	// 				algumas informações sobre a sua empresa e você escolhe o dia e horário
	// 				para agendar uma reunião com a nossa equipe
	// 			</p>
	// 		</span>
	// 	),
	// },
	// {
	// 	valueItem: 'item-3',
	// 	nameTrigger: 'Quer um plano exclusivo PRIME para a sua empresa? ',
	// 	descriptionItem: () => (
	// 		<span className="flex w-full flex-col gap-2 text-start">
	// 			<p>
	// 				Escolha o plano PRIME e você será direcionado direto para um
	// 				especialista da ClickMore , será um atendimento exclusivo para
	// 				entender as necessidades da sua empresa
	// 			</p>
	// 		</span>
	// 	),
	// },
	// {
	// 	valueItem: 'item-4',
	// 	nameTrigger: 'Precisa criar um site?',
	// 	descriptionItem: () => (
	// 		<span className="flex w-full flex-col gap-2 text-start">
	// 			<p>
	// 				Contrate o plano desejado e Agende uma reunião que nós iremos te
	// 				passar mais informações agora.
	// 			</p>
	// 		</span>
	// 	),
	// },
	// {
	// 	valueItem: 'item-5',
	// 	nameTrigger:
	// 		'Os planos do ClickAdsense ou ClickMedia são pagamentos mensais?',
	// 	descriptionItem: () => (
	// 		<span className="flex w-full flex-col gap-2 text-start">
	// 			<p>
	// 				Não, o período de contrato são 3 meses, podendo ou não renovar a
	// 				contratação do Plano.
	// 			</p>
	// 		</span>
	// 	),
	// },
];

export const faqClickMediaEN: DataFAQS[] = [
	{
		valueItem: 'item-1',
		nameTrigger: "Is there a plan that manages my company's social media?",
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					Yes, sign up for the MediaPro plan, and we will manage and implement
					ClickBot to respond to your customers.
				</p>
			</span>
		),
	},
];

export const faqClickMediaJA: DataFAQS[] = [
	{
		valueItem: 'item-1',
		nameTrigger: '私の会社のソーシャルメディアを管理するプランはありますか？',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					はい、MediaProプランに申し込むと、お客様に返信するためのClickBotを管理および実装します。
				</p>
			</span>
		),
	},
];

export function getItemsFAQsClickMedia(lang: Locale) {
	switch (lang) {
		case 'pt':
			return faqClickMediaPT;
			break;
		case 'en':
			return faqClickMediaEN;
			break;
		case 'ja':
			return faqClickMediaJA;
			break;
		default:
			return faqClickMediaJA;
			break;
	}
}

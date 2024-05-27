import { Locale } from '@/i18n-config';
import { PlansInfoType } from '@/types/plans-info-type';

export const plansClickMediaEN: PlansInfoType[] = [
	{
		namePlan: 'MediaStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: ['Google and Meta advertising campaigns', '2 Reports every 15 days'],
		urlTarget: '/subscription?p=clickMedia',
		nameButton: 'hire',
		typePlan: 'start',
	},
	{
		namePlan: 'MediaMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: [
			'Google and Meta advertising campaigns',
			'33 Reports every 15 days',
		],
		urlTarget: '/subscription?p=clickMedia',
		nameButton: 'hire',
		typePlan: 'max',
	},
	{
		namePlan: 'MediaPro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: [
			'Google and Meta advertising campaigns',
			'44 Reports every 15 days',
		],
		urlTarget: '/subscription?p=clickMedia',
		nameButton: 'hire',
		typePlan: 'pro',
	},
];

export const plansClickMediaPT: PlansInfoType[] = [
	{
		namePlan: 'MediaStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'2 Relatórios a cada 15 dias',
		],
		urlTarget: '/subscription?p=clickMedia',
		nameButton: 'Contratar',
		typePlan: 'start',
	},
	{
		namePlan: 'MediaMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'33 Relatórios a cada 15 dias',
		],
		urlTarget: '/subscription?p=clickMedia',
		nameButton: 'Contratar',
		typePlan: 'max',
	},
	{
		namePlan: 'MediaPro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'44 Relatórios a cada 15 dias',
		],
		urlTarget: '/subscription?p=clickMedia',
		nameButton: 'Contratar',
		typePlan: 'pro',
	},
];

export const plansClickMediaJA: PlansInfoType[] = [
	{
		namePlan: 'MediaStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '15日ごとに2つのレポート'],
		urlTarget: '/subscription?p=clickMedia',
		nameButton: '雇う',
		typePlan: 'start',
	},
	{
		namePlan: 'MediaMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '33日ごとに2つのレポート'],
		urlTarget: '/subscription?p=clickMedia',
		nameButton: '雇う',
		typePlan: 'max',
	},
	{
		namePlan: 'MediaPro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '44日ごとに2つのレポート'],
		urlTarget: '/subscription?p=clickMedia',
		nameButton: '雇う',
		typePlan: 'pro',
	},
];

export function getPlansClickMedia(lang: Locale): PlansInfoType[] {
	switch (lang) {
		case 'en':
			return plansClickMediaEN;
			break;
		case 'pt':
			return plansClickMediaPT;
			break;
		case 'ja':
			return plansClickMediaJA;
			break;
		default:
			return plansClickMediaJA;
			break;
	}
}

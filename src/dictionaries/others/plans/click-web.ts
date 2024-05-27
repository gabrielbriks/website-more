import { Locale } from '@/i18n-config';
import { PlansInfoType } from '@/types/plans-info-type';

export const plansClickWebEN: PlansInfoType[] = [
	{
		namePlan: 'WebStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: ['Google and Meta advertising campaigns', '2 Reports every 15 days'],
		urlTarget: '/subscription?p=clickWeb',
		nameButton: 'hire',
		typePlan: 'start',
	},
	{
		namePlan: 'WebMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: [
			'Google and Meta advertising campaigns',
			'33 Reports every 15 days',
		],
		urlTarget: '/subscription?p=clickWeb',
		nameButton: 'hire',
		typePlan: 'max',
	},
	{
		namePlan: 'WebPro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: [
			'Google and Meta advertising campaigns',
			'44 Reports every 15 days',
		],
		urlTarget: '/subscription?p=clickWeb',
		nameButton: 'hire',
		typePlan: 'pro',
	},
];

export const plansClickWebPT: PlansInfoType[] = [
	{
		namePlan: 'WebStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'2 Relatórios a cada 15 dias',
		],
		urlTarget: '/subscription?p=clickWeb',
		nameButton: 'Contratar',
		typePlan: 'start',
	},
	{
		namePlan: 'WebMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'33 Relatórios a cada 15 dias',
		],
		urlTarget: '/subscription?p=clickWeb',
		nameButton: 'Contratar',
		typePlan: 'max',
	},
	{
		namePlan: 'WebPro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'44 Relatórios a cada 15 dias',
		],
		urlTarget: '/subscription?p=clickWeb',
		nameButton: 'Contratar',
		typePlan: 'pro',
	},
];

export const plansClickWebJA: PlansInfoType[] = [
	{
		namePlan: 'WebStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '15日ごとに2つのレポート'],
		urlTarget: '/subscription?p=clickWeb',
		nameButton: '雇う',
		typePlan: 'start',
	},
	{
		namePlan: 'WebMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '33日ごとに2つのレポート'],
		urlTarget: '/subscription?p=clickWeb',
		nameButton: '雇う',
		typePlan: 'max',
	},
	{
		namePlan: 'WebPro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '44日ごとに2つのレポート'],
		urlTarget: '/subscription?p=clickWeb',
		nameButton: '雇う',
		typePlan: 'pro',
	},
];

export function getPlansClickWeb(lang: Locale): PlansInfoType[] {
	switch (lang) {
		case 'en':
			return plansClickWebEN;
			break;
		case 'pt':
			return plansClickWebPT;
			break;
		case 'ja':
			return plansClickWebJA;
			break;
		default:
			return plansClickWebJA;
			break;
	}
}

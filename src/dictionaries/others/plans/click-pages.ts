import { Locale } from '@/i18n-config';
import { PlansInfoType } from '@/types/plans-info-type';

export const plansCLickAdsenseEN: PlansInfoType[] = [
	{
		namePlan: 'PageStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: ['Google and Meta advertising campaigns', '2 Reports every 15 days'],
		urlTarget: '#',
		nameButton: 'hire',
		typePlan: 'start',
	},
	{
		namePlan: 'PageMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: [
			'Google and Meta advertising campaigns',
			'33 Reports every 15 days',
		],
		urlTarget: '#',
		nameButton: 'hire',
		typePlan: 'max',
	},
	{
		namePlan: 'PagePro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: [
			'Google and Meta advertising campaigns',
			'44 Reports every 15 days',
		],
		urlTarget: '#',
		nameButton: 'hire',
		typePlan: 'pro',
	},
];

export const plansCLickAdsensePT: PlansInfoType[] = [
	{
		namePlan: 'PageStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'2 Relatórios a cada 15 dias',
		],
		urlTarget: '#',
		nameButton: 'Contratar',
		typePlan: 'start',
	},
	{
		namePlan: 'PageMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'33 Relatórios a cada 15 dias',
		],
		urlTarget: '#',
		nameButton: 'Contratar',
		typePlan: 'max',
	},
	{
		namePlan: 'PagePro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'44 Relatórios a cada 15 dias',
		],
		urlTarget: '#',
		nameButton: 'Contratar',
		typePlan: 'pro',
	},
];

export const plansCLickAdsenseJA: PlansInfoType[] = [
	{
		namePlan: 'PageStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '15日ごとに2つのレポート'],
		urlTarget: '#',
		nameButton: '雇う',
		typePlan: 'start',
	},
	{
		namePlan: 'PageMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '33日ごとに2つのレポート'],
		urlTarget: '#',
		nameButton: '雇う',
		typePlan: 'max',
	},
	{
		namePlan: 'PagePro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '44日ごとに2つのレポート'],
		urlTarget: '#',
		nameButton: '雇う',
		typePlan: 'pro',
	},
];

export function getPlansClickPages(lang: Locale): PlansInfoType[] {
	switch (lang) {
		case 'en':
			return plansCLickAdsenseEN;
			break;
		case 'pt':
			return plansCLickAdsensePT;
			break;
		case 'ja':
			return plansCLickAdsenseJA;
			break;
		default:
			return plansCLickAdsenseJA;
			break;
	}
}

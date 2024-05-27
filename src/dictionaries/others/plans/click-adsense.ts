import { Locale } from '@/i18n-config';
import { PlansInfoType } from '@/types/plans-info-type';

export const plansClickAdsenseEN: PlansInfoType[] = [
	{
		namePlan: 'ClickStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: ['Google and Meta advertising campaigns', '2 Reports every 15 days'],
		urlTarget: '/subscription?p=clickAdsense',
		nameButton: 'hire',
		typePlan: 'start',
	},
	{
		namePlan: 'ClickMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: [
			'Google and Meta advertising campaigns',
			'33 Reports every 15 days',
		],
		urlTarget: '/subscription?p=clickAdsense',
		nameButton: 'hire',
		typePlan: 'max',
	},
	{
		namePlan: 'ClickPro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: [
			'Google and Meta advertising campaigns',
			'44 Reports every 15 days',
		],
		urlTarget: '/subscription?p=clickAdsense',
		nameButton: 'hire',
		typePlan: 'pro',
	},
];

export const plansClickAdsensePT: PlansInfoType[] = [
	{
		namePlan: 'ClickStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'2 Relatórios a cada 15 dias',
		],
		urlTarget: '/subscription?p=clickAdsense',
		nameButton: 'Contratar',
		typePlan: 'start',
	},
	{
		namePlan: 'ClickMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'33 Relatórios a cada 15 dias',
		],
		urlTarget: '/subscription?p=clickAdsense',
		nameButton: 'Contratar',
		typePlan: 'max',
	},
	{
		namePlan: 'ClickPro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: [
			'Campanhas de publicidade no Google e Meta',
			'44 Relatórios a cada 15 dias',
		],
		urlTarget: '/subscription?p=clickAdsense',
		nameButton: 'Contratar',
		typePlan: 'pro',
	},
];

export const plansClickAdsenseJA: PlansInfoType[] = [
	{
		namePlan: 'ClickStart',
		valuePlan: '35,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '15日ごとに2つのレポート'],
		urlTarget: '/subscription?p=clickAdsense',
		nameButton: '雇う',
		typePlan: 'start',
	},
	{
		namePlan: 'ClickMax',
		valuePlan: '50,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '33日ごとに2つのレポート'],
		urlTarget: '/subscription?p=clickAdsense',
		nameButton: '雇う',
		typePlan: 'max',
	},
	{
		namePlan: 'ClickPro',
		valuePlan: '75,000',
		periodSubscription: '/MONTH',
		items: ['GoogleとMetaの広告キャンペーン', '44日ごとに2つのレポート'],
		urlTarget: '/subscription?p=clickAdsense',
		nameButton: '雇う',
		typePlan: 'pro',
	},
];

export function getPlansClickAdsense(lang: Locale): PlansInfoType[] {
	switch (lang) {
		case 'en':
			return plansClickAdsenseEN;
			break;
		case 'pt':
			return plansClickAdsensePT;
			break;
		case 'ja':
			return plansClickAdsenseJA;
			break;
		default:
			return plansClickAdsenseJA;
			break;
	}
}

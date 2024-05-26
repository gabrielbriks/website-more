import { Locale } from '@/i18n-config';
import { CardInfoServiceType } from '@/types/card-info-service-type';

import Click_AdsenseSVG from '@/assets/icons-services/click-adsense.svg';
import Click_MediaSVG from '@/assets/icons-services/click-media.svg';
import Click_PagesSVG from '@/assets/icons-services/click-pages.svg';
import Click_WebSVG from '@/assets/icons-services/click-web.svg';

const cardTextsJA: CardInfoServiceType[] = [
	{
		icon: Click_AdsenseSVG,
		nameService: 'ClickAdsense',
		descriptionService:
			'オンラインでの貴社の存在感を高め、視聴者を魅了し、貴社のブランドが最初の選択肢となることを保証します。',
		buttonName: 'もっと知る',
		urlTarget: '/click-adsense',
	},
	{
		icon: Click_MediaSVG,
		nameService: 'ClickMedia',
		descriptionService:
			'ソーシャルメディアについてはもう心配する必要はありません。私たちがあなたのためにそれを行います',
		buttonName: 'もっと知る',
		urlTarget: '/click-media',
	},
	{
		icon: Click_PagesSVG,
		nameService: 'ClickPages',
		descriptionService:
			'より多くの電子メールを取得し、製品を発売し、サービスを宣伝するための最良の方法。',
		buttonName: 'もっと知る',
		urlTarget: '/click-pages',
	},
	{
		icon: Click_WebSVG,
		nameService: 'ClickWeb',
		descriptionService:
			'あなたがずっと望んでいたウェブサイトがここで可能です。',
		buttonName: 'もっと知る',
		urlTarget: '/click-web',
	},
];

const cardTextsPT: CardInfoServiceType[] = [
	{
		icon: Click_AdsenseSVG,
		nameService: 'ClickAdsense',
		descriptionService:
			'Aumente a sua presença online, envolva o seu público e garanta que a sua marca se torne a sua primeira escolha.',
		buttonName: 'Saiba Mais',
		urlTarget: '/click-adsense',
	},
	{
		icon: Click_MediaSVG,
		nameService: 'ClickMedia',
		descriptionService:
			'Não há mais necessidade de se preocupar com mídias sociais. nós fazemos isso por você',
		buttonName: 'Saiba Mais',
		urlTarget: '/click-media',
	},
	{
		icon: Click_PagesSVG,
		nameService: 'ClickPages',
		descriptionService:
			'A melhor forma de receber mais emails, lançar seus produtos e promover seus serviços.',
		buttonName: 'Saiba Mais',
		urlTarget: '/click-pages',
	},
	{
		icon: Click_WebSVG,
		nameService: 'ClickWeb',
		descriptionService: 'O site que você sempre quis é possível aqui.',
		buttonName: 'Saiba Mais',
		urlTarget: '/click-web',
	},
];

const cardTextsEN: CardInfoServiceType[] = [
	{
		icon: Click_AdsenseSVG,
		nameService: 'ClickAdsense',
		descriptionService:
			'Increase your online presence, engage your audience and ensure that your brand becomes your first choice.',
		buttonName: 'Learn More',
		urlTarget: '/click-adsense',
	},
	{
		icon: Click_MediaSVG,
		nameService: 'ClickMedia',
		descriptionService:
			'No more need to worry about social media. we do it for you',
		buttonName: 'Learn More',
		urlTarget: '/click-media',
	},
	{
		icon: Click_PagesSVG,
		nameService: 'ClickPages',
		descriptionService:
			'The best way to receive more emails, launch your products and promote your services.',
		buttonName: 'Learn More',
		urlTarget: '/click-pages',
	},
	{
		icon: Click_WebSVG,
		nameService: 'ClickWeb',
		descriptionService: 'The site you’ve always wanted is possible here.',
		buttonName: 'Learn More',
		urlTarget: '/click-web',
	},
];

export function getTextsCardsServiceByLanguage(lang: Locale) {
	switch (lang) {
		case 'en':
			return cardTextsEN;
			break;
		case 'ja':
			return cardTextsJA;
			break;
		case 'pt':
			return cardTextsPT;
			break;
		default:
			return cardTextsJA;
			break;
	}
}

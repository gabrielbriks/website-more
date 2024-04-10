import { Locale } from '@/i18n-config';
import { getItemsFAQsClickAdsense } from './data-faq-clickadsense';
import { getItemsFAQsClickMedia } from './data-faq-clickmedia';
import { getItemsFAQsClickPages } from './data-faq-clickpages';
import { getItemsFAQsClickWeb } from './data-faq-clickweb';
import { getItemsFAQsHome } from './data-faq-home';

export function getItemsFAQs(
	lang: Locale,
	namePage: 'home' | 'clickAdsense' | 'clickMedia' | 'clickWeb' | 'clickPages',
) {
	switch (namePage) {
		case 'home':
			return getItemsFAQsHome(lang);
			break;
		case 'clickAdsense':
			return getItemsFAQsClickAdsense(lang);
			break;
		case 'clickMedia':
			return getItemsFAQsClickMedia(lang);
			break;
		case 'clickWeb':
			return getItemsFAQsClickWeb(lang);
			break;
		case 'clickPages':
			return getItemsFAQsClickPages(lang);
			break;
		default:
			return getItemsFAQsHome(lang);
			break;
	}
}

type DictionaryCustomType = {
	layout: {
		header: {
			menuBar: {
				home: string;
				whoWeAre: string;
				plans: string;
				contact: string;
			};
			buttonClientArea: string;
		};
		footer: Record<string, never>; // Um tipo vazio para o footer, pois não há informações fornecidas
		buttons: {
			learnMore: string;
			hireNow: string;
		};
		inputs: Record<string, never>; // Um tipo vazio para os inputs, pois não há informações fornecidas
	};
	pages: {
		home: {
			heroSubtitleTop: string;
			heroTitle: string;
			heroTextDescription: string;
			'section-define-us': {
				subTitleTop: string;
				title: string;
				textDescription: string;
				definitionUsImage: {
					Practicality: string;
					Quality: string;
					Innovation: string;
				};
			};
			'section-services': {
				subTitleTop: string;
				title: string;
				textDescription: string;
				cardsServices: {
					cardAdsense: {
						title: string;
						textDescription: string;
					};
					cardMedia: {
						title: string;
						textDescription: string;
					};
					cardPages: {
						title: string;
						textDescription: string;
					};
					cardWeb: {
						title: string;
						textDescription: string;
					};
				};
			};
			'area-video': {
				phraseDescription: string;
			};
			'section-ourMission': {
				subTitleTop: string;
				title: string;
				textDescription: string;
			};
			faq: {
				subTitleTop: string;
				title: string;
				questions: Record<string, string>; // Um tipo vazio para as perguntas, pois não há informações fornecidas
			};
			'section-contact': {
				areaSendMessage: {
					subTitleTop: string;
					title: string;
					inputsPlaceholders: {
						name: string;
						email: string;
						phone: string;
						msgText: string;
					};
					buttonSubmitName: string;
				};
				'contact-information': {
					subTitleTop: string;
					title: string;
					textDescription: string;
					labelPhone: string;
					labelLocation: string;
					labelEmail: string;
				};
			};
		};
		clickAdsense: Record<string, never>; // Um tipo vazio para as informações do clickAdsense, pois não há informações fornecidas
		clickMedia: Record<string, never>; // Um tipo vazio para as informações do clickMedia, pois não há informações fornecidas
		clickPages: Record<string, never>; // Um tipo vazio para as informações do clickPages, pois não há informações fornecidas
		clickWeb: Record<string, never>; // Um tipo vazio para as informações do clickWeb, pois não há informações fornecidas
	};
};

export default DictionaryCustomType;

import { Locale } from '@/i18n-config';
import { DataFAQS } from '@/types/data-faqs-type';

export const faqClickWebPT: DataFAQS[] = [
	{
		valueItem: 'item-1',
		nameTrigger: 'Qual linguagem é utilizada para criar o site?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					Nos criamos o seu site em qualquer linguagem da sua preferencia,
					Python , NodeJs , JavaScript, Html entre outras, agende agora sua
					reuniao.
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-2',
		nameTrigger: 'Posso cadastrar os meus clientes dentro do site?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					Podemos inserir qualquer funcao dentro do seu site, cadastros,
					agendamentos, checkout de pagamento, contato direto com o suporte,
					dentro da clickmore nao temos limites para criar.
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-3',
		nameTrigger: 'Como funciona a hospedagem e dominios ?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					Em todos os planos oferecemos hospedagem e dominio gratuitos por 1 ano
					, garantindo que o seu site fique online.
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-4',
		nameTrigger: 'Quanto tempo o site ficara pronto?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					O prazo é de 20 dias apos a aprovacao do layout do site, para o plano
					WebPrime depende da necessidade do cliente.
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-5',
		nameTrigger: 'Como faco para saber quantas pessoas estao acessando ?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					Nos implementamos o google analytics para que voce acompanhe todas as
					pessoas que navegam no seu site.
				</p>
			</span>
		),
	},
];

export const faqClickWebEN: DataFAQS[] = [
	{
		valueItem: 'item-1',
		nameTrigger: 'What language is used to create the site?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					We create your site in any language of your choice, Python, NodeJs,
					JavaScript, Html among others, schedule your meeting now.
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-2',
		nameTrigger: 'Can I register my clients on the site?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					We can insert any function into your site, registrations,
					appointments, payment checkout, direct contact with support, at
					ClickMore we have no limits to create.
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-3',
		nameTrigger: 'How does hosting and domains work?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					In all plans we offer free hosting and domain for 1 year, ensuring
					that your site stays online.
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-4',
		nameTrigger: 'How long will it take for the site to be ready?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					The deadline is 20 days after the approval of the site layout, for the
					WebPrime plan it depends on the client's needs.
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-5',
		nameTrigger: 'How do I find out how many people are accessing?',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					We implement google analytics so that you can track all the people
					browsing your site.
				</p>
			</span>
		),
	},
];

export const faqClickWebJA: DataFAQS[] = [
	{
		valueItem: 'item-1',
		nameTrigger: 'サイトを作成するために使用される言語は何ですか？',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					お客様の選択した言語でサイトを作成します。Python、NodeJs、JavaScript、Htmlなど、今すぐミーティングを予約してください。
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-2',
		nameTrigger: 'サイトに顧客を登録できますか？',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					お客様のサイトに任意の機能を追加できます。登録、予約、支払いチェックアウト、サポートとの直接的な連絡など、ClickMoreでは制限はありません。
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-3',
		nameTrigger: 'ホスティングとドメインはどのように動作しますか？',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					すべてのプランで、1年間の無料ホスティングとドメインを提供しており、お客様のサイトがオンラインで維持されることを保証しています。
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-4',
		nameTrigger: 'サイトが完成するのにどれくらい時間がかかりますか？',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					サイトのレイアウトが承認されてから20日以内に完了します。WebPrimeプランの場合は、お客様のニーズに応じて変わります。
				</p>
			</span>
		),
	},
	{
		valueItem: 'item-5',
		nameTrigger: 'アクセスしている人数を知る方法は？',
		descriptionItem: () => (
			<span className="flex w-full flex-col gap-2 text-start">
				<p>
					Google
					Analyticsを導入していますので、お客様のサイトを閲覧しているすべての人を追跡できます。
				</p>
			</span>
		),
	},
];

export function getItemsFAQsClickWeb(lang: Locale) {
	switch (lang) {
		case 'pt':
			return faqClickWebPT;
			break;
		case 'en':
			return faqClickWebEN;
			break;
		case 'ja':
			return faqClickWebJA;
			break;
		default:
			return faqClickWebJA;
			break;
	}
}

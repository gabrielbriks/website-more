'use client';
import Footer from '@/components/layout/footer/footer';
import LoadingLanguage from '@/components/layout/loadings/loading-language';
import { Button } from '@/components/ui/button';
import { useDictionaryContext } from '@/contexts/dictionaryContext';
import { useRouter } from 'next/navigation';
import PopupTypebot from './popup-typebot';

// export const metadata: Metadata = {
// 	title: 'Subscription',
// 	description: '',
// };

export default function Subscription() {
	const { dictionary, loading } = useDictionaryContext();
	const navigation = useRouter();

	if (loading) {
		return <LoadingLanguage />;
	}

	return (
		<div className="flex min-h-full flex-col justify-center bg-white  font-nunito ">
			<div className="flex min-h-screen w-full flex-col pt-24">
				<h1 className="w-full justify-center pt-4 text-center text-3xl font-semibold">
					{dictionary.pages.subscription.titlePage}
				</h1>
				<div className="text-1xl flex h-full w-full flex-col justify-center pt-4 text-center font-medium max-sm:max-w-xl">
					<span>
						<p className="">
							{dictionary.pages.subscription.contentDescription.wait}
						</p>
						<p className="">
							{dictionary.pages.subscription.contentDescription.message}
						</p>
					</span>

					<span className="text-1xl justify-center gap-4 pt-10">
						<p className="text-1xl text-cm-tertiary">
							{dictionary.pages.subscription.components.labelTopButtonClickHere}
						</p>
						<Button
							onClick={() => window.location.reload()}
							variant="outline"
							className="text-base transition-all duration-500 hover:bg-purple-900 hover:text-white"
						>
							{dictionary.pages.subscription.components.textButtonClickHere}
						</Button>
					</span>
				</div>

				<div className="text-1xl flex h-full justify-center py-10">
					<Button
						onClick={() => navigation.back()}
						variant="outline"
						className="absolute bottom-0 mb-6 self-center text-base transition-all duration-500 hover:bg-purple-900 hover:text-white"
					>
						{dictionary.pages.subscription.components.textButtonGoBack}
					</Button>
				</div>
			</div>
			<PopupTypebot />
			<Footer />
		</div>
	);
}

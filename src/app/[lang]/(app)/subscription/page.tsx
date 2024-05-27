'use client';
import Footer from '@/components/layout/footer/footer';
import { Button } from '@/components/ui/button';
import PopupTypebot from './popup-typebot';

// export const metadata: Metadata = {
// 	title: 'Subscription',
// 	description: '',
// };

export default function Subscription() {
	return (
		<div className="flex min-h-full flex-col justify-center bg-white  font-nunito ">
			<div className="flex min-h-screen w-full flex-col pt-24">
				<h1 className="w-full justify-center pt-4 text-center text-3xl font-semibold">
					Pré-Briefing
				</h1>
				<div className="text-1xl flex h-full w-full flex-col justify-center pt-4 text-center font-medium max-sm:max-w-xl">
					<span>
						<p className="">Aguarde...</p>
						<p className="">
							Em instantes, será exibido o início do seu pré-briefing
						</p>
					</span>

					<span className="text-1xl justify-center gap-4 pt-10">
						<p className="text-1xl text-cm-tertiary">Ainda não foi exibido? </p>
						<Button
							onClick={() => window.location.reload()}
							variant="outline"
							className="text-base transition-all duration-500 hover:bg-purple-900 hover:text-white"
						>
							Clique Aqui
						</Button>
					</span>
				</div>

				<div className="text-1xl flex h-full justify-center py-10">
					<Button
						variant="outline"
						className="absolute bottom-0 mb-6 self-center text-base transition-all duration-500 hover:bg-purple-900 hover:text-white"
					>
						Voltar
					</Button>
				</div>
			</div>
			<PopupTypebot />
			<Footer />
		</div>
	);
}

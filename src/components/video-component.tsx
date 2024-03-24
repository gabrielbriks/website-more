import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';
import Image from 'next/image';
import VideoPlayImage from '../assets/play-video-image.webp';

interface VideoComponentProps {
	lang: Locale;
}

export default async function VideoComponent({ lang }: VideoComponentProps) {
	const dictionary = await getDictionary(lang);

	return (
		<div className="container mt-14 flex h-full max-h-[477px] max-w-[1318px] flex-col pt-12">
			<div className="mt-14 w-full items-center overflow-visible rounded-xl bg-cm-primary px-20 max-md:mt-10 max-md:max-w-full max-md:px-5">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0">
					<div className="flex w-[66%] flex-col max-md:ml-0 max-md:w-full">
						<Image
							alt="Video play image test"
							loading="lazy"
							src={VideoPlayImage}
							className="left-0 top-0 aspect-[1.28] h-auto w-full self-stretch max-md:-mt-10 max-md:ml-2 max-md:max-w-full sm:-mt-10 lg:-ml-4 lg:-mt-14"
						/>
					</div>
					<div className="flex w-[34%] flex-col max-md:mb-10 max-md:ml-0 max-md:w-full max-md:items-center lg:ml-5">
						<div className="my-auto self-stretch font-bold leading-9 text-white max-lg:text-2xl max-md:mt-10 max-md:w-full max-md:items-center max-md:text-center lg:text-3xl">
							{dictionary['pages'].home['area-video'].phraseDescription}
							{/* A New Way to Hire a Marketing Agency for Your Company */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import ClickMoreLogoWhite from '@/assets/clickmore-logo-white.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoaderGlobal() {
	return (
		<div className="absolute z-50 flex max-h-full min-h-screen w-full flex-col items-center justify-center bg-cm-gradient-imgcolor">
			<div>
				<Image
					alt="Logo click more purple "
					loading="eager"
					src={ClickMoreLogoWhite}
					priority={true}
					className=" aspect-[4.76] w-[250px] max-w-full"
				/>
			</div>
			<div className="relative rounded-md p-4">
				<div className="flex justify-center gap-5">
					<>
						<motion.span
							className="mx-1 my-12 h-4 w-4 rounded-full bg-white"
							animate={{
								y: [0, -20, 0],
								opacity: [1, 0], // Fades out
								transition: { duration: 0.5, repeat: Infinity },
							}}
						/>
						<motion.span
							className="mx-1 my-12 h-4 w-4 rounded-full bg-white"
							animate={{
								y: [0, -20, 0],
								opacity: [1, 0], // Fades out
								transition: { duration: 0.5, repeat: Infinity, delay: 0.1 },
							}}
						/>
						<motion.span
							className="mx-1 my-12 h-4 w-4 rounded-full bg-white"
							animate={{
								y: [0, -20, 0],
								opacity: [1, 0], // Fades out
								transition: { duration: 0.5, repeat: Infinity, delay: 0.2 },
							}}
						/>
					</>
				</div>
			</div>
		</div>
	);
}

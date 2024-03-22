'use client';
import ClickMoreLogoWhite from '@/assets/click-more-purple.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const FallbackLoading = () => (
	<div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-5 bg-zinc-100">
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				type: 'spring',
				stiffness: 50,
				damping: 10,
			}}
			className="flex w-full items-center justify-center"
		>
			<Image
				alt="Logo click more purple "
				loading="lazy"
				src={ClickMoreLogoWhite}
				className=" aspect-[4.76] w-[250px] max-w-full"
			/>
		</motion.div>

		<div className="flex min-h-full min-w-full items-center justify-center gap-5 bg-zinc-100">
			<motion.span
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 50,
					damping: 10,
					duration: 0.8,
				}}
				className="relative flex h-5 w-5"
			>
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
				<span className="relative inline-flex h-5 w-5 rounded-full bg-purple-700"></span>
			</motion.span>

			<motion.span
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 50,
					damping: 10,
					duration: 1,
				}}
				className="relative flex h-5 w-5"
			>
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
				<span className="relative inline-flex h-5 w-5 rounded-full bg-purple-700"></span>
			</motion.span>

			<motion.span
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 50,
					damping: 10,
					duration: 2,
				}}
				className="relative flex h-5 w-5"
			>
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
				<span className="relative inline-flex h-5 w-5 rounded-full bg-purple-700"></span>
			</motion.span>
		</div>
	</div>
);

export default FallbackLoading;

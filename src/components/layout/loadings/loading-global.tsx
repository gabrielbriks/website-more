import { motion } from 'framer-motion';

export default function LoaderGlobal() {
	return (
		<div className="absolute z-50 flex max-h-full min-h-screen w-full items-center justify-center bg-cm-gradient-imgcolor">
			<div className="relative rounded-md p-4">
				<div className="flex justify-center">
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

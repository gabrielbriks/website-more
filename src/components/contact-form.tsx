'use client';
import LeftArrowClickPhrase from '@/assets/left-arrow-click-phrase.svg';
import { useDictionaryContext } from '@/contexts/dictionaryContext';
import { ArrowUpRight } from 'akar-icons';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import LoadingLanguage from './layout/loadings/loading-language';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export type FormValuesContactEmail = {
	name: string;
	email: string;
	message: string;
	phone: string;
};

export default function ContactForm() {
	const { dictionary, loading } = useDictionaryContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValuesContactEmail>({});

	async function handleSendContactForm(data: FormValuesContactEmail) {
		const apiEndpoint = '/api/send-email';
		console.log(data);

		await fetch(apiEndpoint, {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.message) {
					toast.success('Your message was sent!', {
						description: response.message,
						duration: 3000,
					});
				} else {
					toast.error('Oops! Error sending message.', {
						description: response.error,
						duration: 3000,
					});
				}

				console.log(response.message);
			})
			.catch((err) => {
				console.error(err);
				//TODO: Alter to desctrutive
				toast.error('Oops! Error sending message.', {
					description: err.error,
					important: true,
					duration: 8000,
				});
			});
	}

	if (loading) {
		return <LoadingLanguage />;
	}

	return (
		<form
			onSubmit={handleSubmit(handleSendContactForm)}
			className="relative flex w-full grow flex-col rounded-2xl border-2 border-solid border-purple-800 bg-white py-12 pl-16 pr-2.5 text-base text-gray-500 shadow-lg max-md:mt-10 max-md:max-w-full max-md:pl-5"
		>
			<div className="mt-3 flex gap-1 self-start whitespace-nowrap font-medium uppercase text-purple-800">
				<Image
					alt="any"
					loading="lazy"
					src={LeftArrowClickPhrase}
					className="aspect-square w-5"
				/>
				<h3 className="my-auto grow">
					{
						dictionary['pages'].home['section-contact'].areaSendMessage
							.subTitleTop
					}
				</h3>
			</div>

			<h2 className="mt-4 text-5xl font-bold uppercase leading-[58.08px] text-gray-800 max-md:max-w-full max-md:text-3xl">
				{dictionary['pages'].home['section-contact'].areaSendMessage.title}
			</h2>

			<div className="mt-11 justify-center whitespace-nowrap border-b border-solid border-b-slate-200 max-md:mt-10 max-md:max-w-full">
				<Input
					{...register('name')}
					required
					placeholder={
						dictionary['pages'].home['section-contact'].areaSendMessage
							.inputsPlaceholders.name
					}
					className="border-none py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
				/>
			</div>

			<div className="mt-11 flex justify-between gap-5 whitespace-nowrap max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
				<div className="flex flex-1 flex-col justify-center">
					<div className="justify-center border-b border-solid border-b-slate-200">
						<Input
							{...register('email')}
							required
							placeholder={
								dictionary['pages'].home['section-contact'].areaSendMessage
									.inputsPlaceholders.email
							}
							className="border-none py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
						/>
					</div>
				</div>

				<div className="flex flex-1 flex-col justify-center">
					<div className="justify-center border-b border-solid border-b-slate-200">
						<Input
							{...register('phone')}
							required
							placeholder={
								dictionary['pages'].home['section-contact'].areaSendMessage
									.inputsPlaceholders.phone
							}
							className="border-none py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
						/>
					</div>
				</div>
			</div>

			<div className="mt-11 w-full self-start border-b border-solid border-b-slate-200 max-md:mt-10">
				<Textarea
					{...register('message')}
					required
					placeholder={
						dictionary['pages'].home['section-contact'].areaSendMessage
							.inputsPlaceholders.msgText
					}
					className="min-w-full border-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700  focus-visible:ring-offset-1"
				/>
			</div>

			<div className="flex w-full items-start justify-start">
				<Button
					type="submit"
					className="mt-10 h-11 gap-1 rounded-full border-purple-900 bg-cm-primary uppercase hover:bg-purple-700"
				>
					{
						dictionary['pages'].home['section-contact'].areaSendMessage
							.buttonSubmitName
					}
					<ArrowUpRight
						size={20}
						className="stroke-white transition duration-700 group-hover:stroke-black"
					/>
				</Button>
			</div>
		</form>
	);
}

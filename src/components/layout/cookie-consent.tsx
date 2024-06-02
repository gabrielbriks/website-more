'use client';
import { cn } from '@/lib/utils';
import { CookieIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export default function CookieConsent({
	demo = false,
	onAcceptCallback = () => {},
	onDeclineCallback = () => {},
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [hide, setHide] = useState(false);

	const accept = () => {
		setIsOpen(false);
		document.cookie =
			'cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
		setTimeout(() => {
			setHide(true);
		}, 700);
		onAcceptCallback();
	};

	const decline = () => {
		setIsOpen(false);
		setTimeout(() => {
			setHide(true);
		}, 700);
		onDeclineCallback();
	};

	useEffect(() => {
		try {
			setIsOpen(true);
			if (document.cookie.includes('cookieConsent=true')) {
				if (!demo) {
					setIsOpen(false);
					setTimeout(() => {
						setHide(true);
					}, 700);
				}
			}
		} catch (e) {
			console.log('Error: ', e);
		}
	}, []);

	return (
		<div
			className={cn(
				'fixed bottom-0 left-0 right-0 z-[200] w-full transition-transform duration-700 sm:bottom-4 sm:left-4 sm:max-w-md',
				!isOpen
					? 'translate-y-8 opacity-0 transition-[opacity,transform]'
					: 'translate-y-0 opacity-100 transition-[opacity,transform]',
				hide && 'hidden',
			)}
		>
			<div className="m-2 rounded-md bg-secondary">
				<div className="grid gap-2">
					<div className="flex h-14 items-center justify-between border-b border-border p-4">
						<h1 className="text-lg font-medium">We use cookies</h1>
						<CookieIcon className="h-[1.2rem] w-[1.2rem]" />
					</div>
					<div className="p-4">
						<p className="text-sm font-normal">
							We use cookies to ensure you get the best experience on our
							website. For more information on how we use cookies, please see
							our cookie policy.
							<br />
							<br />
							<span className="text-xs">
								By clicking "
								<span className="font-medium opacity-80">Accept</span>", you
								agree to our use of cookies.
							</span>
							<br />
							<a href="#" className="text-xs underline">
								Learn more.
							</a>
						</p>
					</div>
					<div className="flex gap-2 border-t border-border bg-background/20 p-4 py-5">
						<Button
							onClick={accept}
							className="w-full bg-cm-primary hover:rounded-none hover:bg-cm-primary"
						>
							Accept
						</Button>
						<Button onClick={decline} className="w-full" variant="secondary">
							Decline
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

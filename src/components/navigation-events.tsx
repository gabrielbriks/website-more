'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function NavigationEvents() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		console.log('NavigationEvents' + pathname, ' >> ' + window.location.hash);
		// You can now use the current URL
		// ...
	}, [pathname, window.location.hash]);

	return null;
}

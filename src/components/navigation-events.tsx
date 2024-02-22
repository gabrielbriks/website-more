'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function NavigationEvents() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		console.log('NavigationEvents history ', window.history.state);
		console.log('NavigationEvents URL', url);
		// You can now use the current URL
		// ...
	}, [pathname, searchParams]);

	return null;
}

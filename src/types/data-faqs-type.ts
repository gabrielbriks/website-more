import { ReactNode } from 'react';

export type DataFAQS = {
	valueItem: string;
	nameTrigger: string;
	descriptionItem: () => JSX.Element | ReactNode | JSX.Element | string;
};

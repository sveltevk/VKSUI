import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { Platform, platform } from './platform';

export interface SSRContextInterface {
	platform: Writable<Platform>;
	userAgent?: string;
}

export const SSRContextKey = 'SSRContext';

export interface SSRBuildContextProps {
	userAgent?: string;
}

export const SSRBuildContext = (props: SSRBuildContextProps): SSRContextInterface => {
	const { userAgent } = props;

	const contextValue = {
		platform: writable(platform(userAgent)),
		userAgent
	};

	return contextValue;
};

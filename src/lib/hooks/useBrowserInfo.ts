import { getContext } from 'svelte';
import { SSRContextKey } from '../lib/ssr';
import type { SSRContextInterface } from '../lib/ssr';
import { canUseDOM } from '../lib/dom';
import { computeBrowserInfo } from '../lib/browser';
import type { BrowserInfo } from '../lib/browser';

export default function useBrowserInfo(): BrowserInfo {
	const ssrContext = getContext(SSRContextKey) as SSRContextInterface;

	let userAgent = canUseDOM && navigator.userAgent ? navigator.userAgent : '';
	if (ssrContext && ssrContext.platform) {
		userAgent = ssrContext.userAgent;
	}

	return computeBrowserInfo(userAgent);
}

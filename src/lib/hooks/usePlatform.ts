import { getContext } from 'svelte';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { platform } from '../lib/platform';
import type { PlatformType } from '../lib/platform';
import { ContextKey } from '../lib/config';

export default function usePlatform(): Writable<PlatformType> {
	const wPlatform = getContext(ContextKey.platform) as Writable<PlatformType>;

	return wPlatform || writable(platform());
}

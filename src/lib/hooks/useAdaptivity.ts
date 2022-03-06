import { getContext } from 'svelte';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { hasHover, hasMouse } from '@vkontakte/vkjs';
import { SizeType, AdaptivityContextKey } from '../lib/adaptivity';
import type { AdaptivityContextInterface } from '../lib/adaptivity';

export function useAdaptivity(): Writable<AdaptivityContextInterface> {
	const adaptivityContext = getContext(
		AdaptivityContextKey
	) as Writable<AdaptivityContextInterface>;

	return (
		adaptivityContext ||
		writable({
			sizeX: SizeType.COMPACT,
			sizeY: SizeType.REGULAR,
			hasMouse: hasMouse,
			deviceHasHover: hasHover
		})
	);
}

<script context="module" lang="ts">
	export interface SplitColContextInterface {
		colRef: HTMLDivElement | null;
		animate: boolean;
	}
	const SplitColContextKey = 'vkui_SplitColContext';

	export const useSplitCol = (): Writable<SplitColContextInterface> => {
		return (
			getContext(SplitColContextKey) ||
			writable({
				colRef: null,
				animate: true
			})
		);
	};
</script>

<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let value: SplitColContextInterface = {
		colRef: null,
		animate: true
	};

	const wValue = writable(value);
	setContext(SplitColContextKey, wValue);
	$: wValue.set(value);
</script>

<slot />

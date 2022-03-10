<script context="module" lang="ts">
	import { clamp } from '@sveltevk/vksui/helpers/math';

	export interface ScrollContextInterface {
		getScroll(): { x: number; y: number };
		scrollTo(x?: number, y?: number): void;
	}
	const ScrollContextKey = 'vkui_ScrollContext';

	export const globalScrollController = (
		window: Window | undefined,
		document: Document | undefined
	) => ({
		getScroll: () => ({ x: window?.scrollX, y: window?.scrollY }),
		scrollTo: (x = 0, y = 0) => {
			// Some iOS versions do not normalize scroll — do it manually.
			window?.scrollTo(
				x ? clamp(x, 0, document?.body.scrollWidth - window?.innerWidth) : 0,
				y ? clamp(y, 0, document?.body.scrollHeight - window?.innerHeight) : 0
			);
		}
	});

	export const elementScrollController = (el: HTMLElement) => ({
		getScroll: () => ({
			x: el?.scrollLeft ?? 0,
			y: el?.scrollTop ?? 0
		}),
		scrollTo: (x = 0, y = 0) => {
			// Some iOS versions do not normalize scroll — do it manually.
			el?.scrollTo(
				x ? clamp(x, 0, el.scrollWidth - el.clientWidth) : 0,
				y ? clamp(y, 0, el.scrollHeight - el.clientHeight) : 0
			);
		}
	});

	export const useScroll = (): Writable<ScrollContextInterface> => {
		return (
			getContext(ScrollContextKey) ||
			writable({
				getScroll: () => ({ x: 0, y: 0 }),
				scrollTo: noop
			})
		);
	};
</script>

<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { noop } from 'svelte/internal';
	import { writable, type Writable } from 'svelte/store';

	export let value: ScrollContextInterface = {
		getScroll: () => ({ x: 0, y: 0 }),
		scrollTo: noop
	};

	const wValue = writable(value);
	setContext(ScrollContextKey, wValue);
	$: wValue.set(value);
</script>

<slot />

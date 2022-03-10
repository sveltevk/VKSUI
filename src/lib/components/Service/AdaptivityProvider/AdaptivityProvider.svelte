<script lang="ts">
	import { useDOM } from '@sveltevk/vksui/lib/dom';

	import { setContext, onDestroy, beforeUpdate, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { writable } from 'svelte/store';
	import type { AdaptivityContextInterface, ViewHeight } from '@sveltevk/vksui/lib/adaptivity';
	import {
		AdaptivityContextKey,
		calculateAdaptivity,
		SizeType,
		ViewWidth
	} from '@sveltevk/vksui/lib/adaptivity';

	const dom = useDOM();
	export let sizeX: SizeType = undefined;
	export let sizeY: SizeType = undefined;
	export let viewWidth: ViewWidth = undefined;
	export let viewHeight: ViewHeight = undefined;
	export let hasMouse: boolean = undefined;
	export let deviceHasHover: boolean = undefined;

	let currentProps: Writable<AdaptivityContextInterface> = writable(
		calculateAdaptivity($dom.window?.innerWidth, $dom.window?.innerHeight, {
			sizeX,
			sizeY,
			viewWidth,
			viewHeight,
			hasMouse,
			deviceHasHover
		})
	);

	setContext(AdaptivityContextKey, currentProps);

	const onResize = () => {
		const calculated = calculateAdaptivity($dom.window?.innerWidth, $dom.window?.innerHeight, {
			sizeX,
			sizeY,
			viewWidth,
			viewHeight,
			hasMouse,
			deviceHasHover
		});

		if (
			$currentProps.viewWidth !== calculated.viewWidth ||
			$currentProps.viewHeight !== calculated.viewHeight ||
			$currentProps.sizeX !== calculated.sizeX ||
			$currentProps.sizeY !== calculated.sizeY ||
			$currentProps.hasMouse !== calculated.hasMouse ||
			$currentProps.deviceHasHover !== calculated.deviceHasHover
		) {
			currentProps.set(calculated);
			console.log('set');
		}
	};

	beforeUpdate(() => {
		onResize();
	});

	onMount(() => {
		$dom.window?.addEventListener('resize', onResize, false);
	});

	onDestroy(() => {
		$dom.window?.removeEventListener('resize', onResize, false);
	});
</script>

<slot />

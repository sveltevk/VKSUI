<script context="module">
	import { addSpriteSymbol } from '@sveltevk/icons/sprite';
	let isMounted = false;
	export function mountIcon() {
		if (!isMounted) {
			addSpriteSymbol({
				id: 'tokenized_outline_28',
				viewBox: '0 0 28 28',
				content:
					'<symbol viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" id="tokenized_outline_28"><path d="M8 4H7a3 3 0 0 0-3 3v1m20 0V7a3 3 0 0 0-3-3h-1m0 20h1a3 3 0 0 0 3-3v-1M4 20v1a3 3 0 0 0 3 3h1M18 10h-8m4 8v-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>'
			});
			isMounted = true;
		}
	}
</script>

<script>
	import IconBase from '@sveltevk/icons/IconBase.svelte';
	import { onMount } from 'svelte';
	import { current_component } from 'svelte/internal';
	export let width = 28;
	export let height = 28;
	export let fill = '';
	onMount(mountIcon);
</script>

<IconBase
	curComponent={current_component}
	{...$$restProps}
	id="tokenized_outline_28"
	viewBox="0 0 28 28"
	{width}
	{height}
	{fill}
/>

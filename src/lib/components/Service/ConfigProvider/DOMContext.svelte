<script lang="ts">
	import { DOMContextKey, getDOM, type DOMContextInterface } from '@sveltevk/vksui/lib/dom';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let value: DOMContextInterface = getDOM();

	const wValue = writable(value);
	setContext(DOMContextKey, wValue);
	$: wValue.set(value);
</script>

<slot />

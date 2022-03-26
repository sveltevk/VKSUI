<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { IOS } from '@sveltevk/vksui/lib/platform';
	import Touch, { type TouchEvent } from '../../Service/Touch/Touch.svelte';
	import Icon24Reorder from '@sveltevk/icons/dist/24/reorder';
	import Icon24ReorderIos from '@sveltevk/icons/dist/24/reorder_ios';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		dragStart: TouchEvent;
		dragMove: TouchEvent;
		dragEnd: TouchEvent;
	}>();

	const platform = usePlatform();
</script>

<Touch
	{...$$restProps}
	class={classNames($$restProps.class, getClassName('CellDragger', $platform))}
	on:start={(e) => dispatch('dragStart', e.detail)}
	on:moveY={(e) => dispatch('dragMove', e.detail)}
	on:end={(e) => dispatch('dragEnd', e.detail)}
	on:click={(e) => e.detail.preventDefault()}
>
	{#if $platform === IOS}
		<Icon24ReorderIos />
	{:else}
		<Icon24Reorder />
	{/if}
</Touch>

<style>
	:global(.CellDragger) {
		cursor: ns-resize;
		color: var(--icon_secondary);
	}
</style>

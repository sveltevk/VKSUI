<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';

	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, IOS, VKCOM } from '@sveltevk/vksui/lib/platform';
	import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton.svelte';
	import Icon28ArrowLeftOutline from '@sveltevk/icons/dist/28/arrow_left_outline';
	import Icon28ChevronLeftOutline from '@sveltevk/icons/dist/28/chevron_left_outline';
	import Icon28ChevronBack from '@sveltevk/icons/dist/28/chevron_back';

	export let label = '';

	const platform = usePlatform();
	const adaptivity = useAdaptivity();
	$: showLabel =
		$platform === VKCOM || ($platform === IOS && $adaptivity.sizeX === SizeType.REGULAR);
</script>

<PanelHeaderButton
	{...$$restProps}
	on:click
	class={classNames(getClassName('PanelHeaderBack', $platform), {
		'PanelHeaderBack--has-label': showLabel && !!label
	})}
	label={showLabel && label}
>
	{#if $platform === ANDROID}<Icon28ArrowLeftOutline />{/if}
	{#if $platform === VKCOM}<Icon28ChevronLeftOutline />{/if}
	{#if $platform === IOS}<Icon28ChevronBack />{/if}
</PanelHeaderButton>

<style>
	:global(.PanelHeaderBack--vkcom.PanelHeaderBack--has-label) {
		padding-right: 11px;
	}

	:global(.PanelHeaderBack--ios.PanelHeaderBack--has-label) {
		padding-right: 8px;
	}
</style>

<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';

	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID } from '@sveltevk/vksui/lib/platform';

	import Icon24CheckBoxOff from '@sveltevk/icons/dist/24/check_box_off';
	import Icon24CheckBoxOn from '@sveltevk/icons/dist/24/check_box_on';
	import Icon24CheckCircleOff from '@sveltevk/icons/dist/24/check_circle_off';
	import Icon24CheckCircleOn from '@sveltevk/icons/dist/24/check_circle_on';

	export let style = '';
	export let value;
	export let checked;

	const platform = usePlatform();

	$: $$restProps.class = '';
</script>

<div class={classNames($$props.class, getClassName('CellCheckbox', $platform))} {style}>
	<input
		{...$$restProps}
		class="CellCheckbox__input"
		type="checkbox"
		bind:value
		bind:checked
		on:change
	/>
	{#if $platform === ANDROID}
		<Icon24CheckBoxOff class="CellCheckbox__icon CellCheckbox__icon--off" />
	{:else}
		<Icon24CheckCircleOff class="CellCheckbox__icon CellCheckbox__icon--off" />
	{/if}
	{#if $platform === ANDROID}
		<Icon24CheckBoxOn class="CellCheckbox__icon CellCheckbox__icon--on" />
	{:else}
		<Icon24CheckCircleOn class="CellCheckbox__icon CellCheckbox__icon--on" />
	{/if}
</div>

<style>
	:global(.CellCheckbox__icon) {
		color: var(--icon_tertiary);
	}

	.CellCheckbox__input,
	:global(.CellCheckbox__icon) {
		display: none;
	}

	:global(.CellCheckbox__icon--on) {
		color: var(--accent);
	}

	.CellCheckbox__input:not(:checked) ~ :global(.CellCheckbox__icon--off),
	.CellCheckbox__input:checked ~ :global(.CellCheckbox__icon--on) {
		display: block;
	}
</style>

<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import button from '@sveltevk/vksui/components/Elements/button/button.svelte';
	import a from '@sveltevk/vksui/components/Elements/a/a.svelte';
	import SimpleCell from '../SimpleCell/SimpleCell.svelte';

	export let component = button;

	export let before = '';

	export let mode: 'primary' | 'danger' = 'primary';
	export let centered = false;

	const platform = usePlatform();
</script>

<SimpleCell
	{...$$restProps}
	stopPropagation
	on:click
	component={$$restProps.href ? a : component}
	class={classNames(
		getClassName('CellButton', $platform),
		`CellButton--${mode}`,
		{ ['CellButton--centered']: centered },
		$$props.class
	)}
>
	<slot name="before" slot="before">
		{#if before}{before}{/if}
	</slot>
	<slot />
</SimpleCell>

<style>
	:global(.CellButton) {
		box-sizing: border-box;
		text-decoration: none;
		margin: 0;
		border: none;
		cursor: pointer;
		width: 100%;
		background: transparent;
		text-align: left;
		padding-top: 0;
		padding-bottom: 0;
	}

	:global(.FormItem .CellButton) {
		width: 100%;
		box-sizing: content-box;
		margin: 0 calc(-1 * var(--formitem_padding));
	}

	:global(.CellButton[disabled]) {
		opacity: 0.4;
	}

	:global(.CellButton--centered) {
		justify-content: center;
		text-align: center;
	}

	:global(.CellButton--centered .SimpleCell__main) {
		flex-grow: initial;
		max-width: initial;
	}

	:global(.CellButton--centered > .Icon) {
		padding-right: 8px;
	}

	:global(.CellButton),
	:global(.CellButton > .Icon) {
		color: var(--accent);
	}

	:global(.CellButton--danger),
	:global(.CellButton--danger > .Icon) {
		color: var(--destructive);
	}
</style>

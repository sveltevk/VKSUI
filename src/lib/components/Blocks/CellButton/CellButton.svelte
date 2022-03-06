<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import button from '$lib/components/Elements/button/button.svelte';
	import a from '$lib/components/Elements/a/a.svelte';
	import SimpleCell from '../SimpleCell/SimpleCell.svelte';

	export let component = button;

	export let before: any = undefined;

	export let mode: 'primary' | 'danger' = 'primary';
	export let stopPropagation: boolean = true;
	export let centered: boolean = false;

	const platform = usePlatform();
</script>

<SimpleCell
	{...$$restProps}
	{stopPropagation}
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
		outline: none;
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

	:global(.CellButton[disabled]) {
		opacity: 0.4;
	}

	:global(.CellButton--centered) {
		justify-content: center;
		text-align: center;
	}

	:global(.CellButton--centered) :global(.SimpleCell__main) {
		flex-grow: initial;
		max-width: initial;
	}

	:global(.CellButton--centered) > :global(.Icon) {
		padding-right: 8px;
	}

	:global(.CellButton--primary),
	:global(.CellButton--primary) > :global(.Icon),
	:global(.CellButton--primary) > :global(.Avatar .Icon) {
		color: var(--accent) !important;
	}

	:global(.CellButton--danger),
	:global(.CellButton--danger) > :global(.Icon),
	:global(.CellButton--danger) > :global(.Avatar .Icon) {
		color: var(--destructive) !important;
	}
</style>

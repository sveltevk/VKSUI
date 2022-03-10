<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';

	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';

	export let size: 's' | 'm' | 'l' = 's';
	const adaptivity = useAdaptivity();
	const platform = usePlatform();

	$: $$restProps.class = classNames(
		getClassName('CardGrid', $platform),
		`CardGrid--${size}`,
		`CardGrid--sizeX-${$adaptivity.sizeX}`,
		$$props.class
	);
</script>

<!-- 
@component
Сетка для `Card`.
-->

<div {...$$restProps}>
	<slot />
</div>

<style>
	.CardGrid {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	:global(.CardGrid + .CardGrid) {
		margin-top: 16px;
	}

	.CardGrid :global(.Card) {
		margin-right: 8px;
	}

	.CardGrid--l :global(.Card) {
		width: 100%;
		margin-right: 0;
	}

	.CardGrid--l :global(.Card:not(:first-child)) {
		margin-top: 8px;
	}

	.CardGrid--m :global(.Card) {
		width: calc((100% - 8px) / 2);
	}

	.CardGrid--m :global(.Card:nth-child(n + 3)) {
		margin-top: 8px;
	}

	.CardGrid--m :global(.Card:nth-child(2n)) {
		margin-right: 0;
	}

	.CardGrid--s :global(.Card) {
		width: calc((100% - 2 * 8px) / 3);
	}

	.CardGrid--s :global(.Card:nth-child(n + 4)) {
		margin-top: 8px;
	}

	.CardGrid--s :global(.Card:nth-child(3n)) {
		margin-right: 0;
	}

	/**
 * iOS
 */

	.CardGrid--ios.CardGrid--sizeX-compact {
		padding-left: 12px;
		padding-right: 12px;
	}

	/**
 * Android & VKCOM
 */

	.CardGrid--android.CardGrid--sizeX-compact {
		padding-left: 16px;
		padding-right: 16px;
	}

	/**
 * Group
 */

	:global(.Group--card) .CardGrid {
		padding-left: 8px;
		padding-right: 8px;
	}

	:global(.Group) .CardGrid:first-child {
		margin-top: 8px;
	}

	:global(.Group) .CardGrid:last-child {
		margin-bottom: 8px;
	}
</style>

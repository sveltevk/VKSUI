<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import HorizontalScroll from '../../Layout/HorizontalScroll/HorizontalScroll.svelte';

	const platform = usePlatform();
</script>

<!-- 
@component
Горизонтальный скролл для `Card`.
-->

<div {...$$restProps} class={classNames(getClassName('CardScroll', $platform), $$props.class)}>
	<HorizontalScroll>
		<div class="CardScroll__in">
			<slot />
		</div>
	</HorizontalScroll>
</div>

<style>
	.CardScroll__in {
		display: flex;
		align-items: stretch;
	}

	.CardScroll :global(.Card) {
		margin-right: 8px;
		flex-shrink: 0;
	}

	.CardScroll :global(.Card:last-child) {
		margin-right: 0;
	}

	.CardScroll__in::before,
	.CardScroll__in::after {
		content: '';
		display: block;
		flex-shrink: 0;
	}

	/**
 * iOS
 */

	.CardScroll--ios .CardScroll__in::before,
	.CardScroll--ios .CardScroll__in::after {
		width: 12px;
	}

	.CardScroll--ios :global(.Card--sz-l) {
		width: calc(100% - 24px);
		margin-right: 12px;
	}

	/**
 * Android
 */

	.CardScroll--android .CardScroll__in::before,
	.CardScroll--android .CardScroll__in::after {
		width: 16px;
	}

	.CardScroll--android :global(.Card--sz-l) {
		width: calc(100% - 32px);
		margin-right: 16px;
	}
</style>

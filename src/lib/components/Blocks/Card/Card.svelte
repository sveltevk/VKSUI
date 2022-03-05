<script lang="ts">
	import classNames from '$lib/lib/classNames';

	export let mode: 'tint' | 'shadow' | 'outline' = 'tint';
</script>

<div {...$$restProps} class={classNames($$props.class, 'Card', `Card--md-${mode}`)}>
	<div class="Card__in">
		<slot />
	</div>
</div>

<style>
	.Card {
		position: relative;
		background: var(--content_tint_background, var(--vkui--color_background_secondary));
		border-radius: var(--vkui--size_card_border_radius--regular);
	}

	.Card__in {
		position: relative;
		z-index: 2;
		border-radius: inherit;
	}

	.Card--md-shadow {
		box-shadow: var(
			--vkui--elevation3,
			0 2px 24px 0 rgba(0, 0, 0, 0.08),
			0 0 2px 0 rgba(0, 0, 0, 0.08)
		);
		background: var(--modal_card_background, var(--vkui--color_background_modal));
	}

	.Card--md-outline {
		background: var(--modal_card_background, var(--vkui--color_background_modal));
	}

	.Card--md-outline::before {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		border: var(--thin-border) solid var(--input_border, var(--vkui--color_image_border_alpha));
		z-index: 1;
		box-sizing: border-box;
		border-radius: inherit;
	}

	/**
 * CMP:
 * CardScroll
 */
	:global(.CardScroll) .Card {
		margin-right: var(--vkui--size_cardgrid_padding--regular);
		flex-shrink: 0;
	}

	:global(.CardScroll) .Card:last-of-type {
		margin-right: 0;
	}

	:global(.CardScroll--s) .Card {
		width: 40%;
	}

	:global(.CardScroll--m) .Card {
		width: 62%;
	}

	:global(.CardScroll--l) .Card {
		width: 100%;
	}

	/**
 * CMP:
 * Group
 * SplitCol
 */
	:global(.Group--card .CardScroll--l) .Card,
	:global(.SplitCol--spaced .CardScroll--l) .Card {
		width: calc(100% - 32px);
		margin-right: 16px;
	}

	:global(.Group--card .CardScroll--l) .Card:last-of-type,
	:global(.SplitCol--spaced .CardScroll--l) .Card:last-of-type {
		margin-right: 0;
	}
</style>

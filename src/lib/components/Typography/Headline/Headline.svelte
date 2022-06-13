<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import classNames from '@sveltevk/vksui/lib/classNames';

	export let Element = 'h4';
	export let level: '1' | '2' = '1';
	export let weight: '1' | '2' | '3' = '3';

	const adaptivity = useAdaptivity();

	$: $$restProps.class = classNames(
		'Headline',
		`Headline--sizeY-${$adaptivity.sizeY}`,
		`Headline--level-${level}`,
		`Headline--weight-${weight}`,
		$$props.class
	);
</script>

<svelte:element this={Element} {...$$restProps}>
	<slot />
</svelte:element>

<style>
	.Headline {
		display: block;
		margin: 0;
	}

	.Headline--level-1 {
		font-size: var(--vkui--font_headline1--font_size--regular);
		line-height: var(--vkui--font_headline1--line_height--regular);
		font-weight: var(--vkui--font_headline1--font_weight--regular);
	}

	.Headline--level-2 {
		font-size: var(--vkui--font_headline2--font_size--regular);
		line-height: var(--vkui--font_headline2--line_height--regular);
		font-weight: var(--vkui--font_headline2--font_weight--regular);
	}

	.Headline--sizeY-compact.Headline--level-1 {
		font-size: var(--vkui--font_headline1--font_size--compact);
		line-height: var(--vkui--font_headline1--line_height--compact);
	}

	.Headline--sizeY-compact.Headline--level-2 {
		font-size: var(--vkui--font_headline2--font_size--compact);
		line-height: var(--vkui--font_headline2--line_height--compact);
	}

	.Headline--weight-1 {
		font-weight: var(--vkui--font_weight_accent1);
	}

	.Headline--weight-2 {
		font-weight: var(--vkui--font_weight_accent2);
	}

	.Headline--weight-3 {
		font-weight: var(--vkui--font_weight_accent3);
	}
</style>

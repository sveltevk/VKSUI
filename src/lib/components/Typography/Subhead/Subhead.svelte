<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import classNames from '@sveltevk/vksui/lib/classNames';

	export let Element = 'h5';
	export let weight: '1' | '2' | '3' = undefined;

	const adaptivity = useAdaptivity();

	$: $$restProps.class = classNames(
		$$props.class,
		'Subhead',
		`Subhead--sizeY-${$adaptivity.sizeY}`,
		`Subhead--w-${weight}`
	);
</script>

<svelte:element this={Element} {...$$restProps}>
	<slot />
</svelte:element>

<style>
	.Subhead {
		margin: 0;
		font-size: var(--vkui--font_subhead--font_size--regular);
		line-height: var(--vkui--font_subhead--line_height--regular);
		font-weight: var(--vkui--font_subhead--font_weight--regular);
	}

	.Subhead--sizeY-compact {
		font-size: var(--vkui--font_subhead--font_size--compact);
		line-height: var(--vkui--font_subhead--line_height--compact);
	}

	.Subhead--w-1 {
		font-weight: var(--vkui--font_weight_accent1);
	}

	.Subhead--w-2 {
		font-weight: var(--vkui--font_weight_accent2);
	}

	.Subhead--w-3 {
		font-weight: var(--vkui--font_weight_accent3);
	}
</style>

<script lang="ts">
	import { useAdaptivity } from '$lib/hooks/useAdaptivity';
	import classNames from '$lib/lib/classNames';

	export let component: string = undefined;
	export let weight: '1' | '2' | '3' = undefined;

	const adaptivity = useAdaptivity();

	$: $$restProps.class = classNames(
		$$props.class,
		'Subhead',
		`Subhead--sizeY-${$adaptivity.sizeY}`,
		`Subhead--w-${weight}`
	);
</script>

{#if component === 'span'}
	<span {...$$restProps}>
		<slot />
	</span>
{:else}
	<h5 {...$$restProps}>
		<slot />
	</h5>
{/if}

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

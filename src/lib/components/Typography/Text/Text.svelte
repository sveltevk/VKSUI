<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID } from '@sveltevk/vksui/lib/platform';

	export let Element = 'span';
	export let weight: 'regular' | 'medium' | 'semibold' = 'regular';

	const platform = usePlatform();

	let textWeight = weight;

	if ($platform === ANDROID && weight === 'semibold') {
		textWeight = 'medium';
	}

	$: $$restProps.class = classNames(
		getClassName('Text', $platform),
		`Text--w-${textWeight}`,
		$$props.class
	);
</script>

<!-- 
@component
Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`
-->

<svelte:element this={Element} {...$$restProps}>
	<slot />
</svelte:element>

<style>
	.Text {
		font-size: 15px;
		line-height: 20px;
	}

	.Text--w-regular {
		font-weight: 400;
	}

	.Text--w-medium {
		font-weight: 500;
	}

	.Text--w-semibold {
		font-weight: 600;
	}
</style>

<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID } from '@sveltevk/vksui/lib/platform';

	export let Element = 'h3';
	export let weight: 'regular' | 'medium' | 'semibold';

	const platform = usePlatform();

	let headlineWeight = weight;

	if ($platform === ANDROID && weight === 'semibold') {
		headlineWeight = 'medium';
	}

	$: $$restProps.class = classNames(
		getClassName('Headline', $platform),
		`Headline--w-${headlineWeight}`,
		$$props.class
	);
</script>

<!-- 
@component
Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<Div>
  <Headline weight="regular" style="margin-bottom: 16px">Headline regular</Headline>
  <Headline weight="medium" style="margin-bottom: 16px">Headline medium</Headline>
  <Headline weight="semibold" style="margin-bottom: 16px">Headline semibold</Headline>
</Div>
```
-->

<svelte:element this={Element} {...$$restProps}>
	<slot />
</svelte:element>

<style>
	.Headline {
		margin: 0;
		font-size: 16px;
		line-height: 20px;
	}

	.Headline--w-regular {
		font-weight: 400;
	}

	.Headline--w-medium {
		font-weight: 500;
	}

	.Headline--w-semibold {
		font-weight: 600;
	}
</style>

<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID } from '@sveltevk/vksui/lib/platform';

	export let component = 'span';
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

```jsx
<Div>
  <Text weight="regular" style="margin-bottom: 16px">Text regular</Text>
  <Text weight="medium" style="margin-bottom: 16px">Text medium</Text>
  <Text weight="semibold" style="margin-bottom: 16px">Text semibold</Text>
</Div>
```
-->
{#if component === 'span'}
	<span {...$$restProps}>
		<slot />
	</span>
{:else}
	<div {...$$restProps}>
		<slot />
	</div>
{/if}

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

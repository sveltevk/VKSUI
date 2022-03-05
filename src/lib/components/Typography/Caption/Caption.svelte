<script lang="ts">
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import { ANDROID } from '$lib/lib/platform';

	export let component: string = undefined;
	export let weight: 'regular' | 'medium' | 'semibold' | 'bold';
	export let level: '1' | '2' | '3' | '4';
	export let caps: boolean = false;

	const platform = usePlatform();

	let captionWeight = weight;

	if ($platform === ANDROID && weight === 'semibold') {
		captionWeight = 'medium';
	}

	$: $$restProps.class = classNames(
		getClassName('Caption', $platform),
		`Caption--w-${captionWeight}`,
		`Caption--l-${level}`,
		{ 'Caption--caps': caps },
		$$props.class
	);
</script>

<!-- 
@component
Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<Div>
  <Caption level="1" weight="regular" style="margin-bottom: 16px">Caption 1 regular</Caption>
  <Caption level="1" weight="medium" style="margin-bottom: 16px">Caption 1 medium</Caption>
  <Caption level="1" weight="semibold" style="margin-bottom: 16px">Caption 1 semibold</Caption>
  <Caption level="1" weight="semibold" caps style="margin-bottom: 16px">Caption CAPS 1 semibold</Caption>
  <Caption level="2" weight="regular" style="margin-bottom: 16px">Caption 2 regular</Caption>
  <Caption level="2" weight="medium" style="margin-bottom: 16px">Caption 2 medium</Caption>
  <Caption level="2" weight="semibold" style="margin-bottom: 16px">Caption 2 semibold</Caption>
  <Caption level="2" weight="semibold" caps style="margin-bottom: 16px">Caption CAPS 2 semibold</Caption>
  <Caption level="3" weight="regular" style="margin-bottom: 16px">Caption 3 regular</Caption>
  <Caption level="3" weight="semibold" caps style="margin-bottom: 16px">Caption CAPS 3 semibold</Caption>
  <Caption level="4" weight="regular" style="margin-bottom: 16px">Caption 4 regular</Caption>
  <Caption level="4" weight="bold" caps>Caption CAPS 4 bold</Caption>
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
	.Caption--caps {
		text-transform: uppercase;
	}

	.Caption--l-1 {
		font-size: 13px;
		line-height: 16px;
	}

	.Caption--l-2 {
		font-size: 12px;
		line-height: 14px;
	}

	.Caption--l-3 {
		font-size: 11px;
		line-height: 14px;
	}

	.Caption--l-4 {
		font-size: 9px;
		line-height: 12px;
	}

	.Caption--w-regular {
		font-weight: 400;
	}

	.Caption--w-medium {
		font-weight: 500;
	}

	.Caption--w-semibold {
		font-weight: 600;
	}

	.Caption--w-bold {
		font-weight: 700;
	}
</style>

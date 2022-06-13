<script lang="ts">
	import classNames from '@sveltevk/vksui/lib/classNames';

	export let level: '1' | '2' | '3' = '1';
	export let Element: string = 'h' + level;
	export let weight: '1' | '2' | '3' = undefined;

	$: $$restProps.class = classNames($$props.class, 'Title', `Title--l-${level}`, {
		[`Title--w-${weight}`]: !!weight
	});
</script>

<!-- 
@component
Семейство заголовков.

```jsx
<div style:padding="20">
  <Title level="1" style={{ marginBottom: 16 }}>
    Title 1
  </Title>
  <Title level="2" style={{ marginBottom: 16 }}>
    Title 2
  </Title>
  <Title level="3">Title 3</Title>
</div>

<div style:padding="20">
  <Title level="3" weight="1" style={{ marginBottom: 16 }}>
    Title 3 weight 1
  </Title>
  <Title level="3" weight="2" style={{ marginBottom: 16 }}>
    Title 3 weight 2
  </Title>
  <Title level="3" weight="3">
    Title 3 weight 3
  </Title>
</div>
```
-->

<svelte:element this={Element} {...$$restProps}>
	<slot />
</svelte:element>

<style>
	.Title {
		display: block;
		margin: 0;
	}

	.Title--l-1 {
		font-size: var(--vkui--font_title1--font_size--regular);
		line-height: var(--vkui--font_title1--line_height--regular);
		font-weight: var(--vkui--font_title1--font_weight--regular);
	}

	.Title--l-2 {
		font-size: var(--vkui--font_title2--font_size--regular);
		line-height: var(--vkui--font_title2--line_height--regular);
		font-weight: var(--vkui--font_title2--font_weight--regular);
	}

	.Title--l-3 {
		font-size: var(--vkui--font_title3--font_size--regular);
		line-height: var(--vkui--font_title3--line_height--regular);
		font-weight: var(--vkui--font_title3--font_weight--regular);
	}

	.Title--w-1 {
		font-weight: var(--vkui--font_weight_accent1);
	}

	.Title--w-2 {
		font-weight: var(--vkui--font_weight_accent2);
	}

	.Title--w-3 {
		font-weight: var(--vkui--font_weight_accent3);
	}
</style>

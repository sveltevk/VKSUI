# Headline

```svelte mini
<script>
	import { Headline } from '@sveltevk/vksui';
</script>

<div style:padding="20px">
	<Headline level="1" style="margin-bottom:16px">Headline 1</Headline>
	<Headline level="2">Headline 2</Headline>
</div>
```

## Кастомизация

Есть возможность переопределить жирность.

```svelte mini
<div style:padding="20px">
	<Headline level="2" weight="1" style="margin-bottom:16px">Headline 2 weight 1</Headline>
	<Headline level="2" weight="2" style="margin-bottom:16px">Headline 2 weight 2</Headline>
	<Headline level="2" weight="3">Headline 2 weight 3</Headline>
</div>
```

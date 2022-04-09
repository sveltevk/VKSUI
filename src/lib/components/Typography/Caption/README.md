# Caption

## Пример реализации

```svelte mini
<script>
	import { Caption } from '@sveltevk/vksui';
</script>

<div style:padding="20px">
	<Caption level="1" style="margin-bottom:16px">Caption 1</Caption>
	<Caption level="2" style="margin-bottom:16px">Caption 2</Caption>
	<Caption level="3">Caption 3</Caption>
</div>
```

## Кастомизация

Есть возможность переопределить жирность.

## Пример реализации

```svelte mini
<div style:padding="20px">
	<Caption level="1" weight="1" style="margin-bottom:16px">Caption 1 weight 1</Caption>
	<Caption level="1" weight="2" style="margin-bottom:16px">Caption 1 weight 2</Caption>
	<Caption level="1" weight="3">Caption 1 weight 3</Caption>
</div>
```

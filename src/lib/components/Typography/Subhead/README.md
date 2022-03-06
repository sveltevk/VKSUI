# Subhead

Семейство заголовков.

## Пример реализации

```svelte mini
<script>
  import { Subhead } from '@sveltevk/vksui';
</script>

<div style:padding="20px">
  <Subhead>Subhead</Subhead>
```

## Кастомизация

Есть возможность переопределить жирность.

## Пример реализации

```svelte mini
<div style:padding="20px">
	<Subhead weight="1" style="margin-bottom:16px">Subhead 3 weight 1</Subhead>
	<Subhead weight="2" style="margin-bottom:16px">Subhead 3 weight 2</Subhead>
	<Subhead weight="3">Subhead 3 weight 3</Subhead>
</div>
```

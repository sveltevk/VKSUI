# Title

Семейство заголовков.

## Пример реализации

```svelte mini
<script>
	import { Title } from '@sveltevk/vksui';
</script>

<div style:padding="20px">
	<Title level="1" style="margin-bottom:16px">Title 1</Title>
	<Title level="2" style="margin-bottom:16px">Title 2</Title>
	<Title level="3">Title 3</Title>
</div>
```

## Кастомизация

Есть возможность переопределить жирность.

## Пример реализации

```svelte mini
<div style:padding="20px">
	<Title level="3" weight="1" style="margin-bottom:16px">Title 3 weight 1</Title>
	<Title level="3" weight="2" style="margin-bottom:16px">Title 3 weight 2</Title>
	<Title level="3" weight="3">Title 3 weight 3</Title>
</div>
```

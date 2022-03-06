# Caption

Упрощения в Android-версии (происходят автоматически):

- `semibold` превращается в `medium`

## Пример реализации

```svelte mini
<script>
	import { Caption } from '@sveltevk/vksui';
</script>

<div style:padding="20px">
	<Caption level="1" weight="regular" style="margin-bottom:16px">Caption 1 regular</Caption>
	<Caption level="1" weight="medium" style="margin-bottom:16px">Caption 1 medium</Caption>
	<Caption level="1" weight="semibold" style="margin-bottom:16px">Caption 1 semibold</Caption>
	<Caption level="1" weight="semibold" caps style="margin-bottom:16px">
		Caption CAPS 1 semibold
	</Caption>
	<Caption level="2" weight="regular" style="margin-bottom:16px">Caption 2 regular</Caption>
	<Caption level="2" weight="medium" style="margin-bottom:16px">Caption 2 medium</Caption>
	<Caption level="2" weight="semibold" style="margin-bottom:16px">Caption 2 semibold</Caption>
	<Caption level="2" weight="semibold" caps style="margin-bottom:16px">
		Caption CAPS 2 semibold
	</Caption>
	<Caption level="3" weight="regular" style="margin-bottom:16px">Caption 3 regular</Caption>
	<Caption level="3" weight="semibold" caps style="margin-bottom:16px">
		Caption CAPS 3 semibold
	</Caption>
	<Caption level="4" weight="regular" style="margin-bottom:16px">Caption 4 regular</Caption>
	<Caption level="4" weight="bold" caps>Caption CAPS 4 bold</Caption>
</div>
```

```

```

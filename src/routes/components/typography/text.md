# Text

Упрощения в Android-версии (происходят автоматически):

- `semibold` превращается в `medium`

## Пример реализации

```svelte mini
<script>
	import { Text } from '@sveltevk/vksui';
</script>

<div style:padding="20px">
	<Text weight="regular" style="margin-bottom:16px">Text regular</Text>
	<Text weight="medium" style="margin-bottom:16px">Text medium</Text>
	<Text weight="semibold">Text semibold</Text>
</div>
```

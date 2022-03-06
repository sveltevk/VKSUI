# Headline

Упрощения в Android-версии (происходят автоматически):

- `semibold` превращается в `medium`

## Пример реализации

```svelte mini
<script>
	import { Headline } from '@sveltevk/vksui';
</script>

<div style:padding="20px">
	<Headline weight="regular" style="margin-bottom:16px">Headline regular</Headline>
	<Headline weight="medium" style="margin-bottom:16px">Headline medium</Headline>
	<Headline weight="semibold">Headline semibold</Headline>
</div>
```

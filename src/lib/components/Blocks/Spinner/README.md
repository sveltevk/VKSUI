# Spinner

Используется для визуализации выполнения асинхронного процесса (например ajax запроса). Если нужно на момент загрузки заблокировать интерфейс, то можно использовать надстройку над Spinner – ScreenSpinner.

```svelte mini
<script>
	import { Spinner } from '@sveltevk/vksui';
</script>

<div class="Spinners">
	<Spinner size="large" style="margin: 20px 0" />
	<Spinner size="medium" style="margin: 20px 0" />
	<Spinner size="regular" style="margin: 20px 0" />
	<Spinner size="small" style="margin: 20px 0" />
</div>

<style>
	.Spinners {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
```

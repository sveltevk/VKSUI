# PanelHeaderBack

Этот компонент используется для показа кнопки назад в панелях в рамках одного `View`. Внутри инкапсулирована логика показа нужной иконки для платформы.

```svelte frame mini
<script>
	import { PanelHeader, PanelHeaderBack } from '@sveltevk/vksui';

	const onBackClick = () => console.log('Back');
</script>

<PanelHeader>
	<PanelHeaderBack slot="left" on:click={onBackClick} />
	Заголовок панели
</PanelHeader>
```

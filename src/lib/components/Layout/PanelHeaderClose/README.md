# PanelHeaderClose

Этот компонент используется для показа кнопки "Отмена" в модальных окнах для закрытия текущего `View` в рамках `Root`. На iOS будет показан текст, передаваемый как `text`, на Android - `<Icon28CancelOutline />`:

```svelte frame mini
<script>
	import { PanelHeader, PanelHeaderClose } from '@sveltevk/vksui';

	const onCloseClick = () => console.log('Close');
</script>

<PanelHeader>
	<PanelHeaderClose slot="left" on:click={onCloseClick} />
	Заголовок модального окна
</PanelHeader>
```

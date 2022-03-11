# PanelHeaderSubmit

Этот компонент используется для показа кнопки "Отмена" в модальных окнах для закрытия текущего `View` в рамках `Root`. На iOS будет показан текст, передаваемый как `text`, на Android - `<Icon28DoneOutline />`:

```svelte frame mini
<script>
	import { PanelHeader, PanelHeaderSubmit } from '@sveltevk/vksui';

	const onSubmit = () => console.log('Submit');
</script>

<PanelHeader>
	<PanelHeaderSubmit slot="left" on:click={onSubmit} text="Готово" />
	Заголовок модального окна
</PanelHeader>
```

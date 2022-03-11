# PanelHeaderEdit

Компонент для отрисовки кнопки Редактировать в шапке. Принимает свойство `isActive`, которое определяет состояние кнопки (включен ли режим редактирования).

```svelte frame mini
<script>
	import { PanelHeader, PanelHeaderEdit } from '@sveltevk/vksui';

	let isActive = false;
</script>

<PanelHeader>
	<PanelHeaderEdit slot="left" {isActive} on:click={() => (isActive = !isActive)} />
	Заголовок окна
</PanelHeader>
```

```

```

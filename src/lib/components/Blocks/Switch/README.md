# Switch

Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

## Пример

```svelte scroll
<script>
	import { Group, SimpleCell, Switch } from '@sveltevk/vksui';
</script>

<Group>
	<SimpleCell role={null} disabled>
		<Switch slot="after" aria-label="Комментарии к записям" />
		Комментарии к записям
	</SimpleCell>
	<SimpleCell role={null} disabled>
		<Switch slot="after" defaultChecked aria-label="Ссылки" />
		Ссылки
	</SimpleCell>
	<SimpleCell role={null} disabled>
		<Switch slot="after" disabled aria-label="Фотоальбомы" />
		Фотоальбомы
	</SimpleCell>
</Group>
```

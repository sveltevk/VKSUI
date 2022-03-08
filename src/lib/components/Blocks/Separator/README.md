# Separator

> **Важно**
>
> Компонент устарел. Предпочтительнее использовать компонент `Spacing`

Используется для разделения какого-либо контента. Отступы справа и слева контролируются свойством `wide`.

## Пример

```svelte scroll
<script>
	import { Group, SimpleCell, Header, Separator } from '@sveltevk/vksui';
	import Icon28Notifications from '@sveltevk/icons/dist/28/notifications';
	import Icon28BlockOutline from '@sveltevk/icons/dist/28/block_outline';
	import Icon28UserOutline from '@sveltevk/icons/dist/28/user_outline';
	import Icon28SlidersOutline from '@sveltevk/icons/dist/28/sliders_outline';
</script>

<Group mode="plain">
	<Header mode="secondary">Сепаратор</Header>
	<SimpleCell>
		<Icon28Notifications slot="before" />
		Номер телефона
	</SimpleCell>
	<SimpleCell>
		<Icon28BlockOutline slot="before" />
		Не беспокоить
	</SimpleCell>

	<Separator style="margin:12px 0" />

	<SimpleCell>
		<Icon28UserOutline slot="before" />
		Учётная запись
	</SimpleCell>
	<SimpleCell>
		<Icon28SlidersOutline slot="before" />
		Основные
	</SimpleCell>
</Group>
```

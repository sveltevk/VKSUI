# Spacing

Компонент для разделения контента

Для большинства случаев будет достаточно дефолтного поведения компонента

```svelte
<!-- пустой отступ высотой 8px -->
<Spacing />

<!-- пустой отступ высотой 16px -->
<Spacing size={16} />

<!-- сепаратор с отступами 8px сверху и снизу -->
<Spacing separator size={16} />
```

Для более гибкой настройки положения линии и отступов, можно комбинировать два отступа вместе

Например - нужен сепаратор с отступом сверху 12px и снизу 20px:

```svelte
<Spacing separator="bottom" size={12} />
<Spacing size={20} />
```

## Пример

```svelte scroll
<script>
	import { Group, Header, SimpleCell, Spacing } from '@sveltevk/vksui';
	import Icon28Notifications from '@sveltevk/icons/dist/28/notifications';
	import Icon28BlockOutline from '@sveltevk/icons/dist/28/block_outline';
	import Icon28UserOutline from '@sveltevk/icons/dist/28/user_outline';
	import Icon28SlidersOutline from '@sveltevk/icons/dist/28/sliders_outline';
</script>

<Group>
	<Header mode="secondary">Default Spacing (empty, 8px)</Header>
	<SimpleCell><Icon28Notifications slot="before" />Уведомления</SimpleCell>
	<SimpleCell><Icon28BlockOutline slot="before" />Не беспокоить</SimpleCell>

	<Spacing />

	<SimpleCell><Icon28UserOutline slot="before" />Учётная запись</SimpleCell>
	<SimpleCell><Icon28SlidersOutline slot="before" />Основные</SimpleCell>
</Group>

<Group>
	<Header mode="secondary">Spacing 16px</Header>
	<SimpleCell><Icon28Notifications slot="before" />Уведомления</SimpleCell>
	<SimpleCell><Icon28BlockOutline slot="before" />Не беспокоить</SimpleCell>

	<Spacing size={16} />

	<SimpleCell><Icon28UserOutline slot="before" />Учётная запись</SimpleCell>
	<SimpleCell><Icon28SlidersOutline slot="before" />Основные</SimpleCell>
</Group>

<Group>
	<Header mode="secondary">Spacing with centered separator 16px</Header>
	<SimpleCell><Icon28Notifications slot="before" />Уведомления</SimpleCell>
	<SimpleCell><Icon28BlockOutline slot="before" />Не беспокоить</SimpleCell>

	<Spacing separator size={16} />

	<SimpleCell><Icon28UserOutline slot="before" />Учётная запись</SimpleCell>
	<SimpleCell><Icon28SlidersOutline slot="before" />Основные</SimpleCell>
</Group>

<Group>
	<Header mode="secondary">Combined Spacings with bottom separator</Header>
	<SimpleCell><Icon28Notifications slot="before" />Уведомления</SimpleCell>
	<SimpleCell><Icon28BlockOutline slot="before" />Не беспокоить</SimpleCell>

	<Spacing separator="bottom" />
	<Spacing />

	<SimpleCell><Icon28UserOutline slot="before" />Учётная запись</SimpleCell>
	<SimpleCell><Icon28SlidersOutline slot="before" />Основные</SimpleCell>
</Group>

<Group>
	<Header mode="secondary">Combined Spacings with bottom separator and custom size</Header>
	<SimpleCell><Icon28Notifications slot="before" />Уведомления</SimpleCell>
	<SimpleCell><Icon28BlockOutline slot="before" />Не беспокоить</SimpleCell>

	<Spacing separator="bottom" size={12} />
	<Spacing size={20} />

	<SimpleCell><Icon28UserOutline slot="before" />Учётная запись</SimpleCell>
	<SimpleCell><Icon28SlidersOutline slot="before" />Основные</SimpleCell>
</Group>
```

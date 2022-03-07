# CellButton

```svelte scroll
<script>
	import { Group, Header, Avatar, CellButton } from '@sveltevk/vksui';
	import Icon24Add from '@sveltevk/icons/dist/24/add';
	import Icon28AddOutline from '@sveltevk/icons/dist/28/add_outline';
	import Icon28DeleteOutline from '@sveltevk/icons/dist/28/delete_outline';
</script>

<Group>
	<Header mode="secondary">Базовый пример</Header>
	<CellButton>Добавить новую школу</CellButton>
	<CellButton mode="danger">Удалить беседу</CellButton>
</Group>
<Group>
	<Header mode="secondary">Иконки</Header>
	<CellButton>
		<Icon28AddOutline slot="before" />
		Добавить родственника
	</CellButton>
	<CellButton mode="danger">
		<Icon28DeleteOutline slot="before" />
		Удалить беседу
	</CellButton>
</Group>
<Group>
	<Header mode="secondary">Аватарки</Header>
	<CellButton>
		<Avatar slot="before" shadow={false} size={40}>
			<Icon24Add />
		</Avatar>
		Добавить участников
	</CellButton>
	<CellButton>
		<Avatar slot="before" shadow={false} size={48}>
			<Icon28AddOutline />
		</Avatar>
		Создать беседу
	</CellButton>
	<CellButton>
		<Avatar slot="before" shadow={false} size={72} mode="image">
			<Icon28AddOutline />
		</Avatar>
		Создать плейлист
	</CellButton>
</Group>
<Group>
	<Header mode="secondary">Центрирование</Header>
	<CellButton centered>
		<Icon24Add slot="before" />
		Создать беседу
	</CellButton>
</Group>
```

# SimpleCell

## Пример

```svelte scroll
<script>
	import { Group, Header, SimpleCell, Switch, Avatar, IconButton } from '@sveltevk/vksui';
	import { getAvatarUrl } from '$site/data/utils';
	import Icon28UserOutline from '@sveltevk/icons/dist/28/user_outline';
	import Icon28PaletteOutline from '@sveltevk/icons/dist/28/palette_outline';
	import Icon28SettingsOutline from '@sveltevk/icons/dist/28/settings_outline';
	import Icon28MessageOutline from '@sveltevk/icons/dist/28/message_outline';
	import Icon12Verified from '@sveltevk/icons/dist/12/verified';
</script>

<Group>
	<Header mode="secondary">Меню</Header>
	<SimpleCell expandable>
		<Icon28UserOutline slot="before" />
		Аккаунт
	</SimpleCell>
	<SimpleCell expandable>
		<Icon28PaletteOutline slot="before" />
		Внешний вид
	</SimpleCell>
	<SimpleCell expandable>
		<Icon28SettingsOutline slot="before" />
		Основные
	</SimpleCell>
</Group>
<Group>
	<Header mode="secondary">Настройки</Header>
	<SimpleCell disabled>
		<Switch slot="after" checked />
		Сжимать фотографии
	</SimpleCell>
	<SimpleCell disabled>
		<Switch slot="after" />
		Сжимать видео
	</SimpleCell>
</Group>
<Group>
	<Header mode="secondary">Настройки системы</Header>
	<SimpleCell expandable indicator="Русский">Язык</SimpleCell>
	<SimpleCell expandable indicator="При использовании">Геолокация</SimpleCell>
</Group>
<Group>
	<Header mode="secondary">Список диалогов</Header>
	<SimpleCell>
		<Avatar slot="before" size={40} src={getAvatarUrl('user_xyz')} />
		<IconButton slot="after">
			<Icon28MessageOutline />
		</IconButton>
		Игорь Фёдоров
	</SimpleCell>
	<SimpleCell>
		<Avatar slot="before" size={40} src={getAvatarUrl('user_arthurstam')} />
		<IconButton slot="after">
			<Icon28MessageOutline />
		</IconButton>
		Artur Stambultsian
	</SimpleCell>
</Group>
<Group>
	<Header mode="secondary">Список друзей</Header>
	<SimpleCell description="Команда ВКонтакте">
		<Avatar slot="before" size={48} src={getAvatarUrl('user_xyz')} />
		<Icon12Verified slot="badge" />
		<IconButton slot="after">
			<Icon28MessageOutline />
		</IconButton>
		Игорь Фёдоров
	</SimpleCell>
	<SimpleCell description="Бот">
		<Avatar slot="before" size={48} src={getAvatarUrl('user_arthurstam')} />
		<IconButton slot="after">
			<Icon28MessageOutline />
		</IconButton>
		Artur Stambultsian
	</SimpleCell>
</Group>
```

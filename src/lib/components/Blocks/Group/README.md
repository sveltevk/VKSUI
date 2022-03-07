# Group

Группа – базовый компонент для группировки контента по смыслу.

## Пример

```svelte scroll
<script>
	import { Group, SimpleCell, Header, IconButton, Avatar, CellButton } from '@sveltevk/vksui';
	import Icon28PhoneOutline from '@sveltevk/icons/dist/28/phone_outline';
	import Icon28MailOutline from '@sveltevk/icons/dist/28/mail_outline';
	import Icon28KeyOutline from '@sveltevk/icons/dist/28/key_outline';
	import Icon28CheckShieldDeviceOutline from '@sveltevk/icons/dist/28/check_shield_device_outline';
	import Icon28DevicesOutline from '@sveltevk/icons/dist/28/devices_outline';
	import Icon16MoreVertical from '@sveltevk/icons/dist/16/more_vertical';
</script>

<Group>
	<Group mode="plain">
		<SimpleCell indicator="+7 ••• •• •• 96">
			<Icon28PhoneOutline slot="before" />
			Номер телефона
		</SimpleCell>
		<SimpleCell indicator="g•••@gmail.com">
			<Icon28MailOutline slot="before" />
			Email
		</SimpleCell>
	</Group>
	<Group mode="plain">
		<SimpleCell indicator="Обновлён 3 года назад">
			<Icon28KeyOutline slot="before" />
			Пароль
		</SimpleCell>
		<SimpleCell indicator="Вкл.">
			<Icon28CheckShieldDeviceOutline slot="before" />
			Подтверждение входа
		</SimpleCell>
		<SimpleCell indicator="2">
			<Icon28DevicesOutline slot="before" />
			Привязанные устройства
		</SimpleCell>
	</Group>
</Group>

<Group>
	<Header slot="header">Последняя активность</Header>
	<SimpleCell description="Санкт-Петербург, Россия">
		<IconButton slot="after" aria-label="Подробнее">
			<Icon16MoreVertical />
		</IconButton>
		<Avatar slot="before" size={32} mode="app" />
		VK · Приложение для iPhone
	</SimpleCell>
	<SimpleCell description="Санкт-Петербург, Россия">
		<IconButton slot="after" aria-label="Подробнее">
			<Icon16MoreVertical />
		</IconButton>
		<Avatar slot="before" size={32} mode="app" />
		VK · Браузер Chrome для macOS
	</SimpleCell>
	<CellButton>Показать историю активности</CellButton>
	<CellButton mode="danger">Завершить все остальные сеансы</CellButton>
</Group>

<Group
	description="Для использования в мини-приложениях, Delivery Cub, VK Taxi и других сервисах ВКонтакте. Эти адреса видны только Вам."
>
	<Header slot="header">Адреса</Header>
	<CellButton>Добавить домашний адрес</CellButton>
	<CellButton>Добавить рабочий адрес</CellButton>
</Group>
```

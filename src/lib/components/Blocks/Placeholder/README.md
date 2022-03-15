# Placeholder

`Placeholder` используется для каких-либо заглушек: например, в случае отсутствия элементов в списке или ошибки.

- В качестве иконки желательно использовать аутлайновые иконки размера 56;
- В качестве действия — большую кнопку с уровнем `primary` или `tertiary`.

Если плейсхолдер используется со свойством `stretched` (показывается во всю высоту панели), то на экране не должно быть ничего другого.

```svelte scroll
<script>
	import { Group, Placeholder, Button, Separator } from '@sveltevk/vksui';
	import Icon56UsersOutline from '@sveltevk/icons/dist/56/users_outline';
	import Icon56MentionOutline from '@sveltevk/icons/dist/56/mention_outline';
</script>

<Group>
	<Placeholder header="Уведомления от сообществ">
		<Icon56UsersOutline slot="icon" />
		<Button slot="action" size="m">Подключить сообщества</Button>
		Подключите сообщества, от которых Вы хотите получать уведомления
	</Placeholder>
	<Separator />
	<Placeholder>
		<Icon56MentionOutline slot="icon" />
		Введите адрес страницы в поле поиска
	</Placeholder>
</Group>
```

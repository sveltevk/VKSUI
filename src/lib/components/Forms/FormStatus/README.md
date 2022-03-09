# FormStatus

Компонент используется для отображения статуса формы. Например, когда в форме допущена ошибка, и нет возможности указать на конкретное поле. Заголовок и текст опциональны.

```svelte scroll
<script>
	import { Input, FormItem, FormStatus, Group } from '@sveltevk/vksui';
</script>

<Group>
	<FormItem>
		<FormStatus header="Некорректный мобильный номер" mode="error">
			Необходимо корректно ввести номер в международном формате
		</FormStatus>
	</FormItem>
	<FormItem top="Мобильный телефон">
		<Input value="+7 12 344 15 48" />
	</FormItem>
	<FormItem top="Код подтверждения">
		<Input />
	</FormItem>
</Group>
```

# Checkbox

```svelte scroll
<script>
	import { Group, FormItem, Checkbox } from '@sveltevk/vksui';
</script>

<Group>
	<FormItem>
		<Checkbox checked>Я участвую в сборе</Checkbox>
		<Checkbox description="Все пользователи получат уведомление">Закрепить сообщение</Checkbox>
		<Checkbox checked disabled>Автоматически зачислять на карту</Checkbox>
	</FormItem>
</Group>
```

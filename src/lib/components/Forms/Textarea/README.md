# Textarea

Надстройка над `<textarea />`. Компонент принимает все валидные для этого элемента свойства.

## Пример

```svelte scroll
<script>
	import { Group, FormItem, Textarea } from '@sveltevk/vksui';

	const text = `Музыка\nСпорт\nФотография\nПлавание\nПрограммирование`;
</script>

<Group>
	<FormItem top="Любимая музыка">
		<Textarea placeholder="Группы, исполнители, продюсеры" />
	</FormItem>
	<FormItem top="Увлечения">
		<Textarea cols={4} placeholder="Музыка, спорт" value={text} />
	</FormItem>
	<FormItem top="Прикидываемся Input">
		<Textarea rows={1} placeholder="Once upon a time" />
	</FormItem>
</Group>
```

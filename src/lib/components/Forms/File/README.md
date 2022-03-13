# File

Надстройка над `<input type="file" />`. Компонент принимает все валидные для этого элемента свойства. `File` под капотом использует `Button`. То есть все свойства, применимые к `Button`, применимы и к `File`.

## Пример

```svelte scroll
<script>
	import { Group, FormItem, File } from '@sveltevk/vksui';
	import Icon24Camera from '@sveltevk/icons/dist/24/camera';
	import Icon24Document from '@sveltevk/icons/dist/24/document';
</script>

<Group>
	<FormItem top="Загрузите ваше фото">
		<File controlSize="m">
			<Icon24Camera slot="before" />
			Открыть галерею
		</File>
	</FormItem>
	<FormItem top="Загрузите документы">
		<File controlSize="l" mode="secondary">
			<Icon24Document slot="before" />
		</File>
	</FormItem>
</Group>
```

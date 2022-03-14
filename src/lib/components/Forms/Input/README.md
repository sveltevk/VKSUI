# Input

Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

## Пример

```svelte scroll
<script>
	import { Group, FormItem, Input, IconButton } from '@sveltevk/vksui';
	import Icon20User from '@sveltevk/icons/dist/20/user';
	import Icon16Clear from '@sveltevk/icons/dist/16/clear';

	let value = 'Кузнецов';
</script>

<Group>
	<FormItem top="Фамилия">
		<Input type="text" value="Петров" />
	</FormItem>
	<FormItem>
		<Input type="text" value="Иванов" align="center" />
	</FormItem>
	<FormItem>
		<Input type="text" value="Сидоров" align="right" />
	</FormItem>
	<FormItem top="С иконкой">
		<Input type="text" value="Смирнов"><Icon20User slot="after" aria-hidden="true" /></Input>
	</FormItem>
	<FormItem top="С IconButton">
		<Input type="text" bind:value>
			<IconButton
				slot="after"
				hoverMode="opacity"
				aria-label="Очистить поле"
				on:click={() => (value = '')}
			>
				<Icon16Clear />
			</IconButton>
		</Input>
	</FormItem>
</Group>
```

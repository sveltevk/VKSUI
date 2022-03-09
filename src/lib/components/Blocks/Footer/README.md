# Footer

Подвал для списков.

## Пример

```svelte scroll
<script>
	import { Group, List, SimpleCell, Avatar, Footer } from '@sveltevk/vksui';
</script>

<Group>
	<List>
		<SimpleCell description="Веб-сайт">
			<Avatar slot="before" />
			Команда ВКонтакте
		</SimpleCell>
		<SimpleCell description="Музыкант">
			<Avatar slot="before" />
			Robbie Williams
		</SimpleCell>
		<SimpleCell description="Издательский дом">
			<Avatar slot="before" />
			ПостНаука
		</SimpleCell>
	</List>
</Group>
<Footer>3 сообщества</Footer>
```

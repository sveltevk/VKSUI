# Card

```svelte scroll
<script>
	import { Group, Header, CardGrid, Card } from '@sveltevk/vksui';
</script>

<Group>
	<Group mode="plain">
		<Header mode="secondary">Дефолтный стиль</Header>
		<CardGrid size="l">
			<Card>
				<div style:height="96px" />
			</Card>
		</CardGrid>
	</Group>
	<Group mode="plain">
		<Header mode="secondary">С внутренней обводкой</Header>
		<CardGrid size="l">
			<Card mode="outline">
				<div style:height="96px" />
			</Card>
		</CardGrid>
	</Group>
	<Group mode="plain">
		<Header mode="secondary">С внешней тенью</Header>
		<CardGrid size="l">
			<Card mode="shadow">
				<div style:height="96px" />
			</Card>
		</CardGrid>
	</Group>
</Group>
```

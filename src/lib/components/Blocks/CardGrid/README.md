# CardGrid

Сетка для [Card](Card). Согласно дизайну, высота Card должна масштабироваться относительно её ширины. В примерах это достигается с помощью процентного `padding-bottom`. Пропорции следующие:

- `size="s"`: высота равна 92% ширины;
- `size="m"`: высота равна 62% ширины;
- `size="l"`: высота равна 30% ширины.

```svelte scroll
<script>
	import { Group, Separator, CardGrid, Card } from '@sveltevk/vksui';
</script>

<Group description="Внутри Group">
	<CardGrid size="s">
		<Card>
			<div style:padding-bottom="92%" />
		</Card>
		<Card>
			<div style:padding-bottom="92%" />
		</Card>
		<Card>
			<div style:padding-bottom="92%" />
		</Card>
	</CardGrid>
</Group>
<CardGrid size="m">
	<Card>
		<div style:padding-bottom="62%" />
	</Card>
	<Card>
		<div style:padding-bottom="62%" />
	</Card>
</CardGrid>
<CardGrid size="l">
	<Card>
		<div style:padding-bottom="30%" />
	</Card>
</CardGrid>
<Separator expanded />
```

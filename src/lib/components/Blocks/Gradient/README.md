# Gradient

## Пример

```svelte scroll
<script>
	import {
		Gradient,
		Group,
		Header,
		SimpleCell,
		Avatar,
		Title,
		Text,
		Button,
		CellButton
	} from '@sveltevk/vksui';
	import Icon28AddOutline from '@sveltevk/icons/dist/28/add_outline';
	import Icon28SchoolOutline from '@sveltevk/icons/dist/28/school_outline';
</script>

<Group>
	<Gradient class="UserGradient">
		<Avatar size={96} />
		<Title style="margin-bottom: 8px; margin-top: 20px" level="2" weight="2">Алексей Мазелюк</Title>
		<Text style="margin-bottom: 24px; color: var(--text_secondary)">Учащийся</Text>
		<Button size="m" mode="secondary">Редактировать</Button>
	</Gradient>
	<Group mode="plain">
		<Header>Учебные заведения и классы</Header>
		<SimpleCell description="Екатеринбург">
			<Icon28SchoolOutline slot="before" />
			Школа №180
		</SimpleCell>
		<CellButton>
			<Icon28AddOutline slot="before" />
			Добавить учебное заведение
		</CellButton>
	</Group>
</Group>

<style>
	.UserGradient {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 32px;
	}
</style>
```

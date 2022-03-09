# Search

Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

## Пример

```svelte scroll
<script>
	import { Group, Footer, Search, SimpleCell } from '@sveltevk/vksui';

	let search = '';

	const themes = [
		{ id: 3201, name: 'Аренда автомобилей' },
		{ id: 3273, name: 'Автотовары' },
		{ id: 3205, name: 'Автосалон' },
		{ id: 3282, name: 'Автосервис' },
		{ id: 3283, name: 'Услуги для автовладельцев' },
		{ id: 3284, name: 'Велосипеды' },
		{ id: 3285, name: 'Мотоциклы и другая мототехника' },
		{ id: 3286, name: 'Водный транспорт' },
		{ id: 3287, name: 'Автопроизводитель' },
		{ id: 3288, name: 'Автомойка' },
		{ id: 3117, name: 'Автошкола' },
		{ id: 3118, name: 'Детский сад' },
		{ id: 3119, name: 'Гимназия' },
		{ id: 3120, name: 'Колледж' },
		{ id: 3121, name: 'Лицей' },
		{ id: 3122, name: 'Техникум' },
		{ id: 3123, name: 'Университет' },
		{ id: 3124, name: 'Школа' },
		{ id: 3125, name: 'Институт' },
		{ id: 3126, name: 'Обучающие курсы' },
		{ id: 3276, name: 'Дополнительное образование' },
		{ id: 3275, name: 'Тренинг, семинар' },
		{ id: 3127, name: 'Танцевальная школа' }
	];

	$: searchThemes = themes.filter(({ name }) => name.toLowerCase().indexOf(search) > -1);
</script>

<Group>
	<Search bind:value={search} />
	{#each searchThemes as theme}
		<SimpleCell>{theme.name}</SimpleCell>
	{:else}
		<Footer>Ничего не найдено</Footer>
	{/each}
</Group>
```

# SegmentedControl

Горизонтальный контролер, который позволяет выбрать одну опцию-сегмент из представленного списка.

Для чего может быть нужен:

- для навигации — как аналог `<Tabs/>`;
- в формах — как аналог `<RadioGroup/>`.

Сегменты, как кнопки, могут содержать текст и/или иконки.

Сегментов не должно быть много: чем они больше — тем проще между ними переключаться. [Apple ограничивает количество сегментов на iPhone пятью](https://developer.apple.com/design/human-interface-guidelines/ios/controls/segmented-controls/).

```svelte scroll
<script>
	import {
		Group,
		Header,
		FormItem,
		Div,
		SegmentedControl,
		SegmentedControlOption
	} from '@sveltevk/vksui';
	import Icon24List from '@sveltevk/icons/dist/24/list';
	import Icon16GridOfFour from '@sveltevk/icons/dist/16/grid_of_four';

	let reportType = 'idea';
	let selectedSex = undefined;
</script>

<Group>
	<Header subtitle="Режим просмотра">Навигация</Header>
	<Div>
		<SegmentedControl>
			<SegmentedControlOption value="list" aria-label="Список"
				><Icon24List aria-hidden="true" /></SegmentedControlOption
			>
			<SegmentedControlOption value="grid" aria-label="Плитки"
				><Icon16GridOfFour aria-hidden="true" /></SegmentedControlOption
			>
		</SegmentedControl>
	</Div>
</Group>
<Group>
	<Header>Форма</Header>
	<FormItem top="Тип репорта" bottom={`Controlled; name="report-type", size="m"`}>
		<SegmentedControl size="m" name="report-type" bind:value={reportType}>
			<SegmentedControlOption value="bug">Баг</SegmentedControlOption>
			<SegmentedControlOption value="idea">Идея</SegmentedControlOption>
			<SegmentedControlOption value="other">Другое</SegmentedControlOption>
		</SegmentedControl>
	</FormItem>
	<FormItem
		top={`Пол ${selectedSex ?? ''}`}
		bottom={`Uncontrolled; name="sex", value="none", size="l"`}
	>
		<SegmentedControl name="sex" value="none" on:change={(e) => (selectedSex = e.detail)}>
			<SegmentedControlOption value="female">Женский</SegmentedControlOption>
			<SegmentedControlOption value="male">Мужской</SegmentedControlOption>
			<SegmentedControlOption value="none">Любой</SegmentedControlOption>
		</SegmentedControl>
	</FormItem>
</Group>
```

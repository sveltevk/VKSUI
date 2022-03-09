# FormLayoutGroup

Компонент помогает сгруппировать несколько `FormItem` по какому-то признаку, расположив их по вертикали или по горизонтали.

```svelte scroll
<script>
	import { Group, FormLayout, FormLayoutGroup, FormItem, Input, CellButton } from '@sveltevk/vksui';

	let showDates = true;
</script>

<Group>
	<FormLayout
		on:submit={(e) => {
			e.preventDefault();
		}}
	>
		<FormLayoutGroup mode="vertical">
			<FormItem top="Имя">
				<Input />
			</FormItem>
			<FormItem top="Фамилия">
				<Input />
			</FormItem>
		</FormLayoutGroup>
		{#if !showDates}
			<CellButton on:click={() => (showDates = true)}>Указать даты поездки</CellButton>
		{:else}
			<FormLayoutGroup mode="horizontal" removable on:remove={() => (showDates = false)}>
				<FormItem bottom="Дата начала поездки">
					<Input />
				</FormItem>
				<FormItem bottom="Дата конца поездки">
					<Input />
				</FormItem>
			</FormLayoutGroup>
		{/if}
	</FormLayout>
</Group>
```

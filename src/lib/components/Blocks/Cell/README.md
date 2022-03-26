# Cell

Надстройка над SimpleCell, позволяющая удалять, перетаскивать и выделять ячейки.

```svelte scroll
<script>
	import { Group, Header, Cell, List, Avatar } from '@sveltevk/vksui';
	import { writable, get } from 'svelte/store';

	let removeList = writable(['Михаил Андриевский', 'Вадим Дорохов', 'Саша Колобов']);
	let draggingList = writable(['Say', 'Hello', 'To', 'My', 'Little', 'Friend']);
	let dragAndSelectList = writable([
		{ label: 'Фотографии', checked: true },
		{ label: 'Музыка', checked: false },
		{ label: 'Видео', checked: false }
	]);
	let dragAndRemoveList = writable(['Евгения Полозова', 'Артур Стамбульцян', 'Владимир Клепов']);

	const removeFromList = (idx, list) => {
		const _list = get(list);
		_list.splice(idx, 1);
		list.set(_list);
	};

	const checkedInList = (idx, checked, list) => {
		const _list = get(list);
		_list[idx].checked = checked;
		list.set(_list);
		console.log('checkedInList');
	};

	const reorderList = ({ from, to }, list) => {
		const _list = [...get(list)];
		_list.splice(from, 1);
		_list.splice(to, 0, get(list)[from]);
		list.set(_list);
	};
</script>

<Group>
	<Header>
		<code slot="subtitle">mode="selectable"</code>
		Выделение
	</Header>
	<Cell mode="selectable">
		<Avatar slot="before" />
		Артур Стамбульцян
	</Cell>
	<Cell mode="selectable">
		<Avatar slot="before" />
		Игорь Федоров
	</Cell>
	<Cell mode="selectable" disabled>
		<Avatar slot="before" />
		Михаил Лихачев
	</Cell>
</Group>

{#if $removeList.length > 0}
	<Group>
		<Header><code slot="subtitle">mode="removable"</code>Удаление</Header>
		<List>
			{#each $removeList as item, idx}
				<Cell mode="removable" on:remove={() => removeFromList(idx, removeList)}>
					{item}
				</Cell>
			{/each}
		</List>
	</Group>
{/if}

<Group>
	<Header><code slot="subtitle">draggable</code>Перетаскивание</Header>
	<List>
		{#each $draggingList as item}
			<Cell draggable onDragFinish={({ from, to }) => reorderList({ from, to }, draggingList)}>
				<Avatar slot="before" />
				{item}
			</Cell>
		{/each}
	</List>
</Group>

<Group>
	<Header>
		<code slot="subtitle">draggable mode="selectable"</code>
		Перетаскивание c выделением
	</Header>
	<List>
		{#each $dragAndSelectList as { label, checked }, idx}
			<Cell
				mode="selectable"
				draggable
				onDragFinish={({ from, to }) => reorderList({ from, to }, dragAndSelectList)}
				{checked}
				on:change={(e) => {
					console.log(e);
					checkedInList(idx, e.target.checked, dragAndSelectList);
				}}
			>
				<Avatar slot="before" mode="app" size={32} />
				{label}
			</Cell>
		{/each}
	</List>
</Group>

{#if $dragAndRemoveList.length > 0}
	<Group>
		<Header>
			<code slot="subtitle">draggable mode="removable"</code>
			Перетаскивание c удалением
		</Header>
		<List>
			{#each $dragAndRemoveList as item, idx}
				<Cell
					mode="removable"
					draggable
					on:remove={() => removeFromList(idx, dragAndRemoveList)}
					onDragFinish={({ from, to }) => reorderList({ from, to }, dragAndRemoveList)}
				>
					<Avatar slot="before" />
					{item}
				</Cell>
			{/each}
		</List>
	</Group>
{/if}
```

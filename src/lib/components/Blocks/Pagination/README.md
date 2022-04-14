# Pagination

Чаще всего используется в больших списках или таблицах, для более понятного структурирования и деления информации.

По умолчанию многоточие показывается когда кол-во страниц `> 7`. Чтобы повлиять на это поведение, существуют параметры `siblingCount` и `boundaryCount`.
К примеру, если выставить `siblingCount={0}` или `boundaryCount={0}`, то многоточие появится уже при `> 5`.
Если выставить и `siblingCount={0}`, и `boundaryCount={0}`, то `> 4`.

> При ширине `< 380px` рекомендуется отключать `siblingCount` передав в него значение `0`.

## Отличия от VKUI

Свойство `currentPage` изменяется внутри компонента.

## `usePagination`

Для полной кастомизации можно использовать хук `usePagination()`. Возвращает массив типа `[1, 2, 3, 4, 5, 'end-ellipsis', 8]`. Принимает почти те же параметры, что и `Pagination`.

```svelte mini
<script>
	import { Pagination, AdaptivityProvider, FormItem, Checkbox, Input } from '@sveltevk/vksui';

	// state
	let sizeY = 'compact';
	let currentPage = 1;
	let siblingCount = 0;
	let boundaryCount = 1;
	let totalPages = 123;
	let disabled = false;
</script>

<div class="RootContainer">
	<AdaptivityProvider {sizeY}>
		<div class="DemoContainer">
			<Pagination bind:currentPage {siblingCount} {boundaryCount} {totalPages} {disabled} />
		</div>
	</AdaptivityProvider>
	<div style:min-width="200px">
		<FormItem top="sizeY">
			<select bind:value={sizeY}>
				{#each ['compact', 'regular'] as name}
					<option value={name}>{name}</option>
				{/each}
			</select>
		</FormItem><FormItem top="prop[currentPage]">
			<Input
				type="number"
				value={currentPage}
				on:change={(e) => (currentPage = Number(e.target.value))}
				min="1"
				max={totalPages}
			/>
		</FormItem>
		<FormItem top="prop[siblingCount]">
			<Input
				type="number"
				value={siblingCount}
				on:change={(e) => (siblingCount = Number(e.target.value))}
				min="0"
			/>
		</FormItem>
		<FormItem top="prop[boundaryCount]">
			<Input
				type="number"
				value={boundaryCount}
				on:change={(e) => (boundaryCount = Number(e.target.value))}
				min="0"
			/>
		</FormItem>
		<FormItem top="prop[totalPages]">
			<Input
				type="number"
				value={totalPages}
				on:change={(e) => (totalPages = Number(e.target.value))}
				min="1"
			/>
		</FormItem>
		<FormItem top="prop[disabled]">
			<Checkbox bind:checked={disabled}>disabled</Checkbox>
		</FormItem>
	</div>
</div>

<style>
	.RootContainer {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		justify-content: center;
	}
	.DemoContainer {
		flex-grow: 2;
		padding-top: 24px;
		padding-bottom: 24px;
	}
</style>
```

# PanelSpinner

Этот компонент - обёртка над `<Spinner />` с заданными отступами и размером. Удобно использовать его во время загрузки данных.

```svelte
{#await promise}
	<PanelSpinner />
{:then value}
	<Group>
		<Header mode="secondary">Информация</Header>
		...
	</Group>
{:catch error}
	<Group>
		<Header mode="secondary">Ошибка</Header>
		...
	</Group>
{/await}
```

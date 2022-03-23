# Alert

Передаётся в качестве значения свойства `popout` компонента `SplitLayout`.

В Алертах особое внимание нужно уделить кнопкам. Всего есть три типа кнопок:
`cancel`, `destructive` и `default`.

Типом `cancel` нужно подсветить действие, возвращающее пользователя к
состоянию, когда алерт был закрыт. Пользователь кликнет по нему в случае, когда он открыл алерт для
совершения какого-то действия и передумал.

Стиль `destructive` используется в случае, когда действие влечёт за собой какие-то деструктивные последствия:
удаление, разжалование и т.д.

Во всех остальных случаях используйте стиль `default`.

Кнопки могут быть ссылками (передайте `href`) или другим компонентом (передайте `component`).

> **Важно:**
>
> 1. Кнопка со стилем `cancel` должна быть одна на алерт.
> 2. Кнопку со стилем `cancel` нужно располагать либо слева, либо снизу, в зависимости от выбранного `actionsLayout`.
> 3. В Android версии игнорируется стили `cancel` и `destructive`, и жирность всех кнопок одинаковая.
> 4. В VKCOM версии возможно только горизонтальное расположение кнопок.
> 5. Порядок кнопок должен быть одинаковым на всех платформах (см. пункт 2).

```svelte frame noLayout
<script>
	import {
		AppRoot,
		SplitLayout,
		SplitCol,
		Panel,
		PanelHeader,
		Group,
		CellButton,
		Div,
		Alert
	} from '@sveltevk/vksui';

	let popout = '';
	let actionsLog = [];

	const addActionLogItem = (value) => (actionsLog = [...actionsLog, value]);
	const openAction = () => (popout = 'Action');
	const openDeletion = () => (popout = 'Deletion');
	const closePopout = () => (popout = '');
</script>

<AppRoot>
	<SplitLayout isPopout={popout !== ''}>
		<svelte:fragment slot="popout">
			{#if popout === 'Action'}
				<Alert
					actions={[
						{
							title: 'Лишить права',
							mode: 'destructive',
							autoclose: true,
							action: () => addActionLogItem('Право на модерацию контента убрано.')
						},
						{
							title: 'Отмена',
							autoclose: true,
							mode: 'cancel'
						}
					]}
					actionsLayout="vertical"
					on:close={closePopout}
					header="Подтвердите действие"
					text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
				/>
			{:else if popout === 'Deletion'}
				<Alert
					actions={[
						{
							title: 'Отмена',
							autoclose: true,
							mode: 'cancel'
						},
						{
							title: 'Удалить',
							autoclose: true,
							mode: 'destructive',
							action: () => addActionLogItem('Документ удален.')
						}
					]}
					actionsLayout="horizontal"
					on:close={closePopout}
					header="Удаление документа"
					text="Вы уверены, что хотите удалить этот документ?"
				/>
			{/if}
		</svelte:fragment>

		<SplitCol>
			<Panel>
				<PanelHeader>Alert</PanelHeader>
				<Group>
					<CellButton on:click={openAction}>Лишить права</CellButton>
					<CellButton on:click={openDeletion}>Удалить документ</CellButton>
					{#each actionsLog as value}
						<Div>{value}</Div>
					{/each}
				</Group>
			</Panel>
		</SplitCol>
	</SplitLayout>
</AppRoot>
```

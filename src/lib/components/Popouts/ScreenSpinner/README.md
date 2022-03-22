# ScreenSpinner

Компонент-обертка над Spinner.

Передаётся в качестве слота `popout` компонента `SplitLayout`.

Рекомендуется использовать в случаях, когда требуется заблокировать интерфейс до завершения асинхронного процесса.

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
		ScreenSpinner
	} from '@sveltevk/vksui';

	let popout = '';

	const openScreenSpinner = () => {
		popout = 'ScreenSpinner';

		setTimeout(() => {
			popout = '';
		}, 2000);
	};
</script>

<AppRoot>
	<SplitLayout isPopout={Boolean(popout)}>
		<svelte:fragment slot="popout">
			{#if popout === 'ScreenSpinner'}
				<ScreenSpinner />
			{/if}
		</svelte:fragment>

		<SplitCol>
			<Panel>
				<PanelHeader>ScreenSpinner</PanelHeader>
				<Group>
					<CellButton on:click={openScreenSpinner}>Запустить долгий процесс</CellButton>
				</Group>
			</Panel>
		</SplitCol>
	</SplitLayout>
</AppRoot>
```

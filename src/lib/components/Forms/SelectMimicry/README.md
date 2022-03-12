# SelectMimicry

Визуальная имитация компонента NativeSelect. У него нет свойства value, а children вместо массива options принимает любой ReactNode, отображая его без изменений. Используется внутри CustomSelect

```svelte frame
<script>
	import { Panel, PanelHeader, Group, FormItem, SelectMimicry } from '@sveltevk/vksui';
</script>

<Panel id="profile">
	<PanelHeader>Профиль</PanelHeader>
	<Group>
		<FormItem top="Выберите страну">
			<SelectMimicry placeholder="Не выбрана" on:click={() => console.log('SelectMimicry')} />
		</FormItem>
		<FormItem top="Выберите город">
			<SelectMimicry placeholder="Не выбран" disabled />
		</FormItem>
	</Group>
</Panel>
```

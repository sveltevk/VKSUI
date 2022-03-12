# NativeSelect

```svelte frame
<script>
	import { Panel, PanelHeader, Group, FormItem, NativeSelect } from '@sveltevk/vksui';
</script>

<Panel id="native-select">
	<PanelHeader>NativeSelect</PanelHeader>
	<Group>
		<FormItem top="Выберите пол">
			<NativeSelect>
				<option value="m">Мужской</option>
				<option value="f">Женский</option>
			</NativeSelect>
		</FormItem>
	</Group>
</Panel>
```

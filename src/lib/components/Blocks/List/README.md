# List

Контейнер для однородных [Cell](Cell)

```svelte scroll
<script>
	import { Group, List, Cell } from '@sveltevk/vksui';
	import Icon28UserOutline from '@sveltevk/icons/dist/28/user_outline';
	import Icon28SettingsOutline from '@sveltevk/icons/dist/28/settings_outline';
	import Icon28PrivacyOutline from '@sveltevk/icons/dist/28/privacy_outline';
</script>

<Group>
	<List>
		<Cell expandable>
			<Icon28UserOutline slot="before" />
			Учетная запись
		</Cell>
		<Cell expandable>
			<Icon28SettingsOutline slot="before" />
			Основные
		</Cell>
		<Cell expandable>
			<Icon28PrivacyOutline slot="before" />
			Приватность
		</Cell>
	</List>
</Group>
```

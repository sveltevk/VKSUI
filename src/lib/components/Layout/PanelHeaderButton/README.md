# PanelHeaderButton

Компонент для отрисовки кнопок в шапке панели. Внутрь компонента передается либо [иконка](https://sveltevk.github.io/icons/), либо текст. Текстовые кнопки чаще всего используются в iOS, но есть исключения для Android.

Кнопки могут быть переданы в `left` или `right` компонента PanelHeader

```svelte frame mini
<script>
	import { PanelHeader, PanelHeaderButton } from '@sveltevk/vksui';
	import Icon28Notifications from '@sveltevk/icons/dist/28/notifications';
	import Icon28SettingsOutline from '@sveltevk/icons/dist/28/settings_outline';
</script>

<PanelHeader>
	<PanelHeaderButton slot="left">
		<Icon28Notifications />
	</PanelHeaderButton>
	<PanelHeaderButton slot="right">
		<Icon28SettingsOutline />
	</PanelHeaderButton>
</PanelHeader>
```

Если нужно несколько кнопок справа или слева, то используем `svelte:fragment`:

```svelte mini
<PanelHeader>
	<svelte:fragment slot="right">
		<PanelHeaderButton>
			<Icon28Notifications />
		</PanelHeaderButton>
		<PanelHeaderButton>
			<Icon28SettingsOutline />
		</PanelHeaderButton>
	</svelte:fragment>
</PanelHeader>
```

## VK Mini Apps

Если вы разрабатываете приложение на платформе [VK Mini Apps](https://vk.com/vkappsdev), то вам будут недоступны кнопки справа, так как на их месте отображаются нативные кнопки для управления приложением.

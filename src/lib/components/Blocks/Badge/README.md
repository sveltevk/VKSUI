# Badge

Индикатор, с помощью которого можно привлечь внимание пользователя к определенному разделу.

```svelte frame
<script>
	import {
		Panel,
		PanelHeader,
		Group,
		Header,
		SimpleCell,
		Tabs,
		TabsItem,
		Badge
	} from '@sveltevk/vksui';
	import Icon28Notifications from '@sveltevk/icons/dist/28/notifications';
</script>

<Panel>
	<PanelHeader>Бейдж</PanelHeader>
	<Group>
		<Header mode="secondary">В пунктах меню</Header>
		<SimpleCell expandable>
			<Icon28Notifications slot="before" />
			<Badge slot="badge" aria-label="Есть новые" />
			Уведомления
		</SimpleCell>
	</Group>

	<Group>
		<Header mode="secondary">В переключателях</Header>
		<Tabs>
			<TabsItem>
				<Badge slot="after" mode="prominent" aria-label="Есть новые" />
				Диалоги
			</TabsItem>
			<TabsItem selected>
				<Badge slot="after" mode="prominent" aria-label="Есть новые" />
				Сообщения
			</TabsItem>
		</Tabs>
	</Group>
</Panel>
```

<!-- TODO: <Tabbar>
  <TabbarItem text="Новости">
    <Icon28NewsfeedOutline />
  </TabbarItem>
  <TabbarItem text="Сообщения">
		<Counter slot="indicator" size="s" mode="prominent">
			12
		</Counter>
    <Icon28MessageOutline />
  </TabbarItem>
  <TabbarItem
    text="Клипы"
  >
		<Badge slot="indicator" mode="prominent" aria-label="Новый раздел" />
    <Icon28ClipOutline />
  </TabbarItem>
</Tabbar> -->

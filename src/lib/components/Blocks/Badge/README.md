# Badge

Индикатор, с помощью которого можно привлечь внимание пользователя к определенному разделу.

```svelte scroll
<script>
	import { Group, Header, SimpleCell, Tabs, TabsItem, Badge } from '@sveltevk/vksui';
	import Icon28Notifications from '@sveltevk/icons/dist/28/notifications';
</script>

<Group>
	<Header mode="secondary">В пунктах меню</Header>
	<SimpleCell expandable>
		<svelte:fragment slot="before">
			<Icon28Notifications />
		</svelte:fragment>
		<svelte:fragment slot="badge">
			<Badge aria-label="Есть новые" />
		</svelte:fragment>
		Уведомления
	</SimpleCell>
</Group>

<Group>
	<Header mode="secondary">В переключателях</Header>
	<Tabs>
		<TabsItem>
			<svelte:fragment slot="after">
				<Badge mode="prominent" aria-label="Есть новые" />
			</svelte:fragment>
			Диалоги
		</TabsItem>
		<TabsItem selected>
			<svelte:fragment slot="after">
				<Badge mode="prominent" aria-label="Есть новые" />
			</svelte:fragment>
			Сообщения
		</TabsItem>
	</Tabs>
</Group>
```

<!-- TODO: <Tabbar>
  <TabbarItem text="Новости">
    <Icon28NewsfeedOutline />
  </TabbarItem>
  <TabbarItem text="Сообщения">
    <svelte:fragment slot="indicator">
      <Counter size="s" mode="prominent">
        12
      </Counter>
    </svelte:fragment>
    <Icon28MessageOutline />
  </TabbarItem>
  <TabbarItem
    text="Клипы"
  >
    <svelte:fragment slot="indicator">
      <Badge mode="prominent" aria-label="Новый раздел" />
    </svelte:fragment>
    <Icon28ClipOutline />
  </TabbarItem>
</Tabbar> -->

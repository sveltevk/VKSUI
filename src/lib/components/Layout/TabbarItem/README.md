# TabbarItem

Элемент [Tabbar](Tabbar). В качестве children рекомендуется использовать иконку 28 размера.

## Примеры

```svelte mini
<script>
	import { Tabbar, TabbarItem, Counter, Badge } from '@sveltevk/vksui';
	import Icon28NewsfeedOutline from '@sveltevk/icons/dist/28/newsfeed_outline';
	import Icon28UserCircleOutline from '@sveltevk/icons/dist/28/user_circle_outline';
	import Icon28MessageOutline from '@sveltevk/icons/dist/28/message_outline';

	let simple = 'one';
	let text = 'one';
	let horizontalText = 'one';
	let indicator = 'one';
</script>

<div style="background: var(--background_page); padding: 10px 0">
	<div style="max-width: 768px, margin: auto">
		<Tabbar style="position: static; margin: 0 0 10px">
			<TabbarItem selected={simple === 'one'} on:click={() => (simple = 'one')}>
				<Icon28NewsfeedOutline />
			</TabbarItem>
			<TabbarItem selected={simple === 'two'} on:click={() => (simple = 'two')}>
				<Icon28UserCircleOutline />
			</TabbarItem>
		</Tabbar>

		<Tabbar itemsLayout="vertical" style="position: static; margin: 10px 0">
			<TabbarItem selected={text === 'one'} on:click={() => (text = 'one')} text="Новости">
				<Icon28NewsfeedOutline />
			</TabbarItem>
			<TabbarItem selected={text === 'two'} on:click={() => (text = 'two')} text="Профиль">
				<Icon28UserCircleOutline />
			</TabbarItem>
			<TabbarItem selected={text === 'three'} on:click={() => (text = 'three')} text="Мессенджер">
				<Icon28MessageOutline />
			</TabbarItem>
		</Tabbar>

		<Tabbar itemsLayout="horizontal" style="position: static; margin: 10px 0">
			<TabbarItem
				selected={horizontalText === 'one'}
				on:click={() => (horizontalText = 'one')}
				text="Новости"
			>
				<Icon28NewsfeedOutline />
			</TabbarItem>
			<TabbarItem
				selected={horizontalText === 'two'}
				on:click={() => (horizontalText = 'two')}
				text="Профиль"
			>
				<Icon28UserCircleOutline />
			</TabbarItem>
			<TabbarItem
				selected={horizontalText === 'three'}
				on:click={() => (horizontalText = 'three')}
				text="Мессенджер"
			>
				<Icon28MessageOutline />
			</TabbarItem>
		</Tabbar>

		<Tabbar itemsLayout="vertical" style="position: static; margin: 10px 0 0">
			<TabbarItem
				selected={indicator === 'one'}
				on:click={() => (indicator = 'one')}
				text="Новости"
			>
				<Badge slot="indicator" mode="prominent" />
				<Icon28NewsfeedOutline />
			</TabbarItem>
			<TabbarItem
				selected={indicator === 'two'}
				on:click={() => (indicator = 'two')}
				text="Профиль"
			>
				<Icon28UserCircleOutline />
			</TabbarItem>
			<TabbarItem
				selected={indicator === 'three'}
				on:click={() => (indicator = 'three')}
				text="Мессенджер"
			>
				<Counter slot="indicator" size="s" mode="prominent">3</Counter>
				<Icon28MessageOutline />
			</TabbarItem>
		</Tabbar>
	</div>
</div>
```

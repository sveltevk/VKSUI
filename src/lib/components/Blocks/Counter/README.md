# Counter

Компонент для отрисовки счетчика в ячейках и кнопках.

```svelte scroll
<script>
	import {
		Group,
		Header,
		Link,
		Avatar,
		List,
		SimpleCell,
		Div,
		Button,
		HorizontalScroll,
		Tabs,
		TabsItem,
		Counter
	} from '@sveltevk/vksui';
	import Icon28UserOutline from '@sveltevk/icons/dist/28/user_outline';
	import Icon28UsersOutline from '@sveltevk/icons/dist/28/users_outline';
	import Icon28MessageOutline from '@sveltevk/icons/dist/28/message_outline';
	import Icon28FavoriteOutline from '@sveltevk/icons/dist/28/favorite_outline';
</script>

<Group>
	<Header mode="secondary">Счётчики в ячейках</Header>
	<List>
		<SimpleCell>
			<Counter slot="indicator">4</Counter>
			<Icon28UserOutline slot="before" />
			Друзья
		</SimpleCell>
		<SimpleCell>
			<Counter slot="indicator" mode="primary">2</Counter>
			<Icon28UsersOutline slot="before" />
			Группы
		</SimpleCell>
		<SimpleCell>
			<Counter slot="indicator">224</Counter>
			<Icon28MessageOutline slot="before" />
			Сообщения
		</SimpleCell>
		<SimpleCell>
			<Counter slot="indicator" mode="primary">1</Counter>
			<Icon28FavoriteOutline slot="before" />
			Закладки
		</SimpleCell>
	</List>
</Group>
<Group>
	<Header mode="secondary">Счётчики в кнопках</Header>
	<Div>
		<Button mode="secondary" size="m">
			<Counter slot="after">16</Counter>
			Secondary medium
		</Button>
	</Div>
	<Div>
		<Button mode="tertiary">
			<Counter slot="after">6</Counter>
			Tertiary small
		</Button>
	</Div>
	<Div>
		<Button mode="outline" size="m">
			<Counter slot="after">20</Counter>
			Outline medium
		</Button>
	</Div>
	<Div>
		<Button mode="commerce" size="m">
			<Counter slot="after">4</Counter>
			Commerce medium
		</Button>
	</Div>
	<Div>
		<Button size="l">
			<Counter slot="after">8</Counter>
			Primary large
		</Button>
	</Div>
</Group>
<Group>
	<Header slot="header">
		<Counter slot="indicator" size="s" mode="prominent">5</Counter>
		<Link slot="aside">Посмотреть все</Link>
		Заявки в друзья
	</Header>
	<SimpleCell>
		<Avatar slot="before" />
		Александр Сорокин
	</SimpleCell>
	<SimpleCell>
		<Avatar slot="before" />
		Виктор Пелевин
	</SimpleCell>
	<SimpleCell>
		<Avatar slot="before" />
		Михаил Зыгарь
	</SimpleCell>
</Group>
<Group>
	<Header mode="secondary">В переключателях</Header>
	<Tabs mode="buttons">
		<HorizontalScroll>
			<TabsItem>
				<Counter slot="after" size="s">8</Counter>
				Все
			</TabsItem>
			<TabsItem selected>
				<Counter slot="after" size="s">24</Counter>
				Люди
			</TabsItem>
			<TabsItem>
				<Counter slot="after" size="s">2</Counter>
				Сообщества
			</TabsItem>
			<TabsItem>Музыка</TabsItem>
		</HorizontalScroll>
	</Tabs>
	<Tabs>
		<TabsItem>
			<Counter slot="after" size="s" mode="prominent">6</Counter>
			Диалоги
		</TabsItem>
		<TabsItem selected>
			<Counter slot="after" size="s">24</Counter>
			Сообщения
		</TabsItem>
	</Tabs>
</Group>
```

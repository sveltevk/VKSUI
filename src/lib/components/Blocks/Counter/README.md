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
	<svelte:fragment slot="header">
		<Header mode="secondary">Счётчики в ячейках</Header>
	</svelte:fragment>
	<List>
		<SimpleCell>
			<svelte:fragment slot="indicator">
				<Counter>4</Counter>
			</svelte:fragment>
			<svelte:fragment slot="before">
				<Icon28UserOutline />
			</svelte:fragment>
			Друзья
		</SimpleCell>
		<SimpleCell>
			<svelte:fragment slot="indicator">
				<Counter mode="primary">2</Counter>
			</svelte:fragment>
			<svelte:fragment slot="before">
				<Icon28UsersOutline />
			</svelte:fragment>
			Группы
		</SimpleCell>
		<SimpleCell>
			<svelte:fragment slot="indicator">
				<Counter>224</Counter>
			</svelte:fragment>
			<svelte:fragment slot="before">
				<Icon28MessageOutline />
			</svelte:fragment>
			Сообщения
		</SimpleCell>
		<SimpleCell>
			<svelte:fragment slot="indicator">
				<Counter mode="primary">1</Counter>
			</svelte:fragment>
			<svelte:fragment slot="before">
				<Icon28FavoriteOutline />
			</svelte:fragment>
			Закладки
		</SimpleCell>
	</List>
</Group>
<Group>
	<svelte:fragment slot="header">
		<Header mode="secondary">Счётчики в кнопках</Header>
	</svelte:fragment>
	<Div>
		<Button mode="secondary" size="m">
			<svelte:fragment slot="after">
				<Counter>16</Counter>
			</svelte:fragment>
			Secondary medium
		</Button>
	</Div>
	<Div>
		<Button mode="tertiary">
			<svelte:fragment slot="after">
				<Counter>6</Counter>
			</svelte:fragment>
			Tertiary small
		</Button>
	</Div>
	<Div>
		<Button mode="outline" size="m">
			<svelte:fragment slot="after">
				<Counter>20</Counter>
			</svelte:fragment>
			Outline medium
		</Button>
	</Div>
	<Div>
		<Button mode="commerce" size="m">
			<svelte:fragment slot="after">
				<Counter>4</Counter>
			</svelte:fragment>
			Commerce medium
		</Button>
	</Div>
	<Div>
		<Button size="l">
			<svelte:fragment slot="after">
				<Counter>8</Counter>
			</svelte:fragment>
			Primary large
		</Button>
	</Div>
</Group>
<Group>
	<svelte:fragment slot="header">
		<Header>
			<svelte:fragment slot="indicator">
				<Counter size="s" mode="prominent">5</Counter>
			</svelte:fragment>
			<svelte:fragment slot="aside">
				<Link>Посмотреть все</Link>
			</svelte:fragment>
			Заявки в друзья
		</Header>
	</svelte:fragment>
	<SimpleCell>
		<svelte:fragment slot="before">
			<Avatar />
		</svelte:fragment>
		Александр Сорокин
	</SimpleCell>
	<SimpleCell>
		<svelte:fragment slot="before">
			<Avatar />
		</svelte:fragment>
		Виктор Пелевин
	</SimpleCell>
	<SimpleCell>
		<svelte:fragment slot="before">
			<Avatar />
		</svelte:fragment>
		Михаил Зыгарь
	</SimpleCell>
</Group>
<Group>
	<svelte:fragment slot="header">
		<Header mode="secondary">В переключателях</Header>
	</svelte:fragment>
	<Tabs mode="buttons">
		<HorizontalScroll>
			<TabsItem>
				<svelte:fragment slot="after">
					<Counter size="s">8</Counter>
				</svelte:fragment>
				Все
			</TabsItem>
			<TabsItem selected>
				<svelte:fragment slot="after">
					<Counter size="s">24</Counter>
				</svelte:fragment>
				Люди
			</TabsItem>
			<TabsItem>
				<svelte:fragment slot="after">
					<Counter size="s">2</Counter>
				</svelte:fragment>
				Сообщества
			</TabsItem>
			<TabsItem>Музыка</TabsItem>
		</HorizontalScroll>
	</Tabs>
	<Tabs>
		<TabsItem>
			<svelte:fragment slot="after">
				<Counter size="s" mode="prominent">6</Counter>
			</svelte:fragment>
			Диалоги
		</TabsItem>
		<TabsItem selected>
			<svelte:fragment slot="after">
				<Counter size="s">24</Counter>
			</svelte:fragment>
			Сообщения
		</TabsItem>
	</Tabs>
</Group>
```

# Быстрый старт

Собрать простое приложение можно за четыре шага:

## Шаг 1

Подготовьте пустое [Svelte приложение](https://github.com/sveltejs/template).

Вы можете использовать любые шаблоны и сборщики.
**Обратите внимание:** VKSUI поддерживает Typescript и [SvelteKit](https://kit.svelte.dev/).

## Шаг 2

Установите необходимые пакеты. Для этого воспользуйтесь одной из команд:

```shell
# npm
npm i --save @sveltevk/vksui @sveltevk/icons @vkontakte/vk-bridge
# or yarn
yarn add @sveltevk/vksui @sveltevk/icons @vkontakte/vk-bridge
```

- `@sveltevk/icons` — это [иконки](https://sveltevk.github.io/icons/), которые напрямую используются в
  некоторых компонентах VKSUI.
- `@vkontakte/vk-bridge` необходима для интеграции в клиенты VK (она обеспечит корректные отступы на мобильных
  устройствах, свайпы, определение темы и тд).

## Шаг 3

Добавьте тег viewport для корректного отображения интерфейса на безрамочных смартфонах (подробнее см. в статье ["The Notch" and CSS](https://css-tricks.com/the-notch-and-css/)).

```html
<meta
	name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
/>
```

## Шаг 4

Соберите базовый app shell для VKSUI.

**App.svelte**

```svelte
<script>
	import { ConfigProvider, AdaptivityProvider } from '@sveltevk/vksui';
	import '@sveltevk/vksui/styles/themes.css';

	import AppLayout from './AppLayout.svelte';
</script>

<ConfigProvider>
	<AdaptivityProvider>
		<AppLayout />
	</AdaptivityProvider>
</ConfigProvider>
```

**AppLayout.svelte**

```svelte
<script>
	import {
		AppRoot,
		SplitLayout,
		PanelHeader,
		SplitCol,
		View,
		Panel,
		Group,
		Header,
		SimpleCell,
		useAdaptivity,
		ViewWidth
	} from '@sveltevk/vksui';

	const adaptivity = useAdaptivity();
</script>

<AppRoot>
	<SplitLayout>
		<PanelHeader slot="header" separator={false} />
		<SplitCol spaced={$adaptivity.viewWidth > ViewWidth.MOBILE}>
			<View activePanel="main">
				<Panel id="main">
					<PanelHeader>VKUI</PanelHeader>
					<Group>
						<Header mode="secondary">Items</Header>
						<SimpleCell>Hello</SimpleCell>
						<SimpleCell>World</SimpleCell>
					</Group>
				</Panel>
			</View>
		</SplitCol>
	</SplitLayout>
</AppRoot>
```

Ваше приложение готово!

Теперь можно добавлять более сложные компоненты, новые экраны и настроить переходы между ними.

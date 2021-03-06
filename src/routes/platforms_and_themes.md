# Платформы и темы

Как уже было сказано ранее, VKSUI может мимикрировать под дизайны разных платформ. Благодаря этой особенности, у вас есть возможность расширять функционал ВКонтакте интерфейсами, которые неотличимы от нативных разделов.

## Платформы

На данный момент поддерживаются 3 платформы — `ios`, `android` и `vkcom`. Для применения дизайна платформы, достаточно передать её в компонент `ConfigProvider` в качестве значения свойства `platform`.

> **Важно**
>
> Дефолтной считается платформа `android`. Такое название — это историческое наследие. Эту тему стоит применять не только при встраивании в Android клиент, но и для [m.vk.com](https://m.vk.com). Она так же подходит для разработки standalone-приложений (то есть приложений, которые работают как полноценный сайт и никуда не встраиваются)

```svelte
<ConfigProvider platform="ios">
	<AdaptivityProvider>
		<AppRoot>
			<SimpleCell>Эта ячейка будет выглядеть точь в точь как в iOS клиенте ВКонтакте</SimpleCell>
		</AppRoot>
	</AdaptivityProvider>
</ConfigProvider>
```

Чтобы получить значение текущей платформы можно использовать метод `usePlatform`. Подробнее об этих инструментах можно познакомиться в [утилитах](utils).

> **Важно**
>
> Платформа vkcom не предназначена для адаптивного интерфейса. Используйте её только в том случае, если ваше приложение встроено в десктопный [vk.com](https://vk.com).

### Автоматическое определение платформы

Передавать платформу в `ConfigProvider` необязательно. Этот служебный компонент умеет определять её автоматически. Исключением является кейс встраивания вашего мини-приложения в [vk.com](https://vk.com). В этом случае пока нужно передавать платформу явно. Значение платформы можно получить из query-параметра `vk_platform`.

## Темы

У каждой платформы есть две темы: светлая (light) и тёмная (dark). Применить тему можно передав её значение в свойство appearance компонента ConfigProvider.

```svelte
<ConfigProvider appearance="dark">
	<AdaptivityProvider>
		<AppRoot>
			<SimpleCell>Вечереет...</SimpleCell>
		</AppRoot>
	</AdaptivityProvider>
</ConfigProvider>
```

### Переопределение темы для отдельных компонентов

Если вам необходимо переопределить тему для отдельных компонентов приложение то это можно сделать через `AppearanceProvider`.

```svelte
<AppearanceProvider appearance="dark" let:class={className}>
	<Snackbar action="Поделиться" class={className}>Поделиться</Snackbar>
</AppearanceProvider>
```

### Откуда взять значение темы при встраивании?

Если ваше приложение встраивается в iOS или Android клиенты, то тему можно получить через vk-bridge. Каждому мини-приложению клиент посылает событие VKWebAppUpdateConfig. В данных этого события помимо прочего есть поле appearance, которое и содержит текущую тему клиента.

### Использование темы в коде

У каждой темы есть поле appearance, которое определяет, тёмная она или светлая. В коде мы рекомендуем опираться на значение этого свойства.

Его текущее значение можно определить с помощью метода `useAppearance()`:

```svelte
<script>
	const appearance = useAppearance();
</script>

<Div>{$appearance === 'light' ? 'Out of the blue' : 'And into the black'}</Div>
```

Appearance можно пригодиться для замены изображений на инвертированную версию в темных темах.

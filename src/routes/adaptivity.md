# Адаптивность

Одно из основных преимуществ VKUI — это адаптивность. Библиотека не только реализует разные шаблоны для разных устройств: под габариты адаптируются практически все компоненты. От наличия мышки, высоты и ширины экрана зависит отображение кнопок, элементов форм и так далее. В этой статье мы разберём, как сделать ваш интерфейс отзывчивым.

> **Важно**
>
> Не используйте `AdaptivityProvider` и `useAdaptivity()` в одном компоненте(файле)

```svelte
<!-- Main.svelte -->
<script>
	import { ConfigProvider, AdaptivityProvider, AppRoot } from '@sveltevk/vksui';
	import App from './App.svelte';
</script>

<ConfigProvider>
	<AdaptivityProvider>
		<App />
	</AdaptivityProvider>
</ConfigProvider>
```

Далее, нужно добавить `SplitLayout` и хотя бы один `SplitCol`.

`SplitLayout` — компонент-обертка для отрисовки макета с одной или несколькими колонками. `SplitCol` — компонент для отрисовки колонки.

```svelte
<!-- App.svelte -->
<script>
	import { AppRoot, SplitLayout, SplitCol, Panel } from '@sveltevk/vksui';
</script>

<AppRoot>
	<SplitLayout>
		<SplitCol width={280}>
			<Panel>Navigation</Panel>
		</SplitCol>
		<SplitCol>
			<Panel>Profile</Panel>
		</SplitCol>
	</SplitLayout>
</AppRoot>
```

Почти готово. Теперь нам необходимо сообщить приложению, что левая колонка нужна только на больших экранах. Для доступа к рассчитанным в AdaptivityProvider свойствам, необходимо воспользоваться методом `useAdaptivity()`.

```svelte
<!-- App.svelte -->
<script>
	import {
		AppRoot,
		SplitLayout,
		SplitCol,
		Panel,
		PanelHeader,
		useAdaptivity,
		ViewWidth
	} from '@sveltevk/vksui';

	const adaptivity = useAdaptivity();
</script>

<AppRoot>
	<SplitLayout>
		<svelte:fragment slot="header">
			{#if $adaptivity.viewWidth >= ViewWidth.SMALL_TABLET}
				<PanelHeader separator={false} />
			{/if}
		</svelte:fragment>

		{#if $adaptivity.viewWidth === ViewWidth.DESKTOP}
			<SplitCol width="280px">
				<Panel>Navigation</Panel>
			</SplitCol>
		{/if}

		<SplitCol
			spaced={$adaptivity.viewWidth >= ViewWidth.SMALL_TABLET}
			animate={$adaptivity.viewWidth <= ViewWidth.MOBILE}
		>
			<Panel>Profile</Panel>
		</SplitCol>
	</SplitLayout>
</AppRoot>
```

> **Нюансы**
>
> - Слот `header` в `SplitLayout` необходим для создания сквозной шапки, когда интерфейс состоит из нескольких колонок (или одной центрированной)
> - Анимация перехода между панелями должна быть отключена при размерах `ViewWidth.TABLET` и более (`SplitCol.animate`)
> - Если интерфейс состоит из нескольких колонок, то у центральных колонок должны быть отступы (в трёх-колоночном режиме это одна центральная колонка) (`SplitCol.spaced`)

## Технические детали

Адаптивность базируется на четырёх свойствах: `viewWidth`, `viewHeight`, `sizeX`, `sizeY`. Эти свойства вычисляются в `AdaptivityProvider`, доступ к ним можно получить через метод `useAdaptivity()`, который возвращает [хранилище](https://svelte.dev/docs#run-time-svelte-store).

- `sizeX` и `sizeY` принимают значения `SizeType.REGULAR` | `SizeType.COMPACT`
- `viewWidth` — `ViewWidth.SMALL_MOBILE` | `ViewWidth.MOBILE` | `ViewWidth.SMALL_TABLET` | `ViewWidth.TABLET` | `ViewWidth.DESKTOP`
- `viewHeight` — `ViewHeight.SMALL` | `ViewHeight.MEDIUM`

<script>
	import Icon28TokenizedOutline from '$site/lib/Icon28TokenizedOutline/Icon28TokenizedOutline.svelte';
</script>

# Кастомизация

В стили библиотеки встроены стили для 3 платформ:

- `vkcom` — стиль сайта [vk.com](https://vk.com);
- `ios` — стиль мобильного приложения ВКонтакте под iOS;
- `android` — стиль мобильного приложения ВКонтакте под Android. Этот стиль является дефолтным.

Каждая платформа доступна в светлом и темном вариантах.

Пример использования:

```svelte
<script>
	import { ConfigProvider, Button } from '@sveltevk/vksui';
	import '@sveltevk/vksui/styles/themes.css';
</script>

<ConfigProvider platform="vkcom" appearance="light">
	<AppRoot>
		<Button />
	</AppRoot>
</ConfigProvider>
```

## Текущие способы кастомизации

На данный момент все компоненты используют css-переменные (токены) из [Appearance](https://github.com/VKCOM/Appearance)
для адаптации под разные платформы и темы. При желании разработчик может переопределить значения цветов:

```css
:root {
	--button_primary_background: purple;
}
```

Если подключить такой CSS после стилей библиотеки, то заливка всех `<Button mode="primary" />` станет фиолетовой.

## vkui-tokens

Мы как и [VKUI](https://github.com/VKCOM/VKUI) плавно переходим на [новую систему токенов](https://github.com/VKCOM/vkui-tokens), которая
позволит кастомизировать не только цвета, но и скругления, размеры, отступы и тени.

Компоненты поддерживающие токены, обозначаются иконкой <Icon28TokenizedOutline class="icon-tokenized" fill="var(--accent)" title="Компонент поддерживает vkui-tokens"  /> .

Пример использования

```svelte
<script>
	import { ConfigProvider, Button } from '@sveltevk/vksui';
	/*
	 * В vkui-tokens нет значений токенов из Appearance. Предполагается, что
	 * если разработчик использует vkui-tokens, то файлы со значениями он подключает
	 * самостоятельно.
	 */
	import '@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariables.css';
	import '@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css';
</script>

<ConfigProvider platform="vkcom" appearance="light">
	<AppRoot>
		<Button />
	</AppRoot>
</ConfigProvider>
```

<style>
	:global(.icon-tokenized),
	:global(.icon-tokenized > svg) {
		display: inline!important;
	}
</style>

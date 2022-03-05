<script lang="ts" context="module">
	const mapOldScheme = (scheme: AppearanceSchemeType): AppearanceSchemeType => {
		switch (scheme) {
			case Scheme.DEPRECATED_CLIENT_LIGHT:
				return Scheme.BRIGHT_LIGHT;
			case Scheme.DEPRECATED_CLIENT_DARK:
				return Scheme.SPACE_GRAY;
			default:
				return scheme;
		}
	};

	const setScheme = (scheme: AppearanceSchemeType, contextDocument?: Document): void => {
		(contextDocument || getDOM().document)?.body.setAttribute('scheme', scheme);
	};
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import type { AppearanceSchemeType, AppearanceType } from '@vkontakte/vk-bridge';
	import { Scheme, WebviewType, ContextKey } from '$lib/lib/config';
	import { Platform, platform as getPlatform } from '$lib/lib/platform';
	import { writable } from 'svelte/store';
	import AdaptivityProvider from '../AdaptivityProvider/AdaptivityProvider.svelte';
	import type { SizeType, ViewWidth } from '$lib/lib/adaptivity';
	import Appearance from '../Appearance/Appearance.svelte';
	import { getDOM } from '$lib/lib/dom';

	/**
	 * Цветовая схема приложения
	 */
	export let scheme: AppearanceSchemeType = 'bright_light';
	/**
	 * Подсказывает приложению, обёрнутому в `ConfigProvider`, где открыто приложение: внутри webview или в мобильном браузере
	 */
	export let isWebView: boolean = false; // FIXME: Check vkBridge.isWebView()
	/**
	 * Тип вебвью.<br>
	 * В случае `WebviewType.VKAPPS` интерфейс будет адаптирован для отображения в вебвью Mini Apps (системные контролы в правой части шапки)
	 */
	export let webviewType: WebviewType.INTERNAL | WebviewType.VKAPPS = WebviewType.VKAPPS;
	/**
	 * Тип приложения
	 */
	export let app: string = undefined;
	/**
	 * Тип цветовой схемы – `light` или `dark`
	 */
	export let appearance: AppearanceType = 'light';
	/**
	 * Включена ли анимация переходов между экранами в `Root` и `View`
	 */
	export let transitionMotionEnabled: boolean = true;
	/**
	 * Платформа
	 */
	export let platform: Platform = getPlatform();
	export let hasNewTokens: boolean = false;

	export let contentWindow: Window | undefined = getDOM().window;
	export let sizeX: SizeType = undefined;
	export let sizeY: SizeType = undefined;
	export let viewWidth: ViewWidth = undefined;

	let wIsWebView = writable(isWebView);
	let wWebviewType = writable(webviewType);
	let wApp = writable(app);
	let wTransitionMotionEnabled = writable(transitionMotionEnabled);
	let wPlatform = writable(platform);
	let wContentWindow = writable(contentWindow);
	let wHasNewTokens = writable(hasNewTokens);

	setContext(ContextKey.isWebView, wIsWebView);
	setContext(ContextKey.webviewType, wWebviewType);
	setContext(ContextKey.app, wApp);
	setContext(ContextKey.transitionMotionEnabled, wTransitionMotionEnabled);
	setContext(ContextKey.platform, wPlatform);
	setContext(ContextKey.contentWindow, wContentWindow);
	setContext(ContextKey.hasNewTokens, wHasNewTokens);

	$: wIsWebView.set(isWebView);
	$: wWebviewType.set(webviewType);
	$: wApp.set(app);
	$: wTransitionMotionEnabled.set(transitionMotionEnabled);
	$: wPlatform.set(platform);
	$: wContentWindow.set(contentWindow);
	$: wHasNewTokens.set(hasNewTokens);
	$: {
		setScheme(mapOldScheme(scheme), $$props.document);
	}
</script>

<!-- 
@component
Компонент для прокидывания конфигурации приложению.
-->

<AdaptivityProvider {contentWindow} {sizeX} {sizeY} {viewWidth}>
	<Appearance {appearance} {scheme}>
		<slot />
	</Appearance>
</AdaptivityProvider>

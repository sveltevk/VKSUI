<script lang="ts">
	import { setContext } from 'svelte';
	import type { AppearanceType } from '@vkontakte/vk-bridge';
	import { WebviewType, ContextKey } from '@sveltevk/vksui/lib/config';
	import { Platform, platform as getPlatform } from '@sveltevk/vksui/lib/platform';
	import { writable } from 'svelte/store';
	import AdaptivityProvider from '../AdaptivityProvider/AdaptivityProvider.svelte';
	import type { SizeType, ViewWidth } from '@sveltevk/vksui/lib/adaptivity';
	import AppearanceProvider from '../AppearanceProvider/AppearanceProvider.svelte';
	import { getDOM } from '@sveltevk/vksui/lib/dom';
	import type { AppearanceScheme } from '@sveltevk/vksui/helpers/scheme';
	import { hasMouse as _hasMouse } from '@vkontakte/vkjs';
	import DomContext from './DOMContext.svelte';

	/**
	 * Цветовая схема приложения
	 */
	export let scheme: AppearanceScheme = 'bright_light';
	/**
	 * Подсказывает приложению, обёрнутому в `ConfigProvider`, где открыто приложение: внутри webview или в мобильном браузере
	 */
	export let isWebView = false; // FIXME: Check vkBridge.isWebView()
	/**
	 * Тип вебвью.<br>
	 * В случае `WebviewType.VKAPPS` интерфейс будет адаптирован для отображения в вебвью Mini Apps (системные контролы в правой части шапки)
	 */
	export let webviewType: WebviewType.INTERNAL | WebviewType.VKAPPS = WebviewType.VKAPPS;
	/**
	 * Тип приложения
	 */
	export let app = '';
	/**
	 * Тип цветовой схемы – `light` или `dark`
	 */
	export let appearance: AppearanceType = 'light';
	/**
	 * Включена ли анимация переходов между экранами в `Root` и `View`
	 */
	export let transitionMotionEnabled = true;
	/**
	 * Платформа
	 */
	export let platform: Platform = getPlatform();
	export let hasNewTokens = false;
	export let hasMouse: boolean = _hasMouse;

	export let contentWindow: Window | undefined = getDOM().window;
	export let contentDocument: Document | undefined = getDOM().document;
	export let sizeX: SizeType = undefined;
	export let sizeY: SizeType = undefined;
	export let viewWidth: ViewWidth = undefined;

	let wIsWebView = writable(isWebView);
	let wWebviewType = writable(webviewType);
	let wApp = writable(app);
	let wTransitionMotionEnabled = writable(transitionMotionEnabled);
	let wPlatform = writable(platform);
	let wHasNewTokens = writable(hasNewTokens);

	setContext(ContextKey.isWebView, wIsWebView);
	setContext(ContextKey.webviewType, wWebviewType);
	setContext(ContextKey.app, wApp);
	setContext(ContextKey.transitionMotionEnabled, wTransitionMotionEnabled);
	setContext(ContextKey.platform, wPlatform);
	setContext(ContextKey.hasNewTokens, wHasNewTokens);

	$: wIsWebView.set(isWebView);
	$: wWebviewType.set(webviewType);
	$: wApp.set(app);
	$: wTransitionMotionEnabled.set(transitionMotionEnabled);
	$: wPlatform.set(platform);
	$: wHasNewTokens.set(hasNewTokens);
</script>

<!-- 
@component
Компонент для прокидывания конфигурации приложению.
-->

<DomContext value={{ window: contentWindow, document: contentDocument }}>
	<AdaptivityProvider {sizeX} {sizeY} {viewWidth} {hasMouse}>
		<AppearanceProvider {appearance} {scheme}>
			<slot />
		</AppearanceProvider>
	</AdaptivityProvider>
</DomContext>

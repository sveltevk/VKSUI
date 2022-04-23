<script context="module" lang="ts">
	const deriveAppearance = (scheme: Scheme | undefined): AppearanceType =>
		scheme === Scheme.SPACE_GRAY || scheme === Scheme.VKCOM_DARK ? 'dark' : 'light';
</script>

<script lang="ts">
	import { onDestroy, setContext } from 'svelte';
	import type { AppearanceType } from '@vkontakte/vk-bridge';
	import { WebviewType, ContextKey } from '@sveltevk/vksui/lib/config';
	import { Platform, platform as getPlatform } from '@sveltevk/vksui/lib/platform';
	import { writable } from 'svelte/store';
	import AdaptivityProvider from '../AdaptivityProvider/AdaptivityProvider.svelte';
	import type { SizeType, ViewWidth } from '@sveltevk/vksui/lib/adaptivity';
	import AppearanceProvider, {
		generateVKUITokensClassName
	} from '../AppearanceProvider/AppearanceProvider.svelte';
	import { getDOM, useDOM } from '@sveltevk/vksui/lib/dom';
	import { normalizeScheme, Scheme, type AppearanceScheme } from '@sveltevk/vksui/helpers/scheme';
	import { canUseDOM, hasMouse as _hasMouse } from '@vkontakte/vkjs';
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
	export let appearance: AppearanceType = undefined;
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

	const dom = useDOM();

	$: normalizedScheme = normalizeScheme({
		scheme,
		platform,
		appearance
	});

	$: {
		if (normalizedScheme !== 'inherit') {
			$dom.document?.body.setAttribute('scheme', normalizedScheme);
		}
	}
	onDestroy(() => {
		if (normalizedScheme !== 'inherit') {
			$dom.document?.body.removeAttribute('scheme');
		}
	});

	function useSchemeDetector(node: HTMLElement | undefined | null, _scheme: Scheme | 'inherit') {
		const inherit = _scheme === 'inherit';
		const getScheme = () => {
			if (!inherit || !canUseDOM || !node) {
				return undefined;
			}
			return node.getAttribute('scheme') as Scheme;
		};

		return inherit ? getScheme() : _scheme;
	}

	const realScheme = useSchemeDetector($dom.document?.body, normalizedScheme);
	$: derivedAppearance = deriveAppearance(realScheme);

	let VKUITokensClassName = '';
	$: {
		VKUITokensClassName && $dom.document?.body.classList.remove(VKUITokensClassName);
		VKUITokensClassName = generateVKUITokensClassName(platform, derivedAppearance);
		$dom.document?.body.classList.add(VKUITokensClassName);
	}
	onDestroy(() => $dom.document?.body.classList.remove(VKUITokensClassName));

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
		<AppearanceProvider appearance={appearance || derivedAppearance}>
			<slot />
		</AppearanceProvider>
	</AdaptivityProvider>
</DomContext>

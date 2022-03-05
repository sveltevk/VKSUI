<script context="module" lang="ts">
	import { getDOM } from '$lib/lib/dom';

	import type { AppearanceSchemeType, AppearanceType } from '@vkontakte/vk-bridge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { getScheme } from '../../../helpers/getScheme';
	import usePlatform from '$lib/hooks/usePlatform';
	import { ContextKey } from '$lib/lib/config';
	import { Platform } from '$lib/lib/platform';

	const generateVKUITokensClassName = (platform: string, appearance: string): string => {
		let tokensPlatform: string;
		switch (platform) {
			case Platform.ANDROID:
				tokensPlatform = 'vkBase';
				break;
			case Platform.IOS:
				tokensPlatform = 'vkIOS';
				break;
			case Platform.VKCOM:
				tokensPlatform = 'vkCom';
				break;
			default:
				tokensPlatform = platform;
		}

		return `vkui--${tokensPlatform}--${appearance}`;
	};

	const setScheme = (scheme: AppearanceSchemeType, contextDocument?: Document): void => {
		(contextDocument || getDOM().document)?.body.setAttribute('scheme', scheme);
	};

	const setTokens = (platform: string, appearance: string, contextDocument?: Document): void => {
		(contextDocument || getDOM().document)?.body.setAttribute(
			'class',
			generateVKUITokensClassName(platform, appearance)
		);
	};
</script>

<script lang="ts">
	export let appearance: AppearanceType = 'light';
	export let scheme: AppearanceSchemeType = undefined;

	const platform = usePlatform();
	$: _scheme =
		scheme ||
		getScheme({
			platform: $platform,
			appearance
		});

	let wScheme = writable(_scheme);
	let wAppearance = writable(appearance);

	setContext(ContextKey.scheme, wScheme);
	setContext(ContextKey.appearance, wAppearance);

	$: wScheme.set(_scheme);
	$: wAppearance.set(appearance);

	$: {
		setScheme(scheme, $$props.document);
		setTokens($platform, appearance, $$props.document);
	}
</script>

<slot />

<script context="module" lang="ts">
	import { getDOM } from '@sveltevk/vksui/lib/dom';

	import type { AppearanceType } from '@vkontakte/vk-bridge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { getScheme } from '../../../helpers/getScheme';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { ContextKey } from '@sveltevk/vksui/lib/config';
	import { Platform } from '@sveltevk/vksui/lib/platform';
	import type { AppearanceScheme } from '@sveltevk/vksui/helpers/scheme';

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

	const setScheme = (scheme: AppearanceScheme, contextDocument?: Document): void => {
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
	export let scheme: AppearanceScheme = undefined;

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

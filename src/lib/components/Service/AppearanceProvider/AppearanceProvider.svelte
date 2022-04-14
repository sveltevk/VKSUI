<script context="module" lang="ts">
	import type { AppearanceType } from '@vkontakte/vk-bridge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { getScheme } from '../../../helpers/getScheme';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { ContextKey } from '@sveltevk/vksui/lib/config';
	import { Platform } from '@sveltevk/vksui/lib/platform';
	import type { AppearanceScheme } from '@sveltevk/vksui/helpers/scheme';

	export const generateVKUITokensClassNames = (platform: string, appearance: string): string[] => {
		let classNames = ['vkui--vkBase--light'];

		if (appearance === 'dark') {
			classNames.push('vkui--vkBase--dark');
		}

		switch (platform) {
			case Platform.ANDROID:
				break;
			case Platform.IOS:
				classNames.push(`vkui--vkIOS--${appearance}`);
				break;
			case Platform.VKCOM:
				classNames.push(`vkui--vkCom--${appearance}`);
				break;
			default:
				classNames.push(`vkui--${platform}--${appearance}`);
		}

		return classNames;
	};
</script>

<script lang="ts">
	const platform = usePlatform();
	export let appearance: AppearanceType = 'light';
	export let scheme: AppearanceScheme = undefined;

	$: _scheme =
		scheme ||
		getScheme({
			platform: $platform,
			appearance
		});

	$: className = `vkui${_scheme} ${generateVKUITokensClassNames($platform, appearance).join(' ')}`;

	let wScheme = writable(_scheme);
	let wAppearance = writable(appearance);
	let wClassName = writable(className);

	setContext(ContextKey.scheme, wScheme);
	setContext(ContextKey.appearance, wAppearance);
	setContext(ContextKey.classAppearance, wClassName);

	$: wScheme.set(_scheme);
	$: wAppearance.set(appearance);
	$: wClassName.set(className);
</script>

<slot class={className} />

<script lang="ts">
	import { Platform } from '@sveltevk/vksui/lib/platform';
	import type { AppearanceType } from '@vkontakte/vk-bridge';
	import { Scheme, WebviewType } from '@sveltevk/vksui/lib/config';
	import {
		calculateAdaptivity,
		DESKTOP_SIZE,
		MOBILE_SIZE,
		SizeType,
		SMALL_TABLET_SIZE,
		TABLET_SIZE,
		MOBILE_LANDSCAPE_HEIGHT,
		MEDIUM_HEIGHT
	} from '@sveltevk/vksui/lib/adaptivity';
	import ConfigProvider from '@sveltevk/vksui/components/Service/ConfigProvider/ConfigProvider.svelte';
	import Switch from '@sveltevk/vksui/components/Blocks/Switch/Switch.svelte';
	import type { AppearanceScheme } from '@sveltevk/vksui/helpers/scheme';

	export let scroll = false;
	export let mini = false;

	let os = Platform.ANDROID;
	let scheme: AppearanceScheme = Scheme.BRIGHT_LIGHT;
	let webviewType = WebviewType.VKAPPS;
	let sizeY = SizeType.REGULAR;
	let windowWidth = MOBILE_SIZE;
	let windowHeight = MOBILE_LANDSCAPE_HEIGHT;
	let hasMouse = true;
	let appearance: AppearanceType = 'light';

	$: sizeX = calculateAdaptivity(windowWidth, windowHeight, {}).sizeX;
	$: sizeY = calculateAdaptivity(windowWidth, windowHeight, {}).sizeY;
	$: windowWidth = os === Platform.VKCOM ? TABLET_SIZE : windowWidth;
	$: hasMouse = os === Platform.VKCOM ? true : hasMouse;
	$: scheme =
		os === Platform.VKCOM
			? appearance === 'light'
				? Scheme.VKCOM_LIGHT
				: Scheme.VKCOM_DARK
			: appearance === 'light'
			? Scheme.BRIGHT_LIGHT
			: Scheme.SPACE_GRAY;
</script>

<!-- svelte-ignore a11y-no-onchange -->
<div class="fixable">
	<div>
		platform:
		<select bind:value={os}>
			{#each [Platform.ANDROID, Platform.IOS, Platform.VKCOM] as name}
				<option value={name}>{name}</option>
			{/each}
		</select>
	</div>
	<div>
		appearance:
		<select bind:value={appearance}>
			{#each ['light', 'dark'] as name}
				<option value={name}>{name}</option>
			{/each}
		</select>
	</div>
	{#if !mini}
		<!-- <div>
			webviewType:
			<select bind:value={webviewType}>
				{#each [WebviewType.VKAPPS, WebviewType.INTERNAL] as name}
					<option value={name}>{name}</option>
				{/each}
			</select>
		</div> -->
		<div>
			windowWidth:
			<select bind:value={windowWidth} disabled={os === Platform.VKCOM}>
				{#each [DESKTOP_SIZE, TABLET_SIZE, SMALL_TABLET_SIZE, MOBILE_SIZE] as name}
					<option value={name}>{name}px</option>
				{/each}
			</select>
		</div>
		<div>
			windowHeight:
			<select bind:value={windowHeight}>
				{#each [MOBILE_LANDSCAPE_HEIGHT, MEDIUM_HEIGHT] as name}
					<option value={name}>{name}px</option>
				{/each}
			</select>
		</div>
		<div>
			hasMouse:
			<Switch bind:checked={hasMouse} />
		</div>
	{/if}
</div>

<ConfigProvider platform={os} {scheme} {webviewType} {sizeY} {sizeX}>
	<div
		class="Example"
		class:mini
		class:scroll
		style={mini ? '' : `width:${windowWidth}px;height:${windowHeight}px;`}
	>
		<slot />
	</div>
</ConfigProvider>

<style>
	.Example {
		height: 667px;
		width: 320px;
		/* overflow-y: auto; */
		border: 1px solid var(--background_highlighted);
		display: block;
		background: var(--background_content);
		border-radius: 12px;
		overflow-x: hidden;
	}

	.mini {
		height: auto;
		width: 100%;
	}

	.scroll {
		overflow-y: auto;
	}

	.fixable {
		display: flex;
		flex-wrap: wrap;
	}
	.fixable div {
		display: flex;
		margin-right: 16px;
		margin-bottom: 28px;
	}
</style>

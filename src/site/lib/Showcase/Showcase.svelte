<script lang="ts">
	import { Platform } from '@sveltevk/vksui/lib/platform';
	import type { AppearanceSchemeType } from '@vkontakte/vk-bridge';
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
	import { getDOM } from '@sveltevk/vksui/lib/dom';
	import Frame from '$site/lib/Frame/Frame.svelte';

	export let scroll: boolean = false;
	export let mini: boolean = false;

	const { window } = getDOM();

	let os = (window?.localStorage.getItem('os') as Platform) || Platform.ANDROID;
	let scheme =
		(window?.localStorage.getItem('scheme') as AppearanceSchemeType) || Scheme.BRIGHT_LIGHT;
	let webviewType =
		(window?.localStorage.getItem('webviewType') as WebviewType) || WebviewType.VKAPPS;
	let sizeY = (window?.localStorage.getItem('sizeY') as SizeType) || SizeType.REGULAR;
	let windowWidth = parseInt(window?.localStorage.getItem('windowWidth')) || MOBILE_SIZE;
	let windowHeight =
		parseInt(window?.localStorage.getItem('windowHeight')) || MOBILE_LANDSCAPE_HEIGHT;
	let hasMouse = true;

	const frames: HTMLIFrameElement[] = [];

	const getRefFrame = (f: HTMLIFrameElement) => {
		frames.push(f);

		const sprite = document.getElementById('__SVG_SPRITE_NODE__');
		const masks = document.getElementById('__SVG_MASKS_NODE__');

		if (sprite) {
			f.contentDocument.body.appendChild(sprite.cloneNode(true));
		}

		if (masks) {
			f.contentDocument.body.appendChild(masks.cloneNode(true));
		}

		f.contentDocument.body.setAttribute('scheme', scheme);
	};

	const updateFrameScheme = (s: AppearanceSchemeType) => {
		frames.forEach((f) => {
			f.contentDocument.body.setAttribute('scheme', s);
		});
	};

	$: updateFrameScheme(scheme);
	$: sizeX = calculateAdaptivity(windowWidth, windowHeight, {}).sizeX;
</script>

<!-- svelte-ignore a11y-no-onchange -->
<div class="fixable">
	<div>
		platform:
		<select bind:value={os} on:change={() => window.localStorage.setItem('os', os)}>
			{#each [Platform.ANDROID, Platform.IOS, Platform.VKCOM] as name}
				<option value={name}>{name}</option>
			{/each}
		</select>
	</div>
	<div>
		scheme:
		<select bind:value={scheme} on:change={() => window.localStorage.setItem('scheme', scheme)}>
			{#each [Scheme.BRIGHT_LIGHT, Scheme.SPACE_GRAY, 'vkcom_light', 'vkcom_dark'] as name}
				<option value={name}>{name}</option>
			{/each}
		</select>
	</div>
	{#if !mini}
		<div>
			webviewType:
			<select
				bind:value={webviewType}
				on:change={() => window.localStorage.setItem('webviewType', webviewType)}
			>
				{#each [WebviewType.VKAPPS, WebviewType.INTERNAL] as name}
					<option value={name}>{name}</option>
				{/each}
			</select>
		</div>
		<div>
			windowWidth:
			<select
				bind:value={windowWidth}
				on:change={() => window.localStorage.setItem('windowWidth', windowWidth.toString())}
			>
				{#each [DESKTOP_SIZE, TABLET_SIZE, SMALL_TABLET_SIZE, MOBILE_SIZE] as name}
					<option value={name}>{name}px</option>
				{/each}
			</select>
		</div>
		<div>
			windowHeight:
			<select
				bind:value={windowHeight}
				on:change={() => window.localStorage.setItem('windowHeight', windowHeight.toString())}
			>
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

<ConfigProvider platform={os} {scheme} {webviewType} {sizeY} {sizeX} {hasMouse}>
	<div
		class="Example"
		class:mini
		class:scroll
		style={`width:${windowWidth}px;` + (mini ? '' : `height:${windowHeight}px;`)}
	>
		<slot />
	</div>
</ConfigProvider>

<style>
	.Example {
		height: 667px;
		width: 375px;
		/* overflow-y: auto; */
		border: 1px solid var(--background_highlighted);
		display: block;
		background: var(--background_content);
		border-radius: 12px;
	}

	.mini {
		height: auto;
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

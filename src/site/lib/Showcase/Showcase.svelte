<script lang="ts">
	import { Platform } from '@sveltevk/vksui/lib/platform';
	import type { AppearanceType } from '@vkontakte/vk-bridge';
	import { WebviewType } from '@sveltevk/vksui/lib/config';
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
	import { onMount, tick } from 'svelte';
	import { getDOM } from '@sveltevk/vksui/lib/dom';
	import { noop } from 'svelte/internal';
	import AppearanceProvider from '@sveltevk/vksui/components/Service/AppearanceProvider/AppearanceProvider.svelte';

	export let scroll = false;
	export let mini = false;
	export let frame = false;

	// Frame:
	let iframe: HTMLIFrameElement;
	let example: HTMLElement;
	let hidden = frame;
	const dom = getDOM();
	let contentDocument = dom.document;
	let contentWindow = dom.window;

	const mountComponent = (el: HTMLElement, target: HTMLElement) => {
		target.appendChild(el);
		hidden = false;
	};

	const loadHandler = () => {
		// import styles
		Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).forEach((node) =>
			iframe.contentDocument.head.appendChild(node.cloneNode(true))
		);
		const sprite = document.getElementById('__SVG_SPRITE_NODE__');
		const masks = document.getElementById('__SVG_MASKS_NODE__');

		if (sprite) {
			let cloneNode = sprite.cloneNode(true);
			iframe.contentDocument.body.appendChild(cloneNode);

			const updateSprite = () => {
				if (!iframe) {
					sprite.removeEventListener('DOMNodeInserted', updateSprite);
					return;
				}

				iframe.contentDocument.body.removeChild(cloneNode);
				cloneNode = sprite.cloneNode(true);
				iframe.contentDocument.body.appendChild(cloneNode);
			};

			// FIXME: DOMNodeInserted is Deprecated
			sprite.addEventListener('DOMNodeInserted', updateSprite);
		}

		if (masks) {
			iframe.contentDocument.body.appendChild(masks.cloneNode(true));
		}

		mountComponent(example, iframe.contentDocument.body);
	};

	onMount(async () => {
		if (!frame) {
			return noop;
		}

		await tick();
		if (iframe.contentDocument.readyState === 'complete' && iframe.contentDocument.defaultView) {
			loadHandler();
		} else {
			iframe.addEventListener('load', loadHandler);
		}

		contentDocument = iframe.contentDocument;
		contentWindow = iframe.contentWindow;
		return () => iframe.removeEventListener('load', loadHandler);
	});

	// Config:

	let os = Platform.ANDROID;
	let webviewType = WebviewType.INTERNAL;
	let sizeY = SizeType.REGULAR;
	let windowWidth = MOBILE_SIZE;
	let windowHeight = MOBILE_LANDSCAPE_HEIGHT;
	let hasMouse = true;
	let appearance: AppearanceType = 'light';

	$: sizeX = calculateAdaptivity(windowWidth, windowHeight, {}).sizeX;
	$: sizeY = calculateAdaptivity(windowWidth, windowHeight, {}).sizeY;
	$: windowWidth = os === Platform.VKCOM ? TABLET_SIZE : windowWidth;
	$: hasMouse = os === Platform.VKCOM ? true : hasMouse;
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

<ConfigProvider {contentWindow} {contentDocument} platform={os} {webviewType} {sizeY} {sizeX}>
	<AppearanceProvider {appearance} let:class={className}>
		<div
			bind:this={example}
			{hidden}
			class="vkui vkui__root {className}"
			class:Example={!frame}
			class:mini
			class:scroll
			style={mini || frame ? '' : `width:${windowWidth}px;height:${windowHeight}px;`}
		>
			{#key hidden}
				<slot />
			{/key}
		</div>
	</AppearanceProvider>
</ConfigProvider>

{#if frame}
	<iframe
		bind:this={iframe}
		class="Example"
		class:mini
		style={mini ? '' : `width:${windowWidth}px;height:${windowHeight}px;`}
		title="frame"
	/>
{/if}

<style>
	.Example {
		height: 667px;
		width: 320px;
		/* overflow-y: auto; */
		border: 1px solid var(--background_highlighted);
		display: block;
		background: var(--background_content);
		border-radius: 12px;
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

	.vkui__root {
		background: var(--background_content);
	}
</style>

<script lang="ts" context="module">
	export const AVATAR_DEFAULT_SIZE = 48;
	export const AVATAR_DEFAULT_SHADOW = true;
</script>

<script lang="ts">
	import Icon12Circle from '@sveltevk/icons/dist/12/circle';
	import Icon12OnlineMobile from '@sveltevk/icons/dist/12/online_mobile';
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import Tappable from '$lib/components/Service/Tappable/Tappable.svelte';

	/**
	 * Рекомендуемый сет значений: 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24
	 */
	export let size: number = AVATAR_DEFAULT_SIZE;
	export let mode: 'default' | 'image' | 'app' = 'default';
	export let shadow: boolean = AVATAR_DEFAULT_SHADOW;
	export let badge: 'online' | 'online-mobile' = undefined;
	export let overlayMode: 'dark' | 'light' = undefined;
	/**
	 * Поведение показа overlay: "hover" - при наведении, "always" - всегда
	 */
	export let overlayAction: 'hover' | 'always' = undefined;

	export let style: string = '';
	export let src: string = undefined;
	export let srcSet: string = undefined;

	let failedImage = false;

	const onImageError = () => {
		failedImage = true;
	};

	const onImageLoad = () => {
		failedImage = false;
	};

	const platform = usePlatform();

	let borderRadius: string = '50%';

	switch (mode) {
		case 'image':
			size < 64 && (borderRadius = '4px');
			size >= 64 && size < 96 && (borderRadius = '6px');
			size >= 96 && (borderRadius = '8px');
			break;
		case 'app':
			size <= 40 && (borderRadius = '8px');
			size > 40 && size < 56 && (borderRadius = '10px');
			size >= 56 && size < 64 && (borderRadius = '12px');
			size >= 64 && size < 84 && (borderRadius = '16px');
			size >= 84 && (borderRadius = '18px');
			break;
	}

	$: hasSrc = src || srcSet;
</script>

<!-- 
@component
Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

**Важно:** свойство `style` применяется к `img`, а не к корневому элементу. Чаще всего требуется стилизовать именно изображение, а не обертку.

```tsx
<Avatar src="https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"/>
```
-->

<div
	class={classNames(
		getClassName('Avatar', $platform),
		$$props.class,
		`Avatar--type-${mode}`,
		`Avatar--sz-${size}`,
		{
			'Avatar--shadow': shadow,
			'Avatar--failed': failedImage
		}
	)}
	role={hasSrc ? 'img' : 'presentation'}
	style={style + `; width: ${size}px; height: ${size}px; border-radius:${borderRadius}`}
>
	{#if hasSrc}
		<img {src} on:error={onImageError} on:load={onImageLoad} alt="" class="Avatar__img" />
	{/if}
	{#if $$slots.default}
		<div
			class="Avatar__children"
			style={`width: ${size}px; height: ${size}px; border-radius:${borderRadius}`}
		>
			<slot />
		</div>
	{/if}
	{#if $$slots.overlayIcon}
		<Tappable
			Component="button"
			class={classNames('Avatar__overlay', {
				'Avatar__overlay--visible': overlayAction === 'always',
				'Avatar__overlay--light': overlayMode === 'light',
				'Avatar__overlay--dark': overlayMode === 'dark'
			})}
			hoverMode="Avatar__overlay--visible"
			focusVisibleMode="Avatar__overlay--focus-visible"
			hasActive={false}
			on:click
		>
			<slot name="overlayIcon" />
		</Tappable>
	{/if}
	{#if $$slots.badge || badge}
		<div
			class={classNames('Avatar__badge', {
				'Avatar__badge--large': size >= 96,
				'Avatar__badge--shadow': badge !== 'online' && badge !== 'online-mobile'
			})}
		>
			{#if badge === 'online'}
				<div class="Avatar__badge-online">
					<Icon12Circle width={size >= 72 ? 15 : 12} height={size >= 72 ? 15 : 12} />
				</div>
			{:else if badge === 'online-mobile'}
				<div class="Avatar__badge-online-mobile">
					<Icon12OnlineMobile width={size >= 72 ? 9 : 8} height={size >= 72 ? 15 : 12} />
				</div>
			{:else}
				<slot name="badge" />
			{/if}
		</div>
	{/if}
</div>

<style>
	.Avatar {
		flex-shrink: 0;
		box-sizing: border-box;
		color: var(--placeholder_icon_background);
		background: currentColor;
		background-size: cover;
		position: relative;
	}

	.Avatar--failed .Avatar__img {
		visibility: hidden;
	}

	.Avatar__img {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		border: none;
		border-radius: inherit;
	}

	.Avatar__children,
	.Avatar--shadow::after {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
	}

	.Avatar--shadow::after {
		content: '';
		box-shadow: inset 0 0 0 var(--thin-border) var(--image_border);
	}

	.Avatar__overlay {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		opacity: 0;
		transition: opacity 0.3s;
		border: none;
	}

	.Avatar__overlay--light {
		background-color: rgba(255, 255, 255, 0.85);
	}

	.Avatar__overlay--dark {
		background-color: rgba(0, 0, 0, 0.6);
	}

	.Avatar__overlay--visible {
		opacity: 1;
	}

	.Avatar__overlay--focus-visible {
		opacity: 1;
		box-shadow: 0 0 0 2px var(--accent);
	}

	.Avatar__children {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--icon_secondary);
	}

	.Avatar__badge {
		position: absolute;
		z-index: 1;
		bottom: calc(14% - 1px);
		right: calc(14% - 1px);
		transform: translate(50%, 50%);
	}

	.Avatar__badge--large {
		bottom: 14%;
		right: 14%;
	}

	.Avatar__badge--shadow {
		filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.08));
	}

	.Avatar__badge-online {
		color: #4bb34b;
		background-color: var(--background_content);
		border-radius: 50%;
	}

	.Avatar__badge-online-mobile {
		color: #4bb34b;
		background-color: var(--background_content);
		border-radius: 3px;
		padding: 2px;
	}

	/**
 * .CellButton
 */
	:global(.CellButton) > .Avatar {
		color: var(--button_muted_background);
	}

	:global(.CellButton) > .Avatar :global(.Icon) {
		color: var(--accent);
	}

	:global(.CellButton--danger) > .Avatar :global(.Icon) {
		color: var(--destructive);
	}

	/**
 * .PanelHeader
 */
	:global(.PanelHeader__left) .Avatar {
		margin-left: 8px;
	}

	:global(.PanelHeader__right) .Avatar {
		margin-right: 8px;
	}

	/**
 * .RichCell
 */
	:global(.RichCell) > .Avatar {
		margin-right: 12px;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	:global(.RichCell) > .Avatar--sz-48 {
		margin-top: 6px;
		margin-bottom: 6px;
	}

	/**
 * .SimpleCell
 */
	:global(.SimpleCell) > .Avatar {
		margin-right: 12px;
	}

	:global(.SimpleCell) > .Avatar--sz-28,
	:global(.SimpleCell) > .Avatar--sz-32 {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	:global(.SimpleCell) > .Avatar--sz-40 {
		margin-top: 4px;
		margin-bottom: 4px;
	}

	:global(.SimpleCell) > .Avatar--sz-48,
	:global(.SimpleCell) > .Avatar--sz-72 {
		margin-top: 6px;
		margin-bottom: 6px;
	}

	:global(.SimpleCell--ios) > .Avatar--sz-28,
	:global(.SimpleCell--ios) > .Avatar--sz-32 {
		margin-left: 4px;
	}

	:global(.SimpleCell--sizeY-compact) > .Avatar--sz-28,
	:global(.SimpleCell--sizeY-compact) > .Avatar--sz-32 {
		margin-top: 8px;
		margin-bottom: 8px;
	}

	:global(.SimpleCell--sizeY-compact) > .Avatar--sz-40 {
		margin-top: 2px;
		margin-bottom: 2px;
	}

	:global(.SimpleCell--sizeY-compact) > .Avatar--sz-48 {
		margin-top: 4px;
		margin-bottom: 4px;
	}
</style>

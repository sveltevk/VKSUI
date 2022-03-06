<script lang="ts" context="module">
	export const AVATAR_DEFAULT_SIZE = 48;
	export const AVATAR_DEFAULT_SHADOW = true;
</script>

<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	/**
	 * Рекомендуемый сет значений: 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24
	 */
	export let size: number = AVATAR_DEFAULT_SIZE;
	export let mode: 'default' | 'image' | 'app' = 'default';
	export let shadow: boolean = AVATAR_DEFAULT_SHADOW;
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
</div>

<style>
	:global(.Avatar) {
		flex-shrink: 0;
		box-sizing: border-box;
		color: var(--placeholder_icon_background);
		background: currentColor;
		background-size: cover;
		position: relative;
	}

	:global(.Avatar--failed) .Avatar__img {
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
	:global(.Avatar--shadow)::after {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
	}

	:global(.Avatar--shadow)::after {
		content: '';
		box-shadow: inset 0 0 0 var(--thin-border) var(--image_border);
	}

	.Avatar__children {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--icon_secondary);
	}

	/**
 * .CellButton
 */
	:global(.CellButton) > :global(.Avatar) {
		color: var(--button_muted_background);
	}

	:global(.CellButton) > :global(.Avatar) :global(.Icon) {
		color: var(--accent);
	}

	:global(.CellButton--danger) > :global(.Avatar) :global(.Icon) {
		color: var(--destructive);
	}

	/**
 * .PanelHeader
 */
	:global(.PanelHeader__left) :global(.Avatar) {
		margin-left: 8px;
	}

	:global(.PanelHeader__right) :global(.Avatar) {
		margin-right: 8px;
	}

	/**
 * .RichCell
 */
	:global(.RichCell) > :global(.Avatar) {
		margin-right: 12px;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	:global(.RichCell) > :global(.Avatar--sz-48) {
		margin-top: 6px;
		margin-bottom: 6px;
	}

	/**
 * .SimpleCell
 */
	:global(.SimpleCell) > :global(.Avatar) {
		margin-right: 12px;
	}

	:global(.SimpleCell) > :global(.Avatar--sz-28),
	:global(.SimpleCell) > :global(.Avatar--sz-32) {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	:global(.SimpleCell) > :global(.Avatar--sz-40) {
		margin-top: 4px;
		margin-bottom: 4px;
	}

	:global(.SimpleCell) > :global(.Avatar--sz-48),
	:global(.SimpleCell) > :global(.Avatar--sz-72) {
		margin-top: 6px;
		margin-bottom: 6px;
	}

	:global(.SimpleCell--ios) > :global(.Avatar--sz-28),
	:global(.SimpleCell--ios) > :global(.Avatar--sz-32) {
		margin-left: 4px;
	}

	:global(.SimpleCell--sizeY-compact) > :global(.Avatar--sz-28),
	:global(.SimpleCell--sizeY-compact) > :global(.Avatar--sz-32) {
		margin-top: 8px;
		margin-bottom: 8px;
	}

	:global(.SimpleCell--sizeY-compact) > :global(.Avatar--sz-40) {
		margin-top: 2px;
		margin-bottom: 2px;
	}

	:global(.SimpleCell--sizeY-compact) > :global(.Avatar--sz-48) {
		margin-top: 4px;
		margin-bottom: 4px;
	}
</style>

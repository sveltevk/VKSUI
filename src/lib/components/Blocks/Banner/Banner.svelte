<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, IOS, VKCOM } from '@sveltevk/vksui/lib/platform';
	import Icon24Chevron from '@sveltevk/icons/dist/24/chevron';
	import Icon24DismissSubstract from '@sveltevk/icons/dist/24/dismiss_substract';
	import Icon24DismissDark from '@sveltevk/icons/dist/24/dismiss_dark';
	import Icon24Cancel from '@sveltevk/icons/dist/24/cancel';
	import Tappable from '@sveltevk/vksui/components/Service/Tappable/Tappable.svelte';
	import BannerHeader from './BannerHeader.svelte';
	import BannerSubheader from './BannerSubheader.svelte';
	import Text from '../../Typography/Text/Text.svelte';
	import IconButton from '../IconButton/IconButton.svelte';

	const dispatch = createEventDispatcher();

	const platform = usePlatform();

	/**
	 * Тип баннера.
	 */
	export let mode: 'tint' | 'image' = 'tint';

	export let size: 's' | 'm' = 's';

	/**
	 * Тип действия в правой части баннера.
	 *
	 * - `dismiss` – отображается иконка крестика, при клике на неё сработает свойство `onDismiss`.
	 * - `expand` – отображается иконка шеврона, которая подразумевает, что при клике на баннер можно куда-то перейти.
	 */
	export let asideMode: 'dismiss' | 'expand' = undefined;

	/**
	 * Срабатывает при клике на иконку крестика при `asideMode="dismiss"`.
	 */
	// export let onDismiss: MouseEventHandler<HTMLDivElement> = undefined;

	/**
	 * `aria-label` для кнопки при `asideMode="dismiss". Необходим, чтобы кнопка была доступной.
	 */
	export let dismissLabel = 'Скрыть';

	/**
	 * Содержимое, отображаемое в левой части баннера.
	 */
	export let before = '';

	/**
	 * Заголовок. <br />
	 * При использовании этого свойства рекомендуется не указывать `text`.
	 */
	export let header = '';

	/**
	 * Подзаголовок. <br />
	 * При использовании этого свойства рекомендуется не указывать `text`.
	 */
	export let subheader = '';

	/**
	 * Текст баннера. <br />
	 * Это свойство следует использовать без указания `header` и `subheader`.
	 */
	export let text = '';

	/**
	 * При использовании `mode="image"`.
	 *
	 * - `light` – в качестве фона используется светлое изображение, цвет текста в баннере будет тёмным.
	 * - `dark` – в качестве фона используется тёмное изображение, цвет текста будет светлым.
	 */
	export let imageTheme: 'light' | 'dark' = 'dark';

	/**
	 * При использовании `mode="image"`.
	 *
	 * Элемент, который нужно стилизовать цветом и/или фоном. Этот элемент будет растянут на 100% ширины и высоты баннера.
	 */
	export let background = '';

	/**
	 * Кнопки, отображаемые в баннере.
	 *
	 * - В режиме `tint` или в `image` со светлым фоном рекомендуется использовать только `<Button mode="primary" />` или `<Button mode="tertiary" />`.
	 * - В режиме `image` с тёмным фоном – `<Button mode="overlay_primary" />`.
	 */
	export let actions = '';

	const onDismiss = (e: Event) => {
		dispatch('dismiss', e);
	};
</script>

<section
	{...$$restProps}
	class={classNames(
		$$restProps.class,
		getClassName('Banner', $platform),
		`Banner--md-${mode}`,
		`Banner--sz-${size}`,
		{ 'Banner--inverted': mode === 'image' && imageTheme === 'dark' }
	)}
	on:click
>
	<Tappable
		class="Banner__in"
		activeMode={$platform === IOS ? 'opacity' : 'background'}
		disabled={asideMode !== 'expand'}
		role={asideMode === 'expand' ? 'button' : undefined}
	>
		{#if mode === 'image' && ($$slots.background || background)}
			<div aria-hidden="true" class="Banner__bg">
				<slot name="background">{background}</slot>
			</div>
		{/if}

		{#if $$slots.before || before}
			<div class="Banner__before">
				<slot name="before">{before}</slot>
			</div>
		{/if}

		<div class="Banner__content">
			{#if $$slots.header || header}
				<BannerHeader {size} component="span" class="Banner__header">
					<slot name="header">{header}</slot>
				</BannerHeader>
			{/if}
			{#if $$slots.subheader || subheader}
				<BannerSubheader {size} component="span" class="Banner__subheader">
					<slot name="subheader">{subheader}</slot>
				</BannerSubheader>
			{/if}
			{#if $$slots.text || text}
				<Text weight="regular" class="Banner__text">
					<slot name="text">{text}</slot>
				</Text>
			{/if}
			{#if $$slots.actions || actions}
				<div class="Banner__actions">
					<slot name="actions">{actions}</slot>
				</div>
			{/if}
		</div>

		{#if !!asideMode}
			<div class="Banner__aside">
				{#if asideMode === 'expand'}
					<Icon24Chevron />
				{/if}

				{#if asideMode === 'dismiss'}
					<IconButton
						aria-label={dismissLabel}
						class="Banner__dismiss"
						on:click={onDismiss}
						hoverMode="opacity"
						hasActive={false}
					>
						{#if $platform === ANDROID || $platform === VKCOM}
							<Icon24Cancel />
						{/if}
						{#if $platform === IOS}
							{#if mode === 'image'}
								<Icon24DismissDark />
							{:else}
								<Icon24DismissSubstract />
							{/if}
						{/if}
					</IconButton>
				{/if}
			</div>
		{/if}
	</Tappable>

	<slot />
</section>

<style>
	.Banner {
		margin: 12px 0;
		padding: 0 16px;
		color: var(--text_primary);
	}

	:global(.Banner__in) {
		position: relative;
		display: flex;
		flex-flow: row nowrap;
		align-items: stretch;
		padding: 12px;
		padding-left: 16px;
		background-color: var(--content_tint_background);
		border-radius: 8px;
		overflow: hidden;
	}

	:global(.Banner__in::before) {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		display: block;
		width: 100%;
		height: 100%;
		border: var(--thin-border) solid var(--image_border);
		border-radius: inherit;
		pointer-events: none;
		box-sizing: border-box;
		z-index: 2;
	}

	.Banner__before {
		position: relative;
		margin-right: 12px;
		z-index: 2;
	}

	.Banner__content {
		position: relative;
		flex: 1;
		display: flex;
		justify-content: center;
		flex-direction: column;
		min-width: 0;
		z-index: 2;
	}

	:global(.Banner__header) {
		display: block;
	}

	:global(.Banner__subheader) {
		display: block;
		color: var(--text_subhead);
	}

	.Banner__bg {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}

	.Banner__bg,
	.Banner__bg > :global(*) {
		width: 100%;
		height: 100%;
	}

	.Banner__aside {
		display: flex;
		flex-flow: row nowrap;
		align-content: center;
		align-items: center;
		justify-content: flex-end;
		width: 28px;
		color: var(--icon_tertiary);
	}

	:global(.Banner__dismiss) {
		position: absolute;
		top: 2px;
		right: 2px;
		display: flex;
		flex-flow: row nowrap;
		align-content: center;
		align-items: center;
		justify-content: center;
		color: var(--icon_secondary);
		z-index: 3;
	}

	.Banner__actions {
		margin-bottom: -6px;
	}

	:global(.Banner__subheader:not(:first-child)),
	:global(.Banner__text:not(:first-child)) {
		margin-top: 2px;
	}

	/**
 * Mode "image"
 */
	.Banner--md-image :global(.Banner__in) {
		background-color: var(--content_tint_background);
	}

	.Banner--md-image :global(.Banner__dismiss),
	.Banner--inverted {
		color: var(--white);
	}

	:global(.Banner--inverted .Banner__subheader) {
		color: var(--white);
		opacity: 0.72;
	}

	/**
 * Size "s"
 */
	.Banner--sz-s .Banner__before {
		margin-left: -4px;
	}

	/**
 * Size "m"
 */
	.Banner--sz-m :global(.Banner__in) {
		padding: 16px;
	}

	.Banner--sz-m :global(.Banner__subheader:not(:first-child)),
	.Banner--sz-m :global(.Banner__text:not(:first-child)) {
		margin-top: 4px;
	}

	/**
 * iOS
 */
	.Banner--ios {
		padding: 0 12px;
	}

	.Banner--ios :global(.Banner__in) {
		border-radius: 10px;
	}

	.Banner--ios :global(.Banner__dismiss),
	.Banner--ios.Banner--md-image :global(.Banner__dismiss) {
		color: var(--icon_tertiary);
	}
</style>

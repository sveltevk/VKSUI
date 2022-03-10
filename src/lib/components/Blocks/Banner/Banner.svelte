<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, IOS } from '@sveltevk/vksui/lib/platform';
	import Icon24Chevron from '@sveltevk/icons/dist/24/chevron';
	import Icon24DismissSubstract from '@sveltevk/icons/dist/24/dismiss_substract';
	import Icon24DismissDark from '@sveltevk/icons/dist/24/dismiss_dark';
	import Icon24Cancel from '@sveltevk/icons/dist/24/cancel';
	import Tappable from '@sveltevk/vksui/components/Service/Tappable/Tappable.svelte';
	import svelteDiv from '@sveltevk/vksui/components/Elements/div/div.svelte';

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

	$: innerComponent = asideMode === 'expand' ? Tappable : svelteDiv;

	const onDismiss = (e: Event) => {
		dispatch('dismiss', e);
	};
</script>

<div
	{...$$restProps}
	class={classNames(
		getClassName('Banner', $platform),
		`Banner--md-${mode}`,
		`Banner--sz-${size}`,
		{ 'Banner--inverted': mode === 'image' && imageTheme === 'dark' },
		$$props.class
	)}
	on:click
>
	<svelte:component this={innerComponent} class="Banner__in">
		{#if mode === 'image' && ($$slots.background || background)}
			<div class="Banner__bg">
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
				<div class="Banner__header">
					<slot name="header">{header}</slot>
				</div>
			{/if}
			{#if $$slots.subheader || subheader}
				<div class="Banner__subheader">
					<slot name="subheader">{subheader}</slot>
				</div>
			{/if}
			{#if $$slots.text || text}
				<div class="Banner__text">
					<slot name="text">{text}</slot>
				</div>
			{/if}
			{#if $$slots.actions || actions}
				<div class="Banner__actions">
					<slot name="actions">{actions}</slot>
				</div>
			{/if}
		</div>

		{#if asideMode === 'expand'}
			<div class="Banner__expand">
				<Icon24Chevron />
			</div>
		{/if}

		{#if asideMode === 'dismiss'}
			<div class="Banner__dismiss">
				<div class="Banner__dismissIcon" on:click={onDismiss}>
					{#if $platform === ANDROID}
						<Icon24Cancel />
					{/if}
					{#if $platform === IOS}
						{#if mode === 'image'}
							<Icon24DismissDark />
						{:else}
							<Icon24DismissSubstract />
						{/if}
					{/if}
				</div>
			</div>
		{/if}
	</svelte:component>

	<slot />
</div>

<style>
	.Banner {
		color: var(--text_primary);
		margin: 12px 0;
	}

	:global(.Banner__in) {
		display: flex;
		position: relative;
		overflow: hidden;
	}

	:global(.Banner__in.Tappable--active) {
		opacity: 0.6;
	}

	:global(.Banner__in::before) {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		border: 1px solid var(--image_border);
		z-index: 3;
		box-sizing: border-box;
		border-radius: inherit;
		pointer-events: none;
	}

	@media (min-resolution: 2dppx) {
		:global(.Banner__in::before) {
			border-width: 0.5px;
		}
	}

	@media (min-resolution: 3dppx) {
		:global(.Banner__in::before) {
			border-width: 0.33px;
		}
	}

	.Banner__before {
		margin-right: 12px;
	}

	.Banner__content {
		flex: 1;
		min-width: 0;
	}

	.Banner__header {
		font-weight: 600;
	}

	.Banner__before + .Banner__content .Banner__header {
		margin-top: 2px;
	}

	.Banner__subheader {
		color: var(--text_subhead);
	}

	.Banner__text {
		font-size: 15px;
		line-height: 20px;
	}

	.Banner__bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	.Banner__bg > :global(*) {
		width: 100%;
		height: 100%;
	}

	.Banner__expand {
		align-self: center;
		color: var(--icon_tertiary);
		margin-left: 12px;
	}

	.Banner__dismiss {
		width: 28px;
	}

	.Banner__dismissIcon {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 4;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--icon_tertiary);
	}

	.Banner__dismissIcon:active {
		opacity: 0.4;
	}

	.Banner__actions {
		margin-bottom: -6px;
	}

	.Banner__actions :global(.Button) {
		margin-top: 12px;
		margin-right: 16px;
		margin-bottom: 6px;
	}

	.Banner__actions :global(.Button--lvl-tertiary) {
		margin: 4px 16px 2px -16px;
	}

	.Banner__actions :global(.Button--lvl-tertiary:first-child) {
		margin-top: 4px;
	}

	.Banner__actions
		:global(.Button:not(:global(.Button--lvl-tertiary))
			+ .Button:not(:global(.Button--lvl-tertiary))) {
		margin-top: 0;
	}

	.Banner__actions
		:global(.Button:not(:global(.Button--lvl-tertiary)))
		+ :global(.Button--lvl-tertiary) {
		margin-top: 2px;
		margin-left: -16px;
	}

	.Banner__actions :global(.Button--lvl-tertiary + .Button--lvl-tertiary) {
		margin-top: 2px;
	}

	/**
 * Size "s"
 */

	.Banner--sz-s .Banner__header {
		line-height: 20px;
		font-size: 16px;
	}

	.Banner--sz-s .Banner__subheader {
		line-height: 16px;
		font-size: 13px;
	}

	.Banner--sz-s .Banner__subheader:not(:first-child),
	.Banner--sz-s .Banner__text:not(:first-child) {
		margin-top: 2px;
	}

	/**
 * Size "m"
 */

	.Banner--sz-m .Banner__header {
		line-height: 24px;
		font-size: 20px;
	}

	.Banner--sz-m .Banner__subheader {
		line-height: 20px;
		font-size: 15px;
	}

	.Banner--sz-m .Banner__subheader:not(:first-child),
	.Banner--sz-m .Banner__text:not(:first-child) {
		margin-top: 4px;
	}

	/**
 * Mode "tint"
 */

	.Banner--md-tint :global(.Banner__in),
	.Banner--md-tint :global(.Banner__in.Tappable--active) {
		background-color: var(--content_tint_background);
	}

	.Banner--md-tint :global(.Banner__in) {
		padding: 12px;
	}

	/**
 * Mode "tint" and size "s"
 */

	.Banner--md-tint.Banner--sz-s .Banner__before {
		margin-right: 8px;
	}

	.Banner--md-tint.Banner--sz-s .Banner__content {
		padding-left: 4px;
	}

	/**
 * Mode "tint" and size "m"
 */

	.Banner--md-tint.Banner--sz-m :global(.Banner__in) {
		padding: 16px;
	}

	/**
 * Mode "image"
 */

	.Banner--md-image :global(.Banner__in),
	.Banner--md-image :global(.Banner__in.Tappable--active) {
		background-color: var(--content_tint_background);
		padding: 12px 16px;
	}

	.Banner--md-image .Banner__before,
	.Banner--md-image .Banner__content {
		position: relative;
		z-index: 2;
	}

	.Banner--inverted {
		color: var(--white);
	}

	.Banner--inverted .Banner__subheader {
		color: var(--white);
		opacity: 0.72;
	}

	/**
 * Mode "tint" and size "m"
 */

	.Banner--md-image.Banner--sz-m :global(.Banner__in) {
		padding: 16px;
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

	/**
 * Android
 */

	.Banner--android {
		padding: 0 16px;
	}

	.Banner--android :global(.Banner__in) {
		border-radius: 8px;
	}

	.Banner--android .Banner__dismissIcon {
		color: var(--icon_secondary);
	}

	.Banner--android.Banner--md-image .Banner__dismissIcon {
		color: var(--white);
	}
</style>

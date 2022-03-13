<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';

	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { ViewHeight, ViewWidth } from '@sveltevk/vksui/lib/adaptivity';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, IOS } from '@sveltevk/vksui/lib/platform';
	import PanelHeaderButton from '../../Layout/PanelHeaderButton/PanelHeaderButton.svelte';
	import Headline from '../../Typography/Headline/Headline.svelte';
	import Title from '../../Typography/Title/Title.svelte';
	import Icon24Dismiss from '@sveltevk/icons/dist/24/dismiss';
	import ModalDismissButton from '../../Modals/ModalDismissButton/ModalDismissButton.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/**
	 * Заголовок карточки
	 */
	export let header = '';

	/**
	 * Подзаголовок
	 */
	export let subheader = '';

	/**
	 * Тип отображения кнопок: вертикальный или горизонтальный
	 */
	export let actionsLayout: 'vertical' | 'horizontal' = 'horizontal';

	const platform = usePlatform();
	const adaptivity = useAdaptivity();
	$: isDesktop =
		$adaptivity.viewWidth >= ViewWidth.SMALL_TABLET &&
		($adaptivity.hasMouse || $adaptivity.viewHeight >= ViewHeight.MEDIUM);
	const isSoftwareKeyboardOpened = false; // FIXME: useKeyboard

	const onClose = (e: Event) => dispatch('close', e);

	$: canShowCloseBtn = $adaptivity.viewWidth >= ViewWidth.SMALL_TABLET;
	$: canShowCloseBtnIos = $platform === IOS && !canShowCloseBtn;
</script>

<div
	{...$$restProps}
	class={classNames($$restProps.class, getClassName('ModalCardBase', $platform), {
		'ModalCardBase--desktop': isDesktop
	})}
>
	<div
		class={classNames('ModalCardBase__container', {
			'ModalCardBase__container--softwareKeyboardOpened': isSoftwareKeyboardOpened
		})}
	>
		{#if $$slots.icon}
			<div class="ModalCardBase__icon"><slot name="icon" /></div>
		{/if}
		{#if $$slots.header || header}
			<Title level="2" weight={$platform === ANDROID ? '2' : '1'} class="ModalCardBase__header">
				<slot name="header">{header}</slot>
			</Title>
		{/if}
		{#if $$slots.subheader || subheader}
			<Headline weight="regular" class="ModalCardBase__subheader">
				<slot name="subheader">{subheader}</slot>
			</Headline>
		{/if}

		<slot />

		{#if $$slots.actions}
			<div
				class={classNames('ModalCardBase__actions', {
					'ModalCardBase__actions--v': actionsLayout === 'vertical'
				})}
			>
				<slot name="actions" />
			</div>
		{/if}

		{#if canShowCloseBtn}
			<ModalDismissButton on:click={onClose} />
		{/if}
		{#if canShowCloseBtnIos}
			<PanelHeaderButton class="ModalCardBase__dismiss" on:click={onClose}>
				<Icon24Dismiss />
			</PanelHeaderButton>
		{/if}
	</div>
</div>

<style>
	.ModalCardBase__container {
		box-sizing: border-box;
		position: relative;
		background: var(--modal_card_background);
		border-radius: 18px;
		padding: 16px;
		margin-bottom: var(--safe-area-inset-bottom);
		display: flex;
		flex-direction: column;
		justify-content: center;
		pointer-events: initial;
	}

	.ModalCardBase__container--softwareKeyboardOpened {
		margin-bottom: 0;
	}

	:global(.ModalCardBase__header),
	:global(.ModalCardBase__subheader) {
		text-align: center;
		margin: 0;
		padding: 0 8px;
		word-break: break-word;
	}

	:global(.ModalCardBase__header) {
		color: var(--text_primary);
	}

	:global(.ModalCardBase__subheader) {
		color: var(--text_secondary);
	}

	:global(.ModalCardBase__header + .ModalCardBase__subheader) {
		margin-top: 8px;
	}

	.ModalCardBase__icon {
		margin: 8px auto 16px;
		color: var(--accent);
	}

	.ModalCardBase__actions {
		display: flex;
		margin-left: -6px;
		margin-right: -6px;
		margin-top: 16px;
	}

	:global(.ModalCardBase .UsersStack + .ModalCardBase__actions) {
		margin-top: 32px;
	}

	:global(.ModalCardBase__header + .ModalCardBase__actions),
	:global(.ModalCardBase__subheader + .ModalCardBase__actions) {
		margin-top: 32px;
	}

	.ModalCardBase__actions--v {
		flex-direction: column;
		margin-left: 0;
		margin-right: 0;
	}

	/**
 * iOS
 */

	.ModalCardBase--ios :global(.ModalCardBase__header:first-child) {
		padding-left: 36px;
		padding-right: 36px;
	}

	:global(.ModalCardBase__dismiss) {
		position: absolute;
		top: 4px;
		right: 4px;
		width: 48px;
		height: 48px;
		color: var(--placeholder_icon_foreground_primary);
		justify-content: center;
	}

	/**
 * Android + vkcom
 */

	.ModalCardBase--android .ModalCardBase__container,
	.ModalCardBase--vkcom .ModalCardBase__container {
		border-radius: 12px;
		box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.16), 0 0 4px 0 rgba(0, 0, 0, 0.08);
	}

	/**
 * Desktop
 */

	.ModalCardBase--desktop .ModalCardBase__container {
		border-radius: 8px;
		box-shadow: 0 16px 16px rgba(0, 0, 0, 0.16), 0 0 8px rgba(0, 0, 0, 0.12);
	}
</style>

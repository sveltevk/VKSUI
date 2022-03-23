<script context="module" lang="ts">
	export interface AlertActionInterface {
		title: string;
		action?: () => void;
		autoclose?: boolean;
		mode: 'cancel' | 'destructive' | 'default';
		href?: string;
		target?: string;
		component?: typeof Div;
	}
</script>

<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { useWaitTransitionFinish } from '@sveltevk/vksui/hooks/useWaitTransitionFinish';
	import { ViewWidth } from '@sveltevk/vksui/lib/adaptivity';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, VKCOM } from '@sveltevk/vksui/lib/platform';
	import { createEventDispatcher } from 'svelte';
	import type Div from '../../Elements/div/div.svelte';
	import ModalDismissButton from '../../Modals/ModalDismissButton/ModalDismissButton.svelte';
	import FocusTrap from '../../Service/FocusTrap/FocusTrap.svelte';
	import PopoutWrapper from '../PopoutWrapper/PopoutWrapper.svelte';
	import AlertAction from './AlertAction.svelte';
	import AlertHeader from './AlertHeader.svelte';
	import AlertText from './AlertText.svelte';

	const dispatch = createEventDispatcher();
	const { waitTransitionFinish } = useWaitTransitionFinish();

	export let actionsLayout: 'vertical' | 'horizontal' = 'horizontal';
	export let actions: AlertActionInterface[] = [];
	export let header = '';
	export let text = '';

	export let style = '';

	const platform = usePlatform();
	const adaptivity = useAdaptivity();

	let closing = false;
	let element: HTMLDivElement;

	const timeout = $platform === ANDROID || $platform === VKCOM ? 200 : 300;

	const onItemClick = (item: AlertActionInterface) => {
		const { action, autoclose } = item;

		if (autoclose) {
			closing = true;
			waitTransitionFinish(
				element,
				(e?: TransitionEvent) => {
					if (!e || e.propertyName === 'opacity') {
						autoclose && dispatch('close');
						action && action();
					}
				},
				timeout
			);
		} else {
			action && action();
		}
	};

	const onClose = () => {
		closing = true;
		waitTransitionFinish(
			element,
			(e?: TransitionEvent) => {
				if (!e || e.propertyName === 'opacity') {
					dispatch('close');
				}
			},
			timeout
		);
	};

	const resolvedActionsLayout: typeof actionsLayout =
		$platform === VKCOM ? 'horizontal' : actionsLayout;
	const canShowCloseButton =
		$platform === VKCOM ||
		($platform === ANDROID && $adaptivity.viewWidth >= ViewWidth.SMALL_TABLET);
	const isDesktop = $adaptivity.viewWidth >= ViewWidth.SMALL_TABLET;
</script>

<PopoutWrapper class={$$restProps.class} {closing} {style} on:click={onClose}>
	<FocusTrap
		{...$$restProps}
		bind:ref={element}
		on:click={(e) => e.stopPropagation()}
		on:close={onClose}
		{timeout}
		class={classNames(getClassName('Alert', $platform), {
			'Alert--v': resolvedActionsLayout === 'vertical',
			'Alert--h': resolvedActionsLayout === 'horizontal',
			'Alert--closing': closing,
			'Alert--desktop': isDesktop
		})}
	>
		{#if canShowCloseButton}
			<ModalDismissButton on:click={onClose} />
		{/if}
		<div class="Alert__content">
			{#if $$slots.header || header}
				<AlertHeader platform={$platform}><slot name="header">{header}</slot></AlertHeader>
			{/if}
			{#if $$slots.text || text}
				<AlertText platform={$platform}><slot name="text">{text}</slot></AlertText>
			{/if}
			<slot />
		</div>
		<footer class="Alert__actions">
			{#each actions as action}
				<AlertAction
					component={action.component}
					href={action.href}
					target={action.target}
					mode={action.mode}
					platform={$platform}
					adaptivity={$adaptivity}
					on:click={() => onItemClick(action)}
				>
					{action.title}
				</AlertAction>
			{/each}
		</footer>
	</FocusTrap>
</PopoutWrapper>

<style>
	:global(.Alert) {
		user-select: none;
		color: var(--text_primary);
		position: relative;
		max-width: 416px;
	}

	:global(.Alert::before) {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--modal_card_background);
		z-index: 1;
		content: '';
		border-radius: inherit;
	}

	.Alert__content {
		position: relative;
		z-index: 2;
	}

	:global(.Alert__action) {
		white-space: nowrap;
		background: transparent;
	}

	.Alert__actions {
		display: flex;
		max-width: 100%;
		position: relative;
		z-index: 2;
	}

	/**
 * iOS version
 */
	:global(.Alert--ios) {
		width: 270px;
		border-radius: 12px;
		overflow: hidden;
		animation: vkui-animation-ios-alert-intro 0.3s var(--ios-easing);
	}

	:global(.Alert--ios.Alert--closing) {
		opacity: 0;
		transition: opacity 0.3s var(--ios-easing);
	}

	:global(.Alert--ios) .Alert__content {
		padding: 19px 16px 20px;
		text-align: center;
	}

	:global(.Alert--ios .Alert__header:not(:last-child)) {
		margin-bottom: 7px;
	}

	:global(.Alert--ios) .Alert__content::after {
		content: '';
		position: absolute;
		bottom: 0;
		height: 1px;
		right: 0;
		left: 0;
		background: var(--action_sheet_separator);
		transform-origin: center bottom;
	}

	:global(.Alert--ios.Alert--v) .Alert__actions {
		flex-direction: column;
	}

	:global(.Alert--ios .Alert__action) {
		position: relative;
		font-size: 17px;
		line-height: 44px;
		color: var(--accent);
		border: 0;
		padding: 0 6px;
		margin: 0;
		height: 44px;
		display: block;
		text-align: center;
		text-decoration: none;
		overflow: hidden;
		text-overflow: ellipsis;
		border-radius: 0;
	}

	:global(.Alert--ios .Alert__action:active) {
		z-index: 1;
	}

	:global(.Alert--ios .Alert__action::after) {
		content: '';
		position: absolute;
		background: var(--action_sheet_separator);
	}

	:global(.Alert--ios.Alert--h .Alert__action::after) {
		top: 0;
		right: 0;
		width: 1px;
		height: 100%;
		transform-origin: right center;
	}

	:global(.Alert--ios.Alert--h .Alert__action:last-child::after) {
		content: none;
	}

	:global(.Alert--ios.Alert--h .Alert__action) {
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}

	:global(.Alert--ios.Alert--h .Alert__action:first-child) {
		border-bottom-left-radius: 12px;
	}

	:global(.Alert--ios.Alert--h .Alert__action:last-child) {
		border-bottom-right-radius: 12px;
	}

	:global(.Alert--ios.Alert--v .Alert__action::after) {
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		transform-origin: center bottom;
	}

	:global(.Alert--ios.Alert--v .Alert__action:last-child::after) {
		content: none;
	}

	:global(.Alert--ios.Alert--v .Alert__action:last-child) {
		border-radius: 0 0 12px 12px;
	}

	@media (min-resolution: 2dppx) {
		:global(.Alert--ios) .Alert__content::after,
		:global(.Alert--ios.Alert--v .Alert__action::after) {
			transform: scaleY(0.5);
		}

		:global(.Alert--ios.Alert--h .Alert__action::after) {
			transform: scaleX(0.5);
		}
	}

	@media (min-resolution: 3dppx) {
		:global(.Alert--ios) .Alert__content::after,
		:global(.Alert--ios.Alert--v .Alert__action::after) {
			transform: scaleY(0.33);
		}

		:global(.Alert--ios.Alert--h .Alert__action::after) {
			transform: scaleX(0.33);
		}
	}

	:global(.Alert--ios .Alert__action--cancel) {
		font-weight: 600;
	}

	:global(.Alert--ios .Alert__action--destructive) {
		color: var(--destructive);
	}

	/**
 * Android & VKCOM
 */
	:global(.Alert--android) {
		min-width: 280px;
		margin: auto 24px;
		box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.3), 0 0 35px 0 rgba(0, 0, 0, 0.22);
		border-radius: 12px;
		animation: vkui-animation-android-alert-intro 0.2s ease;
	}

	:global(.Alert--desktop.Alert--android) {
		width: 416px;
	}

	:global(.Alert--android.Alert--closing),
	:global(.Alert--vkcom.Alert--closing) {
		transform: scale(0.95);
		opacity: 0;
		transition: transform 0.2s var(--android-easing), opacity 0.2s var(--android-easing);
	}

	:global(.Alert--android) .Alert__content {
		padding: 24px 24px 20px;
	}

	:global(.Alert--android .Alert__header),
	:global(.Alert--vkcom .Alert__header) {
		margin-bottom: 8px;
	}

	:global(.Alert--android .Alert__text),
	:global(.Alert--vkcom .Alert__text) {
		color: var(--text_secondary);
	}

	:global(.Alert--android) .Alert__actions {
		padding: 0 16px 16px;
	}

	:global(.Alert--android.Alert--h) .Alert__actions,
	:global(.Alert--vkcom.Alert--h) .Alert__actions {
		justify-content: flex-end;
	}

	:global(.Alert--android.Alert--v) .Alert__actions {
		flex-direction: column;
		align-items: flex-end;
	}

	:global(.Alert--android.Alert--v .Alert__button) {
		margin-top: 4px;
		margin-bottom: 4px;
	}

	:global(.Alert--android.Alert--v .Alert__button:first-child) {
		margin-top: 0;
	}

	:global(.Alert--android.Alert--v .Alert__button:last-child) {
		margin-bottom: 0;
	}

	:global(.Alert--android.Alert--h .Alert__button),
	:global(.Alert--vkcom.Alert--h .Alert__button) {
		margin-left: 8px;
	}

	/**
 * VKCOM
 */

	:global(.Alert--vkcom) {
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 0 96px rgba(0, 0, 0, 0.16);
		border-radius: 8px;
		width: 400px;
		margin: auto 24px;
		animation: vkui-animation-android-alert-intro 0.2s ease;
	}

	:global(.Alert--vkcom) .Alert__content {
		padding: 24px;
	}

	:global(.Alert--vkcom) .Alert__actions {
		padding: 0 24px 16px;
	}

	:global(.Alert--vkcom .Alert__button) {
		order: 2;
	}

	:global(.Alert--vkcom .Alert__button--cancel) {
		order: 1;
	}

	/**
 * Animations
 */
	@keyframes vkui-animation-ios-alert-intro {
		from {
			opacity: 0;
			transform: scale(1.05);
		}

		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes vkui-animation-android-alert-intro {
		from {
			opacity: 0;
			transform: scale(0.95);
		}

		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>

<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { useWaitTransitionFinish } from '@sveltevk/vksui/hooks/useWaitTransitionFinish';
	import { ViewWidth } from '@sveltevk/vksui/lib/adaptivity';

	import classNames from '@sveltevk/vksui/lib/classNames';

	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, VKCOM } from '@sveltevk/vksui/lib/platform';
	import { rubber } from '@sveltevk/vksui/lib/touch';
	import { createEventDispatcher, onMount } from 'svelte';
	import Button from '../../Blocks/Button/Button.svelte';
	import Touch, { type TouchEvent } from '../../Service/Touch/Touch.svelte';
	import Text from '../../Typography/Text/Text.svelte';

	const dispatch = createEventDispatcher<{
		close: undefined;
		actionClick: MouseEvent;
	}>();

	/**
	 * Название кнопки действия в уведомлении
	 */
	export let action: string = undefined;
	/**
	 * Варианты расположения кнопки
	 */
	export let layout: 'vertical' | 'horizontal' = 'horizontal';
	/**
	 * Время в миллисекундах, через которое плашка скроется
	 */
	export let duration = 4000;

	const adaptivity = useAdaptivity();
	const platform = usePlatform();

	const { waitTransitionFinish } = useWaitTransitionFinish();

	let closing = false;
	let touched = false;

	let shiftXPercentRef = 0;
	let shiftXCurrentRef = 0;

	let bodyElRef: HTMLDivElement;
	let innerElRef: HTMLElement;

	let animationFrameRef: ReturnType<typeof requestAnimationFrame>;

	$: isDesktop = $adaptivity.viewWidth >= ViewWidth.SMALL_TABLET;
	$: transitionFinishDurationFallback = $platform === ANDROID || $platform === VKCOM ? 400 : 320;

	const close = () => {
		closing = true;
		waitTransitionFinish(
			innerElRef,
			() => {
				dispatch('close');
			},
			transitionFinishDurationFallback
		);
	};

	const handleActionClick = (e: CustomEvent<MouseEvent>) => {
		close();
		dispatch('actionClick', e.detail);
	};

	let closeTimeout: ReturnType<typeof setTimeout>;
	const setCloseTimeout = () => {
		closeTimeout = setTimeout(close, duration);
	};

	onMount(setCloseTimeout);

	const setBodyTransform = (percent: number) => {
		if (animationFrameRef !== null) {
			cancelAnimationFrame(animationFrameRef);
		}

		animationFrameRef = requestAnimationFrame(() => {
			if (bodyElRef) {
				bodyElRef.style.transform = `translate3d(${percent}%, 0, 0)`;
			}
		});
	};

	const onTouchStart = () => clearTimeout(closeTimeout);

	const onTouchMoveX = (e: CustomEvent<TouchEvent>) => {
		const { shiftX, originalEvent } = e.detail;
		originalEvent.preventDefault();

		if (!touched) {
			touched = true;
		}

		shiftXPercentRef = (shiftX / (bodyElRef?.offsetWidth ?? 0)) * 100;
		shiftXCurrentRef = rubber(
			shiftXPercentRef,
			72,
			1.2,
			$platform === ANDROID || $platform === VKCOM
		);

		setBodyTransform(shiftXCurrentRef);
	};

	const onTouchEnd = (e: CustomEvent<TouchEvent>) => {
		let callback: () => void | undefined;

		if (touched) {
			let shiftXCurrent = shiftXCurrentRef;
			const expectTranslateY = (shiftXCurrent / e.detail.duration) * 240 * 0.6;
			shiftXCurrent = shiftXCurrent + expectTranslateY;

			if (isDesktop && shiftXCurrent <= -50) {
				clearTimeout(closeTimeout);
				waitTransitionFinish(
					bodyElRef,
					() => {
						dispatch('close');
					},
					transitionFinishDurationFallback
				);
				setBodyTransform(-120);
			} else if (!isDesktop && shiftXCurrent >= 50) {
				clearTimeout(closeTimeout);
				waitTransitionFinish(
					bodyElRef,
					() => {
						dispatch('close');
					},
					transitionFinishDurationFallback
				);
				setBodyTransform(120);
			} else {
				callback = () => {
					setCloseTimeout();
					setBodyTransform(0);
				};
			}
		} else {
			setCloseTimeout();
		}

		touched = false;
		callback && requestAnimationFrame(callback);
	};

	$: resolvedLayout = $$slots.after || isDesktop ? 'vertical' : layout;
</script>

<div
	{...$$restProps}
	class={classNames(
		$$restProps.class,
		getClassName('Snackbar', $platform),
		`Snackbar--l-${resolvedLayout}`,
		{
			'Snackbar--closing': closing,
			'Snackbar--touched': touched,
			'Snackbar--desktop': isDesktop
		}
	)}
>
	<Touch
		class="Snackbar__in"
		bind:container={innerElRef}
		on:start={onTouchStart}
		on:moveX={onTouchMoveX}
		on:end={onTouchEnd}
	>
		<div class="Snackbar__body" bind:this={bodyElRef}>
			{#if $$slots.before}
				<div class="Snackbar__before"><slot name="before" /></div>
			{/if}

			<div class="Snackbar__content">
				<Text weight="regular" class="Snackbar__content-text">
					<slot />
				</Text>

				{#if $$slots.action || action}
					<Button
						align="left"
						hasHover={false}
						mode="tertiary"
						size="s"
						class="Snackbar__action"
						on:click={handleActionClick}
					>
						<slot name="action">{action}</slot>
					</Button>
				{/if}
			</div>

			{#if $$slots.action || action}
				<div class="Snackbar__after"><slot name="after" /></div>
			{/if}
		</div>
	</Touch>
</div>

<style>
	.Snackbar {
		user-select: none;
		z-index: 101;
		position: fixed;
		bottom: 0;
		left: auto;
		width: 100%;
		padding-left: var(--safe-area-inset-left);
		padding-right: var(--safe-area-inset-right);
		padding-bottom: var(--safe-area-inset-bottom);
	}

	:global(.Epic) .Snackbar {
		padding-bottom: calc(var(--tabbar_height) + var(--safe-area-inset-bottom));
	}

	:global(.Snackbar__in) {
		padding: 8px;
	}

	.Snackbar--closing :global(.Snackbar__in) {
		transform: translate3d(0, 140%, 0);
	}

	.Snackbar__body {
		box-sizing: border-box;
		padding: 12px 16px;
		min-height: 56px;
		display: flex;
		align-items: center;
		background: var(--modal_card_background);
		box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.08);
	}

	.Snackbar__before {
		margin-left: -4px;
		margin-right: 12px;
	}

	.Snackbar__after {
		margin-right: -4px;
		margin-left: 12px;
	}

	.Snackbar__content {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.Snackbar--l-vertical .Snackbar__content {
		flex-direction: column;
		align-items: flex-start;
	}

	:global(.Snackbar__content-text) {
		flex: 1;
		color: var(--text_primary);
	}

	.Snackbar--l-horizontal :global(.Snackbar__action) {
		margin-right: -16px;
		position: relative;
		top: 2px;
	}

	.Snackbar--l-vertical :global(.Snackbar__action) {
		margin-top: 2px;
		margin-bottom: -6px;
		margin-left: -16px;
	}

	:global(.ModalRoot) .Snackbar {
		padding-bottom: var(--safe-area-inset-bottom);
	}

	/* iOS */
	.Snackbar--ios :global(.Snackbar__in),
	.Snackbar--ios .Snackbar__body {
		transition: transform 400ms var(--ios-easing);
	}

	.Snackbar--ios :global(.Snackbar__in) {
		animation: vkui-animation-snackbar-intro-vertical 340ms var(--ios-easing);
	}

	.Snackbar--ios .Snackbar__body {
		border-radius: 10px;
	}

	/* Android */
	.Snackbar--android :global(.Snackbar__in),
	.Snackbar--android .Snackbar__body,
	.Snackbar--vkcom :global(.Snackbar__in),
	.Snackbar--vkcom .Snackbar__body {
		transition: transform 320ms var(--android-easing);
	}

	.Snackbar--android :global(.Snackbar__in),
	.Snackbar--vkcom :global(.Snackbar__in) {
		animation: vkui-animation-snackbar-intro-vertical 340ms var(--android-easing);
	}

	.Snackbar--android .Snackbar__body,
	.Snackbar--vkcom .Snackbar__body {
		border-radius: 8px;
	}

	/**
 * Desktop
 */

	.Snackbar--desktop {
		max-width: 328px;
		left: 0;
		bottom: 0;
	}

	.Snackbar--desktop :global(.Snackbar__in) {
		padding: 12px;
		animation-name: vkui-animation-snackbar-intro-horizontal;
	}

	.Snackbar--desktop.Snackbar--closing :global(.Snackbar__in) {
		transform: translate3d(-140%, 0, 0);
	}

	/**
 * Touch-interaction
 */
	.Snackbar--touched .Snackbar__body {
		transition: none;
	}

	/**
 * Animations
 */
	@keyframes vkui-animation-snackbar-intro-vertical {
		from {
			transform: translate3d(0, 140%, 0);
		}

		to {
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes vkui-animation-snackbar-intro-horizontal {
		from {
			transform: translate3d(-140%, 0, 0);
		}

		to {
			transform: translate3d(0, 0, 0);
		}
	}
</style>

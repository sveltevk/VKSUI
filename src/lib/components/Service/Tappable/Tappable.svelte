<script context="module" lang="ts">
	import useAdaptivity from '$lib/hooks/useAdaptivity';
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import { ANDROID } from '$lib/lib/platform';
	import { getOffsetRect } from '$lib/lib/offset';
	import Touch from '../Touch/Touch.svelte';
	import div from '$lib/components/Elements/div/div.svelte';
	// import type { TouchEventHandler, TouchEvent } from '../Touch/Touch.svelte';
	import { coordX, coordY } from '$lib/lib/touch';
	import type { VKUITouchEventHander, VKUITouchEvent } from '$lib/lib/touch';

	export interface StorageItem {
		activeTimeout: number;
		timeout?: number;
		stop(): void;
	}

	export interface Storage {
		[index: string]: StorageItem;
	}

	export type GetStorage = () => StorageItem;

	const nowTs = () => +Date.now();

	export const ACTIVE_DELAY = 70;
	export const ACTIVE_EFFECT_DELAY = 600;

	let storage: Storage = {};

	/*
	 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
	 */
	function deactivateOtherInstances(exclude?: string) {
		Object.keys(storage)
			.filter((id: string) => id !== exclude)
			.forEach((id: string) => {
				clearTimeout(storage[id].activeTimeout);
				clearTimeout(storage[id].timeout);
				storage[id].stop();

				delete storage[id];
			});
	}
</script>

<script lang="ts">
	// props
	export let activeEffectDelay: number = ACTIVE_EFFECT_DELAY;
	export let disabled: boolean = undefined;
	export let stopPropagation: boolean = false;
	export let component = div;

	// state
	export let clicks: {
		[index: string]: {
			x: number;
			y: number;
		};
	} = {};
	export let hovered = false;
	export let active: boolean = false;
	export let ts: number = null;
	export let deviceHasHover: boolean = false;
	// export let hasHover: boolean;
	let container: HTMLElement;

	// other
	const id = Math.round(Math.random() * 1e8).toString(16);
	let isSlide = false;
	let insideTouchRoot = false;
	let timeout = 0;
	let wavesTimeout = 0;

	const adaptivity = useAdaptivity();
	const platform = usePlatform();

	/*
	 * Обрабатывает событие touchstart
	 */
	const onStart = ({ detail }) => {
		const { originalEvent } = detail;
		!insideTouchRoot && stopPropagation && originalEvent.stopPropagation();
		if (originalEvent.touches && originalEvent.touches.length > 1) {
			deactivateOtherInstances();
			return;
		}

		if ($platform === ANDROID) {
			onDown(originalEvent);
		}

		storage[id] = {
			stop: stop,
			activeTimeout: window.setTimeout(start, ACTIVE_DELAY)
		};
	};

	/*
	 * Обрабатывает событие touchmove
	 */
	const onMove = ({ detail }) => {
		const { originalEvent, shiftXAbs, shiftYAbs } = detail;

		!insideTouchRoot && stopPropagation && originalEvent.stopPropagation();
		if (shiftXAbs > 20 || shiftYAbs > 20) {
			isSlide = true;
			stop();
		}
	};

	/*
	 * Обрабатывает событие touchend
	 */
	const onEnd = ({ detail }) => {
		const { originalEvent } = detail;
		!insideTouchRoot && stopPropagation && originalEvent.stopPropagation();
		const now = nowTs();

		if (originalEvent.touches && originalEvent.touches.length > 0) {
			isSlide = false;
			stop();
			return;
		}

		if (active) {
			if (now - ts >= 100) {
				// Долгий тап, выключаем подсветку
				stop();
			} else {
				// Короткий тап, оставляем подсветку
				const timeoutT = window.setTimeout(stop, activeEffectDelay - now + ts);
				const store = getStorage();

				if (store) {
					store.timeout = timeoutT;
				}
			}
		} else if (!isSlide) {
			// Очень короткий тап, включаем подсветку
			start();

			const timeoutT = window.setTimeout(stop, activeEffectDelay);

			if (getStorage()) {
				clearTimeout(getStorage().activeTimeout);
				getStorage().timeout = timeoutT;
			} else {
				timeout = timeoutT;
			}
		}

		isSlide = false;
	};

	/*
	 * Реализует эффект при тапе для Андроида
	 */
	const onDown: VKUITouchEventHander = (e: VKUITouchEvent) => {
		if ($platform === ANDROID) {
			const { top, left } = getOffsetRect(container);
			const x = coordX(e) - left;
			const y = coordY(e) - top;
			const key = 'wave' + Date.now().toString();

			clicks[key] = {
				x,
				y
			};

			wavesTimeout = window.setTimeout(() => {
				const clicksNew = clicks;
				delete clicksNew[key];
				clicks = clicksNew;
			}, 225);
		}
	};

	const onEnter = () => {
		hovered = true;
	};

	const onLeave = () => {
		hovered = false;
	};

	/*
	 * Устанавливает активное выделение
	 */
	const start: VoidFunction = () => {
		if (!active) {
			active = true;
			ts = nowTs();
		}
		deactivateOtherInstances(id);
	};

	/*
	 * Снимает активное выделение
	 */
	const stop: VoidFunction = () => {
		if (active) {
			active = false;
			ts = null;
		}
		if (getStorage()) {
			clearTimeout(getStorage().activeTimeout);
			delete storage[id];
		}
	};

	/*
	 * Возвращает хранилище для экземпляра компонента
	 */
	const getStorage: GetStorage = () => {
		return storage[id];
	};

	const containerHasTransparentBackground = (c: HTMLElement): boolean => {
		if (!c) {
			return true;
		}

		if (!c.style.backgroundColor) {
			return true;
		}

		if (c.style.backgroundColor === 'transparent') {
			return true;
		}

		return false;
	};

	$: _hasHover = deviceHasHover && _hasHover;
	$: hoverClassModificator = containerHasTransparentBackground(container)
		? 'shadowHovered'
		: 'opacityHovered';

	$: rootComponent = !disabled ? Touch : component;

	$: $$restProps.class = classNames(
		getClassName('Tappable', $platform),
		$$props.class,
		`Tappable--sizeX-${$adaptivity.sizeX}`,
		{
			'Tappable--active': active,
			'Tappable--mouse': $adaptivity.hasMouse,
			'Tappable--inactive': !active,
			[`Tappable--${hoverClassModificator}`]: _hasHover && hovered
		}
	);
</script>

<svelte:component
	this={rootComponent}
	bind:container
	on:start={onStart}
	on:move={onMove}
	on:end={onEnd}
	on:enter={onEnter}
	on:leave={onLeave}
	{component}
	on:click
	{disabled}
	{...$$restProps}
>
	<slot />
	{#if $platform === ANDROID}
		<span class="Tappable__waves">
			{#each Object.keys(clicks) as k}
				<span
					class="Tappable__wave"
					style={`top: ${clicks[k].y}px; left: ${clicks[k].x}px`}
					id={k}
				/>
			{/each}
		</span>
	{/if}
	{#if _hasHover}<span class="Tappable__hoverShadow" />{/if}
</svelte:component>

<style>
	:global(.Tappable) {
		position: relative;
	}

	:global(.Tappable:not([disabled]):not([aria-disabled='true'])) {
		cursor: pointer;
	}

	:global(.AppRoot--keyboard-input .Tappable:focus-visible) {
		outline: none;
	}

	/**
 * active
 * increased specificity to override CellButton styles
 */
	:global(.Tappable--active-background.Tappable--active-background.Tappable--active-background) {
		background: var(--background_highlighted);
	}

	:global(.Tappable--active-opacity.Tappable--active-opacity.Tappable--active-opacity) {
		opacity: 0.7;
	}

	/**
 * hover
 */
	:global(.Tappable__hoverShadow) {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;
		overflow: hidden;
		border-radius: inherit;
	}

	:global(.Tappable--hover-background > .Tappable__hoverShadow) {
		background: var(--background_hover);
	}

	:global(.Tappable--hover-opacity) {
		opacity: 0.8;
	}

	/**
 * mouse
 */
	:global(.Tappable--mouse) {
		transition: opacity 0.15s ease-out;
	}

	:global(.Tappable--mouse .Tappable__hoverShadow) {
		transition: background-color 0.15s ease-out;
	}

	/**
 * iOS tappable
 */
	:global(.Tappable--ios) {
		position: relative;
		border-radius: 10px;
		transition: background-color 0.15s ease-out;
	}

	:global(.Tappable--ios.Tappable--active-background) {
		transition: none;
	}

	/**
 * Android tappable
 */
	:global(.Tappable--android) {
		position: relative;
		transition: background-color 0.15s ease-out;
		border-radius: 8px;
	}

	:global(.Tappable--android .Tappable__waves) {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;
		overflow: hidden;
		border-radius: inherit;
		/* Fix for Safari: css animation + border-radius + overflow ignores parent border-radius */
		will-change: transform;
	}

	:global(.Tappable--android .Tappable__wave) {
		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		height: 24px;
		margin: -12px 0 0 -12px;
		opacity: 0;
		content: '';
		border-radius: 50%;
		background: rgba(127, 127, 127, 0.1);
		animation: vkui-animation-wave 0.3s var(--android-easing);
	}

	/**
 * VKCOM tappable
 */
	:global(.Tappable--vkcom) {
		transition: background-color 0.15s ease-out;
		border-radius: 8px;
	}

	/**
 * overrides
 */
	:global(.Tappable--sizeX-compact) {
		border-radius: 0;
	}

	/**
 * Animations
 */
	@keyframes vkui-animation-wave {
		0% {
			transform: scale(1);
			opacity: 1;
		}

		30% {
			opacity: 1;
		}

		100% {
			transform: scale(8);
			opacity: 0;
		}
	}
</style>

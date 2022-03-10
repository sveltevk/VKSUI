<script context="module" lang="ts">
	import { getSupportedEvents, coordX, coordY, touchEnabled } from '@sveltevk/vksui/lib/touch';
	import type { VKUITouchEventHander, VKUITouchEvent } from '@sveltevk/vksui/lib/touch';

	export interface Gesture {
		startX?: number;
		startY?: number;
		startT?: Date;
		isPressed?: boolean;
		isY?: boolean;
		isX?: boolean;
		isSlideX?: boolean;
		isSlideY?: boolean;
		isSlide?: boolean;
		shiftX?: number;
		shiftY?: number;
		shiftXAbs?: number;
		shiftYAbs?: number;
	}

	export interface TouchEvent extends Gesture {
		originalEvent: VKUITouchEvent;
	}

	export type TouchEventHandler = (e: TouchEvent) => void;
	export type ClickHandler = (e: MouseEvent) => void;
	export type DragHandler = (e: DragEvent) => void;

	const events = getSupportedEvents();
</script>

<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { canUseDOM, useDOM } from '@sveltevk/vksui/lib/dom';
	import div from '@sveltevk/vksui/components/Elements/div/div.svelte';
	import { current_component } from 'svelte/internal';

	const dispatch = createEventDispatcher();
	const callbacks = current_component.$$.callbacks;

	const dom = useDOM();

	export let component = div;

	export let useCapture = false;

	export let container: HTMLElement = undefined;
	let gesture: Partial<Gesture> = {};
	let cancelClick = false;

	onMount(() => {
		if (canUseDOM) {
			container.addEventListener(events[0], onStartEvent, {
				capture: useCapture,
				passive: false
			});
			touchEnabled && subscribe(container);
		}

		container.addEventListener('mouseenter', onEnter, {
			capture: useCapture,
			passive: true
		});
		container.addEventListener('mouseleave', onLeave, {
			capture: useCapture,
			passive: true
		});
	});

	onDestroy(() => {
		container?.removeEventListener(events[0], onStartEvent);
		touchEnabled && unsubscribe(container);
	});

	const onEnter = (e: MouseEvent) => {
		dispatch('enter', e);
	};

	const onLeave = (e: MouseEvent) => {
		dispatch('leave', e);
	};

	/**
	 * Обработчик событий touchstart
	 */
	const onStartEvent: VKUITouchEventHander = (e: VKUITouchEvent) => {
		gesture = {
			startX: coordX(e),
			startY: coordY(e),
			startT: new Date(),
			isPressed: true
		};

		// Вызываем нужные колбеки из props
		const outputEvent = {
			...gesture,
			originalEvent: e
		};

		dispatch('start', outputEvent);

		dispatch('startX', outputEvent);

		dispatch('startY', outputEvent);

		!touchEnabled && subscribe($dom.document);
	};

	/**
	 * Обработчик событий touchmove
	 */
	const onMoveEvent: VKUITouchEventHander = (e: VKUITouchEvent) => {
		const { isPressed, isX, isY, startX, startY } = gesture;

		if (isPressed) {
			// смещения
			const shiftX = coordX(e) - startX;
			const shiftY = coordY(e) - startY;

			// абсолютные значения смещений
			const shiftXAbs = Math.abs(shiftX);
			const shiftYAbs = Math.abs(shiftY);

			// Если определяем мультитач, то прерываем жест
			if (!!e.touches && e.touches.length > 1) {
				return onEndEvent(e);
			}

			// если мы ещё не определились
			if (!isX && !isY) {
				let willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
				let willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
				let willBeSlidedX = (willBeX && !!callbacks.moveX) || !!callbacks.move;
				let willBeSlidedY = (willBeY && !!callbacks.moveY) || !!callbacks.move;

				gesture.isY = willBeY;
				gesture.isX = willBeX;
				gesture.isSlideX = willBeSlidedX;
				gesture.isSlideY = willBeSlidedY;
				gesture.isSlide = willBeSlidedX || willBeSlidedY;
			}

			if (gesture.isSlide) {
				gesture.shiftX = shiftX;
				gesture.shiftY = shiftY;
				gesture.shiftXAbs = shiftXAbs;
				gesture.shiftYAbs = shiftYAbs;

				// Вызываем нужные колбеки из props
				const outputEvent: TouchEvent = {
					...gesture,
					originalEvent: e
				};

				dispatch('move', outputEvent);

				if (gesture.isSlideX) {
					dispatch('moveX', outputEvent);
				}

				if (gesture.isSlideY) {
					dispatch('moveY', outputEvent);
				}
			}
		}
	};

	/**
	 * Обработчик событий touchend, touchcancel
	 */
	const onEndEvent: VKUITouchEventHander = (e: VKUITouchEvent) => {
		const { isPressed, isSlide, isSlideX, isSlideY } = gesture;

		if (isPressed) {
			// Вызываем нужные колбеки из props
			const outputEvent: TouchEvent = {
				...gesture,
				originalEvent: e
			};

			dispatch('end', outputEvent);

			if (isSlideY) {
				dispatch('endY', outputEvent);
			}

			if (isSlideX) {
				dispatch('endX', outputEvent);
			}
		}

		const target = e.target as HTMLElement;

		// Если закончили жест на ссылке, выставляем флаг для отмены перехода
		cancelClick = target.tagName === 'A' && isSlide;
		gesture = {};

		!touchEnabled && unsubscribe($dom.document);
	};

	const subscribe = (element: HTMLElement | Document) => {
		const listenerParams = { capture: useCapture, passive: false };
		element?.addEventListener(events[1], onMoveEvent, listenerParams);
		element?.addEventListener(events[2], onEndEvent, listenerParams);
		element?.addEventListener(events[3], onEndEvent, listenerParams);
	};

	const unsubscribe = (element: HTMLElement | Document) => {
		// Здесь нужен последний аргумент с такими же параметрами, потому что
		// некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
		// https://github.com/VKCOM/VKUI/issues/444
		const listenerParams = { capture: useCapture, passive: false };
		element?.removeEventListener(events[1], onMoveEvent, listenerParams);
		element?.removeEventListener(events[2], onEndEvent, listenerParams);
		element?.removeEventListener(events[3], onEndEvent, listenerParams);
	};

	/**
	 * Обработчик событий dragstart
	 * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
	 */
	const onDragStart = (e: DragEvent) => {
		const target = e.target as HTMLElement;
		if (target.tagName === 'A' || target.tagName === 'IMG') {
			e.preventDefault();
		}
	};

	/**
	 * Обработчик клика по компоненту
	 * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
	 *
	 * @param {Object} e Браузерное событие
	 * @returns {void}
	 */
	const onClick = (e: MouseEvent): void => {
		if (cancelClick) {
			cancelClick = false;
			e.preventDefault();
		}
		dispatch('click', e);
	};
</script>

<!-- 
@component
Touch – это компонент для удобной работы с pointer событиями, такими как клик, тап, перетаскивание и т.д.
Он инкапсулирует в себе логику обработки вышеперечисленных событий, дает возможность отдельно реагировать на движение
пальца (или мышки) по осям X и Y, а так же предоставляет данные о геометрии жеста.

Компонент используется во многих других компонентах библиотеки (Cell, Slider, Gallery, Tappable).
-->

<svelte:component
	this={component}
	{...$$restProps}
	bind:this_={container}
	on:click={onClick}
	on:dragstart={onDragStart}
	on:mouseleave={() => dispatch('leave')}
	on:pointerleave={() => dispatch('leave')}
	on:mouseenter={() => dispatch('enter')}
	on:pointerenter={() => dispatch('enter')}
>
	<slot />
</svelte:component>

<script context="module" lang="ts">
	import { getSupportedEvents, coordX, coordY, touchEnabled } from '@sveltevk/vksui/lib/touch';
	import type { VKUITouchEvent } from '@sveltevk/vksui/lib/touch';

	export interface Gesture {
		startX: number;
		startY: number;
		startT: Date;
		duration: number;
		isPressed: boolean;
		isY: boolean;
		isX: boolean;
		isSlideX: boolean;
		isSlideY: boolean;
		isSlide: boolean;
		shiftX: number;
		shiftY: number;
		shiftXAbs: number;
		shiftYAbs: number;
	}

	export interface TouchEvent extends Gesture {
		originalEvent: VKUITouchEvent;
	}

	export type TouchEventHandler = (e: TouchEvent) => void;
	export type ClickHandler = (e: MouseEvent) => void;
	export type DragHandler = (e: DragEvent) => void;

	const events = getSupportedEvents();

	const initGesture = (startX: number, startY: number): Gesture => {
		return {
			startX,
			startY,
			startT: new Date(),
			duration: 0,
			isPressed: true,
			isY: false,
			isX: false,
			isSlideX: false,
			isSlideY: false,
			isSlide: false,
			shiftX: 0,
			shiftY: 0,
			shiftXAbs: 0,
			shiftYAbs: 0
		};
	};
</script>

<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { useDOM } from '@sveltevk/vksui/lib/dom';
	import div from '@sveltevk/vksui/components/Elements/div/div.svelte';
	import { current_component } from 'svelte/internal';

	interface TouchEventMap {
		start: TouchEvent;
		startX: TouchEvent;
		startY: TouchEvent;
		move: TouchEvent;
		moveX: TouchEvent;
		moveY: TouchEvent;
		end: TouchEvent;
		endY: TouchEvent;
		endX: TouchEvent;
	}

	interface AllEventMap extends TouchEventMap {
		enter: MouseEvent;
		leave: MouseEvent;
		click: MouseEvent;
	}

	const dispatch = createEventDispatcher<AllEventMap>();
	const callbacks = current_component.$$.callbacks;

	export let component = div;

	/**
	 * Привязать onEnter и onLeave через pointer-events - работает на disabled-инпутах
	 */
	export let usePointerHover = false;
	export let useCapture = false;
	export let slideThreshold = 5;
	export let noSlideClick = false;

	export let stopPropagation = false;

	export let container: HTMLElement = undefined;

	const dom = useDOM();
	let didSlide = false;
	let gesture: Partial<Gesture> = {};

	const handle = (
		e: VKUITouchEvent,
		handers: Array<Extract<keyof TouchEventMap, string> | undefined | false>
	) => {
		stopPropagation && e.stopPropagation();
		handers.forEach((cb) => {
			const duration = Date.now() - (gesture?.startT?.getTime() ?? 0);
			cb && dispatch(cb, { ...(gesture as Gesture), duration, originalEvent: e });
		});
	};

	onMount(() => {
		const listenerParams = { capture: useCapture, passive: false };
		container.addEventListener(events[0], onStartEvent, listenerParams);
		container.addEventListener(usePointerHover ? 'pointerenter' : 'mouseenter', onEnter);
		container.addEventListener(usePointerHover ? 'pointerleave' : 'mouseleave', onLeave);
		container.addEventListener('click', postGestureClick, { capture: true });

		return () => {
			container.removeEventListener(events[0], onStartEvent, listenerParams);
			container.removeEventListener(usePointerHover ? 'pointerenter' : 'mouseenter', onEnter);
			container.removeEventListener(usePointerHover ? 'pointerleave' : 'mouseleave', onLeave);
			container.removeEventListener('click', postGestureClick, { capture: true });
		};
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
	const onStartEvent = (e: VKUITouchEvent) => {
		gesture = initGesture(coordX(e), coordY(e));

		handle(e, ['start', 'startX', 'startY']);
		// 1 line, 2 bad specs, 2 workarounds:
		subscribe(
			touchEnabled
				? // Touch events fire on initial target, and won't bubble if its removed
				  // see: #235, #1968, https://stackoverflow.com/a/45760014
				  (e.target as HTMLElement)
				: // Mouse events fire on the element under pointer, so we lose move / end
				  // if pointer goes outside container.
				  // Can be fixed by PointerEvents' setPointerCapture later
				  $dom.document
		);
	};

	/**
	 * Обработчик событий touchmove
	 */
	const onMoveEvent = (e: VKUITouchEvent) => {
		const { isPressed, isX, isY, startX = 0, startY = 0 } = gesture;

		if (isPressed) {
			// смещения
			const shiftX = coordX(e) - startX;
			const shiftY = coordY(e) - startY;

			// абсолютные значения смещений
			const shiftXAbs = Math.abs(shiftX);
			const shiftYAbs = Math.abs(shiftY);

			// Если определяем мультитач, то прерываем жест
			if (!!e.touches && e.touches.length > 1) {
				return onEnd(e);
			}

			// если мы ещё не определились
			if (!isX && !isY) {
				const willBeX = shiftXAbs >= slideThreshold && shiftXAbs > shiftYAbs;
				const willBeY = shiftYAbs >= slideThreshold && shiftYAbs > shiftXAbs;
				const willBeSlidedX = willBeX && (!!callbacks.moveX || !!callbacks.move);
				const willBeSlidedY = willBeY && (!!callbacks.moveY || !!callbacks.move);

				Object.assign(gesture, {
					isY: willBeY,
					isX: willBeX,
					isSlideX: willBeSlidedX,
					isSlideY: willBeSlidedY,
					isSlide: willBeSlidedX || willBeSlidedY
				});
			}

			if (gesture.isSlide) {
				Object.assign(gesture, {
					shiftX,
					shiftY,
					shiftXAbs,
					shiftYAbs
				});

				// FIXME: проверить почему isSlideY && 'endY' это "" | "endY"
				// @ts-ignore
				handle(e, ['move', gesture.isSlideX && 'moveX', gesture.isSlideY && 'moveY']);
			}
		}
	};

	/**
	 * Обработчик событий touchend, touchcancel
	 */
	const onEnd = (e: VKUITouchEvent) => {
		const { isPressed, isSlide, isSlideX, isSlideY } = gesture;

		if (isPressed) {
			// FIXME: проверить почему isSlideY && 'endY' это "" | "endY"
			// @ts-ignore
			handle(e, ['end', isSlideY && 'endY', isSlideX && 'endX']);
		}

		didSlide = Boolean(isSlide);
		gesture = {};

		// Если это был тач-евент, симулируем отмену hover
		if (touchEnabled) {
			onLeave(e);
		}

		unsubscribe();
	};

	let subscriber: HTMLElement | Document | undefined = undefined;
	const subscribe = (element: HTMLElement | Document) => {
		unsubscribe();
		subscriber = element;

		const listenerParams = { capture: useCapture, passive: false };
		subscriber?.addEventListener(events[1], onMoveEvent, listenerParams);
		subscriber?.addEventListener(events[2], onEnd, listenerParams);
		subscriber?.addEventListener(events[3], onEnd, listenerParams);
	};

	const unsubscribe = () => {
		if (!subscriber) {
			return;
		}

		// Здесь нужен последний аргумент с такими же параметрами, потому что
		// некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
		// https://github.com/VKCOM/VKUI/issues/444
		const listenerParams = { capture: useCapture, passive: false };
		subscriber?.removeEventListener(events[1], onMoveEvent, listenerParams);
		subscriber?.removeEventListener(events[2], onEnd, listenerParams);
		subscriber?.removeEventListener(events[3], onEnd, listenerParams);
	};

	onDestroy(unsubscribe);

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
	 */
	const postGestureClick = (e: MouseEvent) => {
		if (!didSlide) {
			return dispatch('click', e);
		}
		// eslint-disable-next-line no-restricted-properties
		if ((e.target as HTMLElement).closest('a')) {
			e.preventDefault();
		}
		if (noSlideClick) {
			e.stopPropagation();
		} else {
			dispatch('click', e);
		}
		didSlide = false;
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
	on:dragstart={onDragStart}
>
	<slot />
</svelte:component>

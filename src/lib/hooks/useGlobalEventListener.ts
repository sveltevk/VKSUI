import { canUseDOM } from '@vkontakte/vkjs';

export function useGlobalEventListener<K extends keyof GlobalEventHandlersEventMap>(
	element: Document | HTMLElement | Window | null | undefined,
	event: K,
	cb: ((ev: GlobalEventHandlersEventMap[K]) => void) | null | false | undefined,
	options?: AddEventListenerOptions
): void;
export function useGlobalEventListener<E extends Event>(
	element: Document | HTMLElement | Window | null | undefined,
	event: string,
	cb: ((ev: E) => void) | null | false | undefined,
	options?: AddEventListenerOptions
): void;
export function useGlobalEventListener<
	K extends keyof GlobalEventHandlersEventMap,
	E extends Event
>(
	element: Document | HTMLElement | Window | null | undefined,
	event: K | string,
	cb: ((ev: E) => void) | null | false | undefined,
	_options?: AddEventListenerOptions
) {
	if (!canUseDOM || !element || !cb) {
		return;
	}

	const options = { ..._options };
	element.addEventListener(event, cb, options);

	return () => element.removeEventListener(event, cb, options);
}

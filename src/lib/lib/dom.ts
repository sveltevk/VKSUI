import { canUseDOM } from '@vkontakte/vkjs';
import { getContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
export { canUseDOM, canUseEventListeners, onDOMLoaded } from '@vkontakte/vkjs';

export interface DOMContextInterface {
	/**
	 * @ignore
	 */
	window?: Window;
	/**
	 * @ignore
	 */
	document?: Document;
}

export const DOMContextKey = 'vkui_DOMContext';

/* eslint-disable no-restricted-globals */
export const getDOM = () => ({
	window: canUseDOM ? window : undefined,
	document: canUseDOM ? document : undefined
});
/* eslint-enable no-restricted-globals */

export const useDOM = (): Writable<DOMContextInterface> => {
	return getContext(DOMContextKey) || writable(getDOM());
};

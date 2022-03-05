import { canUseDOM } from '@vkontakte/vkjs';
export { canUseDOM, canUseEventListeners, onDOMLoaded } from '@vkontakte/vkjs';

/* eslint-disable no-restricted-globals */
export const getDOM = () => ({
	window: canUseDOM ? window : undefined,
	document: canUseDOM ? document : undefined
});
/* eslint-enable no-restricted-globals */

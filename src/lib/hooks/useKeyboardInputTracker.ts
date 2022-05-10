import { get, writable, type Writable } from 'svelte/store';
import { Keys, pressedKey } from '../lib/accessibility';
import { useDOM } from '../lib/dom';
import { useGlobalEventListener } from './useGlobalEventListener';

export const ENABLE_KEYBOARD_INPUT_EVENT_NAME = 'enableKeyboardInput';
export const DISABLE_KEYBOARD_INPUT_EVENT_NAME = 'disableKeyboardInput';

export function useKeyboardInputTracker(): Writable<boolean> {
	const dom = useDOM();

	const isKeyboardInputActive = writable(false);

	const enableKeyboardInput = () => isKeyboardInputActive.set(true);

	const handleKeydown = (e: KeyboardEvent) => {
		if (pressedKey(e) === Keys.TAB) {
			enableKeyboardInput();
		}
	};

	const disableKeyboardInput = () => isKeyboardInputActive.set(false);

	const eventOptions = {
		passive: true,
		capture: true
	};

	useGlobalEventListener(get(dom).document, 'keydown', handleKeydown, eventOptions);
	useGlobalEventListener(get(dom).document, 'mousedown', disableKeyboardInput, eventOptions);
	useGlobalEventListener(get(dom).document, 'touchstart', disableKeyboardInput, eventOptions);
	useGlobalEventListener(
		get(dom).document,
		ENABLE_KEYBOARD_INPUT_EVENT_NAME,
		enableKeyboardInput,
		eventOptions
	);
	useGlobalEventListener(
		get(dom).document,
		DISABLE_KEYBOARD_INPUT_EVENT_NAME,
		disableKeyboardInput,
		eventOptions
	);

	return isKeyboardInputActive;
}

import { getContext } from 'svelte';
import { get, writable, type Writable } from 'svelte/store';

type Dispatch = <EventKey extends 'blur' | 'focus'>(
	type: EventKey,
	detail?: {
		blur: FocusEvent;
		focus: FocusEvent;
	}[EventKey]
) => void;

export function useFocusVisible(dispatch: Dispatch) {
	const focusVisible = writable(false);
	// FIXME: useAppRoot()
	const appRoot = getContext<Writable<{ keyboardInput: boolean }>>('vkui_AppRootContext');

	const onFocus = (e: FocusEvent) => {
		console.log('focus', e);
		e.stopPropagation();
		focusVisible.set(get(appRoot).keyboardInput);
		dispatch('focus', e);
	};
	const onBlur = (e: FocusEvent) => {
		console.log('blur', e);
		e.stopPropagation();
		focusVisible.set(false);
		dispatch('blur', e);
	};

	return { focusVisible, onFocus, onBlur };
}

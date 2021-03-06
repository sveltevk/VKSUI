import { transitionEvent } from '../lib/supportEvents';

type TransitionEndHandler = (e?: TransitionEvent) => void;

export const useWaitTransitionFinish = () => {
	let timeoutRef: ReturnType<typeof setTimeout> | null = null;

	const waitTransitionFinish = (
		element: HTMLElement | null,
		eventHandler: TransitionEndHandler,
		durationFallback: number
	) => {
		if (element) {
			if (transitionEvent.supported && transitionEvent.name) {
				element.removeEventListener(transitionEvent.name, eventHandler);
				element.addEventListener(transitionEvent.name, eventHandler);
			} else {
				if (timeoutRef) {
					clearTimeout(timeoutRef);
				}
				timeoutRef = setTimeout(eventHandler, durationFallback);
			}
		}
	};

	return {
		waitTransitionFinish
	};
};

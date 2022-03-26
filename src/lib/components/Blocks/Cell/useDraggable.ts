import { writable, get, type Writable } from 'svelte/store';
import type { TouchEvent } from '../../Service/Touch/Touch.svelte';

export interface DraggableProps {
	onDragStart: () => void;
	onDragEnd: () => void;
	onDragMove: (e: TouchEvent) => void;
}

interface UseDraggableProps extends DraggableProps {
	dragging: Writable<boolean>;
	rootElRef: Writable<HTMLElement>;
}

export const useDraggable = ({
	onDragFinish
}: {
	onDragFinish: (e: { from: number; to: number }) => void;
}) => {
	const rootElRef = writable<HTMLElement>(null);
	const dragging = writable(false);

	const siblings = writable<HTMLElement[]>([]);
	const dragStartIndex = writable(0);
	const dragEndIndex = writable(0);
	const dragShift = writable(0);
	const dragDirection = writable<'down' | 'up' | undefined>(undefined);

	const onDragStart = () => {
		const rootEl = get(rootElRef);
		if (!rootEl) {
			return;
		}

		dragging.set(true);

		let _siblings: HTMLElement[] = [];
		if (rootEl.parentElement?.childNodes) {
			_siblings = Array.from(rootEl.parentElement.children) as HTMLElement[];
		}
		const idx = _siblings.indexOf(rootEl);

		dragStartIndex.set(idx);
		dragEndIndex.set(idx);
		siblings.set(_siblings);
		dragShift.set(0);
	};

	const onDragMove = (e: TouchEvent) => {
		e.originalEvent.preventDefault();

		const rootEl = get(rootElRef);

		if (rootEl) {
			rootEl.style.transform = `translateY(${e.shiftY}px)`;
			const rootGesture = rootEl.getBoundingClientRect();

			dragDirection.set(get(dragShift) - e.shiftY < 0 ? 'down' : 'up');
			dragShift.set(e.shiftY);
			dragEndIndex.set(get(dragStartIndex));

			get(siblings).forEach((sibling: HTMLElement, siblingIndex: number) => {
				const siblingGesture = sibling.getBoundingClientRect();
				const siblingHalfHeight = siblingGesture.height / 2;

				const rootOverSibling = rootGesture.bottom > siblingGesture.top + siblingHalfHeight;
				const rootUnderSibling = rootGesture.top < siblingGesture.bottom - siblingHalfHeight;

				if (get(dragStartIndex) < siblingIndex) {
					if (rootOverSibling) {
						if (get(dragDirection) === 'down') {
							sibling.style.transform = 'translateY(-100%)';
						}

						dragEndIndex.set(get(dragEndIndex) + 1);
					}
					if (rootUnderSibling && get(dragDirection) === 'up') {
						sibling.style.transform = 'translateY(0)';
					}
				} else if (get(dragStartIndex) > siblingIndex) {
					if (rootUnderSibling) {
						if (get(dragDirection) === 'up') {
							sibling.style.transform = 'translateY(100%)';
						}

						dragEndIndex.set(get(dragEndIndex) - 1);
					}
					if (rootOverSibling && get(dragDirection) === 'down') {
						sibling.style.transform = 'translateY(0)';
					}
				}
			});
		}
	};

	const onDragEnd = () => {
		const [from, to] = [get(dragStartIndex), get(dragEndIndex)];

		get(siblings).forEach((sibling: HTMLElement) => {
			sibling.style.transform = '';
		});

		siblings.set([]);
		dragEndIndex.set(0);
		dragStartIndex.set(0);
		dragDirection.set(undefined);
		dragShift.set(0);

		dragging.set(false);

		onDragFinish && onDragFinish({ from, to });
	};

	const useDraggableProps: UseDraggableProps = {
		onDragStart,
		onDragMove,
		onDragEnd,
		dragging,
		rootElRef
	};

	return useDraggableProps;
};

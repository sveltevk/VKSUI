<script context="module" lang="ts">
	import { FOCUSABLE_ELEMENTS_LIST, Keys, pressedKey } from '@sveltevk/vksui/lib/accessibility';
	import { useDOM } from '@sveltevk/vksui/lib/dom';
	import { createEventDispatcher, onMount } from 'svelte';

	const FOCUSABLE_ELEMENTS: string = FOCUSABLE_ELEMENTS_LIST.join();
</script>

<script lang="ts">
	import { useGlobalEventListener } from '@sveltevk/vksui/hooks/useGlobalEventListener';

	import { useAppRoot } from '../../Layout/AppRoot/AppRootContext.svelte';

	const dispatch = createEventDispatcher();

	export let Element = 'div';
	export let restoreFocus = true;
	export let timeout = 0;

	export let ref: HTMLElement = undefined;

	const dom = useDOM();

	let focusableNodes: HTMLElement[] | null = null;
	let restoreFocusTo: HTMLElement | null = null;

	// HANDLE TRAP MOUNT

	const appRoot = useAppRoot();
	$: keyboardInput = $appRoot.keyboardInput;

	onMount(() => {
		const focusOnTrapMount = setTimeout(() => {
			if (keyboardInput && !ref?.contains($dom.document!.activeElement) && focusableNodes?.length) {
				focusableNodes[0].focus();
			}
		}, timeout);

		return () => clearTimeout(focusOnTrapMount);
	});

	// HANDLE FOCUSABLE NODES

	onMount(() => {
		if (!ref) {
			return;
		}

		const nodes: HTMLElement[] = [];
		Array.prototype.forEach.call(
			// eslint-disable-next-line no-restricted-properties
			ref.querySelectorAll(FOCUSABLE_ELEMENTS),
			(focusableEl: Element) => {
				const { display, visibility } = $dom.window!.getComputedStyle(focusableEl);

				if (display !== 'none' && visibility !== 'hidden') {
					nodes.push(focusableEl as HTMLElement);
				}
			}
		);

		if (nodes?.length) {
			focusableNodes = nodes;
		}
	});

	// HANDLE TRAP UNMOUNT

	onMount(() => {
		if (restoreFocus && $dom.document!.activeElement) {
			restoreFocusTo = $dom.document!.activeElement as HTMLElement;

			return () =>
				setTimeout(() => {
					if (restoreFocusTo) {
						restoreFocusTo.focus();
					}
				}, timeout);
		}
	});

	const onDocumentKeydown = (e: KeyboardEvent) => {
		if (pressedKey(e) === Keys.TAB && focusableNodes?.length) {
			const lastIdx = focusableNodes.length - 1;
			const targetIdx = focusableNodes.findIndex((node) => node === e.target);

			const shouldFocusFirstNode = targetIdx === -1 || (targetIdx === lastIdx && !e.shiftKey);

			if (shouldFocusFirstNode || (targetIdx === 0 && e.shiftKey)) {
				e.preventDefault();

				const node = focusableNodes[shouldFocusFirstNode ? 0 : lastIdx];

				if (node !== document!.activeElement) {
					node.focus();
				}

				return false;
			}
		}

		if (pressedKey(e) === Keys.ESCAPE) {
			dispatch('close');
		}
	};

	onMount(() => {
		return useGlobalEventListener($dom.document, 'keydown', onDocumentKeydown, {
			capture: true
		});
	});
</script>

<svelte:element this={Element} bind:this={ref} on:click {...$$restProps}>
	<slot />
</svelte:element>

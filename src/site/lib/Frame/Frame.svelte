<script lang="ts">
	import { onMount, onDestroy, tick, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import { ContextKey } from '$lib/lib/config';

	export let component;
	export let getRef: (f: HTMLIFrameElement) => void = undefined;

	let frame: HTMLIFrameElement;
	let doc;
	let content;

	let wContentDocument = writable(document);
	setContext(ContextKey.contentDocument, wContentDocument);

	let wContentWindow = writable(window) as Writable<Window>;
	setContext(ContextKey.contentWindow, wContentWindow);

	$: component && mountComponent(doc);
	$: updateProps($$props);

	function mountComponent(doc) {
		if (content) content.$destroy();
		if (doc && component) {
			const { component, getRef, ...props } = $$props;
			content = new component({ target: doc.body, props });
		}
	}

	function updateProps(props) {
		if (content) {
			const { component, getRef, ...rest } = props;
			content.$set(rest);
		}
	}

	function loadHandler() {
		doc = frame.contentDocument;
		// import styles
		Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).forEach((node) =>
			doc.head.appendChild(node.cloneNode(true))
		);
	}

	onMount(async () => {
		await tick();
		if (frame.contentDocument.readyState === 'complete' && frame.contentDocument.defaultView) {
			loadHandler();
		} else {
			frame.addEventListener('load', loadHandler);
		}

		wContentDocument.set(frame.contentDocument);
		wContentWindow.set(frame.contentWindow);

		if (getRef) {
			getRef(frame);
		}
	});

	onDestroy(() => {
		if (frame) frame.removeEventListener('load', loadHandler);
		if (content) content.$destroy();
	});
</script>

<iframe bind:this={frame} title="frame" />

<style>
	iframe {
		border: none;
		width: 100%;
		height: 100%;
	}
</style>

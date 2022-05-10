<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';

	import classNames from '@sveltevk/vksui/lib/classNames';
	import { ContextKey } from '@sveltevk/vksui/lib/config';
	import { canUseDOM, useDOM } from '@sveltevk/vksui/lib/dom';
	import { getContext, onMount } from 'svelte';
	import { noop } from 'svelte/internal';
	import type { Writable } from 'svelte/store';
	import AppRootContext from './AppRootContext.svelte';
	import ScrollContext, {
		elementScrollController,
		globalScrollController
	} from './ScrollContext.svelte';

	/** Режим встраивания */
	export let mode: 'partial' | 'embedded' | 'full' = 'full';
	export let scroll: 'global' | 'contain' = 'global';

	const isKeyboardInputActive = false; // TODO: useKeyboardInputTracker
	let rootRef: HTMLDivElement | null = null;
	let portalRoot: HTMLDivElement | null = null;
	const dom = useDOM();
	const adaptivity = useAdaptivity();
	const classAppearance: Writable<string> = getContext(ContextKey.classAppearance);

	// setup portal
	onMount(() => {
		const portal = $dom.document?.createElement('div');
		portal.classList.add('vkui__portal-root');
		$dom.document?.body.appendChild(portal);
		portalRoot = portal;
		return () => portal.parentElement?.removeChild(portal);
	});

	// setup root classes
	onMount(() => {
		if (mode === 'partial') {
			return noop;
		}

		const parent = rootRef?.parentElement;
		const classes = ['vkui__root'].concat(mode === 'embedded' ? 'vkui__root--embedded' : []);
		parent?.classList.add(...classes);

		return () => {
			parent?.classList.remove(...classes);
			if (mode === 'full') {
				document?.documentElement.classList.remove('vkui');
			}
		};
	});

	// adaptivity handler
	const adaptivityHandler = (sizeX: SizeType) => {
		if (!canUseDOM) {
			return;
		}

		const adaptivityContainer = mode === 'embedded' ? rootRef?.parentElement : $dom.document?.body;

		if (mode === 'partial' || sizeX !== SizeType.REGULAR) {
			adaptivityContainer?.classList.remove('vkui--sizeX-regular');
			return;
		}

		adaptivityContainer?.classList.add('vkui--sizeX-regular');
	};

	$: adaptivityHandler($adaptivity.sizeX);

	$: scrollController =
		scroll === 'contain'
			? elementScrollController(rootRef)
			: globalScrollController($dom.window, $dom.document);
</script>

{#if mode === 'partial'}
	<AppRootContext
		value={{
			appRoot: rootRef,
			portalRoot: portalRoot,
			keyboardInput: isKeyboardInputActive,
			mode
		}}
	>
		<ScrollContext value={scrollController}>
			<slot />
		</ScrollContext>
	</AppRootContext>
{:else}
	<div
		bind:this={rootRef}
		{...$$restProps}
		class={classNames($$restProps.class, $classAppearance, 'AppRoot', {
			'AppRoot--no-mouse': !$adaptivity.hasMouse
		})}
	>
		<AppRootContext
			value={{
				appRoot: rootRef,
				portalRoot: portalRoot,
				keyboardInput: isKeyboardInputActive,
				mode
			}}
		>
			<slot />
		</AppRootContext>
	</div>
{/if}

<style>
	@import '../../../styles/constants.css';
	@import '../../../styles/animations.css';
	@import '../../../styles/common.css';

	:global(.vkui__root--embedded) {
		transform: translate3d(0, 0, 0);
		overflow-x: hidden;
	}

	.AppRoot {
		height: 100%;
	}

	:global(.vkui__root--embedded) .AppRoot {
		overflow: auto;
	}

	:global(.vkui--sizeX-regular) {
		background: var(--background_page);
	}

	.AppRoot--no-mouse {
		user-select: none;
	}
</style>

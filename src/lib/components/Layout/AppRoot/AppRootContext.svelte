<script context="module" lang="ts">
	export interface AppRootContextInterface {
		appRoot?: HTMLDivElement;
		portalRoot?: HTMLDivElement | null;
		mode?: 'partial' | 'embedded' | 'full';
		keyboardInput?: boolean;
	}
	const AppRootContextKey = 'vkui_AppRootContext';

	export function useAppRoot(): Writable<AppRootContextInterface> {
		return getContext(AppRootContextKey) || writable({ portalRoot: null });
	}
</script>

<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let value: AppRootContextInterface = {
		portalRoot: null
	};

	const wValue = writable(value);
	setContext(AppRootContextKey, wValue);
	$: wValue.set(value);
</script>

<slot />

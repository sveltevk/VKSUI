<script context="module" lang="ts">
	const ListContextKey = 'vkui_ListContext';
	export const useList = (): Writable<boolean> => {
		return getContext(ListContextKey) || writable(false);
	};
</script>

<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	const isDragging = writable(false);
	setContext(ListContextKey, isDragging);

	const platform = usePlatform();
</script>

<!-- 
@component
Контейнер для однородных `Cell`.
-->

<div
	role="list"
	{...$$restProps}
	class={classNames($$props.class, getClassName('List', $platform), {
		'List--dragging': $isDragging
	})}
>
	<slot />
</div>

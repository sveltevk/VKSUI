<script lang="ts">
	import { classNames } from '@vkontakte/vkjs';
	import SplitColContext from './SplitColContext.svelte';

	let base: HTMLDivElement;

	export let width: string = undefined;
	export let maxWidth: string = undefined;
	export let minWidth: string = undefined;
	/**
	 * Если false, то переходы между Panel происходят без анимации
	 */
	export let animate = false;
	/**
	 * Если true, то добавляются боковые отступы фиксированной величины
	 */
	export let spaced = false;
	export let fixed = false;

	$: contextValue = {
		colRef: base,
		animate
	};
</script>

<div
	{...$$restProps}
	style:width
	style:max-width={maxWidth}
	style:min-width={minWidth}
	bind:this={base}
	class={classNames($$restProps.class, 'SplitCol', {
		'SplitCol--spaced': spaced,
		'SplitCol--fixed': fixed
	})}
>
	<SplitColContext value={contextValue}>
		{#if fixed}
			<div class="SplitCol__fixedInner"><slot /></div>
		{:else}
			<slot />
		{/if}
	</SplitColContext>
</div>

<style>
	.SplitCol {
		height: 100%;
		width: 1px;
		flex-grow: 1;
		flex-shrink: 1;
		position: relative;
	}

	.SplitCol--spaced {
		margin: 0 16px;
	}

	.SplitCol--fixed {
		height: 100%;
		width: 1px;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.SplitCol__fixedInner {
		height: inherit;
		width: inherit;
		min-width: inherit;
		max-width: inherit;
		position: fixed;
		transform: translateZ(0);
		overflow: hidden;
	}
</style>

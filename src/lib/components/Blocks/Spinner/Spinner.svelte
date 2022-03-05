<script lang="ts">
	import Spinner24 from '@sveltevk/icons/dist/24/spinner';
	import Spinner32 from '@sveltevk/icons/dist/32/spinner';
	import Spinner44 from '@sveltevk/icons/dist/44/spinner';
	import Spinner16 from '@sveltevk/icons/dist/16/spinner';

	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	export let size: 'small' | 'regular' | 'large' | 'medium' = 'regular';

	const platform = usePlatform();
</script>

<!-- 
@component
Используется для визуализации выполнения асинхронного процесса (например ajax запроса). Если нужно на момент загрузки
заблокировать интерфейс, то можно использовать надстройку над `Spinner` – `ScreenSpinner`.
-->

<div {...$$restProps} class={classNames(getClassName('Spinner', $platform), $$props.class)}>
	{#if size === 'large'}
		<Spinner44 class="Spinner__self" />
	{:else if size === 'medium'}
		<Spinner32 class="Spinner__self" />
	{:else if size === 'small'}
		<Spinner16 class="Spinner__self" />
	{:else}
		<Spinner24 class="Spinner__self" />
	{/if}
</div>

<style>
	:root {
		--duration: 0.7s;
	}

	.Spinner {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--icon_outline_secondary);
	}

	:global(.Spinner__self) {
		animation: rotator var(--duration) linear infinite;
		transform-origin: center;
	}

	:global(.Spinner__self) :global(svg) {
		transform: scale(1);
	}

	@keyframes rotator {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	:global(.PanelHeader .Spinner) {
		color: currentColor;
	}

	:global(.Button .Spinner) {
		color: currentColor;
	}
</style>

<script lang="ts">
	import Spinner24 from '@sveltevk/icons/dist/24/spinner';
	import Spinner32 from '@sveltevk/icons/dist/32/spinner';
	import Spinner44 from '@sveltevk/icons/dist/44/spinner';
	import Spinner16 from '@sveltevk/icons/dist/16/spinner';

	import classNames from '$lib/lib/classNames';

	export let size: 'small' | 'regular' | 'large' | 'medium' = 'regular';

	$: $$restProps['aria-label'] = $$restProps['aria-label'] ?? 'Загружается..."';
</script>

<!-- 
@component
Используется для визуализации выполнения асинхронного процесса (например ajax запроса). Если нужно на момент загрузки
заблокировать интерфейс, то можно использовать надстройку над `Spinner` – `ScreenSpinner`.
-->

<span role="status" {...$$restProps} class={classNames('Spinner', $$props.class)}>
	{#if size === 'large'}
		<Spinner44 aria-hidden="true" class="Spinner__self" />
	{:else if size === 'medium'}
		<Spinner32 aria-hidden="true" class="Spinner__self" />
	{:else if size === 'small'}
		<Spinner16 aria-hidden="true" class="Spinner__self" />
	{:else}
		<Spinner24 aria-hidden="true" class="Spinner__self" />
	{/if}
</span>

<style>
	.Spinner {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--icon_outline_secondary);
	}

	:global(.Spinner__self) {
		animation: vkui-rotator var(--duration) linear infinite;
		transform-origin: center;
	}

	:global(.Spinner__self svg) {
		transform: scale(1);
	}

	/**
 * PanelHeader
 */

	:global(.PanelHeader) .Spinner {
		color: currentColor;
	}

	/**
 * Button
 */

	:global(.Button) .Spinner {
		color: currentColor;
	}
</style>

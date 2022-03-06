<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import Separator from '../Separator/Separator.svelte';

	/**
    show - разделитель всегда показывается,
    hide – разделитель всегда спрятан,
    auto – разделитель рисуется автоматически между соседними группами.
   */
	export let separator: 'show' | 'hide' | 'auto' = 'auto';
	export let description: string = '';

	const platform = usePlatform();
</script>

<!-- 
@component
Группа – базовый компонент для группировки контента по смыслу.
-->

<section {...$$restProps} class={classNames(getClassName('Group', $platform), $$props.class)}>
	<slot name="header" />
	<slot />
	{#if $$slots.description || description !== ''}
		<div class="Group__description">
			<slot name="description">{description}</slot>
		</div>
	{/if}
	{#if separator !== 'hide'}
		<Separator
			class={classNames('Group__separator', {
				'Group__separator--force': separator === 'show'
			})}
		/>
	{/if}
</section>

<style>
	.Group {
		color: var(--text_primary);
	}

	.Group > *:not(.Header):first-child {
		margin-top: 12px;
	}

	.Group > .Cell:first-child,
	.Group > .CellButton:first-child,
	.Group > .InfoRow:first-child {
		margin-top: 8px;
	}

	.Group__description {
		font-size: 14px;
		line-height: 16px;
		color: var(--text_secondary);
	}

	:global(.Group__separator) {
		margin-top: 12px;
	}

	:global(.Cell) + :global(.Group__separator),
	:global(.CellButton) + :global(.Group__separator),
	:global(.InfoRow) + :global(.Group__separator) {
		margin-top: 8px;
	}

	.Group:last-of-type :global(.Group__separator) {
		display: none;
	}

	.Group:last-of-type :global(.Group__separator--force) {
		display: block;
	}

	.Group--ios .Group__description {
		padding: 4px 12px 24px;
	}

	.Group--android .Group__description {
		padding: 4px 16px 24px;
	}
</style>

<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Separator from '../Separator/Separator.svelte';

	export let description: string = '';
	/**
    show - разделитель всегда показывается,
    hide – разделитель всегда спрятан,
    auto – разделитель рисуется автоматически между соседними группами.
   */
	export let separator: 'show' | 'hide' | 'auto' = 'auto';
	/**
	 * Режим отображения. Если установлен 'card', выглядит как карточка c
	 * обводкой и внешними отступами. Если 'plain' — без отступов и обводки.
	 * По умолчанию режим отображения зависит от `sizeX`. В модальных окнах
	 * по умолчанию 'plain'.
	 */
	export let mode: 'plain' | 'card' = undefined;

	const adaptivity = useAdaptivity();
	const platform = usePlatform();
	const isInsideModal = false; // TODO: Make this

	$: computedMode = mode
		? mode
		: $adaptivity.sizeX === SizeType.COMPACT || isInsideModal
		? 'plain'
		: 'card';
</script>

<!-- 
@component
Группа – базовый компонент для группировки контента по смыслу.
-->

<section
	{...$$restProps}
	class={classNames(
		$$props.class,
		getClassName('Group', $platform),
		`Group--sizeX-${$adaptivity.sizeX}`,
		`Group--${computedMode}`
	)}
>
	<div class="Group__inner">
		<slot name="header" />
		<slot />
		{#if $$slots.description || description !== ''}
			<Caption class="Group__description" weight="regular" level="1">
				<slot name="description">{description}</slot>
			</Caption>
		{/if}
	</div>

	{#if separator !== 'hide'}
		<Separator
			class={classNames('Group__separator', {
				'Group__separator--force': separator === 'show'
			})}
			expanded={computedMode === 'card'}
		/>
	{/if}
</section>

<style>
	.Group {
		color: var(--text_primary);
	}

	.Group__inner {
		padding-top: 8px;
		padding-bottom: 8px;
	}

	.Group--sizeX-regular > .Group__inner {
		padding: 8px;
	}

	.Group--card > .Group__inner {
		background: var(--background_content);
		border-radius: 8px;
		box-shadow: inset 0 0 0 var(--thin-border) var(--input_border);
	}

	.Group--plain .Group__inner > :global(.Tabs--default:first-child) {
		margin-top: -8px;
	}

	.Group--card > .Group__inner > :global(.Tabs--default:first-child) {
		margin-top: -4px;
	}

	.Group--plain > :global(.Group__separator) {
		padding-top: 8px;
		padding-bottom: 8px;
	}

	.Group--sizeX-regular.Group--plain > :global(.Group__separator) {
		padding: 8px;
	}

	.Group:last-of-type > :global(.Group__separator) {
		display: none;
	}

	.Group:last-of-type > :global(.Group__separator--force),
	.Group--sizeX-regular.Group--card:last-of-type > :global(.Group__separator) {
		display: block;
	}

	:global(.Group__description) {
		display: block;
		padding: 4px 16px 16px;
		color: var(--text_secondary);
	}

	:global(.Group) .Group > .Group__inner,
	:global(.Group) .Group > :global(.Group__separator) {
		padding-left: 0;
		padding-right: 0;
	}

	:global(.Group) .Group:first-of-type > .Group__inner {
		padding-top: 0;
	}

	:global(.Group) .Group:last-of-type > .Group__inner {
		padding-bottom: 0;
	}

	/**
 * iOS
 */
	.Group--ios :global(.Group__description) {
		padding: 4px 12px 16px;
	}

	/**
 * VKCOM
 */
	:global(.PanelHeader--vkcom ~ .Group--card:first-of-type),
	:global(.PanelHeader--vkcom + * .Group--card:first-of-type) {
		position: relative;
		top: -1px;
	}

	:global(.PanelHeader--vkcom ~ .Group--card:first-of-type .Group__inner),
	:global(.PanelHeader--vkcom + * .Group--card:first-of-type .Group__inner) {
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}
</style>

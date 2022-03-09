<script lang="ts">
	import { useAdaptivity } from '$lib/hooks/useAdaptivity';
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import { IOS } from '$lib/lib/platform';
	import Tappable from '$lib/components/Service/Tappable/Tappable.svelte';
	import Icon24Chevron from '@sveltevk/icons/dist/24/chevron';
	import Div from '$lib/components/Elements/div/div.svelte';
	import a from '$lib/components/Elements/a/a.svelte';
	import SimpleCellTypography from './SimpleCellTypography.svelte';
	import Subhead from '../../Typography/Subhead/Subhead.svelte';

	export let component = Div;

	export let href: string | undefined = undefined;

	/**
	 * Контейнер для текста справа от основного текста.
	 */
	export let indicator: any = undefined;
	/**
	 * Контейнер для текста под основным текстом.
	 */
	export let description: string = '';
	/**
	 * Убирает анимацию нажатия
	 */
	export let disabled: boolean = false;

	/**
	 * В iOS добавляет chevron справа. Передавать `true`, если предполагается переход при клике по ячейке.
	 */
	export let expandable: boolean = false;
	export let multiline: boolean = false;

	const adaptivity = useAdaptivity();
	const platform = usePlatform();

	$: $$restProps.class = classNames(
		$$props.class,
		getClassName('SimpleCell', $platform),
		{ 'SimpleCell--exp': expandable, 'SimpleCell--mult': multiline },
		`SimpleCell--sizeY-${$adaptivity.sizeY}`
	);
</script>

<!-- 
@component
SimpleCell — это упрощенная и улучшенная с точки зрения соответствия дизайну версия Cell. Она не может быть
удаляемой, выделяемой или перетаскиваемой. У неё нет размеров. В ней меньше html-элементов.
Всё это влияет на скорость её отрисовки, особенно если идёт речь о сотнях экземпляров.
-->

<Tappable {...$$restProps} {href} {disabled} on:click component={href ? a : component}>
	<slot name="before" />
	<div class="SimpleCell__main">
		<div class="SimpleCell__content">
			<SimpleCellTypography
				platform={$platform}
				sizeY={$adaptivity.sizeY}
				class="SimpleCell__children"
			>
				<slot />
			</SimpleCellTypography>
			{#if $$slots.badge}
				<span class="SimpleCell__badge"><slot name="badge" /></span>
			{/if}
		</div>
		{#if $$slots.description || description}
			<Subhead component="span" class="SimpleCell__description">
				<slot name="description">{description}</slot>
			</Subhead>
		{/if}
	</div>
	{#if $$slots.indicator || indicator}
		<SimpleCellTypography
			platform={$platform}
			sizeY={$adaptivity.sizeY}
			class="SimpleCell__indicator"
		>
			<slot name="indicator">{indicator}</slot>
		</SimpleCellTypography>
	{/if}
	{#if $$slots.after || (expandable && $platform === IOS)}
		<div class="SimpleCell__after">
			<slot name="after" />
			{#if expandable && $platform === IOS}
				<Icon24Chevron />
			{/if}
		</div>
	{/if}
</Tappable>

<style>
	:global(.SimpleCell) {
		display: flex;
		align-items: center;
		min-height: 48px;
		white-space: nowrap;
		text-decoration: none;
		color: var(--text_primary);
		padding-left: 16px;
		padding-right: 16px;
	}

	:global(.SimpleCell--mult) {
		white-space: normal;
	}

	:global(.SimpleCell--mult .SimpleCell__description),
	:global(.SimpleCell--mult .SimpleCell__children) {
		text-overflow: initial;
	}

	.SimpleCell__main {
		max-width: 100%;
		flex-grow: 1;
		min-width: 0;
		overflow: hidden;
	}

	:global(.SimpleCell > .Icon) {
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 12px;
		flex-shrink: 0;
		color: var(--accent);
	}

	:global(.SimpleCell > .Icon--28) {
		padding-right: 16px;
	}

	:global(.SimpleCell__description) {
		color: var(--text_secondary);
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 3px;
		display: block;
	}

	:global(.SimpleCell > .Avatar--sz-32 ~ .SimpleCell__main .SimpleCell__description),
	:global(.SimpleCell > .Avatar--sz-28 ~ .SimpleCell__main .SimpleCell__description) {
		margin-top: 2px;
	}

	:global(.SimpleCell:not(.SimpleCell--mult) .SimpleCell__content) {
		display: flex;
		align-content: flex-start;
		align-items: center;
		justify-content: flex-start;
		max-width: 100%;
	}

	:global(.SimpleCell__children) {
		color: inherit;
		text-overflow: ellipsis;
		overflow: hidden;
		display: block;
	}

	.SimpleCell__badge {
		display: inline-block;
		flex-grow: 0;
		flex-shrink: 0;
		margin-left: 4px;
		color: var(--blue_200);
	}

	.SimpleCell__badge :global(.Badge) {
		margin-top: 2px;
		margin-left: 3px;
	}

	:global(.SimpleCell--mult) .SimpleCell__badge {
		vertical-align: top;
	}

	:global(.SimpleCell--mult) .SimpleCell__badge :global(.Icon) {
		transform: translateY(2px);
	}

	:global(.SimpleCell--mult) .SimpleCell__badge :global(.Badge) {
		margin-top: 8px;
	}

	:global(.SimpleCell__indicator) {
		color: var(--text_secondary);
		min-width: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-left: 4px;
	}

	.SimpleCell__after {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		color: var(--accent);
	}

	.SimpleCell__after > :global(.Icon) {
		padding-left: 8px;
	}

	.SimpleCell__after > :global(.Icon:last-child) {
		padding-right: 2px;
	}

	.SimpleCell__after :global(.IconButton .Icon--28),
	.SimpleCell__after :global(.IconButton .Icon--28 ~ *) {
		margin-right: -8px;
	}

	.SimpleCell__after :global(.IconButton .Icon--24),
	.SimpleCell__after :global(.IconButton .Icon--24 ~ *) {
		margin-right: -10px;
	}

	.SimpleCell__after :global(.IconButton .Icon--16),
	.SimpleCell__after :global(.IconButton .Icon--16 ~ *) {
		margin-right: -14px;
	}

	.SimpleCell__after :global(.IconButton .Icon--w-8),
	.SimpleCell__after :global(.IconButton .Icon--w-8 ~ *) {
		margin-right: -12px;
	}

	/**
 * iOS
 */

	:global(.SimpleCell--ios) {
		padding-left: 12px;
		padding-right: 12px;
	}

	:global(.SimpleCell--ios) .SimpleCell__main,
	:global(.SimpleCell--ios .SimpleCell__indicator) {
		padding-top: 9px;
		padding-bottom: 11px;
	}

	:global(.SimpleCell--ios > .Icon--28) {
		padding-left: 4px;
	}

	:global(.SimpleCell--ios .SimpleCell__after .Icon--chevron_24) {
		color: var(--icon_tertiary);
		padding-right: 4px;
		padding-left: 12px;
	}

	:global(.SimpleCell--ios .SimpleCell__after .IconButton .Icon--16),
	:global(.SimpleCell--ios .SimpleCell__after .IconButton .Icon--16 ~ *) {
		margin-right: -12px;
	}

	:global(.SimpleCell--ios.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--16),
	:global(.SimpleCell--ios.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--16 ~ *) {
		margin-right: -14px;
	}

	:global(.SimpleCell--ios.SimpleCell--sizeY-regular
			> .Avatar:not(.Avatar--sz-32)
			~ .SimpleCell__main
			.SimpleCell__children),
	:global(.SimpleCell--ios.SimpleCell--sizeY-regular
			> .Avatar:not(.Avatar--sz-32)
			~ .SimpleCell__indicator) {
		font-size: 16px;
		line-height: 20px;
	}

	/**
 * Android & VKCOM
 */

	:global(.SimpleCell--android) .SimpleCell__main,
	:global(.SimpleCell--android .SimpleCell__indicator),
	:global(.SimpleCell--vkcom) .SimpleCell__main,
	:global(.SimpleCell--vkcom .SimpleCell__indicator) {
		padding-top: 11px;
		padding-bottom: 10px;
	}

	/**
 * sizeY === 'compact'
 */

	:global(.SimpleCell--sizeY-compact) {
		min-height: 44px;
	}

	:global(.SimpleCell--sizeY-compact) .SimpleCell__main,
	:global(.SimpleCell--sizeY-compact .SimpleCell__indicator) {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	:global(.SimpleCell--sizeY-compact .SimpleCell__description),
	:global(.SimpleCell--sizeY-compact > .Avatar--sz-32 ~ .SimpleCell__main .SimpleCell__description),
	:global(.SimpleCell--sizeY-compact
			> .Avatar--sz-28
			~ .SimpleCell__main
			.SimpleCell__description) {
		margin-top: 1px;
	}

	:global(.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--28),
	:global(.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--28 ~ *) {
		margin-right: -6px;
	}

	:global(.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--24),
	:global(.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--24 ~ *) {
		margin-right: -8px;
	}

	:global(.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--16),
	:global(.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--16 ~ *) {
		margin-right: -12px;
	}

	:global(.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--w-8),
	:global(.SimpleCell--sizeY-compact .SimpleCell__after .IconButton .Icon--w-8 ~ *) {
		margin-right: -10px;
	}

	:global(.SimpleCell--sizeY-compact .SimpleCell__badge .Badge) {
		transform: translateY(0.5px);
	}

	/**
 * CMP:
 * FormItem
 */
	:global(.FormItem > .SimpleCell) {
		margin: 0 calc(-1 * var(--formitem_padding));
	}
</style>

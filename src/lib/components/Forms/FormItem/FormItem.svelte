<!-- svelte-ignore a11y-label-has-associated-control -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Caption from '@sveltevk/vksui/components/Typography/Caption/Caption.svelte';
	import Subhead from '@sveltevk/vksui/components/Typography/Subhead/Subhead.svelte';
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import Removable from '../../Blocks/Removable/Removable.svelte';

	let rootEl: HTMLElement;

	export let top: string = undefined;
	export let bottom: string = undefined;
	export let status: 'default' | 'error' | 'valid' = 'default';
	/**
	 * Дает возможность удалить `FormItem`. Рекомендуется использовать только для `Input` или `Select`.
	 */
	export let removable = false;
	export let removePlaceholder = 'Удалить';

	const platform = usePlatform();
	const adaptivity = useAdaptivity();

	const dispatch = createEventDispatcher();
</script>

<!-- 
@component
Базовый компонент формы. В него нужно оборачивать все поля, из которых конструируется форма. Исключения составляют
поля-ячейки (`Radio`, `Checkbox`, etc.), если в дизайне для них не предусмотрены `top` и `bottom`. Такие поля можно
располагать в форме без оборачивания в `FormItem`.
-->

<div
	{...$$restProps}
	bind:this={rootEl}
	class={classNames(
		getClassName('FormItem', $platform),
		`FormItem--${status}`,
		`FormItem--sizeY-${$adaptivity.sizeY}`,
		{
			'FormItem--withTop': Boolean($$slots.top || top),
			'FormItem--removable': removable
		},
		$$props.class
	)}
>
	{#if removable}
		<Removable
			align="start"
			{removePlaceholder}
			on:click={() => {
				dispatch('remove', rootEl);
			}}
		>
			<div class="FormItem__removable">
				{#if $$slots.top || top}
					<Subhead class="FormItem__top">
						<slot name="top">{top}</slot>
					</Subhead>
				{/if}
				<slot />
				{#if $$slots.bottom || bottom}
					<Caption level="1" weight="3" class="FormItem__bottom">
						<slot name="bottom">{bottom}</slot>
					</Caption>
				{/if}
			</div>
		</Removable>
	{:else}
		{#if $$slots.top || top}
			<Subhead class="FormItem__top">
				<slot name="top">{top}</slot>
			</Subhead>
		{/if}
		<slot />
		{#if $$slots.bottom || bottom}
			<Caption level="1" weight="3" class="FormItem__bottom">
				<slot name="bottom">{bottom}</slot>
			</Caption>
		{/if}
	{/if}
</div>

<style>
	.FormItem {
		display: block;
		padding: 12px var(--formitem_padding);
	}

	.FormItem--removable {
		padding-left: 0;
		padding-right: 0;
	}

	.FormItem__removable {
		flex-grow: 1;
		min-width: 0;
		max-width: 100%;
		overflow: hidden;
	}

	:global(.FormItem__top) {
		padding-top: 2px;
		padding-bottom: 8px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: var(--text_subhead);
	}

	:global(.FormItem__bottom) {
		color: var(--text_secondary);
		padding-top: 8px;
	}

	.FormItem--error :global(.FormItem__bottom) {
		color: var(--field_error_border);
	}

	.FormItem--valid :global(.FormItem__bottom),
	.FormItem--verified :global(.FormItem__bottom) {
		color: var(--field_valid_border);
	}

	/**
 * sizeY COMPACT
 */
	.FormItem--sizeY-compact :global(.FormItem__top) {
		padding-bottom: 6px;
	}

	.FormItem--sizeY-compact :global(.FormItem__bottom) {
		padding-top: 6px;
	}

	/**
 * iOS
 */
	.FormItem--ios {
		--formitem_padding: 12px;
	}

	/**
 * CMP:
 * FormLayoutGroup
 */
	:global(.FormLayoutGroup--horizontal) .FormItem {
		max-width: 100%;
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: 0;
		padding: 0;
		min-width: 0;
	}

	:global(.FormLayoutGroup--horizontal .FormItem + .FormItem) {
		margin-left: 24px;
	}

	:global(.FormLayoutGroup--removable) .FormItem--ios.FormItem--withTop {
		margin-top: -28px;
	}

	:global(.FormLayoutGroup--removable) .FormItem--ios.FormItem--withTop.FormItem--sizeY-compact {
		margin-top: -26px;
	}
</style>

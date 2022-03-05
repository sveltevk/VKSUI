<!-- svelte-ignore a11y-label-has-associated-control -->
<script lang="ts">
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import Caption from '$lib/components/Typography/Caption/Caption.svelte';
	import Subhead from '$lib/components/Typography/Subhead/Subhead.svelte';

	export let top: string = undefined;
	export let bottom: string = undefined;
	export let status: 'default' | 'error' | 'valid' = 'default';

	const platform = usePlatform();
</script>

<!-- 
@component
Базовый компонент формы. В него нужно оборачивать все поля, из которых конструируется форма. Исключения составляют
поля-ячейки (`Radio`, `Checkbox`, etc.), если в дизайне для них не предусмотрены `top` и `bottom`. Такие поля можно
располагать в форме без оборачивания в `FormItem`.
-->

<label
	{...$$restProps}
	class={classNames(getClassName('FormItem', $platform), `FormItem--${status}`, $$props.class)}
>
	{#if $$slots.top || top}
		<Subhead class="FormItem__top"><slot name="top">{top}</slot></Subhead>
	{/if}
	<slot />
	{#if $$slots.bottom || bottom}
		<Caption level="1" weight="regular" class="FormItem__bottom"
			><slot name="bottom">{bottom}</slot></Caption
		>
	{/if}
</label>

<style>
	.FormItem {
		padding-top: 12px;
		padding-bottom: 12px;
		display: block;
	}

	:global(.FormItem__top) {
		padding-top: 2px;
		padding-bottom: 8px;
		color: var(--text_secondary);
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
 * iOS
 */

	.FormItem--ios {
		padding-left: 12px;
		padding-right: 12px;
	}

	.FormItem--ios :global(.Cell),
	.FormItem--ios :global(.SimpleCell),
	.FormItem--ios :global(.RichCell),
	.FormItem--ios :global(.CellButton),
	.FormItem--ios :global(.Radio),
	.FormItem--ios :global(.Checkbox) {
		width: 100%;
		box-sizing: content-box;
		margin-left: -12px;
		margin-right: -12px;
	}

	/**
 * Android & VKCOM
 */

	.FormItem--android,
	.FormItem--vkcom {
		padding-left: 16px;
		padding-right: 16px;
	}

	.FormItem--android :global(.Cell),
	.FormItem--vkcom :global(.Cell),
	.FormItem--android :global(.SimpleCell),
	.FormItem--vkcom :global(.SimpleCell),
	.FormItem--android :global(.RichCell),
	.FormItem--vkcom :global(.RichCell),
	.FormItem--android :global(.CellButton),
	.FormItem--vkcom :global(.CellButton),
	.FormItem--android :global(.Radio),
	.FormItem--vkcom :global(.Radio),
	.FormItem--android :global(.Checkbox),
	.FormItem--vkcom :global(.Checkbox) {
		width: 100%;
		box-sizing: content-box;
		margin-left: -16px;
		margin-right: -16px;
	}
</style>

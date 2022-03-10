<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { createEventDispatcher } from 'svelte';
	import Removable from '../../Blocks/Removable/Removable.svelte';

	export let mode: 'vertical' | 'horizontal' = 'vertical';
	/**
	 * Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.
	 */
	export let removable = false;
	export let removePlaceholder = 'Удалить';

	let rootEl: HTMLDivElement;

	const platform = usePlatform();
	const adaptivity = useAdaptivity();
	$: isRemovable = removable && mode === 'horizontal';

	const dispatch = createEventDispatcher();
</script>

<!-- 
@component
Компонент помогает сгруппировать несколько `FormItem` по какому-то признаку, расположив их по-вертикали или
по-горизонтали.
-->

<div
	{...$$restProps}
	bind:this={rootEl}
	class={classNames(
		$$props.class,
		getClassName('FormLayoutGroup', $platform),
		`FormLayoutGroup--sizeY-${$adaptivity.sizeY}`,
		`FormLayoutGroup--${mode}`,
		{
			'FormLayoutGroup--removable': isRemovable
		}
	)}
>
	{#if isRemovable}
		<Removable
			class="FormLayoutGroup__removable"
			align="start"
			{removePlaceholder}
			on:click={() => {
				dispatch('remove', rootEl);
			}}
		>
			<slot />
		</Removable>
	{:else}
		<slot />
	{/if}
</div>

<style>
	.FormLayoutGroup--horizontal {
		display: flex;
		padding: 12px var(--formitem_padding);
	}

	:global(.FormLayoutGroup__removable) {
		flex-grow: 1;
		min-width: 0;
		max-width: 100%;
	}

	/**
 * iOS
 */
	.FormLayoutGroup--ios {
		--formitem_padding: 12px;
	}

	.FormLayoutGroup--removable {
		padding-left: 0;
		padding-right: 0;
	}
</style>

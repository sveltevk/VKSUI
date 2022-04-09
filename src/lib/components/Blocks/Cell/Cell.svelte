<script lang="ts">
	import label from '@sveltevk/vksui/components/Elements/label/label.svelte';
	import Div from '@sveltevk/vksui/components/Elements/div/div.svelte';

	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, IOS, VKCOM } from '@sveltevk/vksui/lib/platform';
	import { onDestroy, createEventDispatcher } from 'svelte';
	import Removable from '../Removable/Removable.svelte';
	import SimpleCell from '../SimpleCell/SimpleCell.svelte';
	import CellCheckbox from './CellCheckbox.svelte';
	import CellDragger from './CellDragger.svelte';
	import { useDraggable } from './useDraggable';
	import { useList } from '../List/List.svelte';

	const dispatch = createEventDispatcher();

	export let mode: 'removable' | 'selectable' | undefined = undefined;
	/**
	 * Флаг для перехода в режим перетаскивания. **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
	 */
	export let draggable = false;
	/**
	 * Имя для input в режиме selectable
	 */
	export let name: string = undefined;
	/**
	 * В режиме selectable реагирует на входящие значения пропса cheсked, как зависящий напрямую от входящего значения
	 */
	export let checked = false;

	/**
	 * Коллбэк срабатывает при завершении перетаскивания.
	 * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
	 * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
	 * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
	 */
	export let onDragFinish: ({ from, to }: { from: number; to: number }) => void = undefined;
	/**
	 * aria-label для кнопки перетаскивания ячейки
	 */
	export let draggerLabel = 'Перенести ячейку';

	export let style = '';
	export let disabled = false;
	export let value: string = undefined;

	export let component = Div;
	// TODO: проброс всякого в SimpleCell

	/**
	 * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
	 */
	export let removePlaceholder = 'Удалить';

	const selectable = mode === 'selectable';
	const removable = mode === 'removable';

	const platform = usePlatform();

	const { dragging, rootElRef, onDragStart, onDragMove, onDragEnd } = useDraggable({
		onDragFinish
	});

	let root: HTMLElement;
	$: rootElRef.set(root);

	const toggleDrag = useList();

	$: {
		toggleDrag.set(false);
		if ($dragging) {
			toggleDrag.set(true);
		}
	}

	onDestroy(() => toggleDrag.set(false));

	const simpleCellDisabled = (draggable && !selectable) || removable || disabled;
	const hasActive = !simpleCellDisabled && !$dragging;

	$: cellClasses = classNames($$props.class, getClassName('Cell', $platform), {
		'Cell--dragging': $dragging,
		'Cell--removable': removable,
		'Cell--selectable': selectable,
		'Cell--disabled': disabled
	});
</script>

{#if removable}
	<Removable
		bind:root
		class={cellClasses}
		{style}
		on:click={() => dispatch('remove')}
		{removePlaceholder}
	>
		<SimpleCell
			{hasActive}
			hasHover={hasActive}
			{...$$restProps}
			class="Cell__content"
			disabled={simpleCellDisabled}
			component={selectable ? label : component}
		>
			<svelte:fragment slot="before">
				{#if draggable && ($platform === ANDROID || $platform === VKCOM)}
					<CellDragger
						class="Cell__dragger"
						aria-label={draggerLabel}
						on:dragStart={onDragStart}
						on:dragMove={(e) => onDragMove(e.detail)}
						on:dragEnd={onDragEnd}
					/>
				{/if}
				{#if selectable}
					<CellCheckbox
						class="Cell__checkbox"
						{name}
						bind:value
						on:change
						bind:checked
						{disabled}
					/>
				{/if}
				<slot name="before" />
			</svelte:fragment>
			<svelte:fragment slot="after">
				{#if draggable && $platform === IOS}
					<CellDragger
						class="Cell__dragger"
						aria-label={draggerLabel}
						on:dragStart={onDragStart}
						on:dragMove={(e) => onDragMove(e.detail)}
						on:dragEnd={onDragEnd}
					/>
				{/if}
				<slot name="after" />
			</svelte:fragment>
			<slot />
		</SimpleCell>
	</Removable>
{:else}
	<div bind:this={root} class={cellClasses} {style}>
		<SimpleCell
			{hasActive}
			hasHover={hasActive}
			{...$$restProps}
			class="Cell__content"
			disabled={simpleCellDisabled}
			component={selectable ? label : component}
		>
			<svelte:fragment slot="before">
				{#if draggable && ($platform === ANDROID || $platform === VKCOM)}
					<CellDragger
						class="Cell__dragger"
						aria-label={draggerLabel}
						on:dragStart={onDragStart}
						on:dragMove={(e) => onDragMove(e.detail)}
						on:dragEnd={onDragEnd}
					/>
				{/if}
				{#if selectable}
					<CellCheckbox
						class="Cell__checkbox"
						{name}
						bind:value
						on:change
						bind:checked
						{disabled}
					/>
				{/if}
				<slot name="before" />
			</svelte:fragment>
			<svelte:fragment slot="after">
				{#if draggable && $platform === IOS}
					<CellDragger
						class="Cell__dragger"
						aria-label={draggerLabel}
						on:dragStart={onDragStart}
						on:dragMove={(e) => onDragMove(e.detail)}
						on:dragEnd={onDragEnd}
					/>
				{/if}
				<slot name="after" />
			</svelte:fragment>
			<slot />
		</SimpleCell>
	</div>
{/if}

<style>
	:global(.List--dragging .Cell:not(.Cell--dragging)) {
		transition: transform 0.3s ease;
		pointer-events: none;
	}

	:global(.Cell--dragging) {
		background-color: var(--background_content);
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
		z-index: 3;
	}

	:global(.Cell--selectable.Cell--disabled) {
		opacity: 0.6;
	}

	:global(.Cell__checkbox),
	:global(.Cell__dragger) {
		position: relative;
		flex-shrink: 0;
		margin-right: 16px;
	}

	:global(.Cell__dragger) {
		z-index: 2;
	}

	:global(.Cell__content) {
		max-width: 100%;
		min-width: 0;
	}

	:global(.Cell--removable .Cell__content) {
		flex-grow: 1;
		padding-right: 0;
		padding-left: 0;
	}

	/**
 * iOS
 */
	:global(.Cell--ios .Cell__dragger) {
		margin-right: 0;
		margin-left: 12px;
	}

	:global(.Cell--ios .Cell__checkbox) {
		margin-right: 12px;
	}

	/**
 * CMP:
 * FormItem
 */
	:global(.FormItem > .Cell) {
		margin: 0 calc(-1 * var(--formitem_padding));
	}
</style>

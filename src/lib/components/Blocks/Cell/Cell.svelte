<script lang="ts">
	import Icon24Chevron from '@sveltevk/icons/dist/24/chevron';
	import Icon16Done from '@sveltevk/icons/dist/16/done';
	import Icon24Reorder from '@sveltevk/icons/dist/24/reorder';
	import Icon24Cancel from '@sveltevk/icons/dist/24/cancel';
	import Icon24ReorderIos from '@sveltevk/icons/dist/24/reorder_ios';

	import Tappable from '@sveltevk/vksui/components/Service/Tappable/Tappable.svelte';
	import Touch from '@sveltevk/vksui/components/Service/Touch/Touch.svelte';
	import label from '@sveltevk/vksui/components/Elements/label/label.svelte';
	import Div from '@sveltevk/vksui/components/Elements/div/div.svelte';
	import a from '@sveltevk/vksui/components/Elements/a/a.svelte';

	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, IOS } from '@sveltevk/vksui/lib/platform';
	import { onDestroy, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/**
	 * Контейнер для контента слева от `children`.
	 */
	export let before = '';

	/**
	 * Контейнер для текста справа от `children`.
	 */
	export let indicator = '';

	/**
	 * Контейнер для контента справа от `children` и `indicator`.
	 */
	export let asideContent = '';

	/**
	 * Выставляйте этот флаг, если клик по ячейке вызывает переход на другую панель. Флаг нужен для корректной
	 * стилизации такой ячейки.
	 */
	export let expandable = false;

	/**
	 * Добавляет возможность переноса содержимого `children` и `description`. Без этого флага текст будет уходить
	 * в троеточие.
	 */
	export let multiline = false;

	/**
	 * Контейнер для дополнительного содержимого под `children`.
	 */
	export let description = '';

	/**
	 * Контейнер для произвольного содержимого под `description`. Рисуется только если передать `size="l"`.
	 */
	export let bottomContent = '';

	/**
	 * Размер влияет на выравнивание блоков по вертикали, вид сепаратора (iOS) и возможность вставлять `bottomContent`.
	 */
	export let size: 'm' | 'l' = 'm';

	/**
	 * Флаг для перехода в режим ячеек-чекбоксов.
	 * **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
	 * **Важно:** этот режим несовместим с `draggable`. В случае истинности двух этих флагов, приоритет отдается
	 * `draggable`.
	 */
	export let selectable = false;

	/**
	 * Флаг для перехода в режим удаляемых ячеек. **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
	 */
	export let removable = false;

	/**
	 * Коллбэк срабатывает при клике на контрол удаления.
	 */
	export let onRemove: (e: MouseEvent, rootEl: HTMLElement) => void = undefined;

	/**
	 * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
	 */
	export let removePlaceholder = 'Удалить';

	/**
	 * Флаг для перехода в режим перетаскивания. **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
	 */
	export let draggable = false;

	/**
	 * Коллбэк срабатывает при завершении перетаскивания.
	 * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
	 * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
	 * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
	 */
	export let onDragFinish: ({ from, to }: { from: number; to: number }) => void = undefined;

	export let href = '';

	let isRemoveActivated = false;
	let removeOffset = 0;
	let dragging = false;

	let rootEl: HTMLElement;
	let removeButton: HTMLElement;

	const platform = usePlatform();

	$: rootProps = selectable ? {} : $$restProps;
	$: linkProps = href ? $$restProps : {};
	const IS_PLATFORM_ANDROID = $platform === ANDROID;
	const IS_PLATFORM_IOS = $platform === IOS;

	const onClick = (e: Event) => {
		const target = e.target as HTMLElement;
		if (target.tagName.toLowerCase() === 'input') {
			e.stopPropagation();
		} else if (removable) {
			return null;
		} else {
			dispatch('click', e);
		}
	};

	const activateRemove = (e: MouseEvent) => {
		e.stopPropagation();
		isRemoveActivated = true;
		document.addEventListener('click', deactivateRemove);
	};

	const deactivateRemove = () => {
		isRemoveActivated = false;
		removeOffset = 0;
		document.removeEventListener('click', deactivateRemove);
	};

	const onRemoveClick = (e: MouseEvent) => {
		// FIXME: e.nativeEvent.stopImmediatePropagation();
		e.preventDefault();
		onRemove && onRemove(e, rootEl);
	};

	onDestroy(() => {
		document.removeEventListener('click', deactivateRemove);
	});

	// beforeUpdate(() => {
	//   if (isRemoveActivated) {
	//     removeOffset = removeButton.offsetWidth;
	//   }
	// });

	$: removeOffset = isRemoveActivated ? removeButton.offsetWidth : 0;

	let dragShift: number;
	let listEl: HTMLElement;
	let siblings: HTMLElement[];
	let dragStartIndex: number;
	let dragEndIndex: number;
	let dragDirection: 'down' | 'up';

	const onDragStart = () => {
		dragging = true;
		dragShift = 0;
		listEl = rootEl.closest('.List');
		listEl && listEl.classList.add('List--dragging');
		siblings = Array.prototype.slice.call(rootEl.parentElement.childNodes);
		dragStartIndex = siblings.indexOf(rootEl);
		dragEndIndex = dragStartIndex;
	};

	const onDragMove = ({ detail }) => {
		detail.originalEvent.preventDefault();
		if (removeOffset) {
			return;
		}

		rootEl.style.transform = `translateY(${detail.shiftY}px)`;
		const rootGesture = rootEl.getBoundingClientRect();
		dragDirection = dragShift - detail.shiftY < 0 ? 'down' : 'up';
		dragShift = detail.shiftY;
		dragEndIndex = dragStartIndex;

		siblings.forEach((sibling, siblingIndex) => {
			if (!sibling.getBoundingClientRect) {
				return;
			}

			const siblingGesture = sibling.getBoundingClientRect();
			if (dragStartIndex < siblingIndex) {
				if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2) {
					if (dragDirection === 'down') {
						sibling.style.transform = 'translateY(-100%)';
					}
					dragEndIndex++;
				}
				if (
					rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2 &&
					dragDirection === 'up'
				) {
					sibling.style.transform = 'translateY(0)';
				}
			} else if (dragStartIndex > siblingIndex) {
				if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2) {
					if (dragDirection === 'up') {
						sibling.style.transform = 'translateY(100%)';
					}
					dragEndIndex--;
				}
				if (
					rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2 &&
					dragDirection === 'down'
				) {
					sibling.style.transform = 'translateY(0)';
				}
			}
		});
	};

	const onDragEnd = () => {
		dragging = false;
		listEl && listEl.classList.remove('List--dragging');
		onDragFinish && onDragFinish({ from: dragStartIndex, to: dragEndIndex });
		siblings.forEach((sibling) => {
			if (sibling.style) {
				sibling.style.transform = null;
			}
		});
		dragShift = undefined;
		listEl = undefined;
		siblings = undefined;
		dragStartIndex = undefined;
		dragEndIndex = undefined;
		dragDirection = undefined;
	};
</script>

<!-- 
@component
-->

<div
	{...rootProps}
	on:click={href || draggable ? null : onClick}
	class={classNames(
		getClassName('Cell', $platform),
		{
			'Cell--expandable': expandable,
			'Cell--multiline': multiline,
			'Cell--dragging': dragging,
			'Cell--draggable': draggable
		},
		`Cell--${size}`,
		$$props.class
	)}
	bind:this={rootEl}
>
	<Tappable
		{...linkProps}
		on:click={href ? onClick : null}
		component={selectable ? label : href ? a : Div}
		class="Cell__in"
		{href}
		disabled={(!selectable && !href && !expandable) || removable || draggable}
		style={removable ? `transform: translateX(-${removeOffset}px)` : null}
	>
		{#if selectable}
			<input {...$$restProps} on:change type="checkbox" class="Cell__checkbox" />
		{/if}
		<div class="Cell__before">
			{#if selectable && IS_PLATFORM_IOS}
				<div class="Cell__checkbox-marker">
					<Icon16Done />
				</div>
			{/if}
			{#if removable && IS_PLATFORM_IOS}
				<div class="Cell__remove-marker" on:click={activateRemove} />
			{/if}
			{#if draggable && IS_PLATFORM_ANDROID}
				<Touch
					on:start={onDragStart}
					on:moveY={onDragMove}
					on:end={onDragEnd}
					class="Cell__dragger"
				>
					<Icon24Reorder />
				</Touch>
			{/if}
			{#if $$slots.before || before}
				<div class="Cell__before-in">
					<slot name="before">{before}</slot>
				</div>
			{/if}
		</div>
		<div class="Cell__main">
			<div class="Cell__children">
				<slot />
			</div>
			{#if $$slots.description || description}
				<div class="Cell__description">
					<slot name="description">{description}</slot>
				</div>
			{/if}
			{#if size === 'l' && ($$slots.bottomContent || bottomContent)}
				<div class="Cell__bottom">
					<slot name="bottomContent">{bottomContent}</slot>
				</div>
			{/if}
		</div>
		<div class="Cell__indicator">
			<slot name="indicator">{indicator}</slot>
		</div>
		<div class="Cell__aside">
			<slot name="asideContent">{asideContent}</slot>
			{#if selectable && IS_PLATFORM_ANDROID}
				<div class="Cell__checkbox-marker">
					<Icon16Done />
				</div>
			{/if}
			{#if removable && IS_PLATFORM_ANDROID}
				<div class="Cell__remove-marker" on:click={onRemoveClick}>
					<Icon24Cancel />
				</div>
			{/if}
			{#if IS_PLATFORM_IOS && expandable && !draggable}
				<Icon24Chevron class="Cell__chevron" />
			{/if}
			{#if IS_PLATFORM_IOS && draggable}
				<Touch
					class="Cell__dragger"
					on:start={onDragStart}
					on:moveY={onDragMove}
					on:end={onDragEnd}
				>
					<Icon24ReorderIos />
				</Touch>
			{/if}
		</div>
	</Tappable>
	{#if removable && IS_PLATFORM_IOS}
		<div
			bind:this={removeButton}
			class="Cell__remove"
			on:click={onRemoveClick}
			style={removable ? `transform: translateX(-${removeOffset}px)` : null}
		>
			<span class="Cell__remove-in">
				<slot name="removePlaceholder">{removePlaceholder}</slot>
			</span>
		</div>
	{/if}
</div>

<style>
	.Cell {
		position: relative;
		margin: 0;
		padding: 0;
		font-size: 16px;
		line-height: 22px;
	}

	:global(.List--dragging) .Cell:not(.Cell--dragging) {
		transition: transform 0.3s ease;
	}

	:global(.List--dragging) .Cell--dragging,
	.Cell--dragging {
		background-color: var(--background_content);
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
		z-index: 3;
	}

	:global(.Cell__in) {
		position: relative;
		display: flex;
		max-width: 100%;
		overflow: hidden;
		text-decoration: none;
	}

	.Cell--m :global(.Cell__in) {
		align-items: center;
	}

	.Cell--l :global(.Cell__in) {
		align-items: flex-start;
	}

	.Cell__checkbox {
		display: none;
	}

	.Cell__before {
		position: relative;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		align-self: stretch;
	}

	.Cell--l .Cell__before-in {
		align-self: flex-start;
	}

	.Cell__before-in {
		flex-shrink: 0;
		color: var(--accent);
	}

	.Cell__checkbox-marker {
		box-sizing: border-box;
	}

	.Cell__main {
		flex-grow: 1;
		max-width: 100%;
		color: var(--text_primary);
		white-space: nowrap;
		overflow: hidden;
	}

	.Cell--multiline .Cell__main {
		white-space: normal;
	}

	.Cell__description {
		color: var(--text_secondary);
		margin-top: 2px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.Cell--l .Cell__description {
		margin-top: 0;
	}

	.Cell__children {
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.Cell--l .Cell__children {
		font-size: 15px;
		font-weight: 500;
	}

	.Cell__bottom {
		margin-top: 8px;
	}

	.Cell__indicator,
	.Cell__aside {
		overflow: hidden;
		max-width: 75%;
		color: var(--text_secondary);
		text-align: right;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.Cell__aside {
		flex-shrink: 0;
		overflow: visible;
	}

	.Cell--l .Cell__aside {
		align-self: center;
	}

	.Cell__indicator + .Cell__aside:not(:empty) {
		padding-left: 8px;
	}

	:global(.Cell__dragger) {
		position: relative;
		color: var(--icon_secondary);
	}

	:global(.Cell__dragger::after) {
		position: absolute;
		display: block;
		box-sizing: border-box;
		content: '';
	}

	/* iOS */
	.Cell--ios {
		overflow: hidden;
	}

	.Cell--ios .Cell__remove {
		position: absolute;
		left: 100%;
		height: 100%;
		top: 0;
		background-color: var(--destructive);
		color: var(--white);
		padding: 0 10px;
		line-height: 45px;
		font-size: 15px;
		transition: transform 0.6s var(--ios-easing);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Cell--ios .Cell__remove-in {
		flex-shrink: 0;
	}

	.Cell--ios :global(.Cell__chevron) {
		color: var(--icon_tertiary);
	}

	.Cell--ios :global(.Cell__in) {
		padding: 0 12px;
		transition: background-color 0.15s ease-out, transform 0.6s var(--ios-easing);
	}

	.Cell--ios .Cell__before-in > :global(.Icon) {
		padding: 10px 16px 10px 0;
	}

	.Cell--ios.Cell--m .Cell__before-in > :global(.Avatar) {
		padding: 4px 12px 4px 0;
	}

	.Cell--ios :global(.Cell__dragger::after) {
		width: calc(100% + 20px);
		height: calc(100% + 20px);
		right: -10px;
		top: -10px;
	}

	.Cell--ios.Cell--l .Cell__before-in > :global(.Avatar) {
		padding: 12px 12px 12px 0;
	}

	.Cell--ios .Cell__checkbox-marker {
		margin: 10px 16px 10px 0;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		border: 2px solid var(--icon_secondary);
		color: transparent;
	}

	.Cell--ios .Cell__checkbox:checked ~ .Cell__before .Cell__checkbox-marker {
		border: none;
		color: var(--white);
		background-color: var(--accent);
		padding: 4px;
	}

	.Cell--ios .Cell__remove-marker {
		margin: 10px 16px 10px 0;
		width: 21px;
		height: 21px;
		background-color: var(--destructive);
		border-radius: 50%;
		position: relative;
		box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06);
	}

	.Cell--ios .Cell__remove-marker::before {
		position: absolute;
		left: 6px;
		top: 10px;
		width: 9px;
		height: 1px;
		background-color: var(--white);
		content: '';
		display: block;
	}

	.Cell--ios .Cell__main {
		padding: 11px 8px 11px 0;
	}

	.Cell--ios .Cell__description:not(:empty) {
		font-size: 13px;
		line-height: 15px;
	}

	.Cell--ios .Cell__indicator,
	.Cell--ios .Cell__aside {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	/* Android */
	.Cell--android {
		font-size: 16px;
	}

	.Cell--android :global(.Cell__in) {
		padding: 0 16px;
	}

	.Cell--android .Cell__before-in > :global(.Icon),
	.Cell--android :global(.Cell__dragger) > :global(.Icon) {
		padding: 12px 16px 12px 0;
	}

	.Cell--android .Cell__dragger::after {
		width: calc(100% + 16px);
		height: 100%;
		right: 0;
		top: 0;
	}

	.Cell--android .Cell__before-in > :global(.Avatar) {
		padding: 8px 12px 8px 0;
	}

	.Cell--android.Cell--l .Cell__before-in > :global(.Avatar) {
		padding: 12px 12px 12px 0;
	}

	.Cell--android .Cell__main {
		padding: 14px 8px 14px 0;
		line-height: 20px;
	}

	.Cell--android.Cell--l .Cell__main {
		padding: 12px 8px 12px 0;
	}

	.Cell--android .Cell__description:not(:empty) {
		font-size: 14px;
		line-height: 18px;
	}

	.Cell--android .Cell__checkbox-marker {
		width: 18px;
		height: 18px;
		border: 2px solid var(--icon_secondary);
		color: transparent;
		border-radius: 3px;
	}

	.Cell--android .Cell__checkbox:checked ~ .Cell__aside .Cell__checkbox-marker {
		color: #fff;
		border: none;
		padding: 1px;
		background-color: var(--accent);
	}

	.Cell--android .Cell__indicator,
	.Cell--android .Cell__aside {
		padding-top: 12px;
		padding-bottom: 12px;
	}
</style>

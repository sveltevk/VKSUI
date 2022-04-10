<script context="module" lang="ts">
	function getPageAriaLabelDefault(page: number, isCurrent: boolean): string {
		return isCurrent ? `${page} страница` : `Перейти на ${page} страницу`;
	}
</script>

<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePagination } from '@sveltevk/vksui/hooks/usePagination';
	import { createEventDispatcher } from 'svelte';
	import Button from '../Button/Button.svelte';
	import Icon24ChevronCompactLeft from '@sveltevk/icons/dist/24/chevron_compact_left';
	import Icon24ChevronCompactRight from '@sveltevk/icons/dist/24/chevron_compact_right';
	import Tappable from '../../Service/Tappable/Tappable.svelte';
	import classNames from '@sveltevk/vksui/lib/classNames';

	const dispatch = createEventDispatcher<{
		change: number;
	}>();

	/**
	 * Текущая страница.
	 */
	export let currentPage = 1;
	/**
	 * Кол-во всегда видимых страниц по краям текущей страницы.
	 */
	export let siblingCount = 1;
	/**
	 * Кол-во всегда видимых страниц в начале и в конце.
	 */
	export let boundaryCount = 1;
	/**
	 * Общее кол-во страниц.
	 */
	export let totalPages = 1;
	/**
	 * Блокировка всех кнопок.
	 */
	export let disabled = false;
	/**
	 * Переобределение `aria-label` для кнопки навигации назад.
	 * По умолчанию используется текст на "ru_RU".
	 */
	export let prevButtonAriaLabel = 'Перейти на предыдущую страницу';
	/**
	 * Переобределение `aria-label` для кнопки навигации вперёд.
	 * По умолчанию используется текст на "ru_RU".
	 */
	export let nextButtonAriaLabel = 'Перейти на следующую страницу';
	/**
	 * Функция для переопределния и/или локализации `aria-label` атрибута.
	 * По умолчанию используется текст на "ru_RU".
	 */
	export let getPageAriaLabel: (page: number, isCurrent: boolean) => string =
		getPageAriaLabelDefault;

	const adaptivity = useAdaptivity();

	$: pages = usePagination({
		currentPage,
		totalPages,
		siblingCount,
		boundaryCount
	});

	$: isFirstPage = currentPage === 1;
	$: isLastPage = currentPage === totalPages;

	// Мы иземняем currentPage внутри для возможности двухсторонней привязки
	const handlePrevClick = () => {
		if (!isLastPage) {
			currentPage = currentPage - 1;
			dispatch('change', currentPage);
		}
	};

	const handleClick = (event: CustomEvent<MouseEvent>) => {
		// @ts-expect-error
		const page: string = event.detail.target.dataset.page || '1';
		currentPage = Number(page);
		dispatch('change', currentPage);
	};

	const handleNextClick = () => {
		if (!isLastPage) {
			currentPage = currentPage + 1;
			dispatch('change', currentPage);
		}
	};
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<nav class="Pagination" role="navigation" aria-label="Навигация по страницам" {...$$restProps}>
	<ul class="Pagination__list">
		<li class="Pagination__prevButtonContainer">
			<Button
				size="l"
				appearance="accent"
				mode="tertiary"
				stretched
				disabled={isFirstPage || disabled}
				aria-label={prevButtonAriaLabel}
				onClick={handlePrevClick}
			>
				<Icon24ChevronCompactLeft slot="before" width={24} />
			</Button>
		</li>
		{#each pages as page}
			{@const isCurrent = page === currentPage}
			{#if page === 'start-ellipsis' || page === 'end-ellipsis'}
				<li>
					<div
						class={classNames(
							'Pagination__page',
							'Pagination__page--type-ellipsis',
							`Pagination__page--sizeY-${$adaptivity.sizeY}`,
							disabled && 'Pagination__page--disabled'
						)}
					>
						...
					</div>
				</li>
			{:else}
				<li>
					<Tappable
						class={classNames(
							'Pagination__page',
							`Pagination__page--sizeY-${$adaptivity.sizeY}`,
							isCurrent && 'Pagination__page--current',
							disabled && 'Pagination__page--disabled'
						)}
						activeMode="Pagination__page--state-active"
						hoverMode="Pagination__page--state-hover"
						hasActive={!isCurrent}
						hasHover={!isCurrent}
						focusVisibleMode="outside"
						{disabled}
						data-page={page}
						aria-current={isCurrent ? true : undefined}
						aria-label={getPageAriaLabel(page, isCurrent)}
						on:click={handleClick}
					>
						{page}
					</Tappable>
				</li>
			{/if}
		{/each}
		<li class="Pagination__nextButtonContainer">
			<Button
				size="l"
				appearance="accent"
				mode="tertiary"
				stretched
				disabled={isLastPage || disabled}
				aria-label={nextButtonAriaLabel}
				on:click={handleNextClick}
			>
				<Icon24ChevronCompactRight slot="after" width={24} />
			</Button>
		</li>
	</ul>
</nav>

<style>
	.Pagination__list {
		display: flex;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.Pagination__prevButtonContainer {
		margin-right: 8px;
	}

	.Pagination__nextButtonContainer {
		margin-left: 8px;
	}

	/* Page styles */
	:global(.Pagination__page) {
		box-sizing: border-box;
		padding-right: 8px;
		padding-left: 8px;
		width: 100%;
		min-width: 40px;
		border-radius: var(--vkui--size_border_radius--regular);
		text-align: center;
		color: var(--vkui--color_text_secondary);
		user-select: none;
	}

	:global(.Pagination__page--state-hover) {
		background-color: var(--vkui--color_transparent--hover);
	}

	:global(.Pagination__page--state-active),
	:global(.Pagination__page--current) {
		color: var(--vkui--color_text_primary);
		background-color: var(--vkui--color_transparent--active);
	}

	:global(.Pagination__page--disabled) {
		opacity: var(--vkui--opacity_disable);
	}

	:global(.Pagination__page--sizeY-compact) {
		font-size: var(--vkui--font_text--font_size--compact);
		line-height: var(--vkui--size_button_large_height--compact);
		height: var(--vkui--size_button_large_height--compact);
	}

	:global(.Pagination__page--sizeY-regular) {
		font-size: var(--vkui--font_text--font_size--regular);
		line-height: var(--vkui--size_button_large_height--regular);
		height: var(--vkui--size_button_large_height--regular);
	}

	:global(.Pagination__page--type-ellipsis) {
		min-width: 16px;
		padding-right: 0;
		padding-left: 0;
	}
</style>

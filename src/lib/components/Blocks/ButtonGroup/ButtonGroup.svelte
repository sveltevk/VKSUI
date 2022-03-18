<script lang="ts">
	import classNames from '@sveltevk/vksui/lib/classNames';

	/**
	 * Задает расположение элементов внутри группы, вертикальное или горизонтальное.
	 */
	export let mode: 'vertical' | 'horizontal' = 'horizontal';
	/**
	 * Выставляет в зависимости от `mode` отступ по вертикали или горизонтали.
	 */
	export let gap: 'none' | 'space' | 's' | 'm' = 'm';
	/**
	 * Растягивает компонент на всю ширину контейнера.
	 *
	 * Note: Для потомков соответствующее поведение нужно определять самостоятельно, где это необходимо.
	 */
	export let stretched = false;
</script>

<div
	{...$$restProps}
	class={classNames(
		'ButtonGroup',
		`ButtonGroup--mode-${mode}`,
		gap !== 'none' && `ButtonGroup--gap-${gap}`,
		stretched && 'ButtonGroup--stretched'
	)}
	role="group"
>
	<slot />
</div>

<style>
	.ButtonGroup {
		display: inline-flex;
		align-items: flex-start; /* Чтобы блоки по-умолчанию не растягивались на всю ширину контейнера */
	}

	.ButtonGroup--stretched {
		display: flex;
		width: 100%;
	}

	.ButtonGroup--mode-vertical {
		flex-direction: column;
	}

	.ButtonGroup--mode-horizontal {
		flex-direction: row;
	}

	/* stylelint-disable vkui/atomic */

	/**
 * # Обоснование
 * Чтобы не завязываться на класс компонента, используем каскад и универсальный селектор.
 */

	/* "gap" для mode="vertical" */
	.ButtonGroup--mode-vertical.ButtonGroup--gap-space > :global(:not(:first-child)) {
		margin-top: var(--vkui--size_button_group_gap_space--regular);
	}

	.ButtonGroup--mode-vertical.ButtonGroup--gap-s > :global(:not(:first-child)) {
		margin-top: var(--vkui--size_button_group_gap_small--regular);
	}

	.ButtonGroup--mode-vertical.ButtonGroup--gap-m > :global(:not(:first-child)) {
		margin-top: var(--vkui--size_button_group_gap_medium--regular);
	}

	/* "gap" для mode="horizontal" */
	.ButtonGroup--mode-horizontal.ButtonGroup--gap-space > :global(:not(:last-child)) {
		margin-right: var(--vkui--size_button_group_gap_space--regular);
	}

	.ButtonGroup--mode-horizontal.ButtonGroup--gap-s > :global(:not(:last-child)) {
		margin-right: var(--vkui--size_button_group_gap_small--regular);
	}

	.ButtonGroup--mode-horizontal.ButtonGroup--gap-m > :global(:not(:last-child)) {
		margin-right: var(--vkui--size_button_group_gap_medium--regular);
	}

	/* stylelint-enable vkui/atomic */
</style>

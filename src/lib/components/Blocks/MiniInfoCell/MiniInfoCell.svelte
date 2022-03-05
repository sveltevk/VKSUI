<script lang="ts">
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import Text from '$lib/components/Typography/Text/Text.svelte';
	import Tappable from '$lib/components/Service/Tappable/Tappable.svelte';
	import Div from '$lib/components/Elements/div/div.svelte';

	/**
	 * Тип ячейки:
	 *
	 * - `base` – базовая ячейка с серой иконкой и серым текстом.<br />
	 * В компонент можно передать `Link`, чтобы визуально сделать часть текста ссылкой.
	 * - `add` – тип ячейки, который показывает, что взаимодействие с ней должно вызывать действие добавления чего-то.
	 * - `more` – взаимодействие с такой ячейкой должно открывать какую-то подробную информацию.
	 */
	export let mode: 'base' | 'add' | 'more' = 'base';

	/**
	 * Тип отображения текста:
	 *
	 * - `nowrap` – в одну строку, текст не переносится и обрезается.
	 * - `short` – максимально отображается 3 строки, остальное обрезается.
	 * - `full` – текст отображается полностью.
	 */
	export let textWrap: 'nowrap' | 'short' | 'full' = 'nowrap';

	/**
	 * Стиль текста:
	 *
	 * - `primary` – используйте этот стиль, если хотите выделить информацию в общем списке.<br />Пример использования: подробная информация на странице сообщества
	 * - `secondary` – стиль по-умолчанию.
	 */
	export let textLevel: 'primary' | 'secondary' = 'secondary';

	const platform = usePlatform();

	let component = mode === 'base' ? Div : Tappable;

	$: $$restProps.class = classNames(
		getClassName('MiniInfoCell', $platform),
		{
			[`MiniInfoCell--md-${mode}`]: mode !== 'base',
			[`MiniInfoCell--wr-${textWrap}`]: textWrap !== 'nowrap'
		},
		`MiniInfoCell--lvl-${textLevel}`,
		$$props.class
	);
</script>

<svelte:component this={component} {...$$restProps} on:click>
	<div class="MiniInfoCell__icon">
		<slot name="before" />
	</div>
	<Text class="MiniInfoCell__content" weight={mode === 'more' ? 'medium' : 'regular'}>
		<slot />
	</Text>

	{#if $$slots.after}
		<div class="MiniInfoCell__after">
			<slot name="after" />
		</div>
	{/if}
</svelte:component>

<style>
	:global(.MiniInfoCell) {
		display: flex;
		padding-top: 6px;
		padding-bottom: 6px;
	}

	:global(.MiniInfoCell--lvl-primary) {
		color: var(--text_primary);
	}

	:global(.MiniInfoCell--lvl-secondary) {
		color: var(--text_subhead);
	}

	.MiniInfoCell__icon {
		color: var(--icon_outline_secondary);
	}

	:global(.MiniInfoCell__content) {
		flex: 1;
		min-width: 0;
		margin-left: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	:global(.MiniInfoCell--wr-short) :global(.MiniInfoCell__content) {
		white-space: initial;
		display: -webkit-box;
		max-height: 60px;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	:global(.MiniInfoCell--wr-full) :global(.MiniInfoCell__content) {
		overflow: inherit;
		white-space: initial;
	}

	.MiniInfoCell__after {
		margin-left: 12px;
		margin-top: -2px;
		margin-bottom: -2px;
	}

	.MiniInfoCell__after :global(.UsersStack) {
		padding: 0;
	}

	:global(.MiniInfoCell--md-add),
	:global(.MiniInfoCell--md-add) .MiniInfoCell__icon {
		color: var(--accent);
	}

	:global(.MiniInfoCell--md-more),
	:global(.MiniInfoCell--md-more) .MiniInfoCell__icon {
		color: var(--link_alternate);
	}

	:global(.MiniInfoCell--md-more) {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	/* iOS */

	:global(.MiniInfoCell--ios) {
		padding-left: 12px;
		padding-right: 12px;
	}

	/* Android */

	:global(.MiniInfoCell--android) {
		padding-left: 16px;
		padding-right: 16px;
	}
</style>

<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Text from '@sveltevk/vksui/components/Typography/Text/Text.svelte';
	import Tappable from '@sveltevk/vksui/components/Service/Tappable/Tappable.svelte';
	import Div from '@sveltevk/vksui/components/Elements/div/div.svelte';
	import { get_current_component, onMount } from 'svelte/internal';

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

	let isClickable = false;
	const callbacks = get_current_component().$$.callbacks;
	onMount(() => (isClickable = callbacks['click'] !== undefined));
</script>

<Tappable
	component={Div}
	disabled={!isClickable}
	role={isClickable ? 'button' : undefined}
	{...$$restProps}
	on:click
	class={classNames(
		$$restProps.class,
		getClassName('MiniInfoCell', $platform),
		{
			[`MiniInfoCell--md-${mode}`]: mode !== 'base',
			[`MiniInfoCell--wr-${textWrap}`]: textWrap !== 'nowrap'
		},
		`MiniInfoCell--lvl-${textLevel}`
	)}
>
	<span class="MiniInfoCell__icon">
		<slot name="before" />
	</span>
	<Text class="MiniInfoCell__content" weight={mode === 'more' ? 'medium' : 'regular'}>
		<slot />
	</Text>
	{#if $$slots.after}
		<span class="MiniInfoCell__after">
			<slot name="after" />
		</span>
	{/if}
</Tappable>

<style>
	:global(.MiniInfoCell) {
		display: flex;
		padding: 6px 12px;
	}

	:global(.MiniInfoCell--lvl-primary) {
		color: var(--text_primary);
	}

	:global(.MiniInfoCell--lvl-secondary) {
		color: var(--text_subhead);
	}

	.MiniInfoCell__icon {
		margin-right: 12px;
		color: var(--icon_outline_secondary);
	}

	:global(.MiniInfoCell__content) {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	:global(.MiniInfoCell--wr-short .MiniInfoCell__content) {
		white-space: initial;
		display: -webkit-box;
		max-height: 60px;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	:global(.MiniInfoCell--wr-full .MiniInfoCell__content) {
		overflow: inherit;
		white-space: initial;
	}

	.MiniInfoCell__after {
		margin-left: 12px;
		margin-top: -2px;
		margin-bottom: -2px;
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

	/**
 * ANDROID
 */
	:global(.MiniInfoCell--android) {
		padding-left: 16px;
		padding-right: 16px;
	}
</style>

<script lang="ts">
	import classNames from '@sveltevk/vksui/lib/classNames';

	export let Element = 'span';
	export let weight: '1' | '2' | '3' = undefined;
	export let level: '1' | '2' | '3' | '4' = '1';
	export let caps = false;

	$: $$restProps.class = classNames(
		$$props.class,
		'Caption',
		`Caption--l-${level}`,
		caps && 'Caption--caps',
		weight && `Caption--w-${weight}`
	);
</script>

<svelte:element this={Element} {...$$restProps}>
	<slot />
</svelte:element>

<style>
	/*
	* В следующей версии библиотеки Caption 1 должен превратиться в Footnote, Caption 2 — в Caption 1 и так далее.
	* В токенах это обновление уже есть.
	* TODO переехать на новый нейминг в 5.0.0. Заменить Caption 1 на Footnote, а остальные Caption поднять на один уровень наверх.
	*/

	.Caption {
		display: block;
		margin: 0;
	}

	.Caption--caps {
		text-transform: uppercase;
	}

	.Caption--l-1 {
		font-size: var(--vkui--font_footnote--font_size--regular);
		line-height: var(--vkui--font_footnote--line_height--regular);
		font-weight: var(--vkui--font_footnote--font_weight--regular);
	}

	.Caption--l-1.Caption--caps {
		font-size: var(--vkui--font_footnote_caps--font_size--regular);
		line-height: var(--vkui--font_footnote_caps--line_height--regular);
		font-weight: var(--vkui--font_footnote_caps--font_weight--regular);
	}

	.Caption--l-2 {
		font-size: var(--vkui--font_caption1--font_size--regular);
		line-height: var(--vkui--font_caption1--line_height--regular);
		font-weight: var(--vkui--font_caption1--font_weight--regular);
	}

	.Caption--l-2.Caption--caps {
		font-size: var(--vkui--font_caption1_caps--font_size--regular);
		line-height: var(--vkui--font_caption1_caps--line_height--regular);
		font-weight: var(--vkui--font_caption1_caps--font_weight--regular);
	}

	.Caption--l-3 {
		font-size: var(--vkui--font_caption2--font_size--regular);
		line-height: var(--vkui--font_caption2--line_height--regular);
		font-weight: var(--vkui--font_caption2--font_weight--regular);
	}

	.Caption--l-3.Caption--caps {
		font-size: var(--vkui--font_caption2_caps--font_size--regular);
		line-height: var(--vkui--font_caption2_caps--line_height--regular);
		font-weight: var(--vkui--font_caption2_caps--font_weight--regular);
	}

	.Caption--l-4 {
		font-size: var(--vkui--font_caption3--font_size--regular);
		line-height: var(--vkui--font_caption3--line_height--regular);
		font-weight: var(--vkui--font_caption3--font_weight--regular);
	}

	.Caption--l-4.Caption--caps {
		font-size: var(--vkui--font_caption3_caps--font_size--regular);
		line-height: var(--vkui--font_caption3_caps--line_height--regular);
		font-weight: var(--vkui--font_caption3_caps--font_weight--regular);
	}

	.Caption.Caption--w-1 {
		/* Мы утяжеляем селеткор, чтобы перебить селекторы .Caption--caps */
		font-weight: var(--vkui--font_weight_accent1);
	}

	.Caption.Caption--w-2 {
		/* Мы утяжеляем селеткор, чтобы перебить селекторы .Caption--caps */
		font-weight: var(--vkui--font_weight_accent2);
	}

	.Caption.Caption--w-3 {
		/* Мы утяжеляем селеткор, чтобы перебить селекторы .Caption--caps */
		font-weight: var(--vkui--font_weight_accent3);
	}
</style>

<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Headline from '../../Typography/Headline/Headline.svelte';

	export let mode: 'default' | 'error' = 'default';
	export let header = '';

	const platform = usePlatform();
</script>

<!-- 
@component
Компонент используется для отображения статуса формы. Например, когда в форме допущена ошибка, и нет возможности
указать на конкретное поле. Заголовок и текст опциональны.
-->

<div
	{...$$restProps}
	class={classNames($$props.class, getClassName('FormStatus', $platform), `FormStatus--${mode}`)}
>
	{#if $$slots.header || header}
		<Headline weight="2" class="FormStatus__header"><slot name="header">{header}</slot></Headline>
	{/if}
	{#if $$slots.default}
		<Caption level="1" weight="3" class="FormStatus__content"><slot /></Caption>
	{/if}
</div>

<style>
	.FormStatus {
		border-radius: 10px;
		padding: 12px;
		background: var(--field_background);
		color: var(--text_subhead);
	}

	:global(.FormStatus__header),
	.FormStatus :global(b:first-child) {
		color: var(--text_primary);
	}

	:global(.FormStatus__header:not(:last-child)),
	.FormStatus :global(b:first-child) {
		margin-bottom: 2px;
	}

	.FormStatus--error {
		background: var(--field_error_background);
		color: var(--field_error_border);
	}

	.FormStatus--error :global(.FormStatus__header),
	.FormStatus--error :global(.FormStatus) :global(b:first-child) {
		color: currentColor;
	}

	.FormStatus :global(b:first-child) {
		/* хак для ошибок из API, текст в которых приходит с <b>в начале</b> */
		display: block;
		font-size: 16px;
		line-height: 20px;
		font-weight: 500;
	}
</style>

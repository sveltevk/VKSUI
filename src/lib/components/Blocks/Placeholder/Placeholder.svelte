<script lang="ts">
	import classNames from '@sveltevk/vksui/lib/classNames';
	import Headline from '../../Typography/Headline/Headline.svelte';
	import Title from '../../Typography/Title/Title.svelte';

	/**
	 * Заголовок плейсхолдера
	 */
	export let header = '';

	/**
	 * Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер
	 */
	export let stretched = false;
</script>

<!-- 
@component
Используется для каких-либо заглушек: например, в случае отсутствия элементов в списке или ошибки.

- В качестве иконки желательно использовать аутлайновые иконки размера 56;
- В качестве действия — большую кнопку с уровнем `primary` или `tertiary`.

Если плейсхолдер используется со свойством `stretched` (показывается во всю высоту панели), то на экране не должно быть ничего другого.
-->

<div
	{...$$restProps}
	class={classNames($$restProps.class, 'Placeholder', { 'Placeholder--stretched': stretched })}
>
	<div class="Placeholder__in">
		{#if $$slots.icon}
			<div class="Placeholder__icon">
				<slot name="icon" />
			</div>
		{/if}
		{#if $$slots.header || header}
			<Title level="2" weight="2" class="Placeholder__header">
				<slot name="header">{header}</slot>
			</Title>
		{/if}
		{#if $$slots.default}
			<Headline weight="regular" class="Placeholder__text">
				<slot />
			</Headline>
		{/if}
		{#if $$slots.action}
			<div class="Placeholder__action">
				<slot name="action" />
			</div>
		{/if}
	</div>
</div>

<style>
	.Placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Placeholder--stretched {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		padding-top: inherit;
		padding-bottom: inherit;
	}

	.Placeholder__in {
		max-width: 100%;
		text-align: center;
		box-sizing: border-box;
		padding: 48px 32px;
	}

	.Placeholder__icon {
		margin-bottom: 12px;
		display: inline-block;
		vertical-align: top;
		color: var(--placeholder_icon_foreground_secondary);
	}

	:global(.Placeholder__header) {
		color: var(--text_primary);
	}

	:global(.Placeholder__text) {
		color: var(--text_placeholder);
	}

	:global(.Placeholder__header + .Placeholder__text) {
		margin-top: 8px;
	}

	.Placeholder__action:not(:first-child) {
		margin-top: 24px;
	}

	.Placeholder__action :global(.Button--lvl-tertiary) {
		top: -8px;
	}
</style>

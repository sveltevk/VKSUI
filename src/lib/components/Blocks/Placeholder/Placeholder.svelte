<script lang="ts">
	import classNames from '@sveltevk/vksui/lib/classNames';

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
	class={classNames('Placeholder', { 'Placeholder--stretched': stretched }, $$props.class)}
>
	<div class="Placeholder__in">
		{#if $$slots.icon}
			<div class="Placeholder__icon">
				<slot name="icon" />
			</div>
		{/if}
		{#if $$slots.header || header}
			<div class="Placeholder__header">
				<slot name="header">{header}</slot>
			</div>
		{/if}
		{#if $$slots.default}
			<div class="Placeholder__text">
				<slot />
			</div>
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
		background: var(--background_content);
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

	.Placeholder__header {
		font-size: 20px;
		line-height: 24px;
		font-weight: 500;
		color: var(--text_primary);
	}

	.Placeholder__text {
		font-size: 16px;
		line-height: 20px;
		color: var(--text_placeholder);
	}

	.Placeholder__header + .Placeholder__text {
		margin-top: 8px;
	}

	.Placeholder__action:not(:first-child) {
		margin-top: 24px;
	}

	.Placeholder__action :global(.Button--lvl-tertiary) {
		margin-top: -8px;
	}
</style>

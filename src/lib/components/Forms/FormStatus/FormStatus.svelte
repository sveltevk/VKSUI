<script lang="ts">
	import useAdaptivity from '$lib/hooks/useAdaptivity';
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	export let mode: 'default' | 'error' = 'default';
	export let header: any = undefined;

	const adaptivity = useAdaptivity();
	const platform = usePlatform();
</script>

<!-- 
@component
Компонент используется для отображения статуса формы. Например, когда в форме допущена ошибка, и нет возможности
указать на конкретное поле. Заголовок и текст опциональны.
-->

<div
	{...$$restProps}
	class={classNames(
		getClassName('FormStatus', $platform),
		`FormStatus--${mode}`,
		$$props.class,
		`FormStatus--sizeY-${$adaptivity.sizeY}`
	)}
>
	{#if $$slots.header || header}
		<div class="FormStatus__header"><slot name="header">{header}</slot></div>
	{/if}
	{#if $$slots.default}
		<div class="FormStatus__content"><slot /></div>
	{/if}
	<slot />
</div>

<style>
	.FormStatus {
		border-radius: 10px;
		padding: 14px 12px;
		background: var(--field_background);
		color: var(--text_primary);
	}

	.FormStatus--sizeY-compact {
		padding-top: 12px;
		padding-bottom: 12px;
	}

	.FormStatus--error {
		background: var(--field_error_background);
		color: var(--field_error_border);
	}

	.FormStatus__header {
		font-size: 16px;
		font-weight: 500;
		line-height: 1.25;
		margin-top: -2px;
	}

	.FormStatus__header:not(:last-child) {
		margin-bottom: 2px;
	}

	.FormStatus__content {
		font-size: 13px;
		line-height: 16px;
	}

	.FormStatus__content :global(b) {
		font-weight: 500;
	}

	/**
 * VKCOM
 */

	.FormStatus--vkcom.FormStatus--default .FormStatus__content {
		color: var(--text_subhead);
	}
</style>

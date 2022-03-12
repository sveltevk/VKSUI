<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import FormField from '../FormField/FormField.svelte';

	import Icon20Dropdown from '@sveltevk/icons/dist/20/dropdown';
	import Icon24Dropdown from '@sveltevk/icons/dist/24/dropdown';
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';

	export let placeholder = '';
	export let align: 'left' | 'center' | 'right' = undefined;
	export let multiline = false;
	export let disabled = false;
	export let tabIndex = 0;

	const adaptivity = useAdaptivity();
	const platform = usePlatform();
</script>

<!-- 
@component
Визуальная имитация компонента `Select`. У него нет свойства `value`, а `children` вместо массива `options` принимает
любой `ReactNode`, отображая его без изменений.
-->

<FormField
	{...$$restProps}
	tabIndex={disabled ? null : tabIndex}
	class={classNames(
		getClassName('Select', $platform),
		'Select--mimicry',
		{
			'Select--not-selected': !$$slots.default,
			'Select--multiline': multiline,
			'Select--disabled': disabled,
			[`Select--align-${align}`]: !!align,
			[`Select--sizeX--${$adaptivity.sizeX}`]: !!$adaptivity.sizeX,
			[`Select--sizeY--${$adaptivity.sizeY}`]: !!$adaptivity.sizeY
		},
		$$props.class
	)}
>
	<div class="Select__container">
		<div class="Select__title"><slot>{placeholder}</slot></div>
		{#if $adaptivity.sizeX === SizeType.COMPACT}
			<Icon20Dropdown />
		{:else}
			<Icon24Dropdown />
		{/if}
	</div>
</FormField>

<style>
</style>

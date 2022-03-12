<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import FormField from '../FormField/FormField.svelte';
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import '../Select/Select.css';
	import DropdownIcon from '../../Service/DropdownIcon/DropdownIcon.svelte';
	import Text from '../../Typography/Text/Text.svelte';
	import Headline from '../../Typography/Headline/Headline.svelte';
	import { VKCOM } from '@sveltevk/vksui/lib/platform';

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
			[`Select--align-${align}`]: !!align,
			[`Select--sizeX--${$adaptivity.sizeX}`]: !!$adaptivity.sizeX,
			[`Select--sizeY--${$adaptivity.sizeY}`]: !!$adaptivity.sizeY
		},
		$$props.class
	)}
	on:click
	{disabled}
>
	<DropdownIcon slot="after" />
	{#if $platform === VKCOM || $adaptivity.sizeY === SizeType.COMPACT}
		<Text component="div" weight="regular" class="Select__container">
			<span class="Select__title"><slot>{placeholder}</slot></span>
		</Text>
	{:else}
		<Headline component="div" weight="regular" class="Select__container">
			<span class="Select__title"><slot>{placeholder}</slot></span>
		</Headline>
	{/if}
</FormField>

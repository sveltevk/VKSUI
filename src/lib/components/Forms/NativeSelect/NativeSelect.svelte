<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';

	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { VKCOM } from '@sveltevk/vksui/lib/platform';
	import { onMount, tick } from 'svelte';
	import DropdownIcon from '../../Service/DropdownIcon/DropdownIcon.svelte';
	import Headline from '../../Typography/Headline/Headline.svelte';
	import Text from '../../Typography/Text/Text.svelte';
	import FormField from '../FormField/FormField.svelte';

	import '../Select/Select.css'; // Чтобы не дублировать код

	export let placeholder = '';
	export let multiline = false;
	export let align: 'left' | 'center' | 'right' = undefined;
	export let value = undefined;
	export let disabled = false;
	export let style = '';

	const platform = usePlatform();
	const adaptivity = useAdaptivity();
	let selectRef: HTMLSelectElement;
	let title = '';
	let notSelected = false;

	const updateSelect = () => {
		const selectedOption = selectRef?.options[selectRef.selectedIndex];
		if (selectedOption) {
			title = selectedOption.text;
			notSelected = selectedOption.value === '' && placeholder != null;
		}
	};

	onMount(async () => {
		await tick();
		updateSelect();
	});
	$: value && updateSelect();
</script>

<FormField
	Component="label"
	class={classNames($$restProps.class, getClassName('Select', $platform), {
		['Select--not-selected']: notSelected,
		[`Select--align-${align}`]: !!align,
		[`Select--sizeX--${$adaptivity.sizeX}`]: !!$adaptivity.sizeX,
		[`Select--sizeY--${$adaptivity.sizeY}`]: !!$adaptivity.sizeY,
		'Select--multiline': multiline
	})}
	{style}
	{disabled}
>
	<DropdownIcon slot="after" />
	<select {...$$restProps} {disabled} class="Select__el" on:change bind:value bind:this={selectRef}>
		{#if placeholder}
			<option value="">{placeholder}</option>
		{/if}
		<slot />
	</select>

	{#if $platform === VKCOM || $adaptivity.sizeY === SizeType.COMPACT}
		<Text component="div" weight="regular" class="Select__container">
			<span class="Select__title">{title}</span>
		</Text>
	{:else}
		<Headline component="div" weight="regular" class="Select__container">
			<span class="Select__title">{title}</span>
		</Headline>
	{/if}
</FormField>

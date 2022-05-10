<script context="module" lang="ts">
	export type SegmentedControlValue = string | number | undefined;

	const ContextKey = 'vkui_SegmentedControl';
	export interface SegmentedControlContext {
		addOption: (value: SegmentedControlValue) => boolean;
		removeOption: (value: SegmentedControlValue) => void;
		choseOption: (value: SegmentedControlValue) => void;
		name: string;
		choseValue: Writable<SegmentedControlValue>;
	}

	export const useSegmentedControl = (): SegmentedControlContext => {
		return getContext(ContextKey) as SegmentedControlContext;
	};
</script>

<script lang="ts">
	import { generateRandomId } from '@sveltevk/vksui/lib/utils';

	import { createEventDispatcher, getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	const dispatch = createEventDispatcher<{
		change: SegmentedControlValue;
	}>();

	export let size: 'm' | 'l' = 'l';
	export let value: SegmentedControlValue = undefined;
	export let name = generateRandomId();

	const options: SegmentedControlValue[] = [];
	let optionsLength = 0;

	const choseOption = (item: SegmentedControlValue) => {
		value = item;
		dispatch('change', item);
	};
	const addOption = (item: SegmentedControlValue) => {
		options.push(item);
		optionsLength++;

		if (value === undefined) {
			value = item;
		}

		if (value === item) {
			activeOptionIdx = optionsLength - 1;
		}

		return value === item;
	};
	const removeOption = (item: SegmentedControlValue) => {
		const index = options.indexOf(item);
		if (index !== -1) {
			options.splice(index, 1);
			optionsLength--;
			choseOption(value);
		}
	};

	const choseValue = writable(value);
	$: choseValue.set(value);

	setContext<SegmentedControlContext>(ContextKey, {
		addOption,
		removeOption,
		choseOption,
		name,
		choseValue
	});

	$: activeOptionIdx = options.indexOf(value) > 0 ? options.indexOf(value) : 0;
	$: translateX = `translateX(${100 * activeOptionIdx}%)`;
</script>

<div
	{...$$restProps}
	class:SegmentedControl={true}
	class:SegmentedControl--l={size === 'l'}
	class:SegmentedControl--m={size === 'm'}
>
	<div role="radiogroup" class="SegmentedControl__in">
		{#if activeOptionIdx > -1}
			<div
				aria-hidden="true"
				class="SegmentedControl__slider"
				style:width={`${100 / optionsLength}%`}
				style:transform={translateX}
				style:WebkitTransform={translateX}
			/>
		{/if}
		<slot />
	</div>
</div>

<style>
	.SegmentedControl {
		height: 36px;
		padding: 2px;
		border-radius: var(--vkui--size_border_radius--regular);
		background-color: var(--vkui--color_background_secondary);
		box-sizing: border-box;
	}

	.SegmentedControl--l {
		height: 44px;
	}

	.SegmentedControl__in {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
		transition: all 100ms ease-out;
		border-radius: inherit;
	}

	.SegmentedControl__slider {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		background-color: var(--vkui--color_background_modal);
		transition: transform 150ms;
		transform-origin: 0 0;
		border-radius: inherit;
		box-shadow: inset 0 0 0 0.5px var(--vkui--color_image_border_alpha),
			0 3px 8px rgba(0, 0, 0, 0.12), 0 3px 1px rgba(0, 0, 0, 0.04);
	}
</style>

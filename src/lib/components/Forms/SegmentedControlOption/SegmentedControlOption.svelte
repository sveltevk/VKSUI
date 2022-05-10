<script lang="ts">
	import VisuallyHiddenInput from '../VisuallyHiddenInput/VisuallyHiddenInput.svelte';
	import Text from '../../Typography/Text/Text.svelte';
	import FocusVisible from '../../Service/FocusVisible/FocusVisible.svelte';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import {
		useSegmentedControl,
		type SegmentedControlValue
	} from '../SegmentedControl/SegmentedControl.svelte';
	import { useFocusVisible } from '@sveltevk/vksui/hooks/useFocusVisible';

	const dispatch = createEventDispatcher<{
		blur: FocusEvent;
		focus: FocusEvent;
	}>();

	const { focusVisible, onFocus, onBlur } = useFocusVisible(dispatch);

	export let style = '';
	export let value: SegmentedControlValue;

	const { addOption, removeOption, choseOption, name, choseValue } = useSegmentedControl();

	onMount(() => addOption(value));
	onDestroy(() => removeOption(value));

	const change = (e: Event) => {
		// @ts-ignore
		e.target.checked && choseOption(value);
	};

	$: $$restProps.class = undefined;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label
	{style}
	class:SegmentedControlOption={true}
	class:SegmentedControlOption--checked={$choseValue === value}
	class:SegmentedControlOption--focus-visible={$focusVisible}
	class={$$props.class}
>
	<VisuallyHiddenInput
		{...$$restProps}
		type="radio"
		on:focus={onFocus}
		on:blur={onBlur}
		on:change={change}
		{name}
		checked={$choseValue === value}
	/>
	<Text class="SegmentedControlOption__content" weight="medium">
		<slot />
	</Text>
	<FocusVisible mode="inside" />
</label>

<style>
	.SegmentedControlOption {
		position: relative;
		flex: 1;
		display: block;
		margin: 0;
		padding: 0;
		z-index: 1;
		height: 100%;
		border: 0;
		border-radius: inherit;
		background: transparent;
		color: var(--vkui--color_text_primary);
		transition: color 100ms ease-out;
		user-select: none;
		box-sizing: border-box;
		cursor: pointer;
		appearance: none;
	}

	.SegmentedControlOption :global(.Icon) {
		color: var(--vkui--color_icon_secondary);
	}

	.SegmentedControlOption:not(.SegmentedControlOption--checked):hover {
		opacity: 0.5;
	}

	:global(.SegmentedControlOption__content) {
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		border-radius: inherit;
	}
</style>

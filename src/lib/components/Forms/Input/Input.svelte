<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import useAdaptivity from '$lib/hooks/useAdaptivity';
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import { createEventForwarder } from '$lib/lib/events';
	import getClassName from '$lib/lib/getClassName';
	import FormField from '../FormField/FormField.svelte';

	export let align: 'left' | 'center' | 'right' = undefined;
	export let value: any = undefined;

	const adaptivity = useAdaptivity();
	const platform = usePlatform();
	const forwardEvents = createEventForwarder(get_current_component());
</script>

<!-- 
@component
Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.
-->

<FormField
	class={classNames(
		getClassName('Input', $platform),
		$$props.class,
		{ [`Input--${align}`]: !!align },
		`Input--sizeY-${$adaptivity.sizeY}`
	)}
>
	<input use:forwardEvents bind:value {...$$restProps} class="Input__el" />
</FormField>

<style>
	:global(.Input) {
		position: relative;
		line-height: 19px;
		font-size: 16px;
	}

	:global(.Input--center) .Input__el {
		text-align: center;
	}

	:global(.Input--right) .Input__el {
		text-align: right;
	}

	.Input__el {
		margin: 0;
		width: 100%;
		display: block;
		box-sizing: border-box;
		box-shadow: none;
		border: none;
		outline: none;
		appearance: none;
		text-overflow: ellipsis;
		height: 44px;
		line-height: 19px;
		font-size: 16px;
		color: var(--text_primary);
		padding: 12px;
		position: relative;
		z-index: 2;
		background: transparent;
	}

	:global(.Input--sizeY-compact) .Input__el {
		height: 40px;
		padding-top: 10px;
		padding-bottom: 10px;
		line-height: 20px;
		font-size: 15px;
	}

	.Input__el:disabled {
		opacity: 0.4;
	}

	.Input__el::placeholder {
		color: var(--field_text_placeholder);
	}

	.Input__el:disabled::placeholder {
		color: var(--text_secondary);
	}
</style>

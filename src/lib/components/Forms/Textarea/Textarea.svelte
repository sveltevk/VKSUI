<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';

	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { createEventDispatcher } from 'svelte';

	import FormField from '../../Forms/FormField/FormField.svelte';

	const dispatch = createEventDispatcher();

	export let rows = 2;
	export let grow = true;
	export let value = '';
	export let style = '';

	let currentScrollHeight = 0;
	let el: HTMLTextAreaElement;
	const adaptivity = useAdaptivity();
	const platform = usePlatform();

	const autosize = () => {
		if (grow && el?.offsetParent) {
			el.style.height = '';
			el.style.height = `${el.scrollHeight}px`;

			if (el.scrollHeight !== currentScrollHeight) {
				dispatch('resize', el);
				currentScrollHeight = el.scrollHeight;
			}
		}
	};

	$: {
		autosize();
		[grow, value, $adaptivity.sizeY, el];
	}
</script>

<FormField
	class={classNames(
		$$restProps.class,
		getClassName('Textarea', $platform),
		`Textarea--sizeY-${$adaptivity.sizeY}`
	)}
	{style}
	disabled={$$restProps.disabled}
>
	<textarea bind:this={el} {...$$restProps} {rows} class="Textarea__el" bind:value on:change />
</FormField>

<style>
	:global(.Textarea) {
		position: relative;
	}

	.Textarea__el {
		margin: 0;
		width: 100%;
		display: block;
		box-sizing: border-box;
		resize: none;
		appearance: none;
		line-height: 20px;
		font-size: 16px;
		color: var(--text_primary);
		padding: 11px;
		max-height: 196px;
		border: none;
		z-index: 2;
		position: relative;
		background: transparent;
	}

	:global(.Textarea--sizeY-compact) .Textarea__el {
		padding-top: 7px;
		padding-bottom: 7px;
		font-size: 15px;
	}

	.Textarea__el::placeholder {
		color: var(--field_text_placeholder);
	}

	.Textarea__el:disabled {
		opacity: 0.4;
	}

	.Textarea__el:disabled::placeholder {
		color: var(--text_secondary);
	}
</style>

<script lang="ts">
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import Div from '$lib/components/Elements/div/div.svelte';

	export let component = Div;

	let hover = false;

	const handleMouseEnter = (e: MouseEvent) => {
		e.stopPropagation();
		hover = true;
	};

	const handleMouseLeave = (e: MouseEvent) => {
		e.stopPropagation();
		hover = false;
	};

	const platform = usePlatform();
</script>

<svelte:component
	this={component}
	{...$$restProps}
	on:click
	on:mouseover={handleMouseEnter}
	on:mouseout={handleMouseLeave}
	class={classNames(getClassName('FormField', $platform), $$props.class)}
>
	<slot />
	<div
		class={classNames('FormField__border', {
			'FormField__border--hover': hover
		})}
	/>
</svelte:component>

<style>
	:global(.FormField) {
		position: relative;
	}

	.FormField__border {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border: 1px solid var(--field_border);
		background: var(--field_background);
		content: '';
		border-radius: 10px;
		box-sizing: border-box;
		z-index: 1;
		transform-origin: left top;
	}

	.FormField__border.FormField__border--hover {
		border-color: var(--icon_tertiary_alpha);
	}

	:global(.FormField--ios) .FormField__border {
		border-radius: 10px;
	}

	:global(.FormField--android) .FormField__border {
		border-radius: 8px;
	}

	:global(.FormField--vkcom) .FormField__border {
		border-radius: 8px;
	}

	:global(.FormItem--error) .FormField__border {
		background: var(--field_error_background);
		border-color: var(--field_error_border);
	}

	:global(.FormItem--valid) .FormField__border {
		border-color: var(--field_valid_border);
	}

	.FormField.Textarea .Textarea__el:disabled ~ .FormField__border,
	.FormField.Select .Select__el:disabled ~ .FormField__border,
	.FormField.Input .Input__el:disabled ~ .FormField__border,
	.FormField.ChipsInput.ChipsInput--disabled .ChipsInput__container ~ .FormField__border {
		opacity: 0.4;
	}

	@media (min-resolution: 2dppx) {
		:global(.FormField--ios) .FormField__border {
			border-radius: 20px;
			transform: scale(0.5);
			width: 200%;
			height: 200%;
		}
	}

	@media (min-resolution: 3dppx) {
		:global(.FormField--ios) .FormField__border {
			border-radius: 31.25px;
			transform: scale(0.32);
			width: 312.5%;
			height: 312.5%;
		}
	}

	.FormField.Input .Input__el:focus ~ .FormField__border,
	.FormField.Textarea .Textarea__el:focus ~ .FormField__border,
	.FormField.Select .Select__el:focus ~ .FormField__border,
	.FormField.Select--mimicry:focus .FormField__border,
	.FormField.ChipsInput.ChipsInput--focused .ChipsInput__container ~ .FormField__border {
		border-color: var(--accent);
		background: var(--field_background);
	}

	.FormField--ios.Input .Input__el:focus ~ .FormField__border,
	.FormField--ios.Textarea .Textarea__el:focus ~ .FormField__border,
	.FormField--ios.Select .Select__el:focus ~ .FormField__border,
	.FormField--ios.Select--mimicry:focus .FormField__border,
	.FormField--ios.ChipsInput.ChipsInput--focused .ChipsInput__container ~ .FormField__border {
		border-radius: 10px;
		transform: scale(1);
		width: 100%;
		height: 100%;
	}

	:global(.CustomSelect__open.Select--mimicry:focus) .FormField__border {
		border-color: var(--field_border);
	}

	:global(.FormField--ios.CustomSelect__open) .FormField__border {
		border-radius: 10px 10px 0 0;
	}

	:global(.FormField--android.CustomSelect__open) .FormField__border {
		border-radius: 8px 8px 0 0;
	}

	:global(.FormField--vkcom.CustomSelect__open) .FormField__border {
		border-radius: 8px 8px 0 0;
	}

	:global(.FormField--ios.CustomSelect__open.CustomSelect__open--popupDirectionTop)
		.FormField__border {
		border-radius: 0 0 10px 10px;
	}

	:global(.FormField--android.CustomSelect__open.CustomSelect__open--popupDirectionTop)
		.FormField__border {
		border-radius: 0 0 8px 8px;
	}

	:global(.FormField--vkcom.CustomSelect__open.CustomSelect__open--popupDirectionTop)
		.FormField__border {
		border-radius: 0 0 8px 8px;
	}
</style>

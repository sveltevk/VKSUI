<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Div from '@sveltevk/vksui/components/Elements/div/div.svelte';
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';

	export let component = Div;
	export let disabled = false;
	export let after = '';

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
	const adaptivity = useAdaptivity();
</script>

<svelte:component
	this={component}
	{...$$restProps}
	on:click
	on:mouseover={handleMouseEnter}
	on:mouseout={handleMouseLeave}
	class={classNames(
		$$props.class,
		getClassName('FormField', $platform),
		`FormField--sizeY-${$adaptivity.sizeY}`,
		{
			'FormField--disabled': disabled
		}
	)}
>
	<slot />
	{#if $$slots.after || after}
		<div role="presentation" class="FormField__after">
			<slot name="after">{after}</slot>
		</div>
	{/if}
	<div
		role="presentation"
		class={classNames('FormField__border', {
			'FormField__border--hover': !disabled && hover
		})}
	/>
</svelte:component>

<style>
	:global(.FormField) {
		position: relative;
		display: flex;
		align-items: center;
		padding: 1px;
		box-sizing: border-box;
		border-radius: 8px;
	}

	:global(.FormField > *) {
		border-radius: inherit;
	}

	:global(.FormField__after) {
		flex-shrink: 0;
		position: relative;
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		min-width: 44px;
		height: 44px;
		margin: -1px;
		color: var(--icon_secondary);
		z-index: 2;
	}

	:global(.ChipsInput .FormField__after) {
		z-index: 3;
	}

	:global(.FormField__border) {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border: 1px solid var(--field_border);
		background: var(--field_background);
		content: '';
		box-sizing: border-box;
		z-index: 1;
		transform-origin: left top;
	}

	:global(.FormItem--error .FormField__border) {
		background: var(--field_error_background);
		border-color: var(--field_error_border);
	}

	:global(.FormItem--valid .FormField__border) {
		border-color: var(--field_valid_border);
	}

	:global(.FormField--disabled) {
		opacity: 0.64;
		cursor: default;
		pointer-events: none;
	}

	:global(.FormField:not(.FormField--disabled) .FormField__border--hover) {
		border-color: var(--icon_tertiary_alpha);
	}

	:global(.FormField:focus-within .FormField__border),
	:global(.FormField *:focus ~ .FormField__border),
	:global(.ChipsInput--focused .FormField__border) {
		border-color: var(--accent);
		background: var(--field_background);
	}

	/**
 * sizeY COMPACT
 */
	:global(.FormField--sizeY-compact .FormField__after) {
		min-width: 36px;
		height: 36px;
	}

	/**
 * iOS
 */
	:global(.FormField--ios) {
		border-radius: 10px;
	}

	@media (min-resolution: 2dppx) {
		:global(.FormField--ios .FormField__border) {
			border-radius: 20px;
			transform: scale(0.5);
			width: 200%;
			height: 200%;
		}
	}

	@media (min-resolution: 3dppx) {
		:global(.FormField--ios .FormField__border) {
			border-radius: 31.25px;
			transform: scale(0.32);
			width: 312.5%;
			height: 312.5%;
		}
	}

	/**
 * VKCOM
 */
	:global(.FormField--vkcom) {
		border-radius: 6px;
	}

	/**
 * ModalCardBase
 */

	:global(.ModalCardBase__header + .FormField),
	:global(.ModalCardBase__subheader + .FormField) {
		margin-top: 16px;
	}
</style>

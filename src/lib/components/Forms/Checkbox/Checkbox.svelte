<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import { IOS, VKCOM } from '@sveltevk/vksui/lib/platform';
	import Icon20CheckBoxOn from '@sveltevk/icons/dist/20/check_box_on';
	import Icon20CheckBoxOff from '@sveltevk/icons/dist/20/check_box_off';
	import Icon24CheckBoxOn from '@sveltevk/icons/dist/24/check_box_on';
	import Icon24CheckBoxOff from '@sveltevk/icons/dist/24/check_box_off';
	import CheckboxContent from './CheckboxContent.svelte';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Tappable, { ACTIVE_EFFECT_DELAY } from '../../Service/Tappable/Tappable.svelte';
	import { classNames } from '@vkontakte/vkjs';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Label from '../../Elements/label/label.svelte';

	export let description = '';
	export let style = '';
	export let checked = false;

	let adaptivity = useAdaptivity();
	let platform = usePlatform();
</script>

<Tappable
	component={Label}
	class={classNames(
		$$restProps.class,
		getClassName('Checkbox', $platform),
		`Checkbox--sizeY-${$adaptivity.sizeY}`
	)}
	{style}
	disabled={$$restProps.disabled}
	activeEffectDelay={$platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
>
	<input {...$$restProps} type="checkbox" class="Checkbox__input" bind:checked on:change />
	<div class="Checkbox__container">
		<div class="Checkbox__icon Checkbox__icon--on">
			{#if $adaptivity.sizeY === SizeType.COMPACT || $platform === VKCOM}
				<Icon20CheckBoxOn />
			{:else}
				<Icon24CheckBoxOn />
			{/if}
		</div>
		<div class="Checkbox__icon Checkbox__icon--off">
			{#if $adaptivity.sizeY === SizeType.COMPACT || $platform === VKCOM}
				<Icon20CheckBoxOff />
			{:else}
				<Icon24CheckBoxOff />
			{/if}
		</div>
		<CheckboxContent platform={$platform} sizeY={$adaptivity.sizeY}>
			<div class="Checkbox__children"><slot /></div>
			{#if $$slots.description || description}
				<Caption level="1" component="span" weight="regular" class="Checkbox__description">
					<slot name="description">{description}</slot>
				</Caption>
			{/if}
		</CheckboxContent>
	</div>
</Tappable>

<style>
	:global(.Checkbox) {
		display: block;
	}

	:global(.FormItem) :global(.Checkbox) {
		width: 100%;
		box-sizing: content-box;
		margin: 0 calc(-1 * var(--formitem_padding));
	}

	.Checkbox__input {
		display: none;
	}

	:global(.Checkbox__container) {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.Checkbox__icon {
		flex-shrink: 0;
		margin-right: 12px;
	}

	.Checkbox__icon--on {
		color: var(--accent);
		display: none;
	}

	.Checkbox__icon--off {
		color: var(--icon_tertiary);
	}

	:global(.Checkbox__content) {
		flex-grow: 1;
		color: var(--text_primary);
		word-break: break-word;
	}

	:global(.Checkbox__description) {
		color: var(--text_secondary);
		display: block;
		margin-bottom: 12px;
		margin-top: 2px;
	}

	.Checkbox__children {
		margin-top: 12px;
	}

	.Checkbox__children:last-child {
		margin-bottom: 12px;
	}

	.Checkbox__input:checked ~ :global(.Checkbox__container .Checkbox__icon--on) {
		display: block;
	}

	.Checkbox__input:checked ~ :global(.Checkbox__container .Checkbox__icon--off) {
		display: none;
	}

	.Checkbox__input[disabled] ~ :global(.Checkbox__container) {
		opacity: 0.6;
	}

	/**
 * iOS
 */

	:global(.Checkbox--ios) {
		padding: 0 12px;
	}

	/**
 * Android
 */

	:global(.Checkbox--android) {
		padding: 0 16px;
	}

	/**
 * sizeY COMPACT
 */

	:global(.Checkbox--sizeY-compact) .Checkbox__children {
		margin-top: 8px;
	}

	:global(.Checkbox--sizeY-compact) .Checkbox__children:last-child {
		margin-bottom: 8px;
	}

	:global(.Checkbox--sizeY-compact) .Checkbox__description {
		margin-bottom: 8px;
	}

	/**
 * VKCOM
 */

	:global(.Checkbox--vkcom) {
		padding: 0 16px;
	}

	:global(.Checkbox--vkcom) .Checkbox__icon {
		margin-right: 10px;
	}

	:global(.Checkbox--vkcom) .Checkbox__input[disabled] ~ .Checkbox__container {
		opacity: 0.4;
	}

	:global(.Checkbox--vkcom) .Checkbox__children {
		margin-top: 8px;
	}

	:global(.Checkbox--vkcom) .Checkbox__children:last-child {
		margin-bottom: 8px;
	}

	:global(.Checkbox--vkcom) .Checkbox__description {
		margin-top: 1px;
		margin-bottom: 8px;
	}
</style>

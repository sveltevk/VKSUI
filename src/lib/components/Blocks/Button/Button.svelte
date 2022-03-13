<script lang="ts" context="module">
	interface ResolvedButtonAppearance {
		resolvedAppearance: 'accent' | 'positive' | 'negative' | 'neutral' | 'overlay' | undefined;
		resolvedMode:
			| 'primary'
			| 'secondary'
			| 'tertiary'
			| 'outline'
			| 'commerce'
			| 'destructive'
			| 'overlay_primary'
			| 'overlay_secondary'
			| 'overlay_outline'
			| undefined;
	}

	function resolveButtonAppearance(
		appearance: ResolvedButtonAppearance['resolvedAppearance'],
		mode: ResolvedButtonAppearance['resolvedMode']
	): ResolvedButtonAppearance {
		let resolvedAppearance: ResolvedButtonAppearance['resolvedAppearance'] = appearance;
		let resolvedMode: ResolvedButtonAppearance['resolvedMode'] = mode;

		if (appearance === undefined) {
			switch (mode) {
				case 'tertiary':
				case 'secondary':
				case 'primary':
				case 'outline':
					resolvedAppearance = 'accent';
					break;
				case 'commerce':
					resolvedMode = 'primary';
					resolvedAppearance = 'positive';
					break;
				case 'destructive':
					resolvedMode = 'primary';
					resolvedAppearance = 'negative';
					break;
				case 'overlay_primary':
					resolvedMode = 'primary';
					resolvedAppearance = 'overlay';
					break;
				case 'overlay_secondary':
					resolvedMode = 'secondary';
					resolvedAppearance = 'overlay';
					break;
				case 'overlay_outline':
					resolvedMode = 'outline';
					resolvedAppearance = 'overlay';
					break;
			}
		}

		return {
			resolvedAppearance,
			resolvedMode
		};
	}
</script>

<script lang="ts">
	import Tappable from '@sveltevk/vksui/components/Service/Tappable/Tappable.svelte';
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import button from '@sveltevk/vksui/components/Elements/button/button.svelte';
	import a from '@sveltevk/vksui/components/Elements/a/a.svelte';
	import Spinner from '../Spinner/Spinner.svelte';
	import ButtonTypography from './ButtonTypography.svelte';
	import { getContext } from 'svelte';
	import { ContextKey } from '@sveltevk/vksui/lib/config';
	import type { Writable } from 'svelte/store';

	export let component = button;

	export let before = '';
	export let after = '';
	export let hasBefore = Boolean($$slots.before || before);
	export let hasAfter = Boolean($$slots.after || after);

	/**
   Значения `commerce`, `destructive`, `overlay_...` будут упразднены в 5.0.0
   */
	export let mode: ResolvedButtonAppearance['resolvedMode'] = 'primary';
	export let appearance: ResolvedButtonAppearance['resolvedAppearance'] = undefined;
	export let size: 's' | 'm' | 'l' = 's';
	export let stretched = false;
	export let align: 'left' | 'center' | 'right' = 'center';
	export let loading = false;

	let { resolvedMode, resolvedAppearance } = resolveButtonAppearance(appearance, mode);

	$: {
		const resolved = resolveButtonAppearance(appearance, mode);
		resolvedMode = resolved.resolvedMode;
		resolvedAppearance = resolved.resolvedAppearance;
	}

	const adaptivity = useAdaptivity();
	const platform = usePlatform();

	$: _hasBefore = Boolean($$slots.before || before) && hasBefore;
	$: _hasAfter = Boolean($$slots.after || after) && hasAfter;
	$: hasSingleIcon = Boolean(
		(!$$slots.default && !_hasAfter && _hasBefore) || (!$$slots.default && _hasAfter && !_hasBefore)
	);
	$: hasIcons = Boolean(_hasBefore || _hasAfter);

	$: $$restProps.class = classNames(
		$$props.class,
		'Button',
		`Button--sz-${size}`,
		`Button--lvl-${resolvedMode}`,
		`Button--clr-${resolvedAppearance}`,
		`Button--aln-${align}`,
		`Button--sizeY-${$adaptivity.sizeY}`,
		{
			['Button--stretched']: stretched,
			['Button--with-icon']: hasIcons,
			['Button--singleIcon']: hasSingleIcon
		}
	);

	const hasNewTokens = getContext(ContextKey.hasNewTokens) as Writable<boolean>;
</script>

<Tappable
	{...$$restProps}
	component={$$restProps.href ? a : component}
	on:click
	focusVisibleMode="outside"
	hoverMode={hasNewTokens ? 'Button--hover' : 'background'}
	activeMode={hasNewTokens ? 'Button--active' : 'opacity'}
>
	{#if loading}
		<Spinner size="small" class="Button__spinner" />
	{/if}
	<span class="Button__in">
		{#if _hasBefore}
			<div class="Button__before">
				<slot name="before">{before}</slot>
			</div>
		{/if}
		{#if $$slots.default}
			<ButtonTypography
				{size}
				sizeY={$adaptivity.sizeY}
				platform={$platform}
				class="Button__content"
				component="span"
			>
				<slot />
			</ButtonTypography>
		{/if}
		{#if _hasAfter}
			<span class="Button__after">
				<slot name="after">{after}</slot>
			</span>
		{/if}
	</span>
</Tappable>

<style>
	:global(.Button) {
		position: relative;
		display: inline-block;
		box-sizing: border-box;
		text-decoration: none;
		border: none;
		min-height: var(--vkui--size_button_small_height--compact);
		margin: 0;
		padding: 0;
		user-select: none;
		border-radius: var(--vkui--size_border_radius--regular);
		max-width: 100%;
	}

	:global(.Button--stretched) {
		display: block;
		width: 100%;
		flex-grow: 1;
		flex-basis: 0;
	}

	:global(.Button__in) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: inherit;
		padding: 1px 16px;
		text-align: center;
		box-sizing: border-box;
	}

	:global(.Button--aln-left .Button__in) {
		justify-content: flex-start;
		text-align: left;
	}

	:global(.Button--aln-right .Button__in) {
		justify-content: flex-end;
		text-align: right;
	}

	:global(.Button[disabled]) {
		opacity: var(--vkui--opacity_disable);
	}

	:global(.Button--lvl-primary[disabled]:not(.Button--clr-overlay):not(.Button--clr-negative):not(.Button--clr-positive)),
	:global(.Button--lvl-secondary[disabled]:not(.Button--clr-overlay)),
	:global(.Button--lvl-tertiary[disabled]:not(.Button--clr-overlay)),
	:global(.Button--lvl-outline[disabled]:not(.Button--clr-overlay)) {
		opacity: 0.64;
	}

	/* only 1 icon cases */
	/* sizeY: compact */
	:global(.Button--singleIcon.Button--sz-s .Button__in) {
		padding: 0 9px;
	}

	:global(.Button--singleIcon.Button--sz-m .Button__in) {
		padding: 0 10px;
	}

	:global(.Button--singleIcon.Button--sz-l .Button__in) {
		padding: 0 6px;
	}

	/* sizeX: REGULAR */
	:global(.Button--singleIcon.Button--sizeY-regular.Button--sz-s .Button__in) {
		padding: 0 9px;
	}

	:global(.Button--singleIcon.Button--sizeY-regular.Button--sz-l .Button__in) {
		padding: 0 10px;
	}

	:global(.Button--singleIcon .Button__before:only-child),
	:global(.Button--singleIcon .Button__after:only-child) {
		margin: 0;
	}

	:global(.Button__content) {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	:global(.Button__content--caps) {
		transform: translateY(0);
	}

	:global(.Button__spinner) {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}

	:global(.Button__spinner + .Button__in) {
		visibility: hidden;
	}

	/* Button's backgrounds */
	/* Mode  = Primary */
	:global(.Button--lvl-primary.Button--clr-accent) {
		background-color: var(--button_primary_background, var(--vkui--color_background_accent));
	}

	:global(.Button--lvl-primary.Button--clr-accent.Button--hover) {
		background-color: var(--vkui--color_background_accent--hover);
	}

	:global(.Button--lvl-primary.Button--clr-accent.Button--active) {
		background-color: var(--vkui--color_background_accent--active);
	}

	:global(.Button--lvl-primary.Button--clr-positive) {
		background-color: var(--button_commerce_background, var(--vkui--color_background_positive));
	}

	:global(.Button--lvl-primary.Button--clr-positive.Button--hover) {
		background-color: var(--vkui--color_background_positive--hover);
	}

	:global(.Button--lvl-primary.Button--clr-positive.Button--active) {
		background-color: var(--vkui--color_background_positive--active);
	}

	:global(.Button--lvl-primary.Button--clr-negative) {
		background-color: var(--destructive, var(--vkui--color_background_negative));
	}

	:global(.Button--lvl-primary.Button--clr-negative.Button--hover) {
		background-color: var(--vkui--color_background_negative--hover);
	}

	:global(.Button--lvl-primary.Button--clr-negative.Button--active) {
		background-color: var(--vkui--color_background_negative--active);
	}

	:global(.Button--lvl-primary.Button--clr-neutral) {
		background-color: var(--content_tint_background, var(--vkui--color_background_secondary));
	}

	:global(.Button--lvl-primary.Button--clr-neutral.Button--hover) {
		background-color: var(--vkui--color_background_secondary--hover);
	}

	:global(.Button--lvl-primary.Button--clr-neutral.Button--active) {
		background-color: var(--vkui--color_background_secondary--active);
	}

	/* Mode = Secondary */
	:global(.Button--lvl-secondary) {
		background-color: var(--button_secondary_background, var(--vkui--color_background_secondary));
	}

	:global(.Button--lvl-secondary.Button--hover) {
		background-color: var(--vkui--color_background_secondary--hover);
	}

	:global(.Button--lvl-secondary.Button--active) {
		background-color: var(--vkui--color_background_secondary--active);
	}

	/* Mode = Tertiary */
	:global(.Button--lvl-tertiary),
	:global(.Button--lvl-outline) {
		background-color: var(--button_tertiary_background, var(--vkui--color_transparent));
	}

	:global(.Button--lvl-tertiary.Button--hover),
	:global(.Button--lvl-outline.Button--hover) {
		background-color: var(--vkui--color_transparent--hover);
	}

	:global(.Button--lvl-tertiary.Button--active),
	:global(.Button--lvl-outline.Button--active) {
		background-color: var(--vkui--color_transparent--active);
	}

	/*
  Buttons text colors
*/
	:global(.Button--lvl-primary.Button--clr-accent) {
		color: var(--button_primary_foreground, var(--vkui--color_text_contrast));
	}

	:global(.Button--lvl-primary.Button--clr-negative) {
		color: var(--white, var(--vkui--color_text_contrast));
	}

	:global(.Button--lvl-primary.Button--clr-positive) {
		color: var(--button_commerce_foreground, var(--vkui--color_text_contrast));
	}

	:global(.Button--lvl-primary.Button--clr-accent.Button--hover),
	:global(.Button--lvl-primary.Button--clr-positive.Button--hover),
	:global(.Button--lvl-primary.Button--clr-negative.Button--hover) {
		color: var(--vkui--color_text_contrast--hover);
	}

	:global(.Button--lvl-primary.Button--clr-accent.Button--active),
	:global(.Button--lvl-primary.Button--clr-positive.Button--active),
	:global(.Button--lvl-primary.Button--clr-negative.Button--active) {
		color: var(--vkui--color_text_contrast--active);
	}

	/*
  Text colors of background-colored buttons
*/
	:global(.Button--lvl-tertiary.Button--clr-accent) {
		color: var(--button_tertiary_foreground, var(--vkui--color_text_accent));
	}

	:global(.Button--lvl-secondary.Button--clr-accent) {
		color: var(--button_secondary_foreground, var(--vkui--color_text_accent));
	}

	:global(.Button--lvl-outline.Button--clr-accent) {
		color: var(--button_outline_foreground, var(--vkui--color_text_accent));
	}

	:global(.Button--lvl-tertiary.Button--clr-accent.Button--hover),
	:global(.Button--lvl-secondary.Button--clr-accent.Button--hover),
	:global(.Button--lvl-outline.Button--clr-accent.Button--hover) {
		color: var(--vkui--color_text_accent--hover);
	}

	:global(.Button--lvl-tertiary.Button--clr-accent.Button--active),
	:global(.Button--lvl-secondary.Button--clr-accent.Button--active),
	:global(.Button--lvl-outline.Button--clr-accent.Button--active) {
		color: var(--vkui--color_text_accent--active);
	}

	:global(.Button--lvl-tertiary.Button--clr-positive),
	:global(.Button--lvl-secondary.Button--clr-positive),
	:global(.Button--lvl-outline.Button--clr-positive) {
		color: var(--button_commerce_background, var(--vkui--color_text_positive));
	}

	:global(.Button--lvl-tertiary.Button--clr-positive.Button--hover),
	:global(.Button--lvl-secondary.Button--clr-positive.Button--hover),
	:global(.Button--lvl-outline.Button--clr-positive.Button--hover) {
		color: var(--vkui--color_text_positive--hover);
	}

	:global(.Button--lvl-tertiary.Button--clr-positive.Button--active),
	:global(.Button--lvl-secondary.Button--clr-positive.Button--active),
	:global(.Button--lvl-outline.Button--clr-positive.Button--active) {
		color: var(--vkui--color_text_positive--active);
	}

	:global(.Button--lvl-tertiary.Button--clr-negative),
	:global(.Button--lvl-secondary.Button--clr-negative),
	:global(.Button--lvl-outline.Button--clr-negative) {
		color: var(--destructive, var(--vkui--color_text_negative));
	}

	:global(.Button--lvl-tertiary.Button--clr-negative.Button--hover),
	:global(.Button--lvl-secondary.Button--clr-negative.Button--hover),
	:global(.Button--lvl-outline.Button--clr-negative.Button--hover) {
		color: var(--vkui--color_text_negative--hover);
	}

	:global(.Button--lvl-tertiary.Button--clr-negative.Button--active),
	:global(.Button--lvl-secondary.Button--clr-negative.Button--active),
	:global(.Button--lvl-outline.Button--clr-negative.Button--active) {
		color: var(--vkui--color_text_negative--active);
	}

	:global(.Button--lvl-primary.Button--clr-neutral),
	:global(.Button--lvl-secondary.Button--clr-neutral),
	:global(.Button--lvl-tertiary.Button--clr-neutral),
	:global(.Button--lvl-outline.Button--clr-neutral) {
		color: var(--text_primary, var(--vkui--color_text_primary));
	}

	:global(.Button--lvl-primary.Button--clr-neutral.Button--hover),
	:global(.Button--lvl-secondary.Button--clr-neutral.Button--hover),
	:global(.Button--lvl-tertiary.Button--clr-neutral.Button--hover),
	:global(.Button--lvl-outline.Button--clr-neutral.Button--hover) {
		color: var(--vkui--color_text_primary--hover);
	}

	:global(.Button--lvl-primary.Button--clr-neutral.Button--active),
	:global(.Button--lvl-secondary.Button--clr-neutral.Button--active),
	:global(.Button--lvl-tertiary.Button--clr-neutral.Button--active),
	:global(.Button--lvl-outline.Button--clr-neutral.Button--active) {
		color: var(--vkui--color_text_primary--active);
	}

	/*
  Outline buttons borders
*/
	:global(.Button--lvl-outline.Button--clr-accent) {
		box-shadow: inset 0 0 0 1px var(--button_outline_border, var(--vkui--color_stroke_accent));
	}

	:global(.Button--lvl-outline.Button--clr-accent.Button--hover) {
		box-shadow: inset 0 0 0 1px var(--vkui--color_stroke_accent--hover);
	}

	:global(.Button--lvl-outline.Button--clr-accent.Button--active) {
		box-shadow: inset 0 0 0 1px var(--vkui--color_stroke_accent--active);
	}

	:global(.Button--lvl-outline.Button--clr-positive) {
		box-shadow: inset 0 0 0 1px
			var(--button_commerce_background, var(--vkui--color_stroke_positive));
	}

	:global(.Button--lvl-outline.Button--clr-positive.Button--hover) {
		box-shadow: inset 0 0 0 1px var(--vkui--color_stroke_positive--hover);
	}

	:global(.Button--lvl-outline.Button--clr-positive.Button--active) {
		box-shadow: inset 0 0 0 1px var(--vkui--color_stroke_positive--active);
	}

	:global(.Button--lvl-outline.Button--clr-negative) {
		box-shadow: inset 0 0 0 1px var(--destructive, var(--vkui--color_stroke_negative));
	}

	:global(.Button--lvl-outline.Button--clr-negative.Button--hover) {
		box-shadow: inset 0 0 0 1px var(--vkui--color_stroke_negative--hover);
	}

	:global(.Button--lvl-outline.Button--clr-negative.Button--active) {
		box-shadow: inset 0 0 0 1px var(--vkui--color_stroke_negative--active);
	}

	:global(.Button--lvl-outline.Button--clr-neutral) {
		box-shadow: inset 0 0 0 1px var(--field_border, var(--vkui--color_field_border_alpha));
	}

	:global(.Button--lvl-outline.Button--clr-neutral.Button--hover) {
		background-color: var(--vkui--color_background_secondary--hover);
		box-shadow: unset;
	}

	:global(.Button--lvl-outline.Button--clr-neutral.Button--active) {
		background-color: var(--vkui--color_background_secondary--active);
		box-shadow: unset;
	}

	/*
  Overlay colors section, separately
  Background colors
*/
	:global(.Button--lvl-primary.Button--clr-overlay) {
		background-color: var(
			--media_overlay_button_background,
			var(--vkui--color_background_contrast)
		);
	}

	:global(.Button--lvl-primary.Button--clr-overlay.Button--hover) {
		background-color: var(--vkui--color_background_contrast--hover);
	}

	:global(.Button--lvl-primary.Button--clr-overlay.Button--active) {
		background-color: var(--vkui--color_background_contrast--active);
	}

	:global(.Button--lvl-secondary.Button--clr-overlay) {
		background-color: var(
			--vkui--color_background_contrast_secondary_alpha,
			rgba(255, 255, 255, 0.2)
		);
	}

	:global(.Button--lvl-secondary.Button--clr-overlay.Button--hover),
	:global(.Button--lvl-tertiary.Button--clr-overlay.Button--hover),
	:global(.Button--lvl-outline.Button--clr-overlay.Button--hover) {
		background-color: var(--vkui--color_background_contrast_secondary_alpha--hover);
	}

	:global(.Button--lvl-secondary.Button--clr-overlay.Button--active),
	:global(.Button--lvl-tertiary.Button--clr-overlay.Button--active),
	:global(.Button--lvl-outline.Button--clr-overlay.Button--active) {
		background-color: var(--vkui--color_background_contrast_secondary_alpha--active);
	}

	/* Text colors */
	:global(.Button--lvl-primary.Button--clr-overlay) {
		color: var(--media_overlay_button_foreground, var(--vkui--color_text_primary_invariably));
	}

	:global(.Button--lvl-primary.Button--clr-overlay.Button--hover) {
		color: var(--vkui--color_text_primary_invariably--hover);
	}

	:global(.Button--lvl-primary.Button--clr-overlay.Button--active) {
		color: var(--vkui--color_text_primary_invariably--active);
	}

	:global(.Button--lvl-secondary.Button--clr-overlay),
	:global(.Button--lvl-tertiary.Button--clr-overlay),
	:global(.Button--lvl-outline.Button--clr-overlay) {
		color: var(--white, var(--vkui--color_text_contrast));
	}

	:global(.Button--lvl-secondary.Button--clr-overlay.Button--hover),
	:global(.Button--lvl-tertiary.Button--clr-overlay.Button--hover),
	:global(.Button--lvl-outline.Button--clr-overlay.Button--hover) {
		color: var(--vkui--color_text_contrast--hover);
	}

	:global(.Button--lvl-secondary.Button--clr-overlay.Button--active),
	:global(.Button--lvl-tertiary.Button--clr-overlay.Button--active),
	:global(.Button--lvl-outline.Button--clr-overlay.Button--active) {
		color: var(--vkui--color_text_contrast--active);
	}

	/* Borders */
	:global(.Button--lvl-outline.Button--clr-overlay) {
		box-shadow: inset 0 0 0 1px var(--white, var(--vkui--color_stroke_contrast));
	}

	:global(.Button--lvl-outline.Button--clr-overlay.Button--hover) {
		box-shadow: inset 0 0 0 1px var(--vkui--color_stroke_contrast--hover);
	}

	:global(.Button--lvl-outline.Button--clr-overlay.Button--active) {
		box-shadow: inset 0 0 0 1px var(--vkui--color_stroke_contrast--active);
	}

	:global(.Button__before:not(:last-child)) {
		margin-left: -4px;
	}

	:global(.Button__before:not(:last-child) + .Button__content) {
		margin-left: 6px;
	}

	:global(.Button__after:not(:first-child)) {
		margin-left: 6px;
	}

	:global(.Button--sz-l .Button__before:not(:last-child) + .Button__content) {
		margin-left: 8px;
	}

	:global(.Button--sz-l .Button__after:not(:first-child)) {
		margin-left: 8px;
	}

	:global(.Button--sz-l .Button__in) {
		justify-content: center;
		padding-left: 20px;
		padding-right: 20px;
	}

	:global(.Button:not(.Button--sz-s) .Button__content) {
		transform: translateY(-1px);
	}

	/**
 * sizeY COMPACT
 */
	:global(.Button--sz-m) {
		min-height: var(--vkui--size_button_medium_height--compact);
	}

	:global(.Button--sz-l) {
		min-height: var(--vkui--size_button_large_height--compact);
	}

	/**
 * sizeY REGULAR
 */
	:global(.Button--sizeY-regular) {
		min-height: var(--vkui--size_button_small_height--regular);
	}

	:global(.Button--sizeY-regular.Button--sz-m) {
		min-height: var(--vkui--size_button_medium_height--regular);
	}

	:global(.Button--sizeY-regular.Button--sz-l) {
		min-height: var(--vkui--size_button_large_height--regular);
	}

	/**
 * CMP:
 * Banner
 */
	:global(.Banner__actions > .Button) {
		margin-top: 12px;
		margin-right: 16px;
		margin-bottom: 6px;
	}

	:global(.Banner__actions > .Button--lvl-tertiary) {
		margin: 4px 16px 2px -16px;
	}

	:global(.Banner__actions > .Button--lvl-tertiary:first-child) {
		margin-top: 4px;
	}

	:global(.Banner__actions
			> .Button:not(.Button--lvl-tertiary)
			+ .Button:not(.Button--lvl-tertiary)) {
		margin-top: 0;
	}

	:global(.Banner__actions > .Button:not(.Button--lvl-tertiary) + .Button--lvl-tertiary) {
		margin-top: 2px;
		margin-left: -16px;
	}

	:global(.Banner__actions > .Button--lvl-tertiary + .Button--lvl-tertiary) {
		margin-top: 2px;
	}

	/**
 * CMP:
 * ModalCardBase
 */
	:global(.ModalCardBase__actions .Button) {
		flex: 1;
		margin-left: 6px;
		margin-right: 6px;
	}

	:global(.ModalCardBase__actions--v .Button) {
		margin-left: 0;
		margin-right: 0;
	}

	:global(.ModalCardBase__actions--v .Button + .Button) {
		margin-top: 12px;
	}

	/**
 * CMP:
 * RichCell
 */
	:global(.RichCell__actions .Button + .Button) {
		margin-left: 8px;
	}
</style>

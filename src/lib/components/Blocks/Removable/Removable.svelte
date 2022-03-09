<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, IOS, VKCOM } from '@sveltevk/vksui/lib/platform';
	import { classNames } from '@vkontakte/vkjs';
	import IconButton from '../IconButton/IconButton.svelte';
	import Icon24Cancel from '@sveltevk/icons/dist/24/cancel';
	import RemovableIos from './RemovableIos.svelte';

	export let removePlaceholder = 'Удалить';
	/**
	 * Расположение кнопки удаления.
	 */
	export let align: 'start' | 'center' = 'center';

	const platform = usePlatform();
	const adaptivity = useAdaptivity();
</script>

<div
	{...$$restProps}
	class={classNames(
		$$restProps.class,
		getClassName('Removable', $platform),
		`Removable--${align}`,
		`Removable--sizeY-${$adaptivity.sizeY}`
	)}
>
	{#if $platform === ANDROID || $platform === VKCOM}
		<div class="Removable__content">
			<slot />

			<IconButton
				activeMode="opacity"
				hoverMode="opacity"
				class="Removable__action"
				on:click
				aria-label={removePlaceholder}
			>
				<Icon24Cancel role="presentation" />
			</IconButton>
		</div>
	{/if}

	{#if $platform === IOS}
		<RemovableIos on:click {removePlaceholder}>
			<slot slot="removePlaceholder" name="removePlaceholder">{removePlaceholder}</slot>
			<slot />
		</RemovableIos>
	{/if}
</div>

<style>
	:global(.Removable__content) {
		position: relative;
		display: flex;
		align-items: center;
		padding-left: var(--formitem_padding);
	}

	:global(.Removable__action) {
		position: relative;
		flex-grow: 0;
		flex-shrink: 0;
		border: none;
	}

	:global(.Removable--start .Removable__action) {
		align-self: flex-start;
	}

	:global(.FormItem--removable.FormItem--withTop .Removable__action),
	:global(.FormLayoutGroup--removable .FormItem--withTop ~ .Removable__action) {
		top: 28px;
	}

	:global(.FormItem--sizeY-compact.FormItem--removable.FormItem--withTop .Removable__action),
	:global(.FormLayoutGroup--sizeY-compact.FormLayoutGroup--removable
			.FormItem--withTop
			~ .Removable__action) {
		top: 26px;
	}

	/**
 * iOS
 */
	:global(.Removable--ios) {
		overflow: hidden;
	}

	:global(.Removable__remove) {
		position: absolute;
		left: 100%;
		top: 0;
		height: 100%;
		padding: 0 10px;
		font-size: 15px;
		line-height: 45px;
		color: var(--white);
		background-color: var(--destructive);
		border: none;
		border-radius: 0;
	}

	:global(.Removable__remove-in) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	@media (prefers-reduced-motion: no-preference) {
		:global(.Removable--ios .Removable__content) {
			transition: transform 0.6s var(--ios-easing);
		}
	}

	:global(.Removable__toggle) {
		display: block;
		width: 44px;
		height: 44px;
		margin: 0 2px;
		background: none;
	}

	:global(.Removable__toggle-in) {
		position: relative;
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: none;
	}

	:global(.Removable__toggle-in::after) {
		content: '';
		width: 22px;
		height: 22px;
		background-color: var(--destructive);
		border-radius: 50%;
	}

	:global(.Removable__toggle-in::before) {
		content: '';
		position: absolute;
		display: block;
		width: 12px;
		height: 2px;
		background-color: var(--white);
	}

	:global(.Removable--ios .Removable__content) {
		padding-left: 0;
		padding-right: var(--formitem_padding);
	}

	:global(.FormLayoutGroup--removable .Removable__content) {
		flex-wrap: wrap;
	}

	:global(.FormLayoutGroup--removable .FormItem--ios.FormItem--withTop ~ .Removable__offset) {
		order: -1;
		display: block;
		width: 100%;
		height: 28px;
	}

	:global(.FormLayoutGroup--removable.FormLayoutGroup--sizeY-compact
			.FormItem--ios.FormItem--withTop
			~ .Removable__offset) {
		height: 26px;
	}
</style>

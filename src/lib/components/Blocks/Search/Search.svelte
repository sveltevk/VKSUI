<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import { IOS, VKCOM } from '$lib/lib/platform';
	import Touch from '$lib/components/Service/Touch/Touch.svelte';
	// import type { TouchEventHandler, TouchEvent } from '$lib/components/Service/Touch/Touch.svelte';
	import Icon16SearchOutline from '@sveltevk/icons/dist/16/search_outline';
	import Icon16Clear from '@sveltevk/icons/dist/16/clear';
	import Icon24Cancel from '@sveltevk/icons/dist/24/cancel';
	import { createEventDispatcher } from 'svelte';
	import SearchPlaceholderTypography from './SearchPlaceholderTypography.svelte';
	import Separator from '../Separator/Separator.svelte';

	const dispatch = createEventDispatcher();

	export let style = '';

	export let after: any = 'Отмена';
	// export let autoComplete: string = 'off';
	export let placeholder: string = 'Поиск';

	let inputEl;
	let isFocused = false;
	export let value = '';
	const platform = usePlatform();

	const onFocus = (e) => {
		isFocused = true;
		dispatch('focus', e);
	};

	const onBlur = (e) => {
		isFocused = false;
		dispatch('blur', e);
	};

	// TODO: проверить эту магию
	const onCancel = () => {
		// eslint-disable-next-line @typescript-eslint/unbound-method
		const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
			window.HTMLInputElement.prototype,
			'value'
		).set;
		nativeInputValueSetter.call(inputEl, '');

		const ev2 = new Event('input', { bubbles: true });
		inputEl.dispatchEvent(ev2);
	};

	const onIconClickStart = (e) => {
		dispatch('iconClick', e.originalEvent);
	};

	const onIconCancelClickStart = (e) => {
		e.detail.originalEvent.preventDefault();
		onCancel();
		inputEl.focus();
	};
</script>

<!-- 
@component
Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.
-->

<div
	class={classNames(
		getClassName('Search', $platform),
		{
			'Search--focused': isFocused,
			'Search--has-value': !!value,
			'Search--has-after': !!($$slots.after || after),
			'Search--has-icon': !!$$slots.icon
		},
		$$props.class
	)}
	{style}
>
	<div class="Search__in">
		<div class="Search__width" />
		<label class="Search__control">
			<input
				{...$$restProps}
				bind:this={inputEl}
				type="text"
				class="Search__input"
				on:focus={onFocus}
				on:blur={onBlur}
				on:change
				bind:value
			/>
			{#if $platform === IOS && ($$slots.after || after)}
				<div class="Search__after-width">
					<slot name="after">{after}</slot>
				</div>
			{/if}
			<div class="Search__placeholder">
				<div class="Search__placeholder-in">
					<slot name="before"><Icon16SearchOutline /></slot>
					<SearchPlaceholderTypography class="Search__placeholder-text" platform={$platform}>
						{placeholder}
					</SearchPlaceholderTypography>
				</div>
				{#if isFocused && $platform === IOS && ($$slots.after || after)}
					<div class="Search__after-width">
						<slot name="after">{after}</slot>
					</div>
				{/if}
			</div>
		</label>

		<div class="Search__after" on:click={onCancel}>
			<div class="Search__icons">
				{#if $$slots.icon}
					<Touch on:start={onIconClickStart} class="Search__icon">
						<slot name="icon" />
					</Touch>
				{/if}
				{#if !!value}
					<Touch on:start={onIconCancelClickStart} class="Search__icon">
						{#if $platform === IOS}
							<Icon16Clear />
						{:else}
							<Icon24Cancel />
						{/if}
					</Touch>
				{/if}
			</div>
			{#if $platform === IOS && ($$slots.after || after)}
				<div class="Search__after-in">
					<slot name="after">{after}</slot>
				</div>
			{/if}
		</div>
	</div>
	{#if $platform === VKCOM}
		<Separator class="Search__separator" wide />
	{/if}
</div>

<style>
	:global(.Search) {
		overflow: hidden;
		font-weight: normal;
		font-family: var(--font-common);
		transform: translate3d(0, 0, 0);
		line-height: normal;
	}

	:global(.Search__in) {
		position: relative;
	}

	:global(.Search__width) {
		height: var(--search_default_height);
		white-space: nowrap;
		color: transparent;
		width: 10000px;
	}

	:global(.Search__control) {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		width: calc(100% - 1px);
		height: 100%;
		border-radius: 10px;
	}

	:global(.Search__input) {
		-webkit-appearance: none; /* не используем textfield из-за бага в iOS 15.1 http://www.openradar.me/FB9744107 */
		border: none;
		margin: 0;
		height: var(--search_default_height);
		position: relative;
		padding: 0 22px 0 36px;
		box-sizing: border-box;
		font-size: 17px;
		border-radius: 10px;
		max-width: 100%;
		flex-grow: 1;
		min-width: 0;
		background-color: transparent;
		z-index: 2;
		color: var(--text_primary);
	}

	:global(.Search__input::-webkit-search-decoration),
	:global(.Search__input::-webkit-search-cancel-button),
	:global(.Search__input::-webkit-search-results-button),
	:global(.Search__input::-webkit-search-results-decoration) {
		display: none;
	}

	:global(.Search--has-after .Search__input) {
		border-radius: 10px 0 0 10px;
	}

	:global(.Search--has-value .Search__input),
	:global(.Search--has-icon .Search__input),
	:global(.Search--has-value .Search__placeholder),
	:global(.Search--has-icon .Search__placeholder) {
		padding-right: 40px;
	}

	:global(.Search--has-icon.Search--has-value .Search__input),
	:global(.Search--has-icon.Search--has-value .Search__placeholder) {
		padding-right: 80px;
	}

	:global(.Search__after-width) {
		font-size: 17px;
		height: var(--search_default_height);
		line-height: var(--search_default_height);
		padding-left: 12px;
		padding-right: 4px;
		flex-shrink: 0;
		pointer-events: none;
		cursor: text;
	}

	:global(.Search__placeholder) {
		position: absolute;
		left: 0;
		width: 100%;
		cursor: text;
		z-index: 1;
		text-align: left;
		height: var(--search_default_height);
		font-size: 0;
		padding-left: 12px;
		padding-right: 22px;
		pointer-events: none;
		box-sizing: border-box;
		display: flex;
	}

	:global(.Search__placeholder-in) {
		height: var(--search_default_height);
		display: flex;
		align-items: center;
		overflow: hidden;
		flex-grow: 1;
		max-width: 100%;
	}

	:global(.Search__placeholder-text) {
		margin-left: 8px !important;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	:global(.Search--has-value .Search__placeholder-text) {
		opacity: 0;
	}

	:global(.Search__icons) {
		position: absolute;
		right: 100%;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--search_bar_field_tint);
	}

	:global(.Search__icon) {
		width: 40px;
		height: var(--search_default_height);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.Search__after) {
		position: absolute;
		left: 100%;
		top: 0;
		line-height: var(--search_default_height);
		z-index: 2;
		transform: translate(0);
		transition: transform 0.3s var(--ios-easing);
		cursor: default;
	}

	:global(.Search--focused .Search__after),
	:global(.Search--has-value .Search__after) {
		transform: translate(-100%);
	}

	:global(.Search__after::before) {
		position: absolute;
		right: calc(100% - 1px);
		display: block;
		height: 100%;
		width: 10px;
		content: '';
		pointer-events: none;
	}

	:global(.Search__after-in) {
		position: relative;
		z-index: 2;
		cursor: pointer;
		font-size: 17px;
		padding-left: 12px;
		padding-right: 4px;
	}

	:global(.Search__after::after) {
		position: absolute;
		right: 100%;
		display: block;
		height: 100%;
		width: 10px;
		content: '';
		top: 0;
		border-radius: 0 10px 10px 0;
		cursor: text;
		pointer-events: none;
	}

	:global(.Group--plain .Search) {
		padding-top: 4px;
	}

	/*
  Themes
 */

	/*
  default
 */
	:global(.Search) {
		background: var(--search_bar_background);
	}

	:global(.Search__control) {
		background-color: var(--search_bar_field_background);
	}

	:global(.Search__input) {
		color: var(--text_primary);
	}

	:global(.Search__placeholder) {
		color: var(--search_bar_field_tint);
	}

	:global(.Search__after-width) {
		background: var(--search_bar_field_background);
		color: var(--search_bar_field_background);
	}

	:global(.Search__after) {
		background: var(--search_bar_background);
		color: var(--accent);
	}

	:global(.Search__after::after) {
		background-color: var(--search_bar_field_background);
	}

	:global(.Search__after::before) {
		background-color: var(--search_bar_background);
	}

	/*
  header
 */
	:global(.PanelHeader .Search) {
		background: var(--header_background);
	}

	:global(.PanelHeader .Search__control) {
		background-color: var(--header_search_field_background);
	}

	:global(.PanelHeader .Search__input) {
		color: var(--text_primary);
	}

	:global(.PanelHeader .Search__placeholder) {
		color: var(--header_search_field_tint);
	}

	:global(.PanelHeader .Search__after-width) {
		background: var(--header_search_field_background);
		color: var(--header_search_field_background);
	}

	:global(.PanelHeader .Search__after) {
		background: var(--header_background);
		color: var(--header_tint);
	}

	:global(.PanelHeader .Search__after::after) {
		background-color: var(--header_search_field_background);
	}

	:global(.PanelHeader .Search__after::before) {
		background-color: var(--header_background);
	}

	/**
  iOS
 */
	:global(.Search--ios) {
		padding: 8px 12px;
	}

	/**
  Android
 */
	:global(.Search--android) {
		padding: 8px 16px;
	}

	/**
  VKCOM
*/

	:global(.Search--vkcom),
	:global(.PanelHeader--vkcom .Search) {
		background: transparent;
	}

	:global(.Search--vkcom .Search__in) {
		padding-top: 6px;
		padding-bottom: 6px;
	}

	:global(.Search--vkcom .Search__input) {
		font-size: 15px;
		line-height: 20px;
		padding-left: 40px;
	}

	:global(.Search--vkcom .Search__placeholder) {
		padding-left: 16px;
	}

	:global(.Search--vkcom .Search__icons) {
		top: 4px;
		right: calc(100% + 8px);
	}

	:global(.Search--vkcom.Search--has-value .Search__input) {
		padding-right: 56px;
	}

	:global(.Search--vkcom.Search--has-icon.Search--has-value .Search__input) {
		padding-right: 92px;
	}

	:global(.Search--vkcom .Search__icon) {
		width: 40px;
		height: 40px;
	}

	:global(.Search--vkcom .Search__icon:hover) {
		background-color: var(--background_hover);
		border-radius: 50%;
	}

	:global(.Search--vkcom .Search__control) {
		background-color: transparent;
	}

	:global(.PanelHeader--vkcom .Search__separator) {
		display: none;
	}

	:global(.Search--vkcom .Search__separator) {
		color: var(--input_border);
	}

	:global(.Group--card .Search--vkcom) {
		margin: 0 -8px;
	}

	:global(.Group--card .Search--vkcom:first-child) {
		margin-top: -8px;
	}

	:global(.Group--card .Search--vkcom:not(:last-child)) {
		margin-bottom: 8px;
	}

	:global(.Group--card .Search--vkcom .Search__placeholder) {
		padding-left: 20px;
	}

	:global(.Group--card .Search--vkcom .Search__input) {
		padding-left: 44px;
	}
</style>

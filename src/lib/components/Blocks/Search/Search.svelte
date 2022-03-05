<script context="module" lang="ts">
	let globalSearchId = 0;
</script>

<script lang="ts">
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import { IOS } from '$lib/lib/platform';
	import Touch from '$lib/components/Service/Touch/Touch.svelte';
	// import type { TouchEventHandler, TouchEvent } from '$lib/components/Service/Touch/Touch.svelte';
	import Icon16SearchOutline from '@sveltevk/icons/dist/16/search_outline';
	import Icon16Clear from '@sveltevk/icons/dist/16/clear';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let after: any = 'Отмена';
	// export let autoComplete: string = 'off';
	export let placeholder: string = 'Поиск';
	export let defaultValue: string = '';

	export let value = defaultValue;

	const platform = usePlatform();

	let focused = false;

	const searchId = `search-${globalSearchId++}`;

	let inputEl;

	const onFocus = (e) => {
		focused = true;
		dispatch('focus', e);
	};

	const onBlur = (e) => {
		focused = false;
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
		e.originalEvent.preventDefault();
		inputEl.focus();
		onCancel();
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
			'Search--focused': focused,
			'Search--has-value': !!value,
			'Search--has-after': !!($$slots.after || after),
			'Search--has-icon': !!$$slots.icon
		},
		$$props.class
	)}
>
	<div class="Search__in">
		<div class="Search__width" />
		<div class="Search__control">
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
					<Icon16SearchOutline />
					<div class="Search__placeholder-text">
						{@html placeholder}
					</div>
				</div>
			</div>
		</div>

		<div class="Search__after" onClick={this.onCancel}>
			<div class="Search__icons">
				{#if $$slots.icon}
					<Touch on:start={onIconClickStart} class="Search__icon">
						<slot name="icon" />
					</Touch>
				{/if}
				{#if !!value}
					<Touch on:start={onIconCancelClickStart} class="Search__icon">
						<Icon16Clear />
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
</div>

<style>
	.Search {
		overflow: hidden;
		font-weight: normal;
		font-family: var(--font-common);
		transform: translate3d(0, 0, 0);
		line-height: normal;
	}

	.Search__in {
		position: relative;
	}

	.Search__width {
		height: var(--search_default_height);
		white-space: nowrap;
		color: transparent;
		width: 10000px;
	}

	.Search__control {
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

	.Search__input {
		border: none;
		margin: 0;
		height: var(--search_default_height);
		position: relative;
		padding: 0 22px 0 36px;
		box-sizing: border-box;
		font-size: 17px;
		outline: none;
		border-radius: 10px;
		max-width: 100%;
		flex-grow: 1;
		min-width: 0;
		background-color: transparent;
		z-index: 2;
		color: var(--text_primary);
	}

	.Search--has-after .Search__input {
		border-radius: 10px 0 0 10px;
	}

	.Search--has-value .Search__input {
		padding-right: 40px;
	}

	.Search--has-icon.Search--has-value .Search__input {
		padding-right: 80px;
	}

	.Search__after-width {
		font-size: 17px;
		height: var(--search_default_height);
		line-height: var(--search_default_height);
		padding-left: 12px;
		padding-right: 4px;
	}

	.Search__placeholder {
		position: absolute;
		left: 0;
		width: 100%;
		cursor: text;
		z-index: 1;
		text-align: left;
		display: block;
		height: var(--search_default_height);
		font-size: 0;
		padding-left: 12px;
		pointer-events: none;
	}

	.Search__placeholder-in {
		height: var(--search_default_height);
		display: flex;
		align-items: center;
	}

	.Search__placeholder-text {
		margin-left: 8px;
		line-height: 22px;
		font-size: 17px;
	}

	.Search--has-value .Search__placeholder-text {
		opacity: 0;
	}

	.Search__icons {
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

	:global(.Search__icon.Tappable--active) {
		opacity: 0.7;
	}

	.Search__after {
		position: absolute;
		left: 100%;
		top: 0;
		line-height: var(--search_default_height);
		z-index: 2;
		transform: translate(0);
		transition: transform 0.3s var(--ios-easing);
		cursor: default;
	}

	.Search--focused .Search__after,
	.Search--has-value .Search__after {
		transform: translate(-100%);
	}

	.Search__after::before {
		position: absolute;
		right: calc(100% - 1px);
		display: block;
		height: 100%;
		width: 10px;
		content: '';
		pointer-events: none;
	}

	.Search__after-in {
		position: relative;
		z-index: 2;
		cursor: pointer;
		font-size: 17px;
		padding-left: 12px;
		padding-right: 4px;
	}

	.Search__after::after {
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

	/*
  Themes
 */

	/*
  default
 */
	.Search {
		background: var(--search_bar_background);
	}

	.Search__control {
		background-color: var(--search_bar_field_background);
	}

	.Search__input {
		color: var(--text_primary);
	}

	.Search__placeholder {
		color: var(--search_bar_field_tint);
	}

	.Search__after-width {
		background: var(--search_bar_field_background);
		color: var(--search_bar_field_background);
	}

	.Search__after {
		background: var(--search_bar_background);
		color: var(--accent);
	}

	.Search__after::after {
		background-color: var(--search_bar_field_background);
	}

	.Search__after::before {
		background-color: var(--search_bar_background);
	}

	/*
  header
 */
	:global(.PanelHeader) .Search {
		background: var(--header_background);
	}

	:global(.PanelHeader) .Search__control {
		background-color: var(--header_search_field_background);
	}

	:global(.PanelHeader) .Search__input {
		color: var(--text_primary);
	}

	:global(.PanelHeader) .Search__placeholder {
		color: var(--header_search_field_tint);
	}

	:global(.PanelHeader) .Search__after-width {
		background: var(--header_search_field_background);
		color: var(--header_search_field_background);
	}

	:global(.PanelHeader) .Search__after {
		background: var(--header_background);
		color: var(--header_tint);
	}

	:global(.PanelHeader) .Search__after::after {
		background-color: var(--header_search_field_background);
	}

	:global(.PanelHeader) .Search__after::before {
		background-color: var(--header_background);
	}

	/**
  iOS
 */
	.Search--ios {
		padding: 8px 12px;
	}

	/**
  Android
 */
	.Search--android {
		padding: 8px 16px;
	}
</style>

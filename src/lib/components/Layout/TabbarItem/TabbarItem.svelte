<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { Platform } from '@sveltevk/vksui/lib/platform';
	import Tappable from '../../Service/Tappable/Tappable.svelte';

	export let selected = false;
	/**
	 * Тест рядом с иконкой
	 */
	export let text = '';
	export let href: string | undefined = undefined;
	export let disabled = false;

	const platform = usePlatform();
</script>

<svelte:component
	this={href ? 'a' : 'button'}
	{...$$restProps}
	on:click
	{href}
	class={classNames($$restProps.class, getClassName('TabbarItem', $platform), {
		'TabbarItem--selected': selected,
		'TabbarItem--text': text !== ''
	})}
>
	<Tappable
		role="presentation"
		Element={'div'}
		{disabled}
		activeMode={$platform === Platform.IOS ? 'TabbarItem__tappable--active' : 'background'}
		activeEffectDelay={$platform === Platform.IOS ? 0 : 300}
		hasHover={false}
		class="TabbarItem__tappable"
	/>
	<div class="TabbarItem__in">
		<div class="TabbarItem__icon">
			<slot />
			<div class="TabbarItem__label">
				{#if $$slots.indicator}
					<slot name="indicator" />
				{/if}
			</div>
		</div>
		{#if text}
			<div class="TabbarItem__text">{text}</div>
		{/if}
	</div>
</svelte:component>

<style>
	:global(.TabbarItem) {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--tabbar_inactive_icon);
		text-decoration: none;
		border: none;
		outline: none;
		padding: 0;
		background: transparent;
		height: var(--tabbar_height);
		position: relative;
	}

	:global(.Tabbar .TabbarItem) {
		flex-shrink: 0;
		max-width: 100%;
		min-width: 0;
		flex-grow: 1;
		flex-basis: 0;
	}

	:global(.TabbarItem--selected) {
		color: var(--tabbar_active_icon);
	}

	:global(.TabbarItem__tappable) {
		position: absolute;
	}

	.TabbarItem__in {
		display: flex;
		padding: 0 2px;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		height: 100%;
		overflow: hidden;
	}

	:global(.Tabbar--l-vertical .TabbarItem--text) .TabbarItem__in {
		position: relative;
		top: 2px;
	}

	:global(.Tabbar--l-vertical) .TabbarItem__in {
		flex-direction: column;
	}

	:global(.Tabbar--l-horizontal) .TabbarItem__in {
		flex-direction: row;
	}

	.TabbarItem__icon {
		position: relative;
	}

	.TabbarItem__label :global(.Counter) {
		position: absolute;
		top: -2px;
		right: -9px;
	}

	.TabbarItem__label :global(.Badge) {
		position: absolute;
		top: -2px;
		right: -4px;
	}

	.TabbarItem__text {
		white-space: nowrap;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(.Tabbar--l-vertical) .TabbarItem__text {
		font-size: 10px;
		line-height: 12px;
		font-weight: 500;
		margin-top: 2px;
	}

	:global(.Tabbar--l-horizontal) .TabbarItem__text {
		font-size: 13px;
		font-weight: 500;
		margin-left: 8px;
	}

	/**
 * Android
 */

	:global(.TabbarItem--android .TabbarItem__tappable) {
		width: calc(100% + 16px);
		padding-bottom: calc(100% + 16px);
		border-radius: 50%;
	}

	:global(.TabbarItem--android:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	:global(.TabbarItem--android:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	/**
 * iOS
 */

	:global(.TabbarItem--ios .TabbarItem__tappable) {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	:global(.TabbarItem--ios .TabbarItem__in) {
		transition: transform 0.07s var(--ios-easing);
	}

	:global(.TabbarItem--ios .TabbarItem__tappable--active + .TabbarItem__in) {
		transform: scale(0.96);
	}
</style>

<script lang="ts">
	import Tappable, {
		ACTIVE_EFFECT_DELAY
	} from '@sveltevk/vksui/components/Service/Tappable/Tappable.svelte';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { IOS } from '@sveltevk/vksui/lib/platform';

	const platform = usePlatform();

	export let after = '';
	export let selected = false;

	$: $$restProps.class = classNames(
		getClassName('TabsItem', $platform),
		{ 'TabsItem--selected': selected },
		$$props.class
	);
	$$restProps.activeEffectDelay = $platform === IOS ? 0 : ACTIVE_EFFECT_DELAY;
</script>

<Tappable {...$$restProps} on:click>
	<div class="TabsItem__in">
		<slot />
	</div>
	{#if $$slots.after || after}
		<div class="TabsItem__after">
			<slot name="after">{after}</slot>
		</div>
	{/if}
</Tappable>

<style>
	:global(.TabsItem) {
		white-space: nowrap;
		text-align: center;
		font-weight: 500;
		box-sizing: border-box;
		flex-shrink: 0;
		display: flex;
		align-items: baseline;
		justify-content: center;
	}

	:global(.Tabs--default) :global(.TabsItem) {
		font-size: 16px;
		line-height: 20px;
		color: var(--text_secondary);
		max-width: 100%;
		flex-basis: 0;
		flex-shrink: 0;
		flex-grow: 1;
		position: relative;
		padding-left: 16px;
		padding-right: 16px;
	}

	:global(.Tabs--default) .TabsItem__in {
		padding: 14px 0;
	}

	:global(.Tabs--default) :global(.TabsItem::after) {
		content: '';
		display: block;
		position: absolute;
		left: 16px;
		bottom: 8px;
		width: calc(100% - 32px);
		height: 2px;
		border-radius: 2px;
	}

	:global(.Tabs--default) :global(.TabsItem--selected) {
		color: var(--text_primary);
	}

	:global(.Tabs--default) :global(.TabsItem--selected::after) {
		background: var(--accent);
	}

	:global(.HorizontalScroll) :global(.TabsItem) {
		min-width: 64px;
		flex-basis: auto;
	}

	:global(.Tabs--buttons) :global(.TabsItem) {
		border-radius: 10px;
		box-sizing: border-box;
		padding: 0 16px;
		font-size: 14px;
		line-height: 18px;
		font-weight: 500;
	}

	:global(.Tabs--buttons) .TabsItem__in {
		padding: 6px 0;
	}

	/* Для случая, когда внутри Tabs нет HorizontalScroll */
	:global(.Tabs--buttons) :global(.Tabs__in) > :global(.TabsItem:first-child) {
		margin-left: 8px;
	}

	:global(.Tabs--buttons) :global(.TabsItem:not(:last-child)) {
		margin-right: 8px;
	}

	:global(.Tabs--buttons) :global(.TabsItem) {
		background-color: var(--header_background);
		color: var(--header_tab_inactive_text);
	}

	:global(.Tabs--buttons) :global(.TabsItem--selected) {
		background-color: var(--header_tab_active_background);
		color: var(--header_tab_active_text);
	}

	:global(.Tabs--buttons) :global(.TabsItem) {
		color: var(--panel_tab_inactive_text);
	}

	:global(.Tabs--buttons) :global(.TabsItem--selected) {
		background-color: var(--panel_tab_active_background);
		color: var(--panel_tab_active_text);
	}

	/*
  iOS
 */
	:global(.Tabs--ios.Tabs--segmented) :global(.TabsItem) {
		border: 1px solid;
		font-size: 14px;
		line-height: 18px;
		padding: 0 12px;
		max-width: 100%;
		flex-basis: 0;
		flex-shrink: 0;
		flex-grow: 1;
	}

	:global(.Tabs--ios.Tabs--segmented) .TabsItem__in {
		padding: 7px 0;
	}

	:global(.Tabs--ios.Tabs--segmented) :global(.TabsItem:not(:first-child)) {
		border-left: none;
	}

	:global(.Tabs--ios.Tabs--segmented) :global(.TabsItem:last-child) {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	:global(.Tabs--ios.Tabs--segmented) :global(.TabsItem:first-child) {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}

	:global(.Tabs--ios.Tabs--segmented) :global(.TabsItem) {
		border-color: var(--segmented_control_tint);
		color: var(--segmented_control_tint);
	}

	:global(.Tabs--ios.Tabs--segmented) :global(.TabsItem--selected) {
		background-color: var(--segmented_control_tint);
	}

	:global(.Tabs--ios.Tabs--segmented) :global(.TabsItem--selected) {
		color: var(--background_content);
	}

	:global(.Tabs--ios.Tabs--segmented) :global(.TabsItem:not(.TabsItem--selected).Tappable--active) {
		background: var(--separator_common);
	}

	:global(.PanelHeader--ios)
		:global(.Tabs--segmented.TabsItem:not(.TabsItem--selected).Tappable--active)
		.TabsItem__in {
		opacity: 0.7;
	}

	:global(.PanelHeader--ios) :global(.Tabs--segmented) :global(.TabsItem) {
		border-color: var(--header_tint);
		color: var(--header_tint);
	}

	:global(.Tabs--ios.Tabs--segmented.Tabs--header) :global(.TabsItem--selected) {
		background-color: var(--header_tint);
		color: var(--header_background);
	}

	/*
  Android
 */

	:global(.TabsItem--android) :global(.Tappable__waves) {
		display: none;
	}
</style>

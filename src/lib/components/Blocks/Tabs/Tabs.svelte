<script lang="ts">
	import { ANDROID } from '$lib/lib/platform';
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	export let mode: 'default' | 'buttons' | 'segmented' = 'default';

	const platform = usePlatform();

	// TODO: check this
	if ($platform === ANDROID && mode === 'segmented') {
		mode = 'default';
	}
</script>

<div
	{...$$restProps}
	class={classNames(getClassName('Tabs', $platform), $$props.class, `Tabs--${mode}`)}
>
	<div class="Tabs__in">
		<slot />
	</div>
</div>

<style>
	.Tabs {
		background: var(--background_content);
	}

	.Tabs__in,
	.Tabs :global(.HorizontalScroll__in) {
		display: flex;
		align-items: center;
	}

	:global(.PanelHeader) .Tabs {
		overflow: hidden;
		background: var(--header_background);
		font-family: var(--font-common);
	}

	:global(.PanelHeader) .Tabs::after {
		display: block;
		width: 1000px;
		content: '';
	}

	.Tabs :global(.HorizontalScroll) {
		min-width: 100%;
	}

	.Tabs--buttons {
		padding-top: 8px;
		padding-bottom: 8px;
	}

	.Tabs--default,
	.Tabs--default :global(.HorizontalScroll__in) {
		justify-content: center;
	}

	.Tabs--buttons,
	.Tabs--default :global(.HorizontalScroll__in) {
		justify-content: flex-start;
	}

	.Tabs.Tabs--buttons :global(.HorizontalScroll__in::after),
	.Tabs.Tabs--buttons :global(.HorizontalScroll__in::before) {
		display: block;
		width: 8px;
		flex-shrink: 0;
		height: 1px;
		content: '';
	}

	/*
 iOS
 */

	.Tabs--ios.Tabs--segmented {
		padding: 4px 12px 8px;
	}

	/* Нужно для закрашивания прозрачной области нижнего инсета на iphone x */
	:global(.FixedLayout--ios.FixedLayout--bottom) .Tabs::after {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		content: '';
		background: var(--background_content);
	}

	:global(.FixedLayout--ios.FixedLayout--bottom) .Tabs__in,
	:global(.FixedLayout--ios.FixedLayout--bottom) .Separator {
		position: relative;
		z-index: 2;
	}

	/*
  Android
 */

	/**
 * Counter inside TabsItem
 */

	:global(.TabsItem) :global(.Counter) {
		margin-left: 8px;
	}

	.Tabs :global(.TabsItem) :global(.Counter) {
		background: var(--panel_tab_inactive_text);
		color: var(--white);
	}

	.Tabs :global(.TabsItem--selected) :global(.Counter) {
		background: var(--panel_tab_active_text);
		color: var(--panel_tab_active_background);
	}

	.Tabs--ios.Tabs--segmented :global(.TabsItem) :global(.Counter) {
		background: var(--segmented_control_tint);
		color: var(--background_content);
	}

	.Tabs--ios.Tabs--segmented :global(.TabsItem--selected) :global(.Counter) {
		background: var(--background_content);
		color: var(--segmented_control_tint);
	}

	.Tabs--ios.Tabs--segmented :global(.TabsItem) :global(.Counter--s-m) {
		position: relative;
		top: 1px;
	}
</style>

<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { IOS } from '@sveltevk/vksui/lib/platform';
	import TooltipContainer from '../../Popouts/Tooltip/TooltipContainer.svelte';
	import Touch from '../../Service/Touch/Touch.svelte';

	export let centered = false;

	const adaptivity = useAdaptivity();
	const platform = usePlatform();
</script>

<div
	{...$$restProps}
	class={classNames(
		getClassName('Panel', $platform),
		`Panel--${$adaptivity.sizeX}`,
		{
			'Panel--centered': centered,
			[`Panel--sizeX-${$adaptivity.sizeX}`]: true
		},
		$$props.class
	)}
>
	<Touch component={TooltipContainer} class="Panel__in">
		{#if $platform === IOS}
			<div class="Panel__fade" />
		{/if}
		<div class="Panel__in-before" />
		{#if centered}
			<div class="Panel__centered">
				<slot />
			</div>
		{:else}
			<slot />
		{/if}
		<div class="Panel__in-after" />
	</Touch>
</div>

<style>
	.Panel {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.Panel::after {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 1;
		content: '';
	}

	.Panel--centered :global(.PanelHeader) {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}

	:global(.Panel__in) {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		min-height: 100%;
		z-index: 2;
		display: flex;
		flex-direction: column;
	}

	.Panel__centered {
		display: flex;
		flex: 1 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.Panel__centered :global(.PanelHeader--ios.PanelHeader--vis + *) {
		margin-top: var(--panelheader_height_ios);
	}

	.Panel__centered :global(.PanelHeader--android.PanelHeader--vis + *),
	.Panel__centered :global(.PanelHeader--vkcom.PanelHeader--vis + *) {
		margin-top: var(--panelheader_height_android);
	}

	.Panel--sizeX-compact .Panel__centered :global(.PanelHeader--ios.PanelHeader--sep + *) {
		margin-top: calc(var(--panelheader_height_ios) + 5px);
	}

	.Panel--sizeX-compact .Panel__centered :global(.PanelHeader--android.PanelHeader--sep + *) {
		margin-top: calc(var(--panelheader_height_android) + 5px);
	}

	.Panel--sizeX-compact .Panel__centered :global(.PanelHeader--vkcom.PanelHeader--sep + *) {
		margin-top: calc(var(--panelheader_height_vkcom) + 5px);
	}

	.Panel--sizeX-regular .Panel__centered :global(.PanelHeader--ios.PanelHeader--sep + *) {
		margin-top: calc(var(--panelheader_height_ios) + 16px);
	}

	.Panel--sizeX-regular .Panel__centered :global(.PanelHeader--android.PanelHeader--sep + *) {
		margin-top: calc(var(--panelheader_height_android) + 16px);
	}

	:global(.Epic .Panel__in) {
		padding-bottom: var(--tabbar_height);
		padding-bottom: calc(var(--safe-area-inset-bottom) + var(--tabbar_height));
	}

	.Panel__in-before {
		height: 1px;
		margin-bottom: -1px;
	}

	.Panel__separator {
		position: relative;
		z-index: 3;
	}

	.Panel__in-after {
		height: 1px;
		margin-top: -1px;
	}

	.Panel :global(.Panel__in),
	.Panel::after {
		background-color: var(--background_content);
	}

	.Panel.Panel--regular :global(.Panel__in),
	.Panel.Panel--regular::after {
		background-color: transparent;
	}
</style>

<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import { ContextKey, WebviewType } from '@sveltevk/vksui/lib/config';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { VKCOM } from '@sveltevk/vksui/lib/platform';
	import { getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import Separator from '../../Blocks/Separator/Separator.svelte';
	import FixedLayout from '../FixedLayout/FixedLayout.svelte';
	import PanelHeaderIn from './PanelHeaderIn.svelte';

	export let separator = true;
	export let transparent = false;
	export let shadow = false;
	/**
	 * Если `false`, то шапка будет нулевой высоты и контент панели "залезет" под неё
	 */
	export let visor = true;
	/**
	 * Если `false`, то шапка будет в потоке. По умолчанию `true`, но если платформа vkcom, то по умолчанию `false`.
	 */
	export let fixed: boolean = undefined;

	const adaptivity = useAdaptivity();
	const platform = usePlatform();
	const webviewType: Writable<WebviewType> =
		getContext(ContextKey.webviewType) || writable(WebviewType.VKAPPS); // TODO: use context
	const isInsideModal = false; // TODO: use context
	$: needShadow = shadow && $adaptivity.sizeX === SizeType.REGULAR;
	$: isFixed = fixed !== undefined ? fixed : $platform !== VKCOM;
</script>

<div
	{...$$restProps}
	class={classNames(
		$$restProps.class,
		getClassName('PanelHeader', $platform),
		{
			'PanelHeader--trnsp': transparent,
			'PanelHeader--shadow': needShadow,
			'PanelHeader--vis': visor,
			'PanelHeader--vkapps': $webviewType === WebviewType.VKAPPS && !isInsideModal,
			'PanelHeader--no-left': !$$slots.left,
			'PanelHeader--no-right': !$$slots.right,
			'PanelHeader--fixed': isFixed
		},
		`PanelHeader--sizeX-${$adaptivity.sizeX}`
	)}
>
	{#if isFixed}
		<FixedLayout class="PanelHeader__fixed" vertical="top">
			<PanelHeaderIn webviewType={$webviewType} {isInsideModal} platform={$platform}>
				<slot name="left" slot="left" />
				<slot />
				<slot name="right" slot="right" />
			</PanelHeaderIn>
		</FixedLayout>
	{:else}
		<PanelHeaderIn webviewType={$webviewType} {isInsideModal} platform={$platform}>
			<slot name="left" slot="left" />
			<slot />
			<slot name="right" slot="right" />
		</PanelHeaderIn>
	{/if}
	{#if separator && visor}
		<Separator
			class="PanelHeader__separator"
			expanded={$adaptivity.sizeX === SizeType.REGULAR && $platform !== VKCOM}
			wide={$platform === VKCOM}
		/>
	{/if}
</div>

<style>
	:global(.PanelHeader) {
		position: relative;
	}

	:global(.PanelHeader--vis.PanelHeader--fixed::before) {
		display: block;
		content: '';
	}

	:global(.PanelHeader:not(.PanelHeader--vis):not(.PanelHeader--fixed)) {
		height: 0;
	}

	:global(.PanelHeader__fixed) {
		z-index: 10;
	}

	:global(.PanelHeader__in) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		white-space: nowrap;
		position: relative;
		background: var(--header_background);
	}

	:global(.PanelHeader--trnsp .PanelHeader__in) {
		background: transparent;
	}

	:global(.PanelHeader--shadow .PanelHeader__in) {
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);
	}

	:global(.PanelHeader__left) {
		box-sizing: border-box;
		color: var(--header_tint);
		display: flex;
		flex-shrink: 0;
	}

	:global(.PanelHeader__content) {
		overflow: hidden;
	}

	:global(.PanelHeader__content > *) {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(.PanelHeader__content-in) {
		color: var(--header_text);
		font-weight: 500;
		font-family: var(--font-display);
	}

	:global(.PanelHeader__right) {
		display: flex;
		justify-content: flex-end;
		box-sizing: border-box;
		color: var(--header_tint);
	}

	:global(.PanelHeader--vkapps .PanelHeader__right) {
		min-width: 90px;
	}

	:global(.PanelHeader--sizeX-compact .PanelHeader__separator) {
		padding-top: 4px;
	}

	/**
 * iOS
 */

	:global(.PanelHeader--ios ~ .FixedLayout--top),
	:global(.PanelHeader--ios ~ * .FixedLayout--top:not(.PanelHeader__fixed)) {
		top: calc(var(--panelheader_height_ios) + var(--safe-area-inset-top));
	}

	:global(.PanelHeader--ios::before),
	:global(.PanelHeader--ios .PanelHeader__in) {
		height: var(--panelheader_height_ios);
		padding-top: var(--safe-area-inset-top);
	}

	:global(.PanelHeader--ios .PanelHeader__left) {
		flex-basis: 0;
		flex-shrink: 0;
		flex-grow: 1;
		opacity: 1;
		transition: opacity 0.3s var(--ios-easing);
		padding: 4px 0 4px 4px;
	}

	:global(.PanelHeader--ios .PanelHeader__left .PanelHeaderButton + .PanelHeaderButton--primitive) {
		margin-left: -6px;
		padding-left: 0;
	}

	:global(.PanelHeader--ios .PanelHeader__content) {
		text-align: center;
		opacity: 1;
		transition: opacity 0.3s var(--ios-easing);
	}

	:global(.PanelHeader--ios .PanelHeader__content-in) {
		font-size: 21px;
		line-height: var(--panelheader_height_ios);
	}

	:global(.PanelHeader--ios .PanelHeader__content > *) {
		padding: 0 4px;
	}

	:global(.PanelHeader--ios.PanelHeader--no-left .PanelHeader__content > *) {
		padding-left: 0;
	}

	:global(.PanelHeader--ios.PanelHeader--no-left .PanelHeader__content) {
		padding-left: 8px;
	}

	:global(.PanelHeader--ios.PanelHeader--no-right .PanelHeader__content > *) {
		padding-right: 0;
	}

	:global(.PanelHeader--ios.PanelHeader--no-right .PanelHeader__content) {
		padding-right: 8px;
	}

	:global(.PanelHeader--ios .PanelHeader__right) {
		flex-basis: 0;
		flex-shrink: 0;
		flex-grow: 1;
		opacity: 1;
		transition: opacity 0.3s var(--ios-easing);
		padding: 4px 4px 4px 0;
	}

	:global(.View--ios .View__panel--prev .PanelHeader__left),
	:global(.View--ios .View__panel--prev .PanelHeader__right),
	:global(.View--ios .View__panel--prev .PanelHeader__content) {
		opacity: 0;
	}

	/**
 * Android
 */

	@supports not (padding-top: env(safe-area-inset-top)) {
		:global(.PanelHeader--android),
		:global(.PanelHeader--vkcom) {
			--safe-area-inset-top: 0px;
		}
	}

	:global(.PanelHeader--android ~ .FixedLayout--top),
	:global(.PanelHeader--android ~ * .FixedLayout--top:not(.PanelHeader__fixed)) {
		top: calc(var(--panelheader_height_android) + var(--safe-area-inset-top));
	}

	:global(.PanelHeader--android::before),
	:global(.PanelHeader--android .PanelHeader__in) {
		height: var(--panelheader_height_android);
		padding-top: var(--safe-area-inset-top);
	}

	:global(.PanelHeader--android .PanelHeader__left:not(:empty)) {
		padding: 4px 0 4px 4px;
	}

	:global(.PanelHeader--android .PanelHeader__content) {
		align-items: center;
		flex-grow: 1;
		max-width: 100%;
	}

	:global(.PanelHeader--android .PanelHeader__content-in) {
		font-size: 23px;
	}

	:global(.PanelHeader--android .PanelHeader__content > *) {
		padding: 0 12px;
	}

	:global(.PanelHeader--android .Search),
	:global(.PanelHeader--vkcom .Search) {
		padding: 0 4px;
	}

	:global(.PanelHeader--android.PanelHeader--no-left .PanelHeader__content > *),
	:global(.PanelHeader--vkcom.PanelHeader--no-left .PanelHeader__content > *) {
		padding-left: 0;
	}

	:global(.PanelHeader--android.PanelHeader--no-left .PanelHeader__content) {
		padding-left: 16px;
	}

	:global(.SplitCol--spaced
			.PanelHeader--android.PanelHeader--no-left:not(.ModalPageHeader__in)
			.PanelHeader__content) {
		padding-left: 0;
	}

	:global(.PanelHeader--android.PanelHeader--no-right .PanelHeader__content > *),
	:global(.PanelHeader--vkcom.PanelHeader--no-right .PanelHeader__content > *) {
		padding-right: 0;
	}

	:global(.PanelHeader--android.PanelHeader--no-right .PanelHeader__content) {
		padding-right: 16px;
	}

	:global(.SplitCol--spaced
			.PanelHeader--android.PanelHeader--no-right:not(.ModalPageHeader__in)
			.PanelHeader__content) {
		padding-right: 0;
	}

	:global(.PanelHeader--android .PanelHeader__right:not(:empty)),
	:global(.PanelHeader--vkcom .PanelHeader__right:not(:empty)) {
		padding: 4px 4px 4px 0;
	}

	/**
 * VKCOM
 */

	:global(.PanelHeader--vkcom) {
		position: relative;
		z-index: 10;
	}

	:global(.PanelHeader--vkcom ~ .FixedLayout--top),
	:global(.PanelHeader--vkcom ~ * .FixedLayout--top:not(.PanelHeader__fixed)) {
		top: calc(var(--panelheader_height_vkcom) + var(--safe-area-inset-top));
	}

	/* TODO: v5.0.0 новая адаптивность */
	:global(.PanelHeader--vkcom.PanelHeader--sizeX-regular:not(.ModalPageHeader__in)
			.PanelHeader__in) {
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		box-shadow: 0 0 0 var(--thin-border) var(--input_border) inset;
		border-bottom: none;
	}

	:global(.PanelHeader--vkcom.PanelHeader--sizeX-regular:not(.ModalPageHeader__in)::after) {
		position: absolute;
		left: var(--thin-border);
		right: var(--thin-border);
		bottom: 0;
		height: var(--thin-border);
		background-color: var(--header_background);
		content: '';
	}

	:global(.PanelHeader--vkcom .PanelHeader__content) {
		text-align: center;
	}

	:global(.PanelHeader--vkcom::before),
	:global(.PanelHeader--vkcom .PanelHeader__in) {
		height: var(--panelheader_height_vkcom);
		padding-top: var(--safe-area-inset-top);
	}

	:global(.PanelHeader--vkcom .PanelHeader__left:not(:empty)) {
		padding: 0 0 0 4px;
	}

	:global(.PanelHeader--vkcom .PanelHeader__left),
	:global(.PanelHeader--vkcom .PanelHeader__right) {
		flex-basis: 0;
		flex-shrink: 0;
		flex-grow: 1;
	}
</style>

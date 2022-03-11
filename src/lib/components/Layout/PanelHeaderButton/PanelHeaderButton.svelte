<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID, IOS, VKCOM } from '@sveltevk/vksui/lib/platform';
	import { classNames } from '@vkontakte/vkjs';
	import A from '../../Elements/a/a.svelte';
	import Button from '../../Elements/button/button.svelte';
	import Tappable from '../../Service/Tappable/Tappable.svelte';
	import ButtonTypography from './ButtonTypography.svelte';

	export let primary = false;
	export let label = '';
	export let text = '';

	const platform = usePlatform();
	$: isPrimitive = !!text;
	$: isPrimitiveLabel = !!label;

	let hoverMode: string;
	let activeMode: string;

	$: {
		switch ($platform) {
			case ANDROID:
				hoverMode = 'background';
				activeMode = 'background';
				break;
			case IOS:
				hoverMode = 'background';
				activeMode = 'opacity';
				break;
			case VKCOM:
				hoverMode = 'PanelHeaderButton--hover';
				activeMode = 'PanelHeaderButton--active';
		}
	}
</script>

<Tappable
	{...$$restProps}
	on:click
	{hoverMode}
	component={$$restProps.href ? A : Button}
	activeEffectDelay={200}
	{activeMode}
	class={classNames($$restProps.class, getClassName('PanelHeaderButton', $platform), {
		'PanelHeaderButton--primary': primary,
		'PanelHeaderButton--primitive': isPrimitive,
		'PanelHeaderButton--notPrimitive': !isPrimitive && !isPrimitiveLabel
	})}
>
	{#if isPrimitive}
		<ButtonTypography platform={$platform} {primary}>{text}</ButtonTypography>
	{:else}
		<slot />
	{/if}
	{#if isPrimitiveLabel}
		<ButtonTypography platform={$platform} {primary}>{label}</ButtonTypography>
	{:else}
		<slot name="label" />
	{/if}
</Tappable>

<style>
	:global(.PanelHeaderButton) {
		appearance: none;
		background: none;
		border: none;
		box-shadow: none;
		display: block;
		color: currentColor;
		padding: 0;
		margin: 0;
		position: relative;
	}

	:global(.PanelHeaderButton[disabled]) {
		opacity: 0.6;
	}

	:global(.PanelHeaderButton .Counter) {
		position: absolute;
		padding: 0;
		top: 8px;
		right: 2px;
	}

	/*
 * iOS
 */

	:global(.PanelHeaderButton--ios) {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 17px;
	}

	:global(.PanelHeaderButton--ios.PanelHeaderButton--primitive) {
		height: 44px;
		line-height: 44px;
		padding: 0 12px;
	}

	:global(.PanelHeaderButton--ios .Icon--24) {
		padding: 10px;
	}

	:global(.PanelHeaderButton--ios .Icon--28) {
		padding: 8px;
	}

	/*
 * Android
 */

	:global(.PanelHeaderButton--android) {
		border-radius: 50%;
	}

	:global(.PanelHeaderButton--android.PanelHeaderButton--primitive) {
		height: 48px;
		line-height: 48px;
		padding: 0 12px;
	}

	:global(.PanelHeaderButton--android .Icon--24) {
		padding: 12px;
	}

	:global(.PanelHeaderButton--android .Icon--28) {
		padding: 10px;
	}

	/**
* VKCOM
*/
	:global(.PanelHeaderButton--vkcom) {
		color: var(--header_text_secondary);
	}

	:global(.PanelHeaderButton--vkcom > :not(.Counter)) {
		transition: opacity 0.3s;
		opacity: 0.7;
	}

	:global(.PanelHeaderButton--vkcom.PanelHeaderButton--hover > :not(.Counter)),
	:global(.PanelHeaderButton--vkcom.PanelHeaderButton--active > :not(.Counter)) {
		opacity: 1;
	}

	:global(.PanelHeaderButton--vkcom) {
		display: flex;
		align-items: center;
		padding: 10px;
	}

	:global(.PanelHeaderButton--vkcom.PanelHeaderButton--primitive) {
		height: 48px;
		line-height: 48px;
		padding: 0 10px;
	}

	:global(.PanelHeaderButton--vkcom.PanelHeaderButton--notPrimitive) {
		border-radius: 50%;
	}
</style>

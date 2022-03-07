<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { IOS } from '@sveltevk/vksui/lib/platform';
	import { classNames } from '@vkontakte/vkjs';
	import A from '../../Elements/a/a.svelte';
	import Button from '../../Elements/button/button.svelte';
	import Tappable from '../../Service/Tappable/Tappable.svelte';

	export let component = Button;

	const platform = usePlatform();
	const adaptivity = useAdaptivity();

	$: $$restProps.class = classNames(
		$$props.class,
		getClassName('IconButton', $platform),
		'IconButton',
		`IconButton--sizeY-${$adaptivity.sizeY}`
	);
</script>

<Tappable
	{...$$restProps}
	component={$$restProps.href ? A : component}
	activeEffectDelay={200}
	activeMode={$platform === IOS ? 'opacity' : 'IconButton--active'}
>
	<slot />
</Tappable>

<style>
	:global(.IconButton) {
		appearance: none;
		background: none;
		border: none;
		box-shadow: none;
		display: block;
		color: currentColor;
		padding: 0;
		margin: 0;
		position: relative;
		height: 48px;
		border-radius: 50%;
	}

	:global(.IconButton .Icon--16) {
		padding: 16px;
	}

	:global(.IconButton .Icon--16.Icon--w-8) {
		padding: 16px 14px;
	}

	:global(.IconButton .Icon--24) {
		padding: 12px;
	}

	:global(.IconButton .Icon--28) {
		padding: 10px;
	}

	:global(.IconButton[disabled]) {
		opacity: 0.6;
	}

	:global(.FormItem--removable .Removable__content > .IconButton),
	:global(.FormLayoutGroup--removable .Removable__content > .IconButton),
	:global(.FormField__after .IconButton) {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: inherit;
	}

	:global(.FormField__after .IconButton .Icon.Icon.Icon) {
		padding: 0;
	}

	:global(.Removable__action.IconButton) {
		color: var(--icon_secondary);
	}

	/*
 * sizeY: COMPACT
 */
	:global(.IconButton--sizeY-compact) {
		height: 44px;
	}

	:global(.FormField__after .IconButton--sizeY-compact) {
		width: 36px;
		height: 36px;
	}

	:global(.FormItem--removable .Removable__content > .IconButton--sizeY-compact),
	:global(.FormLayoutGroup--removable .Removable__content > .IconButton--sizeY-compact) {
		height: 36px;
	}

	:global(.IconButton--sizeY-compact .Icon--16),
	:global(.IconButton--sizeY-compact .Icon--16.Icon--w-8) {
		padding: 14px;
	}

	:global(.IconButton--sizeY-compact .Icon--24) {
		padding: 10px;
	}

	:global(.IconButton--sizeY-compact .Icon--28) {
		padding: 8px;
	}

	/*
 * Android & VKCOM
 */
	:global(.IconButton--android.IconButton--active .Icon),
	:global(.IconButton--vkcom.IconButton--active .Icon) {
		transition: inherit;
		border-radius: inherit;
		background-color: var(--background_highlighted);
	}
</style>

<script lang="ts">
	import { ViewWidth, type AdaptivityContextInterface } from '@sveltevk/vksui/lib/adaptivity';

	import classNames from '@sveltevk/vksui/lib/classNames';

	import { ANDROID, IOS, type Platform } from '@sveltevk/vksui/lib/platform';
	import Button, { type ButtonMode } from '../../Blocks/Button/Button.svelte';
	import Tappable from '../../Service/Tappable/Tappable.svelte';

	export let Element = 'button';
	export let href = '';
	export let target = '';
	export let mode: 'cancel' | 'destructive' | 'default' = 'default';
	export let platform: Platform;
	export let adaptivity: AdaptivityContextInterface;

	let _mode: ButtonMode = mode === 'cancel' ? 'secondary' : 'primary';

	if (platform === ANDROID) {
		_mode = 'tertiary';

		if (adaptivity.viewWidth === ViewWidth.DESKTOP && mode === 'destructive') {
			_mode = 'destructive';
		}
	}
</script>

{#if platform === IOS}
	<Tappable
		Element={href ? 'a' : Element}
		class={classNames('Alert__action', `Alert__action--${mode}`)}
		on:click
		{href}
		{target}
	>
		<slot />
	</Tappable>
{:else}
	<Button
		class={classNames('Alert__button', `Alert__button--${mode}`)}
		mode={_mode}
		size="m"
		on:click
		{Element}
		{href}
		{target}
	>
		<slot />
	</Button>
{/if}

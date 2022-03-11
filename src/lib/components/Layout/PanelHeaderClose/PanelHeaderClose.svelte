<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { ANDROID, VKCOM } from '@sveltevk/vksui/lib/platform';
	import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton.svelte';
	import Icon28CancelOutline from '@sveltevk/icons/dist/28/cancel_outline';

	export let text = 'Отмена';

	const platform = usePlatform();
</script>

<PanelHeaderButton
	{...$$restProps}
	on:click
	text={$platform === ANDROID || $platform === VKCOM ? '' : text}
	aria-label={text}
>
	<Icon28CancelOutline />
</PanelHeaderButton>

<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { ANDROID, VKCOM } from '@sveltevk/vksui/lib/platform';
	import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton.svelte';
	import Icon28DoneOutline from '@sveltevk/icons/dist/28/done_outline';

	export let text = 'Готово';

	const platform = usePlatform();
</script>

<PanelHeaderButton
	{...$$restProps}
	on:click
	text={$platform === ANDROID || $platform === VKCOM ? '' : text}
	primary
	aria-label={text}
>
	<Icon28DoneOutline />
</PanelHeaderButton>

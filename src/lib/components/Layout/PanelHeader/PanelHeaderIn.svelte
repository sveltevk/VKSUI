<script lang="ts">
	import { WebviewType } from '@sveltevk/vksui/lib/config';

	import { VKCOM, type Platform } from '@sveltevk/vksui/lib/platform';
	import TooltipContainer from '../../Popouts/Tooltip/TooltipContainer.svelte';
	import Text from '../../Typography/Text/Text.svelte';

	export let webviewType: WebviewType;
	export let isInsideModal: boolean;
	export let platform: Platform;
</script>

<TooltipContainer fixed class="PanelHeader__in">
	<div class="PanelHeader__left"><slot name="left" /></div>
	<div class="PanelHeader__content">
		{#if platform === VKCOM}
			<Text weight="medium"><slot /></Text>
		{:else}
			<span class="PanelHeader__content-in"><slot /></span>
		{/if}
	</div>
	<div class="PanelHeader__right">
		{#if webviewType === WebviewType.INTERNAL || isInsideModal}
			<slot name="right" />
		{/if}
	</div>
</TooltipContainer>

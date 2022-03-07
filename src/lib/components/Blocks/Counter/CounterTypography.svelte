<script lang="ts">
	import { VKCOM, type PlatformType } from '@sveltevk/vksui/lib/platform';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Text from '../../Typography/Text/Text.svelte';

	export let size: 's' | 'm';
	export let platform: PlatformType;
</script>

{#if size === 's'}
	<Caption level="2" weight={platform === VKCOM ? 'medium' : 'regular'} {...$$restProps}
		><slot /></Caption
	>
{:else}
	<Text weight="medium" {...$$restProps}><slot /></Text>
{/if}

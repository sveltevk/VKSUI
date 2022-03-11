<script lang="ts">
	import { IOS, VKCOM, type Platform } from '@sveltevk/vksui/lib/platform';
	import Text from '../../Typography/Text/Text.svelte';
	import Title from '../../Typography/Title/Title.svelte';

	export let primary: boolean;
	export let platform: Platform;
</script>

{#if platform === IOS}
	<Title component="span" level="3" weight={primary ? '1' : '3'}>
		<slot />
	</Title>
{:else}
	<Text weight={platform === VKCOM ? 'regular' : 'medium'}><slot /></Text>
{/if}

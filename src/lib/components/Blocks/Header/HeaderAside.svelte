<script lang="ts">
	import { Platform, type PlatformType } from '@sveltevk/vksui/lib/platform';
	import Subhead from '../../Typography/Subhead/Subhead.svelte';
	import Text from '../../Typography/Text/Text.svelte';

	export let platform: PlatformType;
</script>

{#if platform === Platform.IOS}
	<Subhead {...$$restProps}><slot /></Subhead>
{:else}
	<Text weight="regular" {...$$restProps}><slot /></Text>
{/if}

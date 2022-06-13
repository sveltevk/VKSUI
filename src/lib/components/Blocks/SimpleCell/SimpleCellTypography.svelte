<script lang="ts">
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import { ANDROID, Platform } from '@sveltevk/vksui/lib/platform';
	import Headline from '@sveltevk/vksui/components/Typography/Headline/Headline.svelte';
	import Text from '@sveltevk/vksui/components/Typography/Text/Text.svelte';
	import Title from '@sveltevk/vksui/components/Typography/Title/Title.svelte';

	export let sizeY: SizeType;
	export let platform: Platform;
</script>

{#if sizeY === SizeType.COMPACT}
	<Text Element="span" weight="regular" {...$$restProps}><slot /></Text>
{:else if platform === ANDROID}
	<Headline Element="span" weight="3" {...$$restProps}><slot /></Headline>
{:else}
	<Title component="span" level="3" weight="3" {...$$restProps}><slot /></Title>
{/if}

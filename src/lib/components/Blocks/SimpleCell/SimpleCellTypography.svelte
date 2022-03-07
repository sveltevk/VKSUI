<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import { ANDROID } from '@sveltevk/vksui/lib/platform';
	import Headline from '$lib/components/Typography/Headline/Headline.svelte';
	import Text from '$lib/components/Typography/Text/Text.svelte';
	import Title from '$lib/components/Typography/Title/Title.svelte';

	const adaptivity = useAdaptivity();
	const platform = usePlatform();
</script>

{#if $adaptivity.sizeY === SizeType.COMPACT}
	<Text component="span" weight="regular" {...$$restProps}><slot /></Text>
{:else if $platform === ANDROID}
	<Headline component="span" weight="regular" {...$$restProps}><slot /></Headline>
{:else}
	<Title component="span" level="3" weight="3" {...$$restProps}><slot /></Title>
{/if}

<script lang="ts">
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import { ANDROID, IOS, VKCOM } from '@sveltevk/vksui/lib/platform';
	import type { PlatformType } from '@sveltevk/vksui/lib/platform';
	import Caption from '@sveltevk/vksui/components/Typography/Caption/Caption.svelte';
	import Headline from '@sveltevk/vksui/components/Typography/Headline/Headline.svelte';
	import Subhead from '@sveltevk/vksui/components/Typography/Subhead/Subhead.svelte';
	import Text from '@sveltevk/vksui/components/Typography/Text/Text.svelte';
	import Title from '@sveltevk/vksui/components/Typography/Title/Title.svelte';

	export let size: 's' | 'm' | 'l' = 's';
	export let platform: PlatformType | undefined;
	export let sizeY: SizeType;
	$: isCompact = sizeY === SizeType.COMPACT;
</script>

{#if size === 'l'}
	{#if isCompact}
		<Text weight="medium" {...$$restProps}>
			<slot />
		</Text>
	{:else if platform === ANDROID}
		<Headline weight="medium" {...$$restProps}>
			<slot />
		</Headline>
	{:else}
		<Title level="3" weight="2" {...$$restProps}>
			<slot />
		</Title>
	{/if}
{:else if size === 'm'}
	{#if isCompact}
		<Subhead weight={platform === VKCOM ? '3' : '2'} {...$$restProps}>
			<slot />
		</Subhead>
	{:else}
		<Text weight="medium" {...$$restProps}>
			<slot />
		</Text>
	{/if}
{:else if size === 's'}
	{#if platform === IOS}
		<Subhead weight="2" {...$$restProps}>
			<slot />
		</Subhead>
	{:else if platform === VKCOM}
		<Caption weight="regular" level="1" {...$$restProps}>
			<slot />
		</Caption>
	{:else if isCompact}
		<Caption weight="medium" level="1" {...$$restProps}>
			<slot />
		</Caption>
	{:else}
		<Subhead weight="2" {...$$restProps}>
			<slot />
		</Subhead>
	{/if}
{/if}

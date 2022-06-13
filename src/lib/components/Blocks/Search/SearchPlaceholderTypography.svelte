<script lang="ts">
	import { VKCOM, IOS, Platform } from '@sveltevk/vksui/lib/platform';
	import Headline from '../../Typography/Headline/Headline.svelte';
	import Text from '../../Typography/Text/Text.svelte';
	import Title from '../../Typography/Title/Title.svelte';

	export let platform: Platform;
</script>

{#if platform === IOS}
	<Title {...$$restProps} level="3" weight="3">
		<slot />
	</Title>
{:else if platform === VKCOM}
	<Text {...$$restProps} weight="regular">
		<slot />
	</Text>
{:else}
	<!-- {:else if platform === ANDROID} -->
	<Headline {...$$restProps} weight="3">
		<slot />
	</Headline>
{/if}

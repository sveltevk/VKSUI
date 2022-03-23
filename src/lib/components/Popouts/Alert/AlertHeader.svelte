<script lang="ts">
	import { ANDROID, IOS, VKCOM, type Platform } from '@sveltevk/vksui/lib/platform';
	import Headline from '../../Typography/Headline/Headline.svelte';
	import Title from '../../Typography/Title/Title.svelte';

	export let platform: Platform;
</script>

{#if platform === VKCOM}
	<Headline class="Alert__header" weight="medium">
		<slot />
	</Headline>
{:else if platform === IOS}
	<Title class="Alert__header" weight="1" level="3">
		<slot />
	</Title>
{:else if platform === ANDROID}
	<Title class="Alert__header" weight="2" level="2">
		<slot />
	</Title>
{/if}

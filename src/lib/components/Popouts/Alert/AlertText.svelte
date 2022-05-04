<script lang="ts">
	import { ANDROID, IOS, VKCOM, type Platform } from '@sveltevk/vksui/lib/platform';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Headline from '../../Typography/Headline/Headline.svelte';

	export let platform: Platform;
</script>

{#if platform === VKCOM}
	<Caption class="Alert__text" level="1" weight="3">
		<slot />
	</Caption>
{:else if platform === IOS}
	<Caption class="Alert__text" level="2" weight="3">
		<slot />
	</Caption>
{:else if platform === ANDROID}
	<Headline class="Alert__text" weight="regular">
		<slot />
	</Headline>
{/if}

<script lang="ts">
	import { SizeType } from '@sveltevk/vksui/lib/adaptivity';
	import { VKCOM, type PlatformType } from '@sveltevk/vksui/lib/platform';
	import Headline from '../../Typography/Headline/Headline.svelte';
	import Text from '../../Typography/Text/Text.svelte';

	export let sizeY: SizeType;
	export let platform: PlatformType;
</script>

{#if platform === VKCOM || sizeY === SizeType.COMPACT}
	<Text class="Checkbox__content" weight="regular" Element="div"><slot /></Text>
{:else}
	<Headline class="Checkbox__content" weight="regular" Element="div"><slot /></Headline>
{/if}

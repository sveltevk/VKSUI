<script lang="ts">
	import Subhead from '../../Typography/Subhead/Subhead.svelte';
	import Text from '../../Typography/Text/Text.svelte';

	export let size: 's' | 'm';
</script>

{#if size === 'm'}
	<Text weight="regular" {...$$restProps}><slot /></Text>
{:else}
	<Subhead {...$$restProps}><slot /></Subhead>
{/if}

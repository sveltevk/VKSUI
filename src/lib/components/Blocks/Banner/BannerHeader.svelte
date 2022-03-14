<script lang="ts">
	import Headline from '../../Typography/Headline/Headline.svelte';
	import Title from '../../Typography/Title/Title.svelte';

	export let size: 's' | 'm';
</script>

{#if size === 'm'}
	<Title level="2" weight="2" {...$$restProps}><slot /></Title>
{:else}
	<Headline weight="medium" {...$$restProps}><slot /></Headline>
{/if}

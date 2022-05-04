<script lang="ts">
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Subhead from '../../Typography/Subhead/Subhead.svelte';

	export let mode: 'primary' | 'secondary' | 'tertiary';
</script>

{#if mode === 'secondary'}
	<Subhead {...$$restProps}><slot /></Subhead>
{:else}
	<Caption weight="3" level="1" {...$$restProps}><slot /></Caption>
{/if}

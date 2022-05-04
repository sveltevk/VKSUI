<script lang="ts">
	import { Platform, type PlatformType } from '@sveltevk/vksui/lib/platform';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Headline from '../../Typography/Headline/Headline.svelte';
	import Title from '../../Typography/Title/Title.svelte';

	export let mode: 'primary' | 'secondary' | 'tertiary';

	export let platform: PlatformType;
</script>

{#if platform === Platform.IOS}
	{#if mode === 'primary' || mode === 'tertiary'}
		<Title weight="1" level="3" {...$$restProps}><slot /></Title>
	{:else if mode === 'secondary'}
		<Caption level="1" weight="1" caps {...$$restProps}><slot /></Caption>
	{/if}
{:else if platform === Platform.VKCOM}
	{#if mode === 'primary'}
		<Headline weight="regular" {...$$restProps}><slot /></Headline>
	{:else if mode === 'secondary' || mode === 'tertiary'}
		<Caption level="1" weight="3" {...$$restProps}><slot /></Caption>
	{/if}
{:else if mode === 'primary' || mode === 'tertiary'}
	<Headline weight="medium" {...$$restProps}><slot /></Headline>
{:else if mode === 'secondary'}
	<Caption level="1" weight="2" caps {...$$restProps}><slot /></Caption>
{/if}

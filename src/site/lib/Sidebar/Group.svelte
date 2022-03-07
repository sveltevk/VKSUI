<script lang="ts">
	import Icon28ChevronUpOutline from '@sveltevk/icons/dist/28/chevron_up_outline';
	import Icon28ChevronDownOutline from '@sveltevk/icons/dist/28/chevron_down_outline';

	import { SimpleCell } from '@sveltevk/vksui';

	export let search: string = '';
	export let base: string = '';
	let expand: boolean = false;

	export let currentPage = {
		path: '',
		capitalize: '',
		name: 'VKSUI',
		isComponent: false
	};
	export let group = {
		header: 'Block',
		child: [
			{
				name: 'Div',
				link: 'components/block/div'
			},
			{
				name: 'Link',
				link: '/quickStart'
			}
		]
	};
</script>

<SimpleCell on:click={() => (expand = !expand)}>
	{group.header}
	<svelte:fragment slot="after">
		{#if expand || search !== ''}
			<Icon28ChevronUpOutline fill="var(--text_tertiary)" />
		{:else}
			<Icon28ChevronDownOutline fill="var(--text_tertiary)" />
		{/if}
	</svelte:fragment>
</SimpleCell>
<div class="Element">
	{#each group.child as el}
		{#if (search === '' && expand) || (search !== '' && el.name.toLowerCase().includes(search))}
			<SimpleCell
				class={el.link === currentPage.path ? 'Sidebar__selected' : ''}
				href="{base}{el.link}">{el.name}</SimpleCell
			>
		{/if}
	{/each}
</div>

<style>
	.Element {
		margin-left: 16px;
	}
</style>

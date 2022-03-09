<script lang="ts">
	import Icon28ChevronUpOutline from '@sveltevk/icons/dist/28/chevron_up_outline';
	import Icon28ChevronDownOutline from '@sveltevk/icons/dist/28/chevron_down_outline';

	import { IconButton, SimpleCell } from '@sveltevk/vksui';
	import Icon28TokenizedOutline from '../Icon28TokenizedOutline/Icon28TokenizedOutline.svelte';

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
				link: '/quickStart',
				tokenized: true
			}
		]
	};

	$: child =
		search === ''
			? expand
				? group.child
				: []
			: group.child.filter(({ name }) => name.toLowerCase().indexOf(search) > -1);
</script>

{#if child.length > 0 || !(expand || search !== '')}
	<SimpleCell on:click={() => (expand = !expand)}>
		{group.header}
		<IconButton slot="after">
			{#if expand || search !== ''}
				<Icon28ChevronUpOutline fill="var(--text_tertiary)" />
			{:else}
				<Icon28ChevronDownOutline fill="var(--text_tertiary)" />
			{/if}
		</IconButton>
	</SimpleCell>
	<div class="Element">
		{#each child as el}
			<SimpleCell
				class={el.link === currentPage.path ? 'Sidebar__selected' : ''}
				href="{base}{el.link}"
			>
				<svelte:fragment slot="after">
					{#if el.tokenized}
						<Icon28TokenizedOutline title="Компонент поддерживает vkui-tokens" />
					{/if}
				</svelte:fragment>
				{el.name}
			</SimpleCell>
		{/each}
	</div>
{/if}

<style>
	.Element {
		margin-left: 16px;
	}
</style>

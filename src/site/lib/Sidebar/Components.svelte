<script lang="ts">
	import Footer from '@sveltevk/vksui/components/Blocks/Footer/Footer.svelte';
	import Search from '@sveltevk/vksui/components/Blocks/Search/Search.svelte';
	import Group from './Group.svelte';
	export let base = '';
	let search = '';

	export let currentPage = {
		path: '',
		capitalize: '',
		name: 'VKSUI',
		isComponent: false
	};
	export let tree = [
		{
			header: 'Block',
			child: [
				{
					name: 'О VKSUI',
					link: '/'
				},
				{
					name: 'Быстрый старт',
					link: '/quickStart'
				}
			]
		}
	];

	$: searchTree = search
		? tree.filter(
				({ child }) =>
					child.filter(({ name }) => name.toLowerCase().indexOf(search) > -1).length > 0
		  )
		: tree;
</script>

<Search bind:value={search} placeholder="Поиск" style="background:none" />
{#each searchTree as group}
	<Group {group} {currentPage} {base} search={search.toLowerCase()} on:click />
{:else}
	<Footer role="statusbar">Ничего не найдено</Footer>
{/each}

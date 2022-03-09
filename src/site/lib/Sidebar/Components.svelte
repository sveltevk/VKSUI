<script lang="ts">
	import Search from '@sveltevk/vksui/components/Blocks/Search/Search.svelte';
	import Group from './Group.svelte';
	export let base: string = '';
	let search: string = '';

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
</script>

<Search bind:value={search} placeholder="Поиск" style="background:none"/>
{#each tree as group}
	<Group {group} {currentPage} {base} search={search.toLowerCase()} />
{/each}

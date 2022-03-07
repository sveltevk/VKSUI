<script lang="ts">
	import { Input } from '@sveltevk/vksui';
	import Div from '@sveltevk/vksui/components/Blocks/Div/Div.svelte';
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

<Div>
	<Input bind:value={search} placeholder="Поиск" />
</Div>
{#each tree as group}
	<Group {group} {currentPage} {base} search={search.toLowerCase()} />
{/each}

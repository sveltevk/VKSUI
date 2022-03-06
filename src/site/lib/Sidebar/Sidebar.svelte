<script lang="ts">
	import { Group, Header, SimpleCell } from '@sveltevk/vksui';
	import Components from './Components.svelte';
	export let base = '';

	export let tree = [
		{
			header: '',
			child: [
				{
					name: 'О VKSUI',
					link: '/'
				}
				// {
				// 	name: 'Быстрый старт',
				// 	link: '/quickStart'
				// }
			]
		},
		// {
		// 	header: 'Основа',
		// 	child: [
		// 		{
		// 			name: 'О VKSUI',
		// 			link: '/'
		// 		},
		// 		{
		// 			name: 'Быстрый старт',
		// 			link: '/quickStart'
		// 		}
		// 	]
		// },
		{
			header: 'Компоненты',
			tree: [
				{
					header: 'Block',
					child: [
						{
							name: 'Header',
							link: '/components/blocks/header'
						},
						{
							name: 'Div',
							link: '/components/blocks/div'
						},
						{
							name: 'Link',
							link: '/components/blocks/link'
						}
					]
				}
			],
			child: []
		},
		{
			header: 'Прочее',
			child: [
				// {
				//   name: "Серверный рендеринг",
				//   link: "/ssr",
				// },
				{
					name: 'Иконки',
					link: '/icons'
				},
				{
					name: 'Дизайн',
					link: '/design'
				},
				{
					name: 'Кастомизация',
					link: '/customize'
				}
			]
		}
	];
</script>

<div class="Sidebar">
	<div class="Sidebar__in">
		{#each tree as group}
			<Group>
				<svelte:fragment slot="header">
					{#if group.header}
						<Header mode="secondary">{group.header}</Header>
					{/if}
				</svelte:fragment>
				{#if group.header === 'Компоненты'}
					<Components tree={group.tree} {base} />
				{/if}
				{#each group.child as el}
					<SimpleCell href="{base}{el.link}">{el.name}</SimpleCell>
				{/each}
			</Group>
		{/each}
	</div>
</div>

<style>
	.Sidebar {
		flex-shrink: 0;
		position: relative;
		max-width: 480px;
		width: 340px;
		min-width: 340px;
		height: auto;

		box-sizing: border-box;
		margin-top: calc(20px + var(--styleguide_header_height));
	}
	.Sidebar__in {
		width: 340px;
		padding-right: 16px;
		padding-left: 16px;
		box-sizing: border-box;
		height: calc(100vh - var(--styleguide_header_height));
		position: fixed;
		overflow: auto;
	}
</style>
